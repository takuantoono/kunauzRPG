/*:
 * @plugindesc パーティコマンドにオート戦闘を実装します。Gilles Meyer氏のプラグインと、やな氏のプラグインを参考にしました。
 * @author ガチョピン
 *
 * @param Auto Attack Text Party
 * @default おまかせ
 *
 * @help プラグインコマンドで表示名の変更が可能です。
 * 競合や他サイトプラグインとの併用で表示がおかしくなった場合は
 * そのつど自力での改変をお願いします(そっちのが簡単)。
 */



(function() {


  var parameters = PluginManager.parameters('AutoBattle');
  var autoPartyText = String(parameters['Auto Attack Text Party'] || "おまかせ");

  
  BattleManager.startAutoBattle = function(){
		this.clearActor();
		for(var i=0;i<$gameParty.members().length;i++){
			this.selectNextCommand();
			var actor = this.actor();
			if (actor && actor.canInput()){
				actor.makeActions2();
				actor.makeAutoBattleActions();				
			}
		}
		if (BattleManager.isInputting()){ this.startTurn() }
	};////////////////
	
	Game_Actor.prototype.makeActionList2 = function() {
    var list = [];
    var action = new Game_Action(this);
    action.setAttack();
    list.push(action);
    this.usableSkills().forEach(function(skill) {
        action = new Game_Action(this);
        action.setSkill(skill.id);
        list.push(action);
    }, this);
    action = new Game_Action(this);
        action.setSkill(2);
        list.push(action);

    return list;
};
  
  Game_Actor.prototype.makeAutoBattleActions = function() {
    for (var i = 0; i < this.numActions(); i++) {
        var list = this.makeActionList2();
        var maxValue = Number.MIN_VALUE;
        for (var j = 0; j < list.length; j++) {
            var value = list[j].evaluate()/20;
            if(list[j].isRecover())value*=10;
            value += (value == 0 && !list[j].isRecover()) ? Math.random() / 10 : 0;
            if(list[j]._item._dataClass=="skill" && list[j]._item._itemId==2)value=0.001;
            if(list[j]._item._dataClass=="skill" && list[j]._item._itemId==1&&!this.canPaySkillCost($dataSkills[this.attackSkillId()]))value=0
            if(list[j]._item._dataClass=="skill" && $dataSkills[list[j]._item._itemId].meta.noauto==1)value=0;
            if(list[j]._item._dataClass=="skill" && $dataSkills[list[j]._item._itemId].meta.times_Skill)value=0;
            if(list[j]._item._dataClass=="skill" && $dataSkills[list[j]._item._itemId].meta.lessauto==1)value/=10;
            if(list[j]._item._dataClass=="skill" && $dataSkills[list[j]._item._itemId].meta.veryauto==1)value*=10;
            if(list[j]._item._dataClass=="skill" && $dataSkills[list[j]._item._itemId].meta.moreauto==1&&$gameTroop.turnCount() > 0)value*=3;
            if(list[j]._item._dataClass=="skill" && $dataSkills[list[j]._item._itemId].meta.genkiauto==1){
            if(this.hp < this.param(0)/2)value=0;
            if(this.mp > 1 && this.tp < 75)value=0;
            }
            if(list[j]._item._dataClass=="skill" && $dataSkills[list[j]._item._itemId].meta.startauto==1){
            	if($gameTroop.turnCount() == 0){
            	if($gameTroop._enemies.length>=5){
            	value*=2;
            	}else{
            	value=0;
            	}
            	}else{
            	value=0;
            	}
            }
            var hp = $gameActors.actor(1).hp+$gameActors.actor(2).hp+$gameActors.actor(3).hp+$gameActors.actor(4).hp
            var mhp = $gameActors.actor(1).param(0)+$gameActors.actor(2).param(0)+$gameActors.actor(3).param(0)+$gameActors.actor(4).param(0)
            if($gameVariables.value(705)==5){
            hp += $gameActors.actor(5).hp
            mhp += $gameActors.actor(5).param(0)
            }
            hp /= mhp
            if(list[j]._item._dataClass=="skill" && list[j]._item._itemId==2)value=0;
            if(list[j]._item._dataClass=="skill" && list[j]._item._itemId==2 && hp < 0.4)value=0.02;
            if(list[j]._item._dataClass=="skill" && $dataSkills[list[j]._item._itemId].meta.cureauto==1){
            	if(hp < 0.5){
            	value*=2;
            	}else{
            	value=0;
            	}
            }
            if (value > maxValue) {
                maxValue = value;
                this.setAction(i, list[j]);
            }
        }
    }
    this.setActionState('waiting');
};


  

  Scene_Battle.prototype.commandAutoFight = function() {
    this.selectNextCommand();
    do {
      this.commandAutoAttack.apply(this, arguments);
    } while(BattleManager.isInputting());
    this._actorCommandWindow.deactivate();
  };

  Scene_Battle.prototype.commandAutoAttack = function() {
	BattleManager.startAutoBattle();
	  delete Input._currentState["ok"];
  };


  Window_PartyCommand.prototype.makeCommandList = function() {
  this.setLanguageWords();
    this.addCommand(TextManager.fight,  'fight');
    this.addCommand(this._autobattle_w,  'autofight');
    if($gameTroop._turnCount>0&&!$gameSwitches.value(369))this.addCommand(TextManager.escape, 'escape', BattleManager.canEscape());
  };

  var _Scene_Battle_createPartyCommandWindow = Scene_Battle.prototype.createPartyCommandWindow;
  Scene_Battle.prototype.createPartyCommandWindow = function() {
    _Scene_Battle_createPartyCommandWindow.apply(this, arguments);
    this._partyCommandWindow.setHandler('autofight',  this.commandAutoFight.bind(this));
  };



})();