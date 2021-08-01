//=============================================================================
// dsWeaponMastery.js
// Copyright (c) 2016 Douraku
// Released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc 武器熟練度システム ver1.06
 * @author 道楽
 *
 * @requiredAssets img/system/WMAptitude
 *
 * @param Weapon Masteries Max
 * @desc 武器熟練度の影響を受ける武器タイプの最大数
 * @default 12
 *
 * @param Weapon Mastery Table
 * @desc 武器熟練度に使用する武器タイプのテーブル
 * 「,」区切りで熟練度の種類分必要
 * @default 1,2,3,4,5,6,7,8,9,10,11,12
 *
 * @param Weapon Mastery Icon
 * @desc 表示する武器タイプのアイコン
 * 「,」区切りで熟練度の種類分必要
 * @default 96,97,98,99,100,101,102,103,104,105,106,107
 *
 * @param Mastery Level Max
 * @desc 武器熟練度レベルの最大値
 * @default 100
 *
 * @param Mastery Exp Max
 * @desc 武器熟練度レベルアップに必要な経験値
 * この経験値は武器を使用して攻撃するごとに加算されます
 * @default 1000
 *
 * @param Add Mastery Exp
 * @desc 攻撃ごとに加算される武器熟練度経験値
 * 「,」区切りで素質の種類分必要
 * @default 5,10,15,20,25
 *
 * @param Add Damage Rate
 * @desc 熟練度上昇毎に加算されるダメージ率
 * @default 5
 *
 * @param Learning Skill Text
 * @desc スキル習得時に表示されるテキスト
 * %1 - アクター %2 - 武器タイプ %3 武器熟練度レベル
 * @default %1は%2の武器熟練度が %3 に上がった！
 *
 * @help
 * このプラグインは以下のメモタグの設定が必要です。
 *
 * ----------------------------------------------------------------------------
 * アクターに設定するメモタグ
 *
 * <wmAptitude:C,S,B,A,D,C,C,B,A,A,D,C>
 *   各武器に対する適正を設定します。
 *   設定できる値は適正が低い順に「D」「C」「B」「A」「S」となっています。
 *   また、このタグの引数は「,」区切りで、
 *  「Weapon Mastery Max」の数だけ必要になります。
 *
 * ----------------------------------------------------------------------------
 * スキルに設定するメモタグ
 *
 * <wmType:[武器タイプ]>
 *  スキルに対応する武器タイプの種類を設定します。
 *  [武器タイプ] - 武器タイプのID(数字)
 *                 -1の場合は現在装備している武器の種類に依存するようになります。
 *                 この状態では<requiredWM>が無効になりますので、
 *                 習得レベルの設定は<requiredWMEx>を使用してください。
 *
 * <requiredWM:[必要レベル]>
 *  スキルを習得するために必要な武器熟練度レベルを設定します。
 *  [必要レベル] - 習得に必要な武器熟練度レベル(数字)
 *
 * <requiredWMEx[条件番号]:[武器タイプ],[必要レベル]>
 *  必要な武器熟練度レベルを設定するタグの拡張版です。
 *  複数の武器タイプに必要レベルを設定する時はこちらのタグを使用します。
 *  なお、<requiredWM>と同時に設定した場合は<requiredWM>が優先されます。
 *  [条件番号]   - 00～09までの2桁の数値が設定できます。
 *                 なお、ひとつのスキルに同じ条件番号を複数設定出来ません。
 *  [武器タイプ] - 武器タイプのID(数字)
 *  [必要レベル] - 習得に必要な武器熟練度レベル(数字)
 *
 * ----------------------------------------------------------------------------
 * プラグインコマンド
 *
 * 武器適正を変更するコマンド
 *   ChangeWMAptitude iteType param wtypeId opeType operand
 *
 * 武器熟練度レベルを変更するコマンド
 *   ChangeWMLevel iteType param wtypeId opeType operand show
 *
 * 武器熟練度経験値を変更するコマンド
 *   ChangeWMExp iteType param wtypeId opeType operand show
 *
 * 上記コマンドのパラメータは共通になります
 *     iteType
 *       0   paramをアクター番号として使用する
 *       1～ paramをアクター番号が格納された変数の番号として使用する
 *     param
 *       0   iteTypeが0の場合、パーティメンバー全体を対象とする
 *       1～ iteTypeに基づきアクター番号となる
 *     wtypeId
 *       0   全ての武器を対象とする
 *       1～ 指定した武器タイプを対象とする
 *     opeType
 *       0   operandを変更する値として使用する
 *       1～ operandを変更する値が格納された変数の番号として使用する
 *     operand
 *       opeTypeに基づき変更する値となる(負数にすると減る)
 *     show
 *       true  熟練度レベルがあがったメッセージを表示する
 *       false 熟練度レベルがあがったメッセージを表示しない
 * ----
 *
 * 武器熟練度レベルを取得し、変数に格納するコマンド
 *   GetWMLevel variableId actorId wtypeId
 *     variableId - 格納する変数の番号
 *     actorId    - 取得するアクターの番号
 *     wtypeId    - 取得する武器タイプ
 *
 * ----------------------------------------------------------------------------
 * ダメージ計算式への組み込み
 *
 * スキル等のダメージ計算式では以下のコマンドが使用できます。
 *
 * a.wml(item)
 *   a(攻撃側)が使用したスキルに対応した武器熟練度を取得する
 *
 * b.wml(item)
 *   b(防御側)が使用されたスキルに対応した武器熟練度を取得する
 */

