(function(){

	var QuickMode = false;

	var createUpper = Spriteset_Battle.prototype.createUpperLayer;
	Spriteset_Battle.prototype.createUpperLayer = function() {
		createUpper.apply(this, arguments);

		var button = new Sprite_Button();
		button.bitmap = ImageManager.loadSystem('Balloon');
		button.x = 750;
		button.y = 10;
		button.visible = true;
		this.addChild(button);

		var animCount = 1;

		button.updateFrame = function() {
			if (QuickMode) {
			
					if(!$gameSwitches.value(382)){
					button.visible = true;
					//console.log("aaa")
					}else{
					button.visible = false;
					}
		
				if (++animCount >= 8) {
					animCount = 1;
				}
				button.setFrame(animCount * 48, 2 * 48, 48, 48);
			}
		}

		stopQuick();

		button.setClickHandler(function () {
		if(!$gameSwitches.value(381)&&!$gameSwitches.value(382)){
			QuickMode = !QuickMode;
			console.log($gameVariables.value(115))
$gameVariables.setValue(115, !$gameVariables.value(115))
			if (QuickMode == false) {
				stopQuick();
			}
}
		});

		function startQuick() {
			QuickMode = true;
		}
		function stopQuick() {
			QuickMode = false;
			button.setFrame(1 * 48, 2 * 48, 48, 48);
			animCount = 1;
		}

		var launchBattle = Scene_Map.prototype.launchBattle;
		Scene_Map.prototype.launchBattle = function() {
			launchBattle.apply(this, arguments);
			stopQuick();
		}
		
		BattleManager.endTurn = function() {
		$gameVariables.setValue(115, false)
$gameSwitches.setValue(381,false);
$gameSwitches.setValue(382,false);
stopQuick();
button.visible = true;
    this._phase = 'turnEnd';
    this._preemptive = false;
    this._surprise = false;
    this.allBattleMembers().forEach(function(battler) {
        battler.onTurnEnd();
        this.refreshStatus();
        this._logWindow.displayAutoAffectedStatus(battler);
        this._logWindow.displayRegeneration(battler);
    }, this);
};
	}

})();