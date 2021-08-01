//-----------------------------------------------------------------------------
//  Galv's Manual Level
//-----------------------------------------------------------------------------
//  For: RPGMAKER MV
//  GALV_ManualLevel.js
//-----------------------------------------------------------------------------
//  2016-09-24 - Version 1.1 - Added plugin setting for param color on select
//  2016-09-20 - Version 1.0 - release
//-----------------------------------------------------------------------------
// Terms can be found at:
// galvs-scripts.com
//-----------------------------------------------------------------------------

var Imported = Imported || {};
Imported.Galv_ManualLevel = true;

var Galv = Galv || {};                  // Galv's main object
Galv.MLEVEL = Galv.MLEVEL || {};        // Galv's stuff

// Galv Notetag setup (Add notes required for this plugin if not already added)
Galv.noteFunctions = Galv.noteFunctions || [];       // Add note function to this.

//-----------------------------------------------------------------------------
/*:
 * @plugindesc (v.1.1) Creates a new scene for the player to manually level up and distribute stats
 * 
 * @author Galv - galvs-scripts.com
 *
 * @param Level Available Icon
 * @desc Icon displayed next to lvl when ready to level up
 * iconId,x,y
 * @default 73,40,0
 *
 * @param Param Ids
 * @desc Parameters the player is allowed to level up.
 * 0:hp,1:mp,2:atk,3:def,4:mat,5:mdf,6:agi,7:luk
 * @default 2,3,4,5,6,7
 *
 * @param Param Select Box
 * @desc The width and height of the paramater select box
 * width,height
 * @default 120,120
 *
 * @param Point Value
 * @desc The default amount a single point will add to a parameter.
 * @default 10
 *
 * @param Param Value Mod
 * @desc Multiple point value gained for each parameter
 * hp,mp,atk,def,mat,mdf,agi,luk
 * @default 5,5,1,1,1,1,0.8,0.8
 *
 * @param Points Per Level
 * @desc Number of points to spend per level
 * even level, odd level
 * @default 4,3
 *
 * @param LevelUp SE
 * @desc Sound effect played when level up completed
 * name,pitch,volume
 * @default Jump1,100,90
 *
 * @param Status Command
 * @desc Adds the level up command to status menu
 * true or false
 * @default true
 *
 * @param --- VOCAB ---
 * @desc
 * @default
 *
 * @param Points Text
 * @desc Text displayed for how many points player has to spend in the level up
 * @default Points to spend:
 *
 * @param Level Ready Text
 * @desc Text displayed in status menu under 'To Next Level' when a level up is available to do
 * @default READY
 *
 * @param Learn Skill Text
 * @desc Text displayed next to skill learned
 * @default Skill
 *
 * @param Skill Name X
 * @desc X position for skill name (that displays after Learn Skill Text)
 * @default 100
 *
 * @param Level Command Txt
 * @desc Command that displays when checking to level up
 * @default Level Up
 *
 * @param Cancel Command Txt
 * @desc Command that displays to cancel level up
 * @default Cancel
 *
 * @param Param Select Color
 * @desc The color of the param text when param selected
 * Default: #ccffcc
 * @default #ccffcc
 *
 * @help
 *   Galv's Manual Level
 * ----------------------------------------------------------------------------
 * This plugin changes how experience and level ups work. Instead of levelling
 * up automatically once an actor gets enough exp for their next level, they
 * stay on their current level and wait for the player to do the level up
 * manually and distribute parameter points.
 *
 * Experience gained while the actor is waiting for a level-up to be done is
 * kept as 'pending exp' and will be given to the actor once the player does
 * the level up process (thus not losing out on exp).
 *
 * When using the "Change EXP" event command, leaving the 'Show Level Up' box
 * unticked will give the actor exp or pending exp as intended. If you tick
 * that box then it will automatically do level ups (and skip allowing the
 * player to assign new stat points which they will not get to use again).
 *
 * Using the 'Change Level' event command will give actors enough exp to reach
 * that level but will have to be manually levelled to get there.
 * ----------------------------------------------------------------------------
 * Required Images
 * This plugin requires 2 images:
 * /img/system/stat_container.png   // 2 imgs the size of Param Select Box
 * /img/system/stat_point.png       // approx size of icon
 * (See demo for example)
 *
 * Bonus Parameters
 * Every level actors get a number of points to spend on parameters. Each level
 * a parameter can have 1 point assigned to it, which can add a bonus to that
 * parameter (the amount set in plugin settings).
 * These parameters will remain on the actor even if they change class.
 *
 * Levelling Up
 * By default the plugin is set to add a level up indicator next to actors as
 * well as next to the status menu command. A player going into the status
 * menu will get the option to level up an actor if they have a level ready.
 *
 * All normal RPG Maker level up bonuses still happen (such as parameters from
 * parameter curves and skills). Skills that will be gained when a level up is
 * done will appear in the levelling up scene also.
 * ----------------------------------------------------------------------------
 *
 * ----------------------------------------------------------------------------
 *   SCRIPT CALLS
 * ----------------------------------------------------------------------------
 *  Galv.MLEVEL.levelUp(x);     // manually open level up scene for actor x
 *
 * ----------------------------------------------------------------------------
 *   SCRIPT FOR CONDITIONAL BRANCH
 * ----------------------------------------------------------------------------
 *
 *  $gameActors.actor(x).readyForNextLevel()  // check if actor x can level up
 *
 *  Galv.MLEVEL.anyReadyForLevel()  // check if any party members can level up
 *
 * ----------------------------------------------------------------------------
 *   NOTE TAG FOR CLASSES
 * ----------------------------------------------------------------------------
 *
 *   <paramMods:hp,mp,atk,def,mat,mdf,agi,luk>  // To make class use different
 *                                              // param value mods
 *                                              // 1 is 100% of point value
 *
 * eg. if Point Value (in plugin settings) is set to 10, values that have...
 * 1 will add 10 per point spent in that param
 * 0.5 will add 5 per point spent in that param
 * 2 will add 20 per point spent in that param
 *
 * ----------------------------------------------------------------------------
 */