var Imported = Imported || {};
Imported.dsWeaponMastery = true;

var dsWeaponMastery = {};

(function(ns) {

	ns.Param = (function() {
		var ret = {};
		var parameters = PluginManager.parameters('dsWeaponMastery');
		ret.MasteriesMax = Number(parameters['Weapon Masteries Max']);
		ret.MasteryLevelMax = Number(parameters['Mastery Level Max']);
		ret.MasteryExpMax = Number(parameters['Mastery Exp Max']);
		ret.MasteryAptitudeMax = 5;
		ret.AddDamageRate = Number(parameters['Add Damage Rate']) * 0.01;
		ret.LearningSkillText = String(parameters['Learning Skill Text']);
		ret.RequiredWMExMax = 10;
		ret.WMTypeTbl = [];
		if ( parameters['Weapon Mastery Table'] === '' )
		{
			for ( var ii = 0; ii < ret.MasteriesMax; ii++ )
			{
				ret.WMTypeTbl[ii] = 1 + ii;
			}
		}
		else
		{
			var tbl = parameters['Weapon Mastery Table'].split(',');
			for ( var ii = 0; ii < ret.MasteriesMax; ii++ )
			{
				ret.WMTypeTbl[ii] = (ii < tbl.length) ? Number(tbl[ii]) : 1 + ii;
			}
		}
		ret.WMIconTbl = [];
		if ( parameters['Weapon Mastery Icon'] === '' )
		{
			for ( var ii = 0; ii < ret.MasteriesMax; ii++ )
			{
				ret.WMIconTbl[ii] = 1 + ii;
			}
		}
		else
		{
			var tbl = parameters['Weapon Mastery Icon'].split(',');
			for ( var ii = 0; ii < ret.MasteriesMax; ii++ )
			{
				ret.WMIconTbl[ii] = (ii < tbl.length) ? Number(tbl[ii]) : 1 + ii;
			}
		}
		ret.AddMasteryExp = [];
		if ( parameters['Add Mastery Exp'] === '' )
		{
			for ( var ii = 0; ii < ret.MasteryAptitudeMax; ii++ )
			{
				ret.AddMasteryExp[ii] = 5 + ii * 5;
			}
		}
		else
		{
			var tbl = parameters['Add Mastery Exp'].split(',');
			for ( var ii = 0; ii < ret.MasteryAptitudeMax; ii++ )
			{
				ret.AddMasteryExp[ii] = (ii < tbl.length) ? Number(tbl[ii]) : 5 + ii * 5;
			}
		}
		return ret;
	})();


	//-------------------------------------------------------------------------
	/** Utility */
	var Utility = {};

	Utility.wmIndex = function(wtypeId)
	{
		for ( var ii = 0; ii < ns.Param.MasteriesMax; ii++ )
		{
			if ( ns.Param.WMTypeTbl[ii] === wtypeId )
			{
				return ii;
			}
		}
		return -1;
	};

	//-------------------------------------------------------------------------
	/** Game_Interpreter */
	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args)
	{
		_Game_Interpreter_pluginCommand.call(this, command, args);
		if ( command === 'ChangeWMAptitude' )
		{
			var iteType = Number(args[0]);
			var param   = Number(args[1]);
			var wtypeId = Number(args[2]);
			var opeType = Number(args[3]);
			var operand = Number(args[4]);
			this.changeWMAptitude(iteType, param, wtypeId, opeType, operand);
		}
		else if ( command === 'ChangeWMLevel' )
		{
			var iteType = Number(args[0]);
			var param   = Number(args[1]);
			var wtypeId = Number(args[2]);
			var opeType = Number(args[3]);
			var operand = Number(args[4]);
			var show    = Boolean(args[5] === 'true' || false);
			this.changeWMLevel(iteType, param, wtypeId, opeType, operand, show);
		}
		else if ( command === 'ChangeWMExp' )
		{
			var iteType = Number(args[0]);
			var param   = Number(args[1]);
			var wtypeId = Number(args[2]);
			var opeType = Number(args[3]);
			var operand = Number(args[4]);
			var show    = Boolean(args[5] === 'true' || false);
			this.changeWMExp(iteType, param, wtypeId, opeType, operand, show);
		}
		else if ( command === 'GetWMLevel' )
		{
			var variableId = Number(args[0]);
			var actorId    = Number(args[1]);
			var wtypeId    = Number(args[2]);
			this.getWMLevel(variableId, actorId, wtypeId);
		}
		else if ( command === 'GetWMLevelFuck' )
		{
			var variableId = Number(args[0]);
			var actorId    = $gameVariables.value(60);
			var wtypeId    = $gameVariables.value(66);
			this.getWMLevel(variableId, actorId, wtypeId);
		}
	};

	Game_Interpreter.prototype.changeWMAptitude = function(iteType, param, wtypeId, opeType, operand)
	{
		var value = this.operateValue((operand < 0) ? 1 : 0, opeType, Math.abs(operand));
		this.iterateActorEx(iteType, param, function(actor) {
			actor.changeWMAptitude(wtypeId, value);
		}.bind(this));
	};

	Game_Interpreter.prototype.changeWMLevel = function(iteType, param, wtypeId, opeType, operand, show)
	{
		var value = this.operateValue((operand < 0) ? 1 : 0, opeType, Math.abs(operand));
		this.iterateActorEx(iteType, param, function(actor) {
			actor.changeWMLevel(wtypeId, value, show);
		}.bind(this));
	};

	Game_Interpreter.prototype.changeWMExp = function(iteType, param, wtypeId, opeType, operand, show)
	{
		var value = this.operateValue((operand < 0) ? 1 : 0, opeType, Math.abs(operand));
		this.iterateActorEx(iteType, param, function(actor) {
			actor.changeWMExp(wtypeId, value, show);
		}.bind(this));
	};

	Game_Interpreter.prototype.getWMLevel = function(variableId, actorId, wtypeId)
	{
		var actor = $gameActors.actor(actorId);
		if ( actor )
		{
			var level = actor.wmLevel(wtypeId);
			$gameVariables.setValue(variableId, level);
		}
	};

	//-------------------------------------------------------------------------
	/** Game_Action */
	var _Game_Action_calcElementRate = Game_Action.prototype.calcElementRate;
	Game_Action.prototype.calcElementRate = function(target)
	{
		var rate = _Game_Action_calcElementRate.call(this, target);
		var subject = this.subject();
		if ( subject.isActor() )
		{
			var item = this.item();
			if ( DataManager.isSkill(item) )
			{
				if ( item.id === 1 ) // 通常攻撃
				{
					subject.weapons().forEach(function(weapon) {
						rate *= subject.wmDamageRate(weapon.wtypeId);
					}, subject);
				}
				else
				{
					if ( item.meta.wmType )
					{
						var wmType = Number(item.meta.wmType);
						if ( wmType < 0 )
						{
							subject.weapons().forEach(function(weapon) {
								rate *= subject.wmDamageRate(weapon.wtypeId);
							}, subject);
						}
						else
						{
							rate *= subject.wmDamageRate(wmType);
						}
					}
				}
			}
		}
		return rate;
	};

	//-------------------------------------------------------------------------
	/** Game_BattlerBase */
	Game_BattlerBase.prototype.wml = function(item)
	{
		return 0;
	};

	Game_BattlerBase.prototype.wmLevel = function(wtypeId)
	{
		return 0;
	};

	//-------------------------------------------------------------------------
	/** Game_Actor */
	var _Game_Actor_initMembers = Game_Actor.prototype.initMembers;
	Game_Actor.prototype.initMembers = function()
	{
		_Game_Actor_initMembers.call(this);
		this._wmAptitude = [];
		this._wmLevel = [];
		this._wmExp = [];
		this._wmGainExp = [];
		for ( var ii = 0; ii < ns.Param.MasteriesMax; ii++ )
		{
			this._wmAptitude[ii] = 0;
			this._wmLevel[ii] = 0;
			this._wmExp[ii] = 0;
			this._wmGainExp[ii] = 0;
		}
	};

	var _Game_Actor_setup = Game_Actor.prototype.setup;
	Game_Actor.prototype.setup = function(actorId)
	{
		_Game_Actor_setup.call(this, actorId);
		this.initMasteries();
	};

	Game_Actor.prototype.initMasteries = function()
	{
		var actor = $dataActors[this._actorId];
		if ( actor.meta.wmAptitude )
		{
			var aptitude = actor.meta.wmAptitude.split(',');
			for ( var ii = 0; ii < ns.Param.MasteriesMax; ii++ )
			{
				if ( ii < aptitude.length )
				{
					switch ( aptitude[ii] )
					{
					case 'D': this._wmAptitude[ii] = 0; break;
					case 'C': this._wmAptitude[ii] = 1; break;
					case 'B': this._wmAptitude[ii] = 2; break;
					case 'A': this._wmAptitude[ii] = 3; break;
					case 'S': this._wmAptitude[ii] = 4; break;
					}
				}
			}
		}
	};

	Game_Actor.prototype.wml = function(item)
	{
		var wmLevelMax = 0;
		if ( DataManager.isSkill(item) )
		{
			if ( item.id === 1 ) // 通常攻撃
			{
				this.weapons().forEach(function(weapon) {
					wmLevelMax = Math.max(this.wmLevel(weapon.wtypeId), wmLevelMax);
				}, this);
			}
			else
			{
				if ( item.meta.wmType )
				{
					var wmType = Number(item.meta.wmType);
					if ( wmType < 0 )
					{
						this.weapons().forEach(function(weapon) {
							wmLevelMax = Math.max(this.wmLevel(weapon.wtypeId), wmLevelMax);
						}, this);
					}
					else
					{
						wmLevelMax = this.wmLevel(wmType);
					}
				}
			}
		}
		return wmLevelMax;
	};

	Game_Actor.prototype.wmLevel = function(wtypeId)
	{
		var idx = Utility.wmIndex(wtypeId);
		return (idx >= 0) ? this._wmLevel[idx] : 0;
	};

	Game_Actor.prototype.wmExp = function(wtypeId)
	{
		var idx = Utility.wmIndex(wtypeId);
		return (idx >= 0) ? this._wmExp[idx] : 0;
	};

	Game_Actor.prototype.wmExpRate = function(wtypeId)
	{
		if ( this.wmLevel(wtypeId) === ns.Param.MasteryLevelMax )
		{
			return 1.0;
		}
		var idx = Utility.wmIndex(wtypeId);
		return (idx >= 0) ? (this._wmExp[idx] % ns.Param.MasteryExpMax) / ns.Param.MasteryExpMax : 0.0;
	};

	Game_Actor.prototype.wmAptitude = function(wtypeId)
	{
		var idx = Utility.wmIndex(wtypeId);
		return (idx >= 0) ? this._wmAptitude[idx] : 0;
	};

	Game_Actor.prototype.wmDamageRate = function(wtypeId)
	{
		var wmLevel = this.wmLevel(wtypeId);
		return 1.0 + (wmLevel * ns.Param.AddDamageRate);
	};

	Game_Actor.prototype.addWMExp = function(wtypeId)
	{
		var wmExpMax = (ns.Param.MasteryLevelMax + 1 ) * (ns.Param.MasteryLevelMax + 1) * 10 + 50 * (ns.Param.MasteryLevelMax + 1) + 50;
		var idx = Utility.wmIndex(wtypeId);
		if ( idx >= 0 )
		{
			var aptitude = this._wmAptitude[idx];
			this._wmGainExp[idx] += ns.Param.AddMasteryExp[aptitude];
			this._wmGainExp[idx] = this._wmGainExp[idx].clamp(0, wmExpMax);
		}
	};

	Game_Actor.prototype.changeWMAptitude = function(wtypeId, value)
	{
		if ( wtypeId === 0 )
		{
			for ( var ii = 0; ii < ns.Param.MasteriesMax; ii++ )
			{
				this._wmAptitude[ii] += value;
				this._wmAptitude[ii] = this._wmAptitude[ii].clamp(0, ns.Param.MasteryAptitudeMax-1);
			}
		}
		else
		{
			var idx = Utility.wmIndex(wtypeId);
			if ( idx >= 0 )
			{
				this._wmAptitude[idx] += value;
				this._wmAptitude[idx] = this._wmAptitude[idx].clamp(0, ns.Param.MasteryAptitudeMax-1);
			}
		}
	};

	Game_Actor.prototype.changeWMLevel = function(wtypeId, value, show)
	{
		var wmExpMax = (ns.Param.MasteryLevelMax + 1 ) * (ns.Param.MasteryLevelMax + 1) * 10 + 50 * (ns.Param.MasteryLevelMax + 1) + 50;
		if ( wtypeId === 0 )
		{
			for ( var ii = 0; ii < ns.Param.MasteriesMax; ii++ )
			{
				this._wmExp[ii] = value * ns.Param.MasteryExpMax;
				this._wmExp[ii] = this._wmExp[ii].clamp(0, wmExpMax);
			}
		}
		else
		{
			var idx = Utility.wmIndex(wtypeId);
			if ( idx >= 0 )
			{
				this._wmExp[idx] = value * ns.Param.MasteryExpMax;
				this._wmExp[idx] = this._wmExp[idx].clamp(0, wmExpMax);
			}
		}
		this.gainWMExp(show);
	};

	Game_Actor.prototype.changeWMExp = function(wtypeId, value, show)
	{
		var wmExpMax = (ns.Param.MasteryLevelMax + 1 ) * (ns.Param.MasteryLevelMax + 1) * 10 + 50 * (ns.Param.MasteryLevelMax + 1) + 50;
		if ( wtypeId === 0 )
		{
			for ( var ii = 0; ii < ns.Param.MasteriesMax; ii++ )
			{
				this._wmExp[ii] += value;
				this._wmExp[ii] = this._wmExp[ii].clamp(0, wmExpMax);
			}
		}
		else
		{
			var idx = Utility.wmIndex(wtypeId);
			if ( idx >= 0 )
			{
				this._wmExp[idx] += value;
				this._wmExp[idx] = this._wmExp[idx].clamp(0, wmExpMax);
			}
		}
		this.gainWMExp(show);
	};

	var _Game_Actor_useItem = Game_Actor.prototype.useItem;
	Game_Actor.prototype.useItem = function(item)
	{
		_Game_Actor_useItem.call(this, item);
		if ( DataManager.isSkill(item) )
		{
			if ( item.id === 1 ) // 通常攻撃
			{
			var array = $gameVariables.value(300);
			if(array.indexOf(this._actorId) == -1){
				this.weapons().forEach(function(weapon) {
				array.push(this._actorId)
				$gameVariables.setValue(300, array);
					this.addWMExp(weapon.wtypeId);
				}, this);
			}}
			else
			{
				if ( item.meta.wmType )
				{
					var wmType = Number(item.meta.wmType);
					if ( wmType < 0 )
					{
						this.weapons().forEach(function(weapon) {
							this.addWMExp(weapon.wtypeId);
						}, this);
					}
					else
					{
						this.addWMExp(wmType);
					}
				}
			}
		}
	};

	Game_Actor.prototype.gainWMExp = function(show)
	{
		var wmExpMax = (ns.Param.MasteryLevelMax + 1 ) * (ns.Param.MasteryLevelMax + 1) * 10 + 50 * (ns.Param.MasteryLevelMax + 1) + 50;
		var lastSkills = this.skills();
		var lastWMLevel = [];
		for ( var ii = 0; ii < ns.Param.MasteriesMax; ii++ )
		{
			lastWMLevel[ii] = this._wmLevel[ii];
		}
		for ( var ii = 0; ii < ns.Param.MasteriesMax; ii++ )
		{
			this._wmExp[ii] += this._wmGainExp[ii];
			this._wmExp[ii] = this._wmExp[ii].clamp(0, wmExpMax);
			this._wmGainExp[ii] = 0;
		}

		var wmLevelUp = false;
		for ( var ii = 0; ii < ns.Param.MasteriesMax; ii++ )
		{
			var wtypeId = ns.Param.WMTypeTbl[ii];
			while ( this._wmExp[ii] >= ((this._wmLevel[ii] + 1 ) * (this._wmLevel[ii] + 1) * 10 + 50 * (this._wmLevel[ii] + 1) + 50) )
			{
				if ( !this.wmLevelUp(wtypeId) )
				{
					break;
				}
				wmLevelUp = true;
			}
			while ( this._wmExp[ii] < (this._wmLevel[ii] * this._wmLevel[ii] * 10 + 50 * this._wmLevel[ii] + 50) && this._wmLevel[ii] > 0)
			{
				if ( !this.wmLevelDown(wtypeId) )
				{
					break;
				}
			}
		}

		if ( show && wmLevelUp )
		{
			$gameMessage.newPage();
			for ( var ii = 0; ii < ns.Param.MasteriesMax; ii++ )
			{
				if ( this._wmLevel[ii] > lastWMLevel[ii] )
				{
					var wtypeId = ns.Param.WMTypeTbl[ii];
					var wtypeName = $dataSystem.weaponTypes[wtypeId];
					var text = ns.Param.LearningSkillText.format(this._name, wtypeName, this._wmLevel[ii]);
					$gameMessage.add(text);
				}
			}
			var newSkills = this.findNewSkills(lastSkills);
			newSkills.forEach(function(skill) {
				$gameMessage.add(TextManager.obtainSkill.format(skill.name));
			});
		}
	};

	Game_Actor.prototype.wmLevelUp = function(wtypeId)
	{
		var idx = Utility.wmIndex(wtypeId);
		if ( idx >= 0 )
		{
			this._wmLevel[idx]++;
			this.skillsWMType(wtypeId).forEach(function(skill) {
				if ( this.checkSkillLearning(skill, this._wmLevel[idx]) )
				{
					this.learnSkill(skill.id);
				}
			}, this, idx);
		}
		return ( idx >= 0 );
	};

	Game_Actor.prototype.wmLevelDown = function(wtypeId)
	{
		var idx = Utility.wmIndex(wtypeId);
		if ( idx >= 0 )
		{
			this._wmLevel[idx]--;
		}
		return ( idx >= 0 );
	};

	Game_Actor.prototype.skillsWMType = function(wtypeId)
	{
		return $dataSkills.filter(function(skill) {
			if ( skill )
			{
				if ( skill.meta.wmType )
				{
					if ( Number(skill.meta.wmType) === wtypeId )
					{
						return true;
					}
				}
				for ( var ii = 0; ii < ns.Param.RequiredWMExMax; ii++ )
				{
					var requiredWM = 'requiredWMEx' + ('0'+ii).slice(-2);
					if ( skill.meta[requiredWM] )
					{
						var metaData = skill.meta[requiredWM].split(',');
						if ( Number(metaData[0]) === wtypeId )
						{
							return true;
						}
					}
				}
			}
		}, wtypeId);
	};

	Game_Actor.prototype.checkSkillLearning = function(skill, level)
	{
		if ( skill.meta.requiredWM )
		{
			if ( Number(skill.meta.requiredWM) === level )
			{
				return true;
			}
		}
		else
		{
			var result = true;
			var existMetaData = false;
			for ( var ii = 0; ii < ns.Param.RequiredWMExMax; ii++ )
			{
				var requiredWM = 'requiredWMEx' + ('0'+ii).slice(-2);
				if ( skill.meta[requiredWM] )
				{
					var metaData = skill.meta[requiredWM].split(',');
					if ( this.wmLevel(Number(metaData[0])) < Number(metaData[1]) )
					{
						result = false;
					}
					existMetaData = true;
				}
			}
			if ( existMetaData )
			{
				return result;
			}
		}
		return false;
	};

	//-------------------------------------------------------------------------
	/** Window_Base */
	Window_Base.prototype.wmColor1 = function()
	{
		return this.textColor(28);
	};

	Window_Base.prototype.wmColor2 = function()
	{
		return this.textColor(29);
	};

	Window_Base.prototype.lvColor = function()
	{
		return this.textColor(20);
	};

	Window_Base.prototype.wmIcon = function(wtypeId)
	{
		var idx = Utility.wmIndex(wtypeId);
		if ( idx >= 0 )
		{
			return ns.Param.WMIconTbl[idx];
		}
		return 0;
	};

	Window_Base.prototype.drawMasteryGauge = function(actor, index, x, y, width)
	{
		var wtypeId = ns.Param.WMTypeTbl[index];
		var name = $dataSystem.weaponTypes[wtypeId];
		var iconBoxWidth = Window_Base._iconWidth + 4;
		var labelWidth = this.textWidth('LV');
		var valueWidth = this.textWidth('000');
		var gaugeWidth = width - iconBoxWidth * 2 - labelWidth - valueWidth - 4;
		var x1 = x + iconBoxWidth;
		var x2 = x + width - labelWidth - valueWidth - iconBoxWidth;
		var x3 = x + width - valueWidth - iconBoxWidth;
		var x4 = x + width - iconBoxWidth;
		var color1 = this.wmColor1();
		var color2 = this.wmColor2();
		var color3 = this.lvColor();
		this.drawGauge(x1, y, gaugeWidth, actor.wmExpRate(wtypeId), color1, color2);
		this.drawIcon(this.wmIcon(wtypeId), x + 2, y + 2);
		this.changeTextColor(this.systemColor());
		this.drawText(name, x1, y, width);
		this.changeTextColor(color3);
		this.drawText('LV', x2, y, labelWidth);
		this.resetTextColor();
		this.drawText(actor.wmLevel(wtypeId), x3, y, valueWidth, 'right');
		this.drawAptitude(actor.wmAptitude(wtypeId), x4 + 2, y + 2);
	};

	Window_Base.prototype.drawAptitude = function(aptitude, x, y)
	{
		//var bitmap = ImageManager.loadSystem('WMAptitude');
		var pw = Window_Base._iconWidth;
		var ph = Window_Base._iconHeight;
		var sx = aptitude * pw;
		var sy = 0;
		var icon = 806 + aptitude;
		this.drawIcon(icon, x, y);
		//this.contents.blt(bitmap, sx, sy, pw, ph, x, y);
	};

	//-------------------------------------------------------------------------
	/** Window_Status */

	Window_Status.prototype.drawMasteries = function(x, y)
	{
		var lineHeight = this.lineHeight();
		for ( var ii = 0; ii < ns.Param.MasteriesMax; ii++ )
		{
			var row = Math.floor(ii / 2);
			var col = ii % 2;
			var space = 0;
			if(col==1)space=30; 
			this.drawMasteryGauge(this._actor, ii, x+342*col+space, y+lineHeight*row, 342);
		}
	};

	//-------------------------------------------------------------------------
	/** Scene_Boot */
	var _Scene_Boot_loadSystemWindowImage = Scene_Boot.prototype.loadSystemWindowImage;
	Scene_Boot.prototype.loadSystemWindowImage = function()
	{
		_Scene_Boot_loadSystemWindowImage.call(this);
		ImageManager.loadSystem('WMAptitude');
	};

	//-------------------------------------------------------------------------
	/** BattleManager */
	var _BattleManager_gainRewards = BattleManager.gainRewards;
	BattleManager.gainRewards = function()
	{
		_BattleManager_gainRewards.call(this);
		this.gainWMExp();
	};

	BattleManager.gainWMExp = function()
	{
		$gameParty.allMembers().forEach(function(actor) {
			actor.gainWMExp(true);
		});
	};

})(dsWeaponMastery);

