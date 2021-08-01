//=============================================================================
// TroopUnlimited.js
// ----------------------------------------------------------------------------
// Copyright (c) 2015-2017 Triacontane
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// Version
// 1.0.0 2017/02/16 初版
// ----------------------------------------------------------------------------
// [Blog]   : http://triacontane.blogspot.jp/
// [Twitter]: https://twitter.com/triacontane/
// [GitHub] : https://github.com/triacontane/
//=============================================================================

/*:
 * @plugindesc TroopUnlimitedPlugin
 * @author triacontane
 *
 * @help エディタ上の最大値である8体を超える数の敵キャラを
 * 一度に出現させることができるようになります。
 *
 * 追加はグループ単位で行います。
 *
 * 敵グループの「名前」に以下の内容を含めてください。
 * \add[3] # 本来の敵キャラに追加してID[3]の「敵グループ」に
 * 指定された敵キャラが初期配置で追加されます。
 *
 * さらに追加したい場合はその分だけ\add[n]を記述してください。
 *
 * 追加されるのは敵キャラのみです。バトルイベント等には
 * 影響を与えません。
 *
 * このプラグインにはプラグインコマンドはありません。
 *
 * This plugin is released under the MIT License.
 */
/*:ja
 * @plugindesc 敵グループ限界突破プラグイン
 * @author トリアコンタン
 *
 * @help エディタ上の最大値である8体を超える数の敵キャラを
 * 一度に出現させることができるようになります。
 *
 * 追加はグループ単位で行います。
 *
 * 敵グループの「名前」に以下の内容を含めてください。
 * \add[3] # 本来の敵キャラに追加してID[3]の「敵グループ」に
 * 指定された敵キャラが初期配置で追加されます。
 *
 * さらに追加したい場合はその分だけ\add[n]を記述してください。
 *
 * 追加されるのは敵キャラのみです。バトルイベント等には
 * 影響を与えません。
 *
 * このプラグインにはプラグインコマンドはありません。
 *
 * 利用規約：
 *  作者に無断で改変、再配布が可能で、利用形態（商用、18禁利用等）
 *  についても制限はありません。
 *  このプラグインはもうあなたのものです。
 */

