(function() {

Game_Action.prototype.itemCri = function(target) {
	var cricri = this.subject().cri - target.cev;
	if(cricri<0)cricri=0.005
    return this.item().damage.critical ? cricri : 0;
};



Game_Action.prototype.evalDamageFormula = function(target) {
    try {
        var item = this.item();
        var a = this.subject();
        var b = target;
        var v = $gameVariables._data;
        var sign = ([3, 4].contains(item.damage.type) ? -1 : 1);
        var fuda = 0;
        if(a._classId==3){
        	if(a.isStateAffected(344)){
        		fuda = Math.max((10 + (a.mat + (a.luk / 2))) * (Math.floor(Math.random()*41)+20) / 100 - (a.mdf + (a.luk / 2)) * (Math.floor(Math.random()*41)+40) / 100, Math.random()*3+2);
        	}else{
        		fuda = Math.max((15 + (a.mat + (a.luk / 2))) * (Math.floor(Math.random()*51)+30) / 100 - (a.mdf + (a.luk / 2)) * (Math.floor(Math.random()*41)+40) / 100, Math.random()*5+2);
        	}
        }else{
        	if(a.isStateAffected(352)){
        		fuda = Math.max((10 + (a.mat + (a.luk / 2))) * (Math.floor(Math.random()*41)+20) / 100 - (a.mdf + (a.luk / 2)) * (Math.floor(Math.random()*41)+40) / 100, Math.random()*3+2);
        	}else{
        		fuda = Math.random()*3+1;
        	}
        }
        if(a.isStateAffected(32)){
        fuda *= 1.2;
        fuda = Math.floor(fuda)
        }
        var arts = 0;
        if(a.isStateAffected(331)){
        	arts = Math.max(a.atk * (Math.floor(Math.random()*70)+70) / 100 - b.def * (Math.floor(Math.random()*81)+70) / 100, Math.random()*4)
        }else{
        	arts = Math.max(a.atk * (Math.floor(Math.random()*50)+50) / 100 - b.def * (Math.floor(Math.random()*81)+70) / 100, Math.random()*4)
        }
        var value = Math.max(eval(item.damage.formula), 0) * sign;
		if (isNaN(value)) value = 0;
		return value;
    } catch (e) {
        return 0;
    }
};

Game_Actor.prototype.paramPlus = function(paramId) {
    //var value = Game_Battler.prototype.paramPlus.call(this, paramId);
    value = 0;
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
        var item = equips[i];
        if (item) {
        	if(item.params[paramId]>0){
            	value += item.params[paramId];
            }
        }
    }
    return value;
};

Game_Actor.prototype.paramPlus3 = function(paramId) {
    //var value = Game_Battler.prototype.paramPlus.call(this, paramId);
    value = 0;
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
        var item = equips[i];
        if (item) {
        	if(item.params[paramId]<=0){
            	value += item.params[paramId];
            }
        }
    }
    return value;
};

Game_Actor.prototype.paramPlus2 = function(paramId) {
    var value = Game_Battler.prototype.paramPlus.call(this, paramId);
    return value;
};

Game_BattlerBase.prototype.allTraits3 = function() {
    return this.traitObjects().reduce(function(r, obj) {
        if(obj.meta.objectState){
        return r;
        }else{
        return r.concat(obj.traits);
        }
    }, []);
};

Game_BattlerBase.prototype.traitsWithId3 = function(code, id) {
    return this.allTraits3().filter(function(trait) {
        return trait.code === code && trait.dataId === id;
    });
};

Game_BattlerBase.prototype.traitsPi3 = function(code, id) {
    return this.traitsWithId3(code, id).reduce(function(r, trait) {
        return r * trait.value;
    }, 1);
};

Game_BattlerBase.prototype.paramRate3 = function(paramId) {
    return this.traitsPi3(Game_BattlerBase.TRAIT_PARAM, paramId);
};

Game_BattlerBase.prototype.allTraits2 = function() {
    return this.traitObjects().reduce(function(r, obj) {
        if(!obj.meta.objectState){
        return r;
        }else{
        return r.concat(obj.traits);
        }
    }, []);
};

Game_BattlerBase.prototype.traitsWithId2 = function(code, id) {
    return this.allTraits2().filter(function(trait) {
        return trait.code === code && trait.dataId === id;
    });
};

Game_BattlerBase.prototype.traitsPi2 = function(code, id) {
    return this.traitsWithId2(code, id).reduce(function(r, trait) {
        return r * trait.value;
    }, 1);
};

