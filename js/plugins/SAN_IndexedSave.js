
//=============================================================================
// SAN_IndexedSave.js
//=============================================================================
// Copyright (c) 2016 Sanshiro
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc インデックス化セーブ 0.2.0
 * プロパティ名を共有してセーブファイルの容量削減を図ります。
 * @author サンシロ https://twitter.com/rev2nym
 * @version 0.2.0 2016/12/11 グローバルファイルとコンフィグファイルはインデックス化しないよう変更
 * 0.1.0 2016/12/09
 * 0.0.0 2016/07/13
 * 
 * @param Valid
 * @desc インデックス化セーブ有効フラグの初期値です。
 * "ON"で有効化します。
 * @default ON
 * 
 * @help
 * ■概要
 * セーブデータのプロパティ名を別ファイル（インデックスファイル）に保存し
 * セーブファイル間で共有することで容量削減を図ります。
 * 
 * このプラグインはセーブファイルを改変します。
 * お試しの際は必ずセーブフォルダのバックアップを取ってください。
 * 
 * ■インデックスファイル
 * インデックスファイルは"index.rpgsave"ファイルとして
 * セーブフォルダに作成されます。
 * このプラグインの機能が有効のときにセーブされたファイルは
 * このプラグインの機能によってのみロード可能です。
 * インデックスファイルを削除するとロードが不可能になります。
 * 
 * ■インデックス化セーブ有効フラグ
 * 次のスクリプトコマンドによってインデックス化セーブの有効/無効を
 * 切り替えることができます。
 * 
 * ・StorageManager.setIndexedSaveValid(valid)
 *     valid : trueで有効化、falseで無効化
 * 
 * ■利用規約
 * MITライセンスのもと、商用利用、改変、再配布が可能です。
 * ただし冒頭のコメントは削除や改変をしないでください。
 * 
 * これを利用したことによるいかなる損害にも作者は責任を負いません。
 * サポートは期待しないでください＞＜。
 */

var Imported = Imported || {};
Imported.SAN_IndexedSave = true;

var Sanshiro = Sanshiro || {};
Sanshiro.IndexedSave = Sanshiro.IndexedSave || {};
Sanshiro.IndexedSave.version = '0.2.0';