//-----------------------------------------------------------------------------
//  CODE STUFFS
//-----------------------------------------------------------------------------

(function() {


//-----------------------------------------------------------------------------
//  NOTE TAGS
//-----------------------------------------------------------------------------

if (!Galv.notetagAlias) {   // Add alias only if not added by another Galv plugin
	Galv.MLEVEL.Scene_Boot_start = Scene_Boot.prototype.start;
	Scene_Boot.prototype.start = function() {	
		for (var i = 0;i < Galv.noteFunctions.length; i++) {
			Galv.noteFunctions[i]();	
		};
		Galv.MLEVEL.Scene_Boot_start.call(this);
	};
	Galv.notetagAlias = true;
};



Galv.MLEVEL.notetags = function() {
	// Class Notes
	for (var i = 1;i < $dataClasses.length;i++) {
		var note = $dataClasses[i].note.toLowerCase().match(/<paramMods:(.*)>/i)
		if (note) {
			var array = note[1].split(',');
			for (var m = 0; m < note.length; m++) {
				array[m] = Number(array[m]);
			}
			$dataClasses[i].paramMods = array;
		} else {
			$dataClasses[i].paramMods = null;
		};
		
	};
};

Galv.noteFunctions.push(Galv.MLEVEL.notetags);



var txt = PluginManager.parameters('GALV_ManualLevel')['Level Available Icon'];
txt = txt.split(',');
Galv.MLEVEL.icon = {id: Number(txt[0]),x: Number(txt[1]),y: Number(txt[2])};

Galv.MLEVEL.params = {};
Galv.MLEVEL.params.length = 0;
txt = PluginManager.parameters('GALV_ManualLevel')['Param Ids'];
txt = txt.split(',');
for (var i = 0; i < txt.length; i++) {
	Galv.MLEVEL.params[i] = Number(txt[i]);
	Galv.MLEVEL.params.length += 1;
};

txt = PluginManager.parameters('GALV_ManualLevel')['Param Select Box'];
txt = txt.split(',');
Galv.MLEVEL.selectBox = {width: Number(txt[0]),height: Number(txt[1])};

Galv.MLEVEL.levelReadyTxt = PluginManager.parameters('GALV_ManualLevel')['Level Ready Text'];
Galv.MLEVEL.pointsTxt = PluginManager.parameters('GALV_ManualLevel')['Points Text'];
Galv.MLEVEL.pointValue = Number(PluginManager.parameters('GALV_ManualLevel')['Point Value']);

Galv.MLEVEL.paramMod = [];
txt = PluginManager.parameters('GALV_ManualLevel')['Param Value Mod'];
txt = txt.split(',');
for (var i = 0; i < txt.length; i++) {
	Galv.MLEVEL.paramMod[i] = Number(txt[i]);
};

Galv.MLEVEL.ppl = []; // points per level to spend on param boosts
txt = PluginManager.parameters('GALV_ManualLevel')['Points Per Level'];
txt = txt.split(',');
Galv.MLEVEL.ppl[0] = Number(txt[0]) || 4;  // even
Galv.MLEVEL.ppl[1] = Number(txt[1]) || 4;  // odd

Galv.MLEVEL.learnSkillTxt = PluginManager.parameters('GALV_ManualLevel')['Learn Skill Text'];
Galv.MLEVEL.textXO = Number(PluginManager.parameters('GALV_ManualLevel')['Skill Name X']);
Galv.MLEVEL.confirmTxt = PluginManager.parameters('GALV_ManualLevel')['Level Command Txt'];
Galv.MLEVEL.cancelTxt = PluginManager.parameters('GALV_ManualLevel')['Cancel Command Txt'];

Galv.MLEVEL.doStatusCmd = PluginManager.parameters('GALV_ManualLevel')['Status Command'].toLowerCase() == 'true' ? true : false;

Galv.MLEVEL.selectColor = PluginManager.parameters('GALV_ManualLevel')['Param Select Color'];

txt = PluginManager.parameters('GALV_ManualLevel')['LevelUp SE'];
txt = txt.split(',');
Galv.MLEVEL.SE = {name:String(txt[0]),pan:0,pitch:Number(txt[1]),volume:Number(txt[2])};

Galv.MLEVEL.levelUp = function(id) {
	//if ($gameActors.actor(id).readyForNextLevel()) {
		$gameParty.setMenuActor($gameActors.actor(id));
		SceneManager.push(Scene_LevelUp);
	//};
};

Galv.MLEVEL.anyReadyForLevel = function() {
	var array = $gameParty.members().filter(function(member) {
        return member.readyForNextLevel();
    });
	return array.length > 0;
};

//-----------------------------------------------------------------------------
// Pre Cache
//-----------------------------------------------------------------------------

var _Scene_Boot_loadSystemImages = Scene_Boot.prototype.loadSystemImages;
  Scene_Boot.prototype.loadSystemImages = function() {
	_Scene_Boot_loadSystemImages.call(this);
    ImageManager.loadSystem('stat_container');
};




//-----------------------------------------------------------------------------
//  GAME ACTOR
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
//  WINDOW BASE
//-----------------------------------------------------------------------------


Window_Base.prototype.drawExpInfo = function(x, y) {
    var lineHeight = this.lineHeight();
    var expTotal = TextManager.expTotal.format(TextManager.exp);
    var expNext = TextManager.expNext.format(TextManager.level);

	var value1 = this._actor.currentExp();
	var value2 = this._actor.nextRequiredExp();
    
    if (this._actor.isMaxLevel()) {
        value1 = '-------';
        value2 = '-------';
    }
    this.changeTextColor(this.systemColor());
    this.drawText(expTotal, x, y + lineHeight * 0, 270);
    this.drawText(expNext, x, y + lineHeight * 2, 270);
    this.resetTextColor();
    this.drawText(value1, x, y + lineHeight * 1, 270, 'right');
    this.drawText(value2, x, y + lineHeight * 3, 270, 'right');
};

Window_Status.prototype.drawExpInfo = function(x, y) {
    Window_Base.prototype.drawExpInfo.call(this,x,y);
};

})();