Game_BattlerBase.prototype.paramRate2 = function(paramId) {
    return this.traitsPi2(Game_BattlerBase.TRAIT_PARAM, paramId);
};


	var getMetaValues2 = function(object, name) {
        var metaTagName = (name ? name : '');
        if(!object.meta)return;
        return object.meta.hasOwnProperty(metaTagName) ? object.meta[metaTagName] : undefined;
    };

	var _Game_Unit_aliveMembers      = Game_Unit.prototype.aliveMembers;
    Game_Unit.prototype.aliveMembers = function() {
        var members = _Game_Unit_aliveMembers.apply(this, arguments);
        return members.filter(function(member) {
            return !member.isBetrayer();
        });
    };
    
    Game_BattlerBase.prototype.isBetrayer = function() {
        return this.traitObjects().some(function(traitObject) {
            return getMetaValues2(traitObject, ['mikata']);
        });
    };


BattleManager.processTurn = function() {
    var subject = this._subject;
    var action = subject.currentAction();
    if (action) {
        action.prepare();
        if (action.isValid()) {
            this.startAction();
        }
        subject.removeCurrentAction();
    } else {
        subject.onAllActionsEnd();
        this.refreshStatus();
        this._logWindow.displayAutoAffectedStatus(subject);
        this._logWindow.displayCurrentState(subject);
        this._logWindow.displayRegeneration(subject);
        this._subject = this.getNextSubject();
        $gameSwitches.setValue(892, false);
    }
};

Window_BattleLog.prototype.displayAction = function(subject, item) {
    var numMethods = this._methods.length;
    if (DataManager.isSkill(item)) {
        if (item.message1) {
        var equips = subject.equips();
        if(item.meta.normalat && subject.isActor()){
        if((subject._dualWieldSpriteIndex-1)>0){
        var wepid = subject._dualWieldSpriteIndex - 1;
        }else{
        var wepid = 0;
        }
        if(subject.isActor()&&equips[wepid]){
         this.push('addText', subject.name() + ' : ' + $dataWeapons[equips[wepid].id].name);
         }else{
         this.push('addText', subject.name() + item.message1.format(item.name));
         };
        }else{
        console.log(subject.name() +item.message1)
            this.push('addText', subject.name() + item.message1.format(item.name));
        }
        }
        if (item.message2) {
            this.push('addText', item.message2.format(item.name));
        }
    } else {
        this.push('addText', TextManager.useItem.format(subject.name(), item.name));
    }
    if (this._methods.length === numMethods) {
        this.push('wait');
    }
    
};



Scene_Item.prototype.create = function() {
    Scene_ItemBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createCategoryWindow();
    this.createItemWindow();
    this.createActorWindow();
    $gameVariables.setValue(511, 0);
    $gameVariables.setValue(509, " ");
    $gameVariables.setValue(173, 0);
    this._helpWindow.refresh();
};





Window_Selectable.prototype.callUpdateHelp = function() {
    if (this.active && this._helpWindow) {
    
    if($gameVariables.value(173)!=0){
    
    actor = $gameVariables.value(173);
    if(actor.isStateAffected(11)){
      $gameVariables.setValue(511, 481);
      $gameVariables.setValue(509, $gameParty.numItems($dataItems[18]));
    }
    if(actor.isStateAffected(12)){
    	$gameVariables.setValue(511, 483);
    	$gameVariables.setValue(509, $gameParty.numItems($dataItems[19]));
    }
    }
        this.updateHelp();
    }
};

Scene_Map.prototype.updateMainMultiply = function() {
    this.updateMain();
    if (this.isFastForward()) {
        this.updateMain();
    }
};

Scene_Map.prototype.updateMain = function() {
    var active = this.isActive();
    $gameMap.update(active);
    $gamePlayer.update(active);
    if($gameSwitches.value(634)) $gameTimer.update(active);
    $gameScreen.update();
};


Game_Map.prototype.update = function(sceneActive) {
    this.refreshIfNeeded();
    if (sceneActive) {
        this.updateInterpreter();
    }
    //this.updateScroll();
    this.updateEvents();
    //this.updateVehicles();
    //this.updateParallax();
};

Game_CharacterBase.prototype.update = function() {
    if (this.isStopping()) {
        this.updateStop();
    }
    if (this.isJumping()) {
       // this.updateJump();
    } else if (this.isMoving()) {
        this.updateMove();
    }
    this.updateAnimation();
};

Game_Player.prototype.update = function(sceneActive) {
    var lastScrolledX = this.scrolledX();
    var lastScrolledY = this.scrolledY();
    var wasMoving = this.isMoving();
    //this.updateDashing();
    if (sceneActive) {
        this.moveByInput();
    }
    Game_Character.prototype.update.call(this);
    //this.updateScroll(lastScrolledX, lastScrolledY);
    //this.updateVehicle();
    if (!this.isMoving()) {
        this.updateNonmoving(wasMoving);
    }
    //this._followers.update();
};


})();
