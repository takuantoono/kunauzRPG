(function() {


Window_BattleStatus.prototype.numVisibleRows = function() {
if($gameSwitches.value(116)){
    return 6;
}
else{
    return 5;
}
};


BattleManager.displayRewards = function() {
    this.displayExp();
    this.displayGold();
    //this.displayDropItems();
    //this.displayAp();
    $gameSwitches.setValue(251, true);
};

BattleManager.displayAp = function() {
	var pp = $gameTroop.apTotal()/5;
	if(pp<=1)pp=2
    var ap = Math.floor(Math.randomInt(pp));
    var rate = 1;
    for (var i = 0; i < $gameParty.members().length; i++) {
    if($gameParty.members()[i].isStateAffected(346))rate+=0.3;
    if($gameParty.members()[i].isStateAffected(354))rate+=0.5;
    };
    ap *= rate;
    ap=Math.floor(ap)
    if (ap > 0) {
    	$gameVariables.setValue(59, ap)
        var text =  ap + " APを獲得"
        if(!$gameSwitches.value(376))text=ap+" AP increased!"
        $gameMessage.add('\\.' + text);
        ap += $gameVariables.value(98);
        $gameVariables.setValue(98, ap);
    }
};

Game_Troop.prototype.apTotal = function() {
    return this.deadMembers().reduce(function(r, enemy) {
    var ap = 0;
    if($dataEnemies[enemy._enemyId].meta.enemyRank!=undefined)ap=$dataEnemies[enemy._enemyId].meta.enemyRank*$dataEnemies[enemy._enemyId].meta.enemyRank
    if(ap<=0)ap=1;
        return r + ap;
    }, 0);
};

Window_Base.prototype.drawTextEx2 = function(text, x, y) {
    if (text) {
        var textState = { index: 0, x: x, y: y, left: x };
        textState.text = this.convertEscapeCharacters(text);
        textState.height = this.calcTextHeight(textState, false);
        this.resetFontSettings();
        this.contents.fontSize = 18
        while (textState.index < textState.text.length) {
           this.processCharacter(textState);
        }
        return textState.x - x;
    } else {
        return 0;
    }
};

Game_BattlerBase.prototype.isOccasionOk = function(item) {
    if ($gameParty.inBattle()) {
        return item.occasion === 0 || item.occasion === 1;
    } else {
      if ($gameSwitches.value(209)) {
        return false
      }else{
        if($gameSwitches.value(999)) return true;
        return item.occasion === 0 || item.occasion === 2;
      }
    }
};

Window_Message.prototype.updateShowFast = function() {
    //if (this.isTriggered()) {
    //    this._showFast = true;
    //}
};


})();