(function (SAN) {

//-----------------------------------------------------------------------------
// StorageManager
//
// ストレージマネージャ

// インデックス化セーブ有効フラグ
StorageManager._indexedSaveValid = (
    PluginManager.parameters('SAN_IndexedSave')['Valid'] === 'ON'
);

// インデックス化セーブ有効フラグの設定
StorageManager.setIndexedSaveValid = function(valid) {
    this._indexedSaveValid = valid;
};

// インデックス化セーブ有効フラグ
StorageManager.isIndexedSaveValid = function() {
    return this._indexedSaveValid;
};

// グローバルファイルID
StorageManager.globalFileId = function() {
    return 0;
};

// コンフィグファイルID
StorageManager.configFileId = function() {
    return -1;
};

// インデックスファイルID
StorageManager.indexFileId = function() {
    return -2;
};

// インデックスファイル名
StorageManager.indexFileName = function() {
    return 'index.rpgsave';
};

// インデックスファイルウェブストレージキー
StorageManager.indexWebStorageKey = function() {
    return 'RPG Index';
};

// グローバルファイルID判定
StorageManager.isGlobalFileId = function(saveFileId) {
    return saveFileId === this.globalFileId();
};

// コンフィグファイルID判定
StorageManager.isConfigFileId = function(saveFileId) {
    return saveFileId === this.configFileId();
};

// インデックスファイルID判定
StorageManager.isIndexFileId = function(saveFileId) {
    return saveFileId === this.indexFileId();
};

// セーブファイルID判定
StorageManager.isSaveFileId = function(saveFileId) {
    return (
        !this.isGlobalFileId(saveFileId) &&
        !this.isConfigFileId(saveFileId) &&
        !this.isIndexFileId(saveFileId)
    );
};

// セーブ
var _StorageManager_save = StorageManager.save;
StorageManager.save = function(saveFileId, json) {
    if (this.isIndexedSaveValid() && this.isSaveFileId(saveFileId)) {
        this.saveIndexed(saveFileId, json);
        return;
    }
    _StorageManager_save.call(this, saveFileId, json);
};

// インデックス化セーブ
StorageManager.saveIndexed = function(saveFileId, json) {
    var data = JSON.parse(json);
    JsonIndexer.makeIndex(data);
    var index = JsonIndexer.index();
    var indexJson = JSON.stringify(index);
    _StorageManager_save.call(this, this.indexFileId(), indexJson);
    json = JsonIndexer.encode(json);
    _StorageManager_save.call(this, saveFileId, json);
};

// ロード
var _StorageManager_load = StorageManager.load;
StorageManager.load = function(saveFileId) {
    if (this.isIndexedSaveValid() && this.isSaveFileId(saveFileId)) {
        return this.loadIndexed(saveFileId);
    }
    return _StorageManager_load.call(this, saveFileId);
};

// インデックス化ロード
StorageManager.loadIndexed = function(saveFileId) {
    var indexJson = _StorageManager_load.call(this, this.indexFileId());
    var index = JSON.parse(indexJson);
    var json = _StorageManager_load.call(this, saveFileId);
    JsonIndexer.setIndex(index);
    json = JsonIndexer.decode(json);
    return json;
};

// セーブファイルローカルパス
var _StorageManager_localFilePath = StorageManager.localFilePath;
StorageManager.localFilePath = function(saveFileId) {
    if (this.isIndexFileId(saveFileId)) {
        var path = this.localFileDirectoryPath() + this.indexFileName();
        return path;
    }
    return _StorageManager_localFilePath.call(this, saveFileId);
};

// セーブファイルウェブストレージキー
var _StorageManager_webStorageKey = StorageManager.webStorageKey;
StorageManager.webStorageKey = function(saveFileId) {
    if (this.isIndexFileId(saveFileId)) {
        var key = this.indexWebStorageKey();
        return key;
    }
    return _StorageManager_webStorageKey.call(this, saveFileId);
};

//-----------------------------------------------------------------------------
// JsonIndexer
//
// JSONインデクサー

function JsonIndexer() {
    throw new Error('This is a static class');
}

// キーのインデックスリスト
JsonIndexer._index = [];

// インデックスリストの設定
JsonIndexer.setIndex = function (index) {
    this._index = index;
};

// インデックスリストのクリア
JsonIndexer.clearIndex = function () {
    this._index = [];
};

// インデックスリスト
JsonIndexer.index = function () {
    return this._index;
};

// キーのインデックス化
JsonIndexer.makeIndex = function (data) {
    var type = Object.prototype.toString.call(data);
    switch (type) {
    case '[object Array]':
        for (var i = 0; i < data.length; i++) {
            this.makeIndex(data[i]);
        }
        break;
    case '[object Object]':
        for (var key in data) {
            if (this._index.indexOf(key) === -1) {
                this._index.push(key);
            }
            this.makeIndex(data[key]);
        }
        break;
    }
};

// エンコード（JSON文字列のキーをインデックスで置換）
JsonIndexer.encode = function (json) {
    for (var i = 0; i < this._index.length; i++) {
        var key = '\"' + this._index[i] + '\"\:';
        var index = '\"@' + i.toString(36) + '\"\:';
        var regExp = new RegExp(this.escapeRegExp(key), 'g');
        json = json.replace(regExp, index);
    }
    return json;
};

// デコード（JSON文字列のインデックスをキーで置換）
JsonIndexer.decode = function (json) {
    for (var i = 0; i < this._index.length; i++) {
        var key = '\"' + this._index[i] + '\"\:';
        var index = '\"@' + i.toString(36) + '\"\:';
        var regExp = new RegExp(this.escapeRegExp(index), 'g');
        json = json.replace(regExp, key);
    }
    return json;
};

// 正規表現エスケープ文字の置換
JsonIndexer.escapeRegExp = function (string) {
  return string.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
}

}) (Sanshiro);
