//=============================================================================
// TMPlugin - バトラー表示拡張
// バージョン: 2.0.0
// 最終更新日: 2016/08/12
// 配布元    : http://hikimoki.sakura.ne.jp/
//-----------------------------------------------------------------------------
// Copyright (c) 2016 tomoaky
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc エネミーに遠近感や息づかいの表現を追加します。
 *
 * @author tomoaky (http://hikimoki.sakura.ne.jp/)
 *
 * @param baseY
 * @desc 拡大率が等倍になるＹ座標。
 * 初期値: 400
 * @default 400
 *
 * @param breathH
 * @desc 息づかいの大きさ。
 * 初期値: 0.05
 * @default 0.05
 *
 * @param mirrorRate
 * @desc 左右反転の確率。
 * 初期値: 0.4（ 0 ～ 1 ）
 * @default 0.4
 *
 * @param breathStop
 * @desc 行動不能時に息づかいを止める。
 * 初期値: 1（ 0 で無効 / 1 で有効 ）
 * @default 1
 *
 * @param shakeEffect
 * @desc 点滅エフェクトを揺れエフェクトに差し替える。
 * 初期値: 1（ 0 で無効 / 1 で有効 ）
 * @default 1
 *
 * @help
 * 使い方:
 *
 *   このプラグインを導入すると、敵キャラの表示に以下の演出が追加されます。
 *     ・画面の上の方に出現する敵が小さく表示される（遠近感）
 *     ・ゆっくりと拡大縮小を繰り返す（息づかい）
 *     ・ランダムに左右が反転する
 *
 *   サイドビューでは左右反転が無効になります。
 *   敵キャラのメモ欄にタグを書き込むことで、敵キャラごとに演出の強弱を
 *   設定することができます。
 *
 *   プラグインコマンドはありません。
 *
 *   このプラグインは RPGツクールMV Version 1.3.0 で動作確認をしています。
 *
 *
 * メモ欄（敵キャラ）タグ:
 *
 *   <scale:1>
 *     拡大率を個別に設定します、このタグがある敵キャラには遠近感の表現が
 *     適用されません。
 *
 *   <breathH:0.05>
 *     息づかいの大きさを個別に設定します。
 *
 *   <noMirror>
 *     左右反転を禁止します。
 */

var Imported = Imported || {};
Imported.TMBattlerEx = true;

var TMPlugin = TMPlugin || {};
TMPlugin.BattlerEx = {};
TMPlugin.BattlerEx.Parameters = PluginManager.parameters('TMBattlerEx');
TMPlugin.BattlerEx.BaseY = +(TMPlugin.BattlerEx.Parameters['baseY'] || 400);
TMPlugin.BattlerEx.BreathH = +(TMPlugin.BattlerEx.Parameters['breathH'] || 0.05);
TMPlugin.BattlerEx.MirrorRate = +(TMPlugin.BattlerEx.Parameters['mirrorRate'] || 0.4);
TMPlugin.BattlerEx.BreathStop = TMPlugin.BattlerEx.Parameters['breathStop'] === '1';
TMPlugin.BattlerEx.ShakeEffect = TMPlugin.BattlerEx.Parameters['shakeEffect'] === '1';

(function() {

  //-----------------------------------------------------------------------------
  // Sprite_Enemy
  //
  
  var _Sprite_Enemy_initialize = Sprite_Enemy.prototype.initialize;
  Sprite_Enemy.prototype.initialize = function(battler) {
    _Sprite_Enemy_initialize.call(this, battler);
    var r = +(battler.enemy().meta.scale || this.y / (TMPlugin.BattlerEx.BaseY * 2) + 0.5);
    this._baseScale = new Point(r, r);
    if (!$gameSystem.isSideView() && Math.random() < TMPlugin.BattlerEx.MirrorRate &&
        !battler.enemy().meta.noMirror) {
      this._baseScale.x = 0 - r;
      this._stateIconSprite.scale.x = -1;
    }
  };
  




})();
