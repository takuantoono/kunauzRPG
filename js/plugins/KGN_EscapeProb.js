//=============================================================================
// KGN_EscapeProb.js
// Ver 1.01		エイリアスしてみた。
//=============================================================================

var Imported = Imported || {};
Imported.KGN_EscapeProb = true;

var Kiginu = Kiginu || {};

/*:
 * @plugindesc 逃走確率を変更します。
 * @author きぎぬ
 *
 * @help 
 * 逃走確率の計算は、50%を基準として、味方と敵方それぞれの平均敏捷性の差に応じて
 * 上下するようになっています。味方の平均敏捷性が、敵方のそれの2倍以上あれば
 * 100%の確率で逃走できるような計算式です。
 * この計算式を弄るのが本プラグインです。
 * なお、逃走失敗するごとに逃走確率が10%上がるのですが、こっちは弄くれません。
 * 
 * バグとか自分じゃ太刀打ちできないので、自力で、どうぞ。
 * 
 * HP： http://r3jou.web.fc2.com/

 * @param baseRatio
 * @desc 基礎逃走確率です。デフォは0.5(50%の意)
 * @default 0.5
 * @param toPartyAgi
 * @desc 味方の敏捷性にかける補正率です。大きいほど逃げやすくなります。デフォは1.0
 * @default 1.0
 * @param toEnemyAgi
 * @desc 敵の敏捷性にかける補正率です。大きいほど逃げづらくなります。デフォは1.0
 * @default 1.0
 */

Kiginu.Parameters = PluginManager.parameters('KGN_EscapeProb');
Kiginu.Param = Kiginu.Param || {};
Kiginu.Param.baseRatio		=	Number(Kiginu.Parameters['baseRatio']);
Kiginu.Param.toPartyAgi		=	Number(Kiginu.Parameters['toPartyAgi']);
Kiginu.Param.toEnemyAgi		=	Number(Kiginu.Parameters['toEnemyAgi']);


(function() {



//var _BattleManager_makeEscapeRatio = BattleManager.makeEscapeRatio;
BattleManager.makeEscapeRatio = function() {
	//_BattleManager_makeEscapeRatio.call(this);
	//this._escapeRatio = 0.3 * $gameParty.agility() / $gameTroop.agility();//元の
	this._escapeRatio += 0.03;
if(this._escapeRatio < 0.05) this._escapeRatio = 0.05;
if(this._escapeRatio > 0.95) this._escapeRatio = 0.95;
if($gameSwitches.value(791)) this._escapeRatio = 0;
};



})();