(function() {
    'use strict';

    //=============================================================================
    // Game_Troop
    //  グループ外の敵キャラを読み込みます。
    //=============================================================================
    

    Game_Troop.prototype.setup = function(troopId) {
    this.clear();
    this._troopId = troopId;
    this._enemies = [];
    var index=0;
    this.troop().members.forEach(function(member) {
        if ($dataEnemies[member.enemyId]) {
        	if($gameVariables._data[925+index]!=-1){
        	if($gameVariables._data[925+index]>0&&!member.hidden&&member.enemyId!=92&&member.enemyId!=89){
        		if($gameVariables._data[941+index]<$gameVariables._data[925+index]){
        		var enemyId = member.enemyId;
            	var x = member.x+Math.randomInt(50)-50;
            	var y = member.y-23*($gameVariables._data[941+index]+1);
            	var enemy = new Game_Enemy(enemyId, x, y);
            	this._enemies.push(enemy);
            	$gameVariables._data[941+index]+=1;
            	}
        	}else{
        		$gameVariables._data[925+index]=-1;
        		var rank = -99
        		rank = Math.floor($dataEnemies[member.enemyId].meta.enemyRank)
        		if(rank>-10){
        		var zakodomo = 0;
        		if($gameVariables._data[935]>rank+3)zakodomo+=1;
        		if($gameVariables._data[935]>rank+6)zakodomo+=1;
        		if($gameVariables._data[935]>rank+9)zakodomo+=1;
        		if($gameVariables._data[935]>rank+12)zakodomo+=1;
        		if($gameVariables._data[935]>rank+16)zakodomo+=1;
        		if($gameVariables._data[935]>rank+20)zakodomo+=1;
        		if($dataEnemies[member.enemyId].meta.swarmHalf){
        		zakodomo/=2;
        		zakodomo-=1;
        		}
        		
        		if(zakodomo>0){
        		zakodomo = Math.randomInt(zakodomo+1)
        		if(zakodomo>0&&!$dataEnemies[member.enemyId].meta.noSwarm){
        		$gameVariables._data[925+index]=zakodomo;
        		};
        		};
        		};
            	var enemyId = member.enemyId;
            	var x = member.x;
            	var y = member.y;
            	var enemy = new Game_Enemy(enemyId, x, y);
            	if (member.hidden) {
            	    enemy.hide();
            	}
            	this._enemies.push(enemy);
            };
        	};
            index+=1
        }
    }, this);
    this.makeUniqueNames();
};

Game_Troop.prototype.makeUniqueNames = function() {
    var table = this.letterTable();
    this.members().forEach(function(enemy) {
        if (enemy.isAlive() && enemy.isLetterEmpty()) {
            var name = enemy.originalName();
            var n = this._namesCount[name] || 0;
            enemy.setLetter(table[n % table.length]);
            this._namesCount[name] = n + 1;
        }
    }, this);
    this.members().forEach(function(enemy) {
        var name = enemy.originalName();
        if (this._namesCount[name] >= 2) {
            enemy.setPlural(true);
        }
    }, this);
};

Game_Troop.LETTER_TABLE_HALF = [
    ' A',' B',' C',' D',' E',' F',' G',' H',' I',' J',' K',' L',' M',
    ' N',' O',' P',' Q',' R',' S',' T',' U',' V',' W',' X',' Y',' Z',
    ' ZA',' ZB',' ZC',' ZD',' ZE',' ZF',' ZG',' ZH',' ZI',' ZJ',' ZK',' ZL',' ZM',
    ' ZN',' ZO',' ZP',' ZQ',' ZR',' ZS',' ZT',' ZU',' ZV',' ZW',' ZX',' ZY',' ZZ',
    ' ZZA',' ZZB',' ZZC',' ZZD',' ZZE',' ZZF',' ZZG',' ZZH',' ZZI',' ZZJ',' ZZK',' ZZL',' ZZM'
];

    
    var _Game_Troop_setup = Game_Troop.prototype.setup;
    Game_Troop.prototype.setup = function(troopId) {
        this.makeAdditionalEnemies(troopId);
        _Game_Troop_setup.apply(this, arguments);
        if (this.isExistAdditionalEnemies()) {
            this.concatAdditionalEnemies();
        }
    };
    

    Game_Troop.prototype.makeAdditionalEnemies = function(troopId) {
        this._troopId = troopId;
        var troopName = this.troop().name;
        this._additionalEnemies = [];
        _Game_Troop_setup.call(this, troopId);
        this._additionalEnemies = this._additionalEnemies.concat(this._enemies);
        _Game_Troop_setup.call(this, troopId);
        this._additionalEnemies = this._additionalEnemies.concat(this._enemies);
        _Game_Troop_setup.call(this, troopId);
        this._additionalEnemies = this._additionalEnemies.concat(this._enemies);
        _Game_Troop_setup.call(this, troopId);
        this._additionalEnemies = this._additionalEnemies.concat(this._enemies);
        _Game_Troop_setup.call(this, troopId);
        this._additionalEnemies = this._additionalEnemies.concat(this._enemies);
        _Game_Troop_setup.call(this, troopId);
        this._additionalEnemies = this._additionalEnemies.concat(this._enemies);
        _Game_Troop_setup.call(this, troopId);
        this._additionalEnemies = this._additionalEnemies.concat(this._enemies);
        _Game_Troop_setup.call(this, troopId);
        this._additionalEnemies = this._additionalEnemies.concat(this._enemies);
        _Game_Troop_setup.call(this, troopId);
        this._additionalEnemies = this._additionalEnemies.concat(this._enemies);
        //troopName.replace(/\\ADD\[(\d+)\]/gi, function() {
            //_Game_Troop_setup.call(this, parseInt(arguments[1]));
        //    _Game_Troop_setup.call(this, $gameVariables.value);
        //    this._additionalEnemies = this._additionalEnemies.concat(this._enemies);
        //}.bind(this));
    };

    Game_Troop.prototype.concatAdditionalEnemies = function() {
        this._enemies = this._enemies.concat(this._additionalEnemies);
        this.remakeUniqueNames();
    };

    Game_Troop.prototype.remakeUniqueNames = function() {
        this.members().forEach(function(enemy) {
            var name = enemy.originalName();
            delete this._namesCount[name];
            enemy.setLetter('');
        }, this);
        this.makeUniqueNames();
    };

    Game_Troop.prototype.isExistAdditionalEnemies = function() {
        return this._additionalEnemies.length > 0;
    };
    
    Game_Troop.prototype.countCanMove = function() {
    var canMove = 0;
        this.members().forEach(function(enemy) {
            if(enemy.canMove())canMove += 1;
        }, this);
        return canMove;
    };
})();

