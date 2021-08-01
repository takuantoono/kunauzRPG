(function() {

// Open Menu Screen
Game_Interpreter.prototype.command351 = function() {
    if (!$gameParty.inBattle()) {
    	var id1 = $gameParty.members()[0]._actorId;
    	var id2 = $gameParty.members()[1]._actorId;
    	var id3 = $gameParty.members()[2]._actorId;
    	var id4 = $gameParty.members()[3]._actorId;
    	var id5 = 0;
    	if($gameParty.members()[4])id5 = $gameParty.members()[4]._actorId;
    	this.viewActor(0)
    	this.viewActor(1)
    	this.viewActor(2)
    	this.viewActor(3)
    	this.viewActor(4)
    	this.unlockPow(id1)
    	this.unlockPow(id2)
    	this.unlockPow(id3)
    	this.unlockPow(id4)
    	this.unlockPow(id5)
    	this.searchPow(0)
    	this.searchPow(1)
    	this.searchPow(2)
    	this.searchPow(3)
    	this.searchPow(4)
    	this.negoPow(id1)
    	this.negoPow(id2)
    	this.negoPow(id3)
    	this.negoPow(id4)
    	this.negoPow(id5)
        SceneManager.push(Scene_Menu);
        Window_MenuCommand.initCommandPosition();
    }
    return true;
};

Game_Interpreter.prototype.viewActor = function(id) {
if($gameParty.members()[id]){
var po = 2;
if($gameParty.members()[id].isClass($dataClasses[2]))po+=1;
if($gameParty.members()[id].isStateAffected(14))po+=2;
if($gameParty.members()[id].isStateAffected(18))po+=2;
if($gameParty.members()[id].isStateAffected(19))po+=2;
if($gameParty.members()[id].isStateAffected(22))po+=2;
if($gameParty.members()[id].isStateAffected(21)&&!$gameParty.members()[id].isStateAffected(88))po-=3;
if($gameParty.members()[id].isStateAffected(32))po+=1;
if(!$gameParty.members()[id]._viewPoint)$gameParty.members()[id]._viewPoint=0;
$gameParty.members()[id]._viewPoint=po;
return po
}
}

Game_Interpreter.prototype.negoPow = function(id) {
var actor = $gameActors.actor(id);
if(actor){
var po = 0;
po+=actor.param(5)/10;
po+=actor.param(7)/15;
if(actor.isClass($dataClasses[2])){
po+=1;
}
if(actor.isClass($dataClasses[3])){
po+=2;
}
if(actor.isClass($dataClasses[5])){
po+=3;
}
if(actor.isStateAffected(324)){
po+=2;
}
if(actor.isStateAffected(244)){
po+=1;
}
if(actor.isStateAffected(342)){
po+=1;
}
if(actor.isStateAffected(406)){
po+=1;
}
if(actor.hasSkill(228)){
po+=1;
}
if(!actor._searchPow)actor._negoPow=0;
po=Math.floor(po);
actor._negoPow=po;
$gameVariables._data[6]=po;
}
}

Game_Interpreter.prototype.searchPow = function(id) {
var actor = $gameParty.members()[id];
if(actor){
var po = 0;
po+=actor.param(6)/15;
po+=actor.param(7)/10;
if(actor.isClass($dataClasses[2])){
po+=5;
po+=actor.level/5;
if(actor.isStateAffected(341))po-=4;
}
if(actor.isClass($dataClasses[4])){
po+=2;
po+=actor.level/10;
}
if(actor.hasSkill(230)){
po+=2;
po+=actor.level/10;
}
if(actor.isStateAffected(336)){
po+=3;
po+=actor.level/7;
}
if(actor.isStateAffected(348)){
po+=3;
po+=actor.level/7;
}
if(actor.isStateAffected(349)){
po+=3;
po+=actor.level/7;
}
if(!actor._searchPow)actor._searchPow=0;
po=Math.floor(po);
actor._searchPow=po;
$gameVariables._data[512]=po;
}
}

Game_Interpreter.prototype.unlockPow = function(id) {
var actor = $gameActors.actor(id);
if(actor){
var po = 0;
po+=actor.param(6)/10;
po+=actor.param(7)/15;
if(actor.isClass($dataClasses[2])){
po+=5;
po+=actor.level/4;
if(actor.isStateAffected(341))po-=4;
}
if(actor.isClass($dataClasses[5])){
po+=3;
po+=actor.level/5;
}
if(actor.hasSkill(117)){
po+=2;
po+=actor.level/10;
}
if(actor.hasSkill(231)){
po-=1;
}
if(actor.isStateAffected(336)){
po+=3;
po+=actor.level/7;
}
if(actor.isStateAffected(210)){
po+=2;
}
if(actor.isStateAffected(337)){
po+=2;
po+=actor.level/10;
}
if(!actor._unlockPow)actor._unlockPow=0;
po=Math.floor(po);
actor._unlockPow=po;
$gameVariables._data[6]=po;
}
}

Game_Interpreter.prototype.narrowedScope = function(id) {
$gameSwitches._data[35]=false;
if(!$gameSwitches._data[8])$gameSwitches._data[35]=true;
if($gameSwitches._data[9])$gameSwitches._data[35]=true;
var actor = $gameActors.actor(id);
if(actor){
if(actor.hasSkill(119))$gameSwitches._data[35]=false;
}
if($gameSwitches._data[6])$gameSwitches._data[35]=false;
}

Game_Party.prototype.narrowedScope = function(id) {
$gameSwitches._data[35]=false;
if(!$gameSwitches._data[8])$gameSwitches._data[35]=true;
if($gameSwitches._data[9])$gameSwitches._data[35]=true;
var actor = $gameActors.actor(id);
if(actor){
if(actor.hasSkill(119))$gameSwitches._data[35]=false;
}
if($gameSwitches._data[6])$gameSwitches._data[35]=false;
}



Game_Picture.prototype.updateRotation = function() {
    if (this._rotationSpeed !== 0) {
        this._angle = this._rotationSpeed;
    }
};



Window_Status.prototype.drawProfile = function(x, y) {
	this.contents.fontSize = 28;
	//var text = this._actor.profile();
	var reli = ""
	if(this._actor.isStateAffected(25))reli=$dataStates[25].name;
	if(this._actor.isStateAffected(26))reli=$dataStates[26].name;
	if(this._actor.isStateAffected(27))reli=$dataStates[27].name;
	if(this._actor.isStateAffected(28))reli=$dataStates[28].name;
	if(this._actor.isStateAffected(29))reli=$dataStates[29].name;
	if(this._actor.isStateAffected(30))reli=$dataStates[30].name;
	if(this._actor.isStateAffected(31))reli=$dataStates[31].name;
	if(this._actor.isStateAffected(32))reli=$dataStates[32].name;
	if(this._actor.isStateAffected(33))reli=$dataStates[33].name;
	var sex = ""
	if(this._actor.isStateAffected(34))sex=$dataStates[34].name;
	if(this._actor.isStateAffected(35))sex=$dataStates[35].name;
	if(this._actor.isStateAffected(35))sex=$dataStates[35].name;
	var bel = ""
	if(this._actor.isStateAffected(37))bel=$dataStates[37].name;
	if(this._actor.isStateAffected(38))bel=$dataStates[38].name;
    this.drawText($gameVariables._data[121], 0, y, 70);
    this.drawText(reli, 75, y, 70);
    this.drawText($gameVariables._data[122], 180, y, 70);
    this.drawText(sex, 255, y, 70);
    this.drawText($gameVariables._data[123], 360, y, 70);
    this.drawText(bel, 435, y, 70);
};

Game_Interpreter.prototype.someNeared = function(id) {
var x = this.character(id).x-$gamePlayer.x;
var y = this.character(id).y-$gamePlayer.y;
if(x<0)x*=-1;
if(y<0)y*=-1;
x=x+y;
if(x<5)return true;
return false;
};


Scene_Map.prototype.isFastForward = function() {
  return false;
};

Game_Battler.prototype.makeActions = function() {
    this.clearActions();
    if (this.canMove()) {
        var actionTimes = this.makeActionTimes();
        this._actionTimes = actionTimes;
        if(actionTimes>1&&this.isActor()){
		this.startAnimation(188, true, 0);
		var text=$gameActors.actor(this._actorId)._name+" : x "+actionTimes;
		if(BattleManager._logWindow !== null){
	 	 //BattleManager._logWindow.push('popBaseLine');  // 既に表示されている行を取ってくる。 
	  	 //BattleManager._logWindow.push('pushBaseLine'); // 既に表示されている行を表示する。
	  	 BattleManager._logWindow.push('addText', text); // その下に、新しい行を表示する。
		}
        }
        this._actions = [];
        for (var i = 0; i < actionTimes; i++) {
            this._actions.push(new Game_Action(this));
        }
    }
};

Game_Battler.prototype.makeActions2 = function() {
    this.clearActions();
    if (this.canMove()) {
    if(!this._actionTimes)this._actionTimes=1;
        var actionTimes = this._actionTimes;
        this._actions = [];
        for (var i = 0; i < actionTimes; i++) {
            this._actions.push(new Game_Action(this));
        }
    }
};




Sprite_Damage.prototype.setupCriticalEffect = function(target) {
if(BattleManager._subject.isEnemy()) return;
if(target.isActor())return;
        this._flashColor = [255, 0, 0, 160];
    this._flashDuration = 60;
    //$gameSwitches.setValue(858, false);
};

Window_BattleLog.prototype.displayAddedStates = function(target) {
    target.result().addedStateObjects().forEach(function(state) {
        var stateMsg = target.isActor() ? state.message1 : state.message2;
        if(!target.isActor()&&$dataEnemies[target._enemyId].meta.mikata)stateMsg = state.message1;
        if (state.id === target.deathStateId()) {
            this.push('performCollapse', target);
        }
        if (stateMsg) {
            this.push('popBaseLine');
            this.push('pushBaseLine');
            this.push('addText', target.name() + stateMsg);
            this.push('waitForEffect');
        }
    }, this);
};

BattleManager.applySubstitute = function(target) {
    if (this.checkSubstitute(target)) {
        var substitute = target.friendsUnit().substituteBattler();
        if (substitute && target !== substitute) {
            AudioManager.playSe({"name":"Evasion2","volume":90,"pitch":90,"pan":0})
            this._logWindow.displaySubstitute(substitute, target);
            return substitute;
            
        }
    }
    if (target.isAlive()&&!this._action.isCertainHit()&&$gameVariables._data[906]&&
    target.isActor()&&target._actorId==$gameVariables._data[908]&&!$gameVariables._data[906].isStateAffected(1)&&!$gameVariables._data[906]._hidden) {
        var substitute = $gameVariables._data[906];
        if (substitute && target !== substitute) {
            AudioManager.playSe({"name":"Evasion2","volume":90,"pitch":90,"pan":0})
            this._logWindow.displaySubstitute(substitute, target);
            return substitute;
            
        }
    }
    if (target.isAlive()&&!this._action.isCertainHit()&&$gameVariables._data[909]&&
    target.isActor()&&!$gameVariables._data[909].isStateAffected(1)&&!$gameVariables._data[909]._hidden&&Math.randomInt(60)<10) {
        var substitute = $gameVariables._data[909];
        if (substitute && target !== substitute) {
            AudioManager.playSe({"name":"Evasion2","volume":90,"pitch":90,"pan":0})
            this._logWindow.displaySubstitute(substitute, target);
            return substitute;
            
        }
    }
    return target;
};







Game_System.prototype.isJapanese = function() {
   return true;
};

Spriteset_Map.prototype.loadTileset = function() {
    this._tileset = $gameMap.tileset();
    if (this._tileset) {
        var tilesetNames = this._tileset.tilesetNames;
        for (var i = 0; i < tilesetNames.length; i++) {
        if(!this._tilemap){
        this.createTilemap();
        this.createShadow();
        }
            this._tilemap.bitmaps[i] = ImageManager.loadTileset(tilesetNames[i]);
        }
        this._tilemap.flags = $gameMap.tilesetFlags();
        this._tilemap.refresh();
    }
};

Scene_Save.prototype.onSavefileOk = function() {
	if(!$gameSwitches._data[614])$gameVariables._data[493] = 0;
    Scene_File.prototype.onSavefileOk.call(this);
    $gameSystem.onBeforeSave();
    if (DataManager.saveGame(this.savefileId())) {
        this.onSaveSuccess();
    } else {
        this.onSaveFailure();
    }
};

Window_EventItem.prototype.updatePlacement = function() {
    if (this._messageWindow.y >= Graphics.boxHeight / 2) {
    var yy = 0;
    if($gameSwitches.value(520))yy = 48;
        this.y = 0 + yy;
    } else {
        this.y = Graphics.boxHeight - this.height;
    }
};

Window_EquipSlot.prototype.drawItem = function(index) {
    if (this._actor) {
        var rect = this.itemRectForText(index);
        this.changeTextColor(this.systemColor());
        this.changePaintOpacity(this.isEnabled(index));
        this.drawText(this.slotName(index), rect.x, rect.y, 108, this.lineHeight());
        this.drawItemName(this._actor.equips()[index], rect.x + 108, rect.y);
        this.changePaintOpacity(true);
    }
};


Window_Status.prototype.drawBlock1 = function(y) {
    this.drawActorName(this._actor, 6, y);
    this.drawActorClass(this._actor, 192, y);
    this.drawActorNickname(this._actor, 432, y);
this.changeTextColor(this.systemColor());
this.drawText("JP", 650, y, 35, 'right');
this.resetTextColor();
this.drawText(this._actor._jp[this._actor._classId], 690, y, 40, 'right');
};


var BattleManager_updateBattleEnd = BattleManager.updateBattleEnd;
BattleManager.updateBattleEnd = function() {
BattleManager_updateBattleEnd.call(this);
$gameSwitches.setValue(826,true);
$gameSwitches.setValue(326,true)
var num = $gameVariables.value(15) - $gameTroop.turnCount() / 5;
$gameVariables.setValue(15,num);
var num = $gameVariables.value(16) - $gameTroop.turnCount() / 2 - 1;
$gameVariables.setValue(16,num);
var num = $gameVariables.value(20) + $gameTroop.turnCount() + 2;
$gameVariables.setValue(20,num);
if(!$gameSwitches.value(25)) $gameSwitches.setValue(33,true);
$gameSwitches.setValue(326,true);
};


Game_Actor.prototype.displayLevelUp = function(newSkills) {
var name = this._name;
var level = this._level;
var id = this._actorId;
var obj = [id,name,level]
$gameVariables._data[434].push(obj)
num = $gameVariables.value(434)
$gameSwitches.setValue(17,true)
};


Window_BattleStatus.prototype.numVisibleRows = function() {
    return 5;
};

Window_ActorCommand.prototype.numVisibleRows = function() {
    return 6;
};

Game_Interpreter.prototype.command301 = function() {
    if (!$gameParty.inBattle()) {
        var troopId;
        if (this._params[0] === 0) {  // Direct designation
            troopId = this._params[1];
        } else if (this._params[0] === 1) {  // Designation with a variable
            troopId = $gameVariables.value(this._params[1]);
        } else {  // Same as Random Encounter
            troopId = $gamePlayer.makeEncounterTroopId();
        }
        if ($dataTroops[troopId]) {
            BattleManager.setup(troopId, this._params[2], this._params[3]);
            BattleManager.onEncounter();
            BattleManager.setEventCallback(function(n) {
                this._branch[this._indent] = n;
            }.bind(this));
            $gamePlayer.makeEncounterCount();
            SceneManager.push(Scene_Battle);
        }
    }
    return true;
};

BattleManager.onEncounter = function() {
    this._preemptive = (Math.random() < this.ratePreemptive());
    this._surprise = (Math.random() < this.rateSurprise() && !this._preemptive);
};

	Game_BattlerBase.prototype.meetsUsableItemConditions = function(item) {
	if(BattleManager.isInputting()){
	if(item.meta.class){
	if(item.meta.class==3){
	if(!BattleManager.actor().isClass($dataClasses[3])) return false;
	if(item.meta.god){
	
	if(item.meta.god==1 && !BattleManager.actor().isStateAffected(25))return false;
	if(item.meta.god==2 && !BattleManager.actor().isStateAffected(26))return false;
	if(item.meta.god==3 && !BattleManager.actor().isStateAffected(27))return false;
	if(item.meta.god==4 && !BattleManager.actor().isStateAffected(28))return false;
	if(item.meta.god==5 && !BattleManager.actor().isStateAffected(29))return false;
	if(item.meta.god==6 && !BattleManager.actor().isStateAffected(30))return false;
	if(item.meta.god==7 && !BattleManager.actor().isStateAffected(31))return false;
	if(item.meta.god==8 && !BattleManager.actor().isStateAffected(32))return false;
	
	}
	}
	}
	}
    return this.canMove() && this.isOccasionOk(item);
	};
	

})();