//-----------------------------------------------------------------------------
//  SCENE LEVEL UP
//-----------------------------------------------------------------------------

function Scene_LevelUp() {
    this.initialize.apply(this, arguments);
}

Scene_LevelUp.prototype = Object.create(Scene_MenuBase.prototype);
Scene_LevelUp.prototype.constructor = Scene_LevelUp;

Scene_LevelUp.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

Scene_LevelUp.prototype.create = function() {
	ImageManager.loadFace($gameParty.menuActor().faceName());
    Scene_MenuBase.prototype.create.call(this);
	this.createActorWindow();
	this.createLevelWindow();
	//this.createConfirmWindow();
	this.refreshActor();
};

Scene_LevelUp.prototype.createActorWindow = function() {
    this._actorWindow = new Window_LevelUpActor();
	this._actorWindow.setHandler('cancel',   this.popScene.bind(this));
	this.addWindow(this._actorWindow);
};

Scene_LevelUp.prototype.createLevelWindow = function() {
	this._levelWindow = new Window_LevelUpStats(this._actorWindow.height);
	this._levelWindow.setHandler('pageup',       this.onParamOk.bind(this));
	this._levelWindow.setHandler('pagedown',   this.onParamCancel.bind(this));
	this._levelWindow.setHandler('cancel',   this.backMap.bind(this));
	this.addWindow(this._levelWindow);
};

