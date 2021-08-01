//=============================================================================
// KGN_HitMinusEva.js
//=============================================================================

var Imported = Imported || {};
Imported.KGN_HitMinusEva = true;

/*:
 * @plugindesc 最終的な命中率を「命中率 - 回避率」にします。
 * @author きぎぬ
 * 
 * @help 
 * シンプル。攻撃ミスは無くなり、命中しなかった場合は回避扱いになります。
 * (競合対策は)ないです。Game_Action.prototype.applyを直接書き換えます。

 * YEP_BattleEngineCoreを導入している場合、このプラグインはそれより上に配置を。
 * さもなくばダメージポップアップが無効化されたりします。

 * バグとか自分じゃ太刀打ちできないので、自力で、どうぞ。
 * 
 * HP： http://r3jou.web.fc2.com/

 */

(function() {

var Game_Action_prototype_apply = Game_Action.prototype.apply;//バックアップ
Game_Action.prototype.apply = function(target) {
	var result = target.result();
	this.subject().clearResult();
	var id = 0;
	id = 0;
	result.clear();
	result.used = this.testApply(target);
	//result.missed = (result.used && Math.random() >= this.itemHit(target));//元の
	result.missed = false;//攻撃ミスは絶対にしない
	if(target.isEnemy()){
	if(this.item().meta.taichi && $dataEnemies[target._enemyId].meta.antitaichi)result.missed = true;
	}else{
	if(this.item().meta.taichi && target.isStateAffected(48))result.missed = true;
	}
	
	//result.evaded = (!result.missed && Math.random() < this.itemEva(target));//元の
	var alsoc = 0
	if(this.item().meta.aim){
	alsoc = this.item().meta.aim * 1
	alsoc = parseInt(alsoc)/100
	}
	var hitting = this.itemHit(target) + alsoc - this.itemEva(target);
	if(hitting <= 0.05) hitting = 0.05;
	result.evaded = (result.used && Math.random() >= hitting);//ここで命中-回避計算
	//console.log('hit-eva ' + (this.itemHit(target) + alsoc - this.itemEva(target)));//数字を見てみたい
	result.physical = this.isPhysical();
	result.drain = this.isDrain();
	
	this._hitForChain    = false;
    this._damageForChain = false;
	if (result.isHit()) {
		if (this.item().damage.type > 0) {
			this._damageForChain =true;
			var critoris = this.itemCri(target);
			result.critical = (Math.random() < critoris);
			this.updateChain(target);
			var value = this.makeDamageValue(target, result.critical);
			this.executeDamage(target, value);
		}
		this.item().effects.forEach(function(effect) {
			this.applyItemEffect(target, effect);
		}, this);
		this.applyItemUserEffect(target);
		if(this.item().id == 116) this.subject().worked = true;
	}
	
	
};

Game_Action.prototype.conditionred = function(target) {
    if(target.isStateAffected(3) || target.isStateAffected(4) || target.isStateAffected(5) || target.isStateAffected(6) || target.isStateAffected(7) || target.isStateAffected(8) ||
    target.isStateAffected(9) || target.isStateAffected(10) || target.isStateAffected(42) || target.isStateAffected(40) || target.isStateAffected(41) || target.isStateAffected(44) ||  
    target.isStateAffected(45) || target.isStateAffected(46) || target.isStateAffected(51) || target.isStateAffected(52) || target.isStateAffected(54) || target.isStateAffected(57) ||
    target.isDebuffAffected(0) || target.isDebuffAffected(3) || target.isDebuffAffected(5) || target.isDebuffAffected(6) || target.isDebuffAffected(7)) {
      return true;
    } else {
    return false;
    }
};



Game_Action.prototype.itemEffectAddAttackState = function(target, effect) {
    this.subject().attackStates().forEach(function(stateId) {
        var chance = effect.value1;
        chance *= target.stateRate(stateId);
        chance *= this.subject().attackStatesRate(stateId);
        chance *= this.lukEffectRate(target);
        if (Math.random() < chance) {
            target.addState(stateId);
            this.makeSuccess(target);
            }
    }.bind(this), target);
    
};

Game_Action.prototype.itemEffectAddDebuff = function(target, effect) {
    var chance = target.debuffRate(effect.dataId) * this.lukEffectRate(target);
    if (Math.random() < chance) {
        target.addDebuff(effect.dataId, effect.value1);
        this.makeSuccess(target);
    }
};

Game_Action.prototype.itemEffectAddNormalState = function(target, effect) {
    var chance = effect.value1;
    if (!this.isCertainHit()) {
        chance *= target.stateRate(effect.dataId);
        chance *= this.lukEffectRate(target);
    }
    if (Math.random() < chance) {
        target.addState(effect.dataId);
        this.makeSuccess(target);
    }
};

Game_BattlerBase.prototype.isDying = function() {
return this.isAlive() && this._hp < this.mhp / 2; //元々は 2 でなくて 4 で割ってた
};




})();