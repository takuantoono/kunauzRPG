//=============================================================================
// Times_Skill.js
//=============================================================================

/*:
 * @plugindesc スキルに使用回数を追加します。
 * @author 村人C
 *
 * @help
 *
 * 使い方
 *
 * メモ欄：
 * アイテムの「メモ」欄に、記述します。
 * 使用回数制スキルの使用回数を回復：
 * <times_Skill>
 * 使用効果の「ＭＰ回復」分回復します。
 * ＭＰ回復５の場合は、５回分回復します。
 * 
 * スキルの「メモ」欄に、記述します。
 * 使用回数制スキル:
 * <times_Skill>
 * 使用回数に消費ＭＰを使用します。
 * 消費ＭＰ５の場合は、５回使用可能なスキルになります。
 *
 * 仕様
 * 使用回数回復は、全ての使用回数制スキルを回復させます。
 * スキルに使用回数制の記述がない場合は、使用回数制になりません。
 *
 *
 * readmeやスタッフロールの明記、使用報告は任意
 *
 *
 * @param Color
 * @desc 回数表示の色
 * デフォルト: 17
 * @default 17
 *
 * @param Terms
 * @desc 「使用回数」の用語
 * デフォルト: 使用回数
 * @default 使用回数
 */
 
 var Times_Skill = Times_Skill || {};
Times_Skill.Status = []; // 格納用に配列の作成
Times_Skill.Parameters = PluginManager.parameters('Times_Skill');
// 初期設定
Times_Skill.Status[0] = Number(Times_Skill.Parameters["Color"])  || 17;
Times_Skill.Status[1] = Times_Skill.Parameters["Terms"]  || "使用回数";
 
 (function() {
	 // オブジェクト初期化
	 var _Game_BattlerBase_initMembers_Times_Skill = Game_BattlerBase.prototype.initMembers;
	 Game_BattlerBase.prototype.initMembers = function() {
		this._times_skill = {}; // 回数制のHash作成
		_Game_BattlerBase_initMembers_Times_Skill.call(this);
	};
	// 全回復
	var _Game_BattlerBase_recoverAll_Times_Skill = Game_BattlerBase.prototype.recoverAll;
	Game_BattlerBase.prototype.recoverAll = function() {
		_Game_BattlerBase_recoverAll_Times_Skill.call(this);
		if (this.isActor()) { this.recoverTimes_Skill(); } // アクターだけ実行
		
	};
	// 回数全回復
	Game_BattlerBase.prototype.recoverTimes_Skill = function() {
		for(key in this._times_skill){
			this._times_skill[key][0] = 1;//this._times_skill[key][1];
		};
	};
	// スキル使用コストの支払い可能判定
	var _Game_BattlerBase_canPaySkillCost_Times_Skill = Game_BattlerBase.prototype.canPaySkillCost;
	Game_BattlerBase.prototype.canPaySkillCost = function(skill) {
		if (skill.meta.times_Skill&&this._times_skill[skill.id]) {
			return this._times_skill[skill.id][0] > 0 && _Game_BattlerBase_canPaySkillCost_Times_Skill.call(this, skill);
		} else {
			return _Game_BattlerBase_canPaySkillCost_Times_Skill.call(this, skill);
		}
	};
	// スキル使用コストの支払い
	var _Game_BattlerBase_paySkillCost_Times_Skill = Game_BattlerBase.prototype.paySkillCost;
	Game_BattlerBase.prototype.paySkillCost = function(skill) {
	if(this.isEnemy()){
	return _Game_BattlerBase_paySkillCost_Times_Skill.call(this, skill);
	}
		if (skill.meta.times_Skill) {
			this._times_skill[skill.id][0] -= 1;
			return _Game_BattlerBase_paySkillCost_Times_Skill.call(this, skill);
		} else {
			return _Game_BattlerBase_paySkillCost_Times_Skill.call(this, skill);
		}
	};
	// 回数回復
	Game_Battler.prototype.gainTimes_Skill = function(value) {
		this._result.times_skillDamage = -value;
	};
	// クリア
	var _Game_ActionResult_clear_Times_Skill = Game_ActionResult.prototype.clear;
	Game_ActionResult.prototype.clear = function() {
		_Game_ActionResult_clear_Times_Skill.call(this);
		this.times_skillDamage = 0;
	};
	// 使用効果［MP 回復］
	var _Game_Action_itemEffectRecoverMp_Times_Skill = Game_Action.prototype.itemEffectRecoverMp;
	Game_Action.prototype.itemEffectRecoverMp = function(target, effect) {
		if (this.isItem() && this.item().meta.times_Skill) {
			var value = (target.mmp * effect.value1 + effect.value2) * target.rec;
			value *= this.subject().pha;
			value = Math.floor(value);
			if (value !== 0) {
				for(key in target._times_skill){
					target._times_skill[key][0] = Math.min(value, target._times_skill[key][1]);
				};
				target.gainTimes_Skill(value);
				this.makeSuccess(target);
			}
		} else {
			return _Game_Action_itemEffectRecoverMp_Times_Skill.call(this, target, effect);
		}
	};
	// スキルをリストに含めるかどうか
	var _Window_SkillList_includes_Times_Skill = Window_SkillList.prototype.includes;
	Window_SkillList.prototype.includes = function(item) {
		if (item.meta.times_Skill && this._actor._times_skill[item.id] === undefined) {
			this._actor._times_skill[item.id] = [1, 1]//[item.mpCost, item.mpCost]
		}
		return _Window_SkillList_includes_Times_Skill.call(this, item);
	};
	// スキルの使用コストを描画
	var _Window_SkillList_drawSkillCost_Times_Skill = Window_SkillList.prototype.drawSkillCost;
	Window_SkillList.prototype.drawSkillCost = function(skill, x, y, width) {
		if (skill.meta.times_Skill) {
			this.changeTextColor(this.textColor(Times_Skill.Status[0]));
			return _Window_SkillList_drawSkillCost_Times_Skill.call(this, skill, x, y, width)
		} else {
			return _Window_SkillList_drawSkillCost_Times_Skill.call(this, skill, x, y, width)
		}
	};
	// ダメージの表示
	var _Window_BattleLog_displayDamage_Times_Skill = Window_BattleLog.prototype.displayDamage;
	Window_BattleLog.prototype.displayDamage = function(target) {
		if (target.result().times_skillDamage !== 0) {
			this.displayTimes_SkillDamage(target);
		} else {
			_Window_BattleLog_displayDamage_Times_Skill.call(this, target);
		}
	};
	// 回数 ダメージ表示
	Window_BattleLog.prototype.displayTimes_SkillDamage = function(target) {
		if (target.result().times_skillDamage < 0) {
            this.push('performRecovery', target);
        }
        this.push('addText', this.makeTimes_SkillDamageText(target));
	};
	// 回数 テキスト表示
	Window_BattleLog.prototype.makeTimes_SkillDamageText = function(target) {
		var result = target.result();
		var damage = result.times_skillDamage;
		var isActor = target.isActor();
		var fmt;
		if (damage > 0 && result.drain) {
			fmt = isActor ? TextManager.actorDrain : TextManager.enemyDrain;
			return fmt.format(target.name(), Times_Skill.Status[1], damage);
		} else if (damage > 0) {
			fmt = isActor ? TextManager.actorLoss : TextManager.enemyLoss;
			return fmt.format(target.name(), Times_Skill.Status[1], damage);
		} else if (damage < 0) {
			fmt = isActor ? TextManager.actorRecovery : TextManager.enemyRecovery;
			return fmt.format(target.name(), Times_Skill.Status[1], -damage);
		} else {
			return '';
		}
	};
})();