Scene_LevelUp.prototype.createConfirmWindow = function() {
	var y = this._actorWindow.height;
	this._commandWindow = new Window_LevelConfirm(y);
	this._commandWindow.setHandler('confirm',    this.commandConfirm.bind(this));
	//this._commandWindow.setHandler('cancel',     this.commandCancel.bind(this));
	this._commandWindow.deactivate();
	this._commandWindow.hide();
	this.addChild(this._commandWindow);
};

Scene_LevelUp.prototype.onParamOk = function() {
	this._levelWindow.setParam();
	this._levelWindow.activate();
	this._actorWindow.refresh();
};

Scene_LevelUp.prototype.onParamCancel = function() {
	this._levelWindow.downParam();
	this._levelWindow.refresh();
	this._levelWindow.activate();
	this._actorWindow.refresh();
};

Scene_LevelUp.prototype.backMap = function() {
	SceneManager.pop();
};

Scene_LevelUp.prototype.commandConfirm = function() {
	SceneManager.pop();
};

Scene_LevelUp.prototype.commandCancel = function() {
	this._commandWindow.deactivate();
	this._commandWindow.hide();
	this._levelWindow.activate();
	this._levelWindow.resetPoints();
};

Scene_LevelUp.prototype.refreshActor = function() {
    var actor = this.actor();
	this._actorWindow.setActor(actor);
	this._levelWindow.setActor(actor);
	this._levelWindow.activate();
		this._levelWindow.select(0);
		this._actorWindow.deactivate();
};



//-----------------------------------------------------------------------------
//  WINDOW LEVEL UP ACTOR
//-----------------------------------------------------------------------------

function Window_LevelUpActor() {
    this.initialize.apply(this, arguments);
}

Window_LevelUpActor.prototype = Object.create(Window_Selectable.prototype);
Window_LevelUpActor.prototype.constructor = Window_LevelUpActor;

Window_LevelUpActor.prototype.initialize = function() {
    var width = Graphics.boxWidth;
    var height = 260;
    Window_Selectable.prototype.initialize.call(this, 0, 0, width, height);
    this.refresh();
    this.activate();
};

Window_LevelUpActor.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};

Window_LevelUpActor.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        var lineHeight = this.lineHeight();
        this.drawBlock1(lineHeight * 0);
        this.drawHorzLine(lineHeight * 1);
        this.drawBlock2(lineHeight * 2);
    }
};



Window_LevelUpActor.prototype.drawBlock1 = function(y) {
    this.drawActorName(this._actor, 6, y);
    this.drawActorClass(this._actor, 192, y);
    this.drawActorNickname(this._actor, 432, y);
};

Window_LevelUpActor.prototype.drawBlock2 = function(y) {
	this._faceY = y;
	if (this._cached) this.drawActorFace2(this._actor, 12, this._faceY);
    this.drawBasicInfo(204, y);
    this.drawExpInfo(456, y);
};

Window_LevelUpActor.prototype.update = function() {
	Window_Selectable.prototype.update.call(this);
    if (!this._cached) {
        if (ImageManager.isReady()) {
            this.drawActorFace2(this._actor, 12, this._faceY);
			this._cached = true;
        }
    }
};

Window_LevelUpActor.prototype.drawHorzLine = function(y) {
    var lineY = y + this.lineHeight() / 2 - 1;
    this.contents.paintOpacity = 48;
    this.contents.fillRect(0, lineY, this.contentsWidth(), 2, this.lineColor());
    this.contents.paintOpacity = 255;
};

Window_LevelUpActor.prototype.lineColor = function() {
    return this.normalColor();
};

Window_LevelUpActor.prototype.drawBasicInfo = function(x, y) {
    var lineHeight = this.lineHeight();
    this.drawActorLevel(this._actor, x, y + lineHeight * 0);
    this.drawActorIcons(this._actor, x, y + lineHeight * 1);
    this.drawActorHp(this._actor, x, y + lineHeight * 2);
    this.drawActorMp(this._actor, x, y + lineHeight * 3);
};

Window_LevelUpActor.prototype.drawExpInfo = function(x, y) {
    Window_Base.prototype.drawExpInfo.call(this,x,y);
};


//-----------------------------------------------------------------------------
//  WINDOW LEVEL UP STATS
//-----------------------------------------------------------------------------

function Window_LevelUpStats() {
    this.initialize.apply(this, arguments);
}

Window_LevelUpStats.prototype = Object.create(Window_Selectable.prototype);
Window_LevelUpStats.prototype.constructor = Window_LevelUpStats;

Window_LevelUpStats.prototype.initialize = function(y) {
	var x = 0;
	var width = Graphics.boxWidth;
	var height = Graphics.boxHeight - y;
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._actor = $gameParty.menuActor();
	this.resetPoints();
	this.createButtons();
	this.refresh();
};

Window_LevelUpStats.prototype.createButtons = function() {
    var bitmap = ImageManager.loadSystem('ButtonSet');
    var buttonWidth = 48;
    var buttonHeight = 48;
    this._buttons = [];
    for (var i = 0; i < 3; i++) {
        var button = new Sprite_Button();
        var x = buttonWidth * [1, 2, 4][i];
        var w = buttonWidth * (i === 2 ? 2 : 1);
        button.bitmap = bitmap;
        button.setColdFrame(x, 0, w, buttonHeight);
        button.setHotFrame(x, buttonHeight, w, buttonHeight);
        button.x = x+100;
        button.y = 280;
        button.visible = true;
        this._buttons.push(button);
        this.addChild(button);
    }
    this._buttons[0].setClickHandler(this.onButtonDown.bind(this));
    this._buttons[1].setClickHandler(this.onButtonUp.bind(this));
    this._buttons[2].setClickHandler(this.onButtonOk.bind(this));
};


Window_LevelUpStats.prototype.onButtonUp = function() {
    this.setParam();
};

Window_LevelUpStats.prototype.onButtonDown = function() {
    this.downParam();
};

Window_LevelUpStats.prototype.onButtonOk = function() {
    SceneManager.pop();
};

Window_Selectable.prototype.processPageup = function() {
    if(!$gameSwitches._data[962])SoundManager.playCursor();
    this.updateInputData();
    this.deactivate();
    this.callHandler('pageup');
};

Window_Selectable.prototype.processPagedown = function() {
    if(!$gameSwitches._data[962])SoundManager.playCursor();
    this.updateInputData();
    this.deactivate();
    this.callHandler('pagedown');
};

Window_LevelUpStats.prototype.resetPoints = function() {
	this.refresh();
};

Window_LevelUpStats.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};


Window_LevelUpStats.prototype.finishedDistribution = function() {
	return this._distributed.spent >= this._maxPoints || this._currentPoints <= 0;
};

Window_LevelUpStats.prototype.setParam = function() {
	var i = this.index();
	var jp = this._actor._jp[this._actor._classId];
	var c = $dataClasses[this._actor._classId];
	var mod = c.paramMods ? c.paramMods[i+2] : Galv.MLEVEL.paramMod[i+2];
	if($gameSwitches._data[1010])mod=Math.floor(mod/3)
	if(jp>=mod){
	AudioManager.playSe({"name":"Heal1","volume":100,"pitch":100,"pan":0})
	this._actor.addParam(i+2, 1);
	if(!this._actor.jpParam)this._actor.jpParam = [0,0,0,0,0,0,0,0]
	this._actor.jpParam[i+2]+=1;
	this._actor._jp[this._actor._classId] -= Math.floor(mod);
	this.refresh();
	}else{
	AudioManager.playSe({"name":"Buzzer1","volume":100,"pitch":100,"pan":0})
	};
};

Window_LevelUpStats.prototype.downParam = function() {
	var i = this.index();
	var c = $dataClasses[this._actor._classId];
	var mod = c.paramMods ? c.paramMods[i+2] : Galv.MLEVEL.paramMod[i+2];
	if($gameSwitches._data[1010])mod=Math.floor(mod/3)
	if(!this._actor.jpParam)this._actor.jpParam = [0,0,0,0,0,0,0,0]
	if(this._actor.jpParam[i+2]>0){
	AudioManager.playSe({"name":"Cancel2","volume":100,"pitch":100,"pan":0})
	this._actor.addParam(i+2, -1);
	this._actor.jpParam[i+2]-=1;
	this._actor._jp[this._actor._classId] += Math.floor(mod);
	}else{
	AudioManager.playSe({"name":"Buzzer1","volume":100,"pitch":100,"pan":0})
	};
	this.refresh();
};

Game_Interpreter.prototype.jpModoshi = function() {
for (var ii = 0; ii < 5; ii++) {
var actor = $gameParty.members()[ii]
this.jpModoshiActor(actor);
};
};

Game_Interpreter.prototype.jpModoshiActor = function(actor) {
if(!actor.jpParam)actor.jpParam = [0,0,0,0,0,0,0,0];
var jpParam = actor.jpParam;
var c = $dataClasses[actor._classId];
for (var i = 0; i < 6; i++) {
	if(jpParam[i+2]>0){
	var mod = c.paramMods ? c.paramMods[i+2] : Galv.MLEVEL.paramMod[i+2];
	if($gameSwitches._data[1010])mod=Math.floor(mod/3)
	actor.addParam(i+2, -actor.jpParam[i+2]);
	actor._jp[actor._classId] += Math.floor(mod)*actor.jpParam[i+2];
	actor.jpParam[i+2]=0;
	};
	};
};

Window_LevelUpStats.prototype.maxCols = function() {
	return Galv.MLEVEL.params.length;
};

Window_LevelUpStats.prototype.maxItems = function() {
    return this._actor ? Galv.MLEVEL.params.length : 0;
};

Window_LevelUpStats.prototype.item = function() {
    return this._actor ? Galv.MLEVEL.params[this.index()] : null;
};

Window_LevelUpStats.prototype.itemHeight = function() {
    return Galv.MLEVEL.selectBox.height;
};

Window_LevelUpStats.prototype.itemWidth = function() {
    return Galv.MLEVEL.selectBox.width;
};

Window_LevelUpStats.prototype.itemRect = function(index) {
	var rect = Window_Selectable.prototype.itemRect.call(this,index);
	rect.y += 60;
	return rect;
};

Window_LevelUpStats.prototype.drawItem = function(index) {
    if (this._actor) {
        var rect = this.itemRectForText(index);
		this.contents.fontSize = 18
		this.drawLevelBox(rect.x,rect.y,false);
		
		var paramId = Galv.MLEVEL.params[index];
		this.drawText(TextManager.param(paramId), rect.x, rect.y + 58, rect.width,'center');
		
		var param = this._actor.param(paramId) + this._actor._paramPlus[paramId];
		var c = $dataClasses[this._actor._classId];
		var mod = c.paramMods ? c.paramMods[paramId] : Galv.MLEVEL.paramMod[paramId];	
		if(!this._actor.jpParam)this._actor.jpParam = [0,0,0,0,0,0,0,0];
		var jpParam = this._actor.jpParam[paramId]
		this.drawText(param, rect.x, rect.y + 30, rect.width, 'center');
		this.drawText(mod, rect.x, rect.y, rect.width, 'center');
		this.drawText(jpParam, rect.x, rect.y + 87, rect.width, 'center');
		this.resetFontSettings();
    }
};

Window_LevelUpStats.prototype.textPadding = function() {
    return 0;
};

Window_Base.prototype.drawLevelBox = function(x,y,selected) {
	this._learnY = y;
    var width = Galv.MLEVEL.selectBox.width;
    var height = Galv.MLEVEL.selectBox.height;
	var ox = selected ? 0 : Galv.MLEVEL.selectBox.width;
    var bitmap = ImageManager.loadSystem('stat_container');
    this.contents.blt(bitmap, ox, 0, width, height, x, y);
};

Window_Base.prototype.drawLevelPoint = function(x,y,i) {
    
};



Window_LevelUpStats.prototype.refresh = function() {
	Window_Selectable.prototype.refresh.call(this);
	this.drawPoints();
};

Window_LevelUpStats.prototype.drawPoints = function() {
	this.changeTextColor(this.systemColor());
	this.drawText(Galv.MLEVEL.pointsTxt,6,0,this.contents.width);
	this.resetFontSettings();
	var jp = this._actor._jp[this._actor._classId];
    this.drawText(jp, 250, 0, 100);
    this.drawText(Galv.MLEVEL.levelReadyTxt, 50, 190, 600);
    this.drawText(Galv.MLEVEL.learnSkillTxt, 50, 230, 600);
};

Window_LevelUpStats.prototype.createLearningStuff = function() {
	this._learnList = [];   // Array of objects to draw {text1:'Desc Text', text2:'Item name', icon: 0}
	if (this._actor.readyForNextLevel()) {
		this.getLearnSkills();
		this.getLearnOther();
	};
	this.drawLearningStuff();
};

Window_LevelUpStats.prototype.getLearnSkills = function() {
	var skills = this._actor.skillsForNextLevel();
	for (var i = 0; i < skills.length; i++) {
		this._learnList.push({text1:Galv.MLEVEL.learnSkillTxt, text2:$dataSkills[skills[i]].name, icon: $dataSkills[skills[i]].iconIndex});
	}
};

Window_LevelUpStats.prototype.getLearnOther = function() {
	// For coders who want to add extensions
	
};

Window_LevelUpStats.prototype.drawLearningStuff = function() {
	var y = this._learnY + Galv.MLEVEL.selectBox.height;
	for (var i = 0; i < this._learnList.length; i++) {
		var x = i % 2 == 0 ? 0 : this.contents.width / 2;
		this.drawLearnedItem(x,y,i);
		if (x > 0) y += this.lineHeight();
	}
};

Window_LevelUpStats.prototype.drawLearnedItem = function(x,y,index) {
	// Learn Type
	var w = this.contents.width / 2
	this.changeTextColor(this.systemColor());
	this.drawText(this._learnList[index].text1,x,y,w);
	this.resetFontSettings();
	
	// Learn Item/Skill
	var x2 = Galv.MLEVEL.textXO;
	if (this._learnList[index].icon && this._learnList[index].icon > 0) {
		this.drawIcon(this._learnList[index].icon,x + x2,y);
		x2 += 36;
	}
	this.drawText(this._learnList[index].text2,x + x2,y,w - x2);
};

Window_LevelUpStats.prototype.doLevelUp = function() {
	// modify params
	for (var i = 0; i < this._finalParams.length; i++) {
		if (this._finalParams[i]) this._actor.addParam(i, this._finalParams[i]);
	}
	// level up actor
	this._actor.doLevelUp();
	this.resetPoints();
};



//-----------------------------------------------------------------------------
//  WINDOW LEVELUP CONFIRM
//-----------------------------------------------------------------------------

function Window_LevelConfirm() {
    this.initialize.apply(this, arguments);
}

Window_LevelConfirm.prototype = Object.create(Window_HorzCommand.prototype);
Window_LevelConfirm.prototype.constructor = Window_LevelConfirm;

Window_LevelConfirm.prototype.initialize = function(y) {
	var x = Graphics.boxWidth - this.windowWidth();
    Window_Command.prototype.initialize.call(this, x, y);
};

Window_LevelConfirm.prototype.windowWidth = function() {
    return 230;
};

Window_HorzCommand.prototype.maxCols = function() {
    return 1;
};

Window_LevelConfirm.prototype.makeCommandList = function() {
    this.addCommand(Galv.MLEVEL.confirmTxt, 'confirm', true);
};