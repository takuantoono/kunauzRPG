//=============================================================================
// MPP_SelfVariable.js
//=============================================================================
// Copyright (c) 2017-2020 Mokusei Penguin
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc 【v1.3】各イベントにセルフ変数を追加します。
 * @author 木星ペンギン
 *
 * @help プラグインコマンド:
 *   DeleteSelfVariable mapIds var   # 指定したマップIDのセルフ変数を0にする
 *   SetSelfVariable mapIds evIds var n    # セルフ変数の値を変更する
 * 
 * ================================================================
 * ▼ 概要
 * --------------------------------
 *  〇 セルフ変数について
 *   ・プラグインパラメータにて設定した番号の変数が、
 * 　  イベントごとのセルフ変数を参照するようになります。
 *   
 *   ・イベントコマンドの[変数の操作]から設定した番号の変数の操作を行うと、
 *     実行中のイベントのセルフ変数が変更されます。
 *   
 *   ・イベントの[出現条件]ではセルフ変数が参照されます。
 *   
 *   ・コモンイベントでセルフ変数を操作した場合、以下のようになります。
 *     >マップのイベントから[コモンイベントの呼び出し]を行った場合
 *      各イベントのセルフ変数が参照されます。
 *   
 *     >コモンイベントを自動実行or並列実行した場合
 *      コモンイベントごとのセルフ変数が参照されます。
 *   
 *   ・トループのバトルイベントにはセルフ変数が適用されません。
 *     通常の変数と同じ扱いとなります。
 * 
 *   ・通常のイベントでも、並列処理の場合は以下のコマンドでは使用できません。
 * 　  （並列処理でなければ使用できます）
 *     >文章の表示（制御文字）
 *     >選択肢の表示（制御文字）
 *     >数値入力の処理
 *     >アイテム選択の処理
 *     >文章のスクロール表示（制御文字）
 * 
 * 
 * ================================================================
 * ▼ パラメータ全般
 * --------------------------------
 *  〇 範囲指定について
 *   一部のプラグインコマンドとプラグインパラメータでは範囲指定が使用できます。
 *  
 *   n-m と表記することで、nからmまでの数値を指定できます。
 *   (例 : 1-4,8,10-12 => 1,2,3,4,8,10,11,12)
 * 
 * 
 * ================================================================
 * ▼ プラグインコマンド詳細
 * --------------------------------
 *  〇 DeleteSelfVariable mapIds var
 *      mapIds : マップID (範囲指定可)
 *      var    : 0にするセルフ変数の番号 (範囲指定可)
 *   
 *   指定したマップIDの指定したセルフ変数を全て0にします。
 *   v[n] と指定することで変数 n 番の値を参照します。
 *   範囲指定する場合は間にスペースを入れないでください。
 *   
 *   例： DeleteSelfVariable 1 3
 *         => マップID 1 番のセルフ変数 3 番を0にします。
 *       
 *       DeleteSelfVariable v[13] 1-5
 *         => 変数 n 番のマップIDのセルフ変数 1～5 番を0にします。
 *       
 *       DeleteSelfVariable 1-5,8 1,2
 *         => マップID 1～5と8 のセルフ変数 1と2 番を0にします。
 * 
 * --------------------------------
 *  〇 SetSelfVariable mapIds evIds var n
 *      mapIds : マップID (範囲指定可)
 *      evIds  : イベントID (範囲指定可)
 *      var    : セルフ変数の番号 (範囲指定可)
 *      n      : 設定する値
 *   
 *   マップID、イベントID、セルフ変数番号を指定して、値 n を設定します。
 *   v[n] と指定することで変数 n 番の値を参照します。
 *   範囲指定する場合は間にスペースを入れないでください。
 *   
 *   例： SetSelfVariable 1 2 3 5
 *         => マップID 1 番のイベントID 3 番のセルフ変数 3 番を5にします。
 *       
 *       DeleteSelfVariable 1-3 1,3,5 2-5, v[5]
 *         => マップID 1～3 番のイベントID 1と3と5 番のセルフ変数 2～5 番を
 *            変数 5 番の値にします。
 *       
 * 
 * ================================================================
 * ▼ プラグインパラメータ 詳細
 * --------------------------------
 *  〇 Plugin Commands
 *   プラグインコマンド名はプラグインパラメータから変更できます。
 *   コマンドを短くしたり日本語にしたりなどして、自分が使いやすいようにしてください。
 *   変更後もデフォルトのコマンドでも動作します。
 * 
 * 
 * ================================
 * 制作 : 木星ペンギン
 * URL : http://woodpenguin.blog.fc2.com/
 * 
 * @param === Basic ===
 * @default 【基本的な設定】
 * 
 * @param Variables
 * @desc セルフ変数にする変数の番号
 * (範囲指定可)
 * @default 
 * @parent === Basic ===
 *
 * @param === Command ===
 * @default 【コマンド関連】
 * 
 * @param Plugin Commands
 * @type struct<Plugin>
 * @desc プラグインコマンド名
 * @default {"DeleteSelfVariable":"DeleteSelfVariable","SetSelfVariable":"SetSelfVariable"}
 * @parent === Command ===
 * 
 */

/*~struct~Plugin:
 * @param DeleteSelfVariable
 * @desc 指定したマップIDのセルフスイッチをOFFにする
 * @default DeleteSelfVariable
 * 
 * @param SetSelfVariable
 * @desc セルフ変数の値を変更する
 * @default SetSelfVariable
 * 
 */

var MPP = MPP || {};

(function(exports) {
    'use strict';

MPP.paramRange = MPP.paramRange || function(param) {
    var result = [];
    param.split(',').forEach( id => {
        if (/(\d+)-(\d+)/.test(id)) {
            for (var n = Number(RegExp.$1); n <= Number(RegExp.$2); n++) {
                result.push(n);
            }
        } else {
            result.push(Number(id));
        }
    });
    return result;
};

const Params = {};

{
    
    let parameters = PluginManager.parameters('MPP_SelfVariable');

    Params.Variables = MPP.paramRange(parameters['Variables']);
    
    //=== Command ===
    Params.PluginCommands = JSON.parse(parameters['Plugin Commands']);
    
}

const Alias = {};

//-----------------------------------------------------------------------------
// Game_Variables

//15
Alias.GaVa_clear = Game_Variables.prototype.clear;
Game_Variables.prototype.clear = function() {
    Alias.GaVa_clear.apply(this, arguments);
    this._selfVariables = {};
    this._mapId = 0;
    this._eventId = 0;
};

//19
Alias.GaVa_value = Game_Variables.prototype.value;
Game_Variables.prototype.value = function(variableId) {
    if (this._eventId > 0 && Params.Variables.contains(variableId)) {
        var key = [this._mapId, this._eventId, variableId];
        return this._selfVariables[key] || 0;
    } else {
        return Alias.GaVa_value.apply(this, arguments);
    }
};

//23
Alias.GaVa_setValue = Game_Variables.prototype.setValue;
Game_Variables.prototype.setValue = function(variableId, value) {
    if (this._eventId > 0 && Params.Variables.contains(variableId)) {
        if (typeof value === 'number') {
            value = Math.floor(value);
        }
        var key = [this._mapId, this._eventId, variableId];
        this._selfVariables[key] = value;
        this.onChange();
    } else {
        Alias.GaVa_setValue.apply(this, arguments);
    }
};

Game_Variables.prototype.setSelfVariable = function(mapId, eventId, variableId, value) {
    if (eventId > 0 && eventId > 0 && Params.Variables.contains(variableId)) {
        if (typeof value === 'number') {
            value = Math.floor(value);
        }
        var key = [mapId, eventId, variableId];
        this._selfVariables[key] = value;
        this.onChange();
    }
};

Game_Variables.prototype.deleteSelfVariables = function(mapId, evIds, vaIds) {
    var re = new RegExp(mapId + ',(\\d+),(\\d+)');
    for (var key in this._selfVariables) {
        if (re.test(key)) {
            if ((evIds.length === 0 || evIds.includes(parseInt(RegExp.$1))) &&
                    (vaIds.length === 0 || vaIds.includes(parseInt(RegExp.$2)))) {
                delete this._selfVariables[key];
            }
        }
    }
    this.onChange();
};

Game_Variables.prototype.reserveEvent = function(mapId, eventId) {
    this._mapId = mapId;
    this._eventId = eventId;
};

//-----------------------------------------------------------------------------
// Game_Event

//188
Alias.GaEv_findProperPageIndex = Game_Event.prototype.findProperPageIndex;
Game_Event.prototype.findProperPageIndex = function() {
    $gameVariables.reserveEvent(this._mapId, this._eventId);
    return Alias.GaEv_findProperPageIndex.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// Game_CommonEvent

//24
Alias.GaCoEv_refresh = Game_CommonEvent.prototype.refresh;
Game_CommonEvent.prototype.refresh = function() {
    Alias.GaCoEv_refresh.apply(this, arguments);
    if (this._interpreter) {
        this._interpreter._commonEventId = this._commonEventId;
    }
};

//-----------------------------------------------------------------------------
// Game_Interpreter

//55
Alias.GaIn_setupReservedCommonEvent = Game_Interpreter.prototype.setupReservedCommonEvent;
Game_Interpreter.prototype.setupReservedCommonEvent = function() {
    this._commonEventId = $gameTemp._commonEventId;
    return Alias.GaIn_setupReservedCommonEvent.apply(this, arguments);
};

//68
Alias.GaIn_update = Game_Interpreter.prototype.update;
Game_Interpreter.prototype.update = function() {
    this.reserveSelfVar();
    Alias.GaIn_update.apply(this, arguments);
};

//608
Alias.GaIn_setupChild = Game_Interpreter.prototype.setupChild;
Game_Interpreter.prototype.setupChild = function(list, eventId) {
    Alias.GaIn_setupChild.apply(this, arguments);
    this._childInterpreter._commonEventId = this._commonEventId;
};

Game_Interpreter.prototype.reserveSelfVar = function() {
    if (this._commonEventId) {
        $gameVariables.reserveEvent(-1, this._commonEventId);
    } else {
        $gameVariables.reserveEvent(this._mapId, this._eventId);
    }
};

//1722
Alias.GaIn_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Alias.GaIn_pluginCommand.apply(this, arguments);
    var args2 = this.mppPluginCommandArgs2(args);
    switch (command) {
        case Params.PluginCommands.DeleteSelfVariable:
        case 'DeleteSelfVariable':
            var varIds = MPP.paramRange(args2[1]);
            MPP.paramRange(args2[0]).forEach(function(mapId) {
                $gameVariables.deleteSelfVariables(mapId, [], varIds);
            });
            break;
        case Params.PluginCommands.SetSelfVariable:
        case 'SetSelfVariable':
            var mapIds = MPP.paramRange(args2[0]);
            var evIds = MPP.paramRange(args2[1]);
            var varIds = MPP.paramRange(args2[2]);
            mapIds.forEach(n1 => evIds.forEach(n2 => varIds.forEach( n3 =>
                $gameVariables.setSelfVariable(n1, n2, n3, args2[3]) )));
            break;
    }
};

Game_Interpreter.prototype.mppPluginCommandArgs2 = function(args) {
    var convertVar = function() {
        return $gameVariables.value(parseInt(arguments[1]));
    };
    return args.map( arg => arg.replace(/v\[(\d+)\]/gi, convertVar) );
};



})(this);
