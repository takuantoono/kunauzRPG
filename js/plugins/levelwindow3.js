(function() {

BattleManager.checkAbort = function() {
    if ($gameParty.isEmpty() || this.isAborting()) {
        //SoundManager.playEscape();
        this._escaped = true;
        this.processAbort();
    }
    return false;
};

BattleManager.erace_all_partyG = function() {
$gameSwitches._data[811] = false;
$gameScreen.erasePicture(111);
$gameScreen.erasePicture(112);
$gameScreen.erasePicture(113);
$gameScreen.erasePicture(114);
$gameScreen.erasePicture(115);
$gameScreen.erasePicture(116);
$gameScreen.erasePicture(117);
$gameScreen.erasePicture(118);
$gameScreen.erasePicture(119);
$gameScreen.erasePicture(120);
$gameScreen.erasePicture(109);
$gameScreen.erasePicture(121);
$gameScreen.erasePicture(122);
$gameScreen.erasePicture(123);
$gameScreen.erasePicture(124);
$gameScreen.erasePicture(125);
$gameScreen.erasePicture(126);
$gameScreen.erasePicture(127);
$gameScreen.erasePicture(128);
$gameScreen.erasePicture(129);
$gameScreen.erasePicture(130);
$gameScreen.erasePicture(131);
$gameScreen.erasePicture(132);
$gameScreen.erasePicture(133);
$gameScreen.erasePicture(134);
$gameScreen.erasePicture(135);
$gameScreen.erasePicture(136);
$gameScreen.erasePicture(110);
$gameScreen.erasePicture(137);
$gameScreen.erasePicture(138);
$gameScreen.erasePicture(139);
$gameScreen.erasePicture(101);
$gameScreen.erasePicture(140);
$gameScreen.erasePicture(141);
$gameScreen.erasePicture(142);
$gameScreen.erasePicture(143);
$gameScreen.erasePicture(144);
$gameScreen.erasePicture(145);
$gameScreen.erasePicture(146);
$gameScreen.erasePicture(147);
$gameScreen.erasePicture(148);
$gameScreen.erasePicture(149);
$gameScreen.erasePicture(150);
$gameScreen.erasePicture(151);
$gameScreen.erasePicture(152);
$gameScreen.erasePicture(153);
$gameScreen.erasePicture(154);
$gameScreen.erasePicture(155);
$gameScreen.erasePicture(156);
$gameScreen.erasePicture(157);
$gameScreen.erasePicture(158);
$gameScreen.erasePicture(159);
$gameScreen.erasePicture(160);
$gameScreen.erasePicture(161);
$gameScreen.erasePicture(162);
};

BattleManager.chara_move_cutin = function() {
$gameVariables._data[520] = $gameVariables._data[806];
$gameVariables._data[521] = $gameVariables._data[807];
var actor = $gameActors.actor($gameVariables._data[60]);
$gameVariables._data[809] = 110;
$gameVariables._data[809] += $gameVariables._data[810];
BattleManager.picMove();
$gameVariables._data[809] = 111;
$gameVariables._data[809] += $gameVariables._data[810];
BattleManager.picMove();
if(actor.isStateAffected(21)){
$gameVariables._data[809] = 109;
$gameVariables._data[809] += $gameVariables._data[810];
BattleManager.picMove();
};
$gameVariables._data[809] = 112;
$gameVariables._data[809] += $gameVariables._data[810];
if($gameSwitches._data[806]){
$gameVariables._data[521] -= 7;
$gameVariables._data[520] += 162;
$gameVariables._data[522] *= -1;
}else{
$gameVariables._data[520] -= 20;
};
$gameVariables._data[804] = 0;
var weps = actor.equips()[$gameVariables._data[804]];
if(weps && weps.note.match(/<(?:bow)>/i)){
if(!$gameSwitches._data[806] && !$gameSwitches._data[807]) $gameVariables._data[520] -= 5;
if($gameVariables._data[808] == 170){
$gameVariables._data[520] += 3;
$gameVariables._data[521] -= 1;
};
}else{
if($gameVariables._data[532] == 150){
$gameVariables._data[520] += 1;
$gameVariables._data[521] += 1;
};
};
if(weps && weps.note.match(/<(?:two handed weapon)>/i)){
if($gameVariables._data[522] == -200){
$gameVariables._data[520] += 5;
if(weps.note.match(/<(?:bow)>/i)) $gameVariables._data[520] += 12;
}else{
if(weps.note.match(/<(?:bow)>/i)){
$gameVariables._data[520] += 6;
$gameVariables._data[521] += 2;
};
};
$gameVariables._data[520] += -1;
$gameVariables._data[521] += 10;
BattleManager.picMove();
$gameVariables._data[520] = $gameVariables._data[806];
$gameVariables._data[521] = $gameVariables._data[807];
$gameVariables._data[520] += 2;
if($gameSwitches._data[807]){
$gameVariables._data[520] -= 2;
$gameVariables._data[521] += 2;
};
this.shitaP2(actor);
return;
};
BattleManager.picMove();
if($gameVariables._data[522] < 0) $gameVariables._data[522] *= -1;
$gameVariables._data[520] = $gameVariables._data[806];
$gameVariables._data[521] = $gameVariables._data[807];
$gameVariables._data[520] += 2;
$gameVariables._data[809] = 113;
$gameVariables._data[809] += $gameVariables._data[810];
$gameVariables._data[804] = 0;
var weps = actor.equips()[$gameVariables._data[804]];
if($gameScreen.picture(133))BattleManager.picMove();
if(!$gameSwitches._data[806]){
this.shitaP2(actor);
};
};

BattleManager.shitaP2 = function(actor) {
$gameVariables._data[809] = 114;
$gameVariables._data[809] += $gameVariables._data[810];
BattleManager.picMove();
$gameVariables._data[804] = 1;
var weps = actor.equips()[$gameVariables._data[804]];
if(DataManager.isWeapon(weps)){
$gameVariables._data[520] += 3;
$gameVariables._data[521] += 7;
BattleManager.picMove();
if(weps.wtypeId == 8) return;
$gameVariables._data[520] += 22;
$gameVariables._data[809] = 115;
$gameVariables._data[809] += $gameVariables._data[810];
BattleManager.picMove();
}else{
if(DataManager.isArmor(weps) && weps.atypeId <= 4){
$gameVariables._data[520] += 25;
$gameVariables._data[521] += 10;
$gameVariables._data[809] = 115;
$gameVariables._data[809] += $gameVariables._data[810];
BattleManager.picMove();
};
};
};

BattleManager.picMove = function() {
	var no = $gameVariables._data[809];
	var x =  $gameVariables._data[520];
	var y = $gameVariables._data[521];
	var wide = $gameVariables._data[522];
	var hight = $gameVariables._data[532];
	var suke = $gameVariables._data[803];
	var time = $gameVariables._data[519];
	var type = $gameVariables._data[805];
	$gameScreen.movePicture(no,0,x, y, wide, hight, suke,type,time);
};

BattleManager.attack_chara = function() {
var actor = $gameActors.actor($gameVariables.value(60));
$gameVariables._data[809] = 111;
$gameVariables._data[809] += $gameVariables._data[810];
BattleManager.cutinArmor();
BattleManager.picChara();
$gameVariables._data[809] = 110;
$gameVariables._data[809] += $gameVariables._data[810];
$gameVariables._data[519] = "efc_body_" + actor.faceName() + "_" + actor.faceIndex() + "_at";
BattleManager.picChara();
if(actor.isStateAffected(21)){
$gameVariables._data[809] = 109;
$gameVariables._data[809] += $gameVariables._data[810];
$gameVariables._data[519] = "efc_wing_at";
BattleManager.picChara();
};
$gameVariables._data[804] = 0;
var weps = actor.equips()[$gameVariables._data[804]];
if(weps && weps.note.match(/<(?:two handed weapon)>/i)){
$gameVariables._data[520] += 170;
$gameVariables._data[521] -= 2;
$gameVariables._data[522] *= -1;
$gameVariables._data[809] = 112;
$gameVariables._data[809] += $gameVariables._data[810];
if(weps && weps.note.match(/<(?:bow)>/i)){
$gameVariables._data[520] += 10;
$gameVariables._data[521] += 6;
}; 
BattleManager.equipDraw();
BattleManager.picChara();
return;
};
$gameVariables._data[520] += 162;
$gameVariables._data[521] -= 7;
$gameVariables._data[522] *= -1;
$gameVariables._data[809] = 112;
$gameVariables._data[809] += $gameVariables._data[810];
BattleManager.equipDraw();
BattleManager.picChara();
$gameVariables._data[520] -= 160;
$gameVariables._data[521] += 7;
$gameVariables._data[522] *= -1;
$gameVariables._data[809] = 113;
$gameVariables._data[809] += $gameVariables._data[810];
$gameVariables._data[519] = "efc_te_1";
BattleManager.picChara();
if($gameSwitches._data[806]){
var num = $gameVariables._data[810];
$gameScreen.erasePicture(114 + num);
$gameScreen.erasePicture(115 + num);
};
};

BattleManager.picCharaDraw = function() {
var actor = $gameActors.actor($gameVariables.value(60));
$gameVariables._data[520] = $gameVariables._data[806];
$gameVariables._data[521] = $gameVariables._data[807];
if(actor.isStateAffected(48)) $gameVariables._data[521] -= 50;
$gameVariables._data[522] = $gameVariables._data[808];
$gameVariables._data[532] = $gameVariables._data[808];
$gameVariables._data[809] = 111;
$gameVariables._data[809] += $gameVariables._data[810];
BattleManager.cutinArmor();
BattleManager.picChara();
$gameVariables._data[809] = 110;
$gameVariables._data[809] += $gameVariables._data[810];
$gameVariables._data[519] = "efc_body_" + actor.faceName() + "_" + actor.faceIndex();
if($gameSwitches._data[821]) $gameVariables._data[519] += "_sm";
BattleManager.picChara();
if(actor.isStateAffected(21)){
$gameVariables._data[809] = 109;
$gameVariables._data[809] += $gameVariables._data[810];
$gameVariables._data[519] = "efc_wing";
BattleManager.picChara();
};
if($gameSwitches._data[820]) return;
if($gameVariables._data[808] == 300) $gameVariables._data[520] -= 18;
$gameVariables._data[809] = 112;
$gameVariables._data[809] += $gameVariables._data[810];
$gameVariables._data[804] = 1;
var weps = actor.equips()[$gameVariables._data[804]];
if(weps && weps.note.match(/<(?:two handed weapon)>/i)){
if($gameVariables._data[808] == 200) $gameVariables._data[520] -= 14;
if(weps && weps.note.match(/<(?:bow)>/i)) $gameVariables._data[521] -= 4;
$gameVariables._data[520] -= 18;
$gameVariables._data[521] += 12;
BattleManager.equipDraw();
BattleManager.picChara();
return
};
$gameVariables._data[804] = 0;
var weps = actor.equips()[$gameVariables._data[804]];
if(weps && weps.note.match(/<(?:two handed weapon)>/i)){
if($gameVariables._data[808] == 200) $gameVariables._data[520] -= 14;
if(weps && weps.note.match(/<(?:bow)>/i)) $gameVariables._data[520] += 3;
if(!$gameSwitches._data[8]){
$gameVariables._data[520] -= 8;
$gameVariables._data[521] += 15;
};
$gameVariables._data[520] -= 18;
$gameVariables._data[521] += 12;

BattleManager.equipDraw();
BattleManager.picChara();
$gameVariables._data[804] = 1;
var weps = actor.equips()[$gameVariables._data[804]];
if(!$gameSwitches._data[8]){
$gameVariables._data[520] += 8;
$gameVariables._data[521] -= 15;
};
$gameVariables._data[520] += 18;
$gameVariables._data[521] -= 12;
$gameVariables._data[520] -= 20;
if($gameSwitches.value(807)){
$gameVariables._data[520] = $gameVariables._data[806];
$gameVariables._data[521] = $gameVariables._data[807];
$gameVariables._data[521] -= 5;
};
if(weps)this.shitaP(actor);
return;
};
$gameVariables._data[520] -= 20;
BattleManager.equipDraw();
BattleManager.picChara();
this.shitaP(actor);
$gameVariables._data[804] = 0;
var weps = actor.equips()[$gameVariables._data[804]];
if(weps && weps.wtypeId == 8) return;
$gameVariables._data[520] = $gameVariables._data[806];
$gameVariables._data[521] = $gameVariables._data[807];
$gameVariables._data[809] = 113;
$gameVariables._data[809] += $gameVariables._data[810];
$gameVariables._data[519] = "efc_te";
BattleManager.picChara();
};

BattleManager.shitaP = function(actor) {
$gameVariables._data[520] = $gameVariables._data[806];
$gameVariables._data[809] = 114;
$gameVariables._data[809] += $gameVariables._data[810];
$gameVariables._data[804] = 1;
var weps = actor.equips()[$gameVariables._data[804]];
if(DataManager.isWeapon(weps)){
$gameVariables._data[520] += 5;
$gameVariables._data[521] += 8;
if($gameVariables._data[808] == 300 && !$gameSwitches._data[8]) $gameVariables._data[520] -= 8;
BattleManager.equipDraw();
BattleManager.picChara();
if(weps.wtypeId == 8) return;
$gameVariables._data[809] = 115;
$gameVariables._data[809] += $gameVariables._data[810];
$gameVariables._data[519] = "efc_te";
$gameVariables._data[520] += 20;
if($gameVariables._data[808] == 300 && !$gameSwitches._data[8]){
$gameVariables._data[520] += 26;
$gameVariables._data[521] += 2;
};
if($gameVariables._data[808] == 200) $gameVariables._data[520] += 2;
BattleManager.picChara();
}else{
BattleManager.equipDraw();
BattleManager.picChara();
if(DataManager.isArmor(weps) && weps.atypeId <= 4){
$gameVariables._data[520] += 25;
if($gameVariables._data[808] == 300 && !$gameSwitches._data[8]) $gameVariables._data[520] += 15;
$gameVariables._data[521] += 10;
$gameVariables._data[809] = 115;
$gameVariables._data[809] += $gameVariables._data[810];
$gameVariables._data[519] = "efc_te";
BattleManager.picChara();
};
};
};

BattleManager.picChara = function() {
var no = $gameVariables._data[809];
var name = $gameVariables._data[519];
var x =  $gameVariables._data[520];
var y = $gameVariables._data[521];
var wide = $gameVariables._data[522];
var hight = $gameVariables._data[532];
var suke = $gameVariables._data[803];
var type = $gameVariables._data[805];
$gameScreen.showPicture(no, name, 0, x, y, wide, hight, suke, type);
};

BattleManager.equipDraw = function() {
var actor = $gameActors.actor($gameVariables.value(60));
var weps = actor.equips()[$gameVariables._data[804]];
if(weps){
if(DataManager.isWeapon(weps)){
$gameVariables._data[519] = "efc_w";
}else{
$gameVariables._data[519] = "efc_s";
};
if(DataManager.isIndependent(weps)){
$gameVariables._data[802] = weps.originalBaseItemId;
if(!$gameVariables._data[802]) $gameVariables._data[802] = weps.baseItemId;
if(!$gameVariables._data[802]) $gameVariables._data[802] = 0;
}else{
$gameVariables._data[802] = weps.id;
};
if($gameVariables._data[802] == 47){
$gameVariables._data[519] = "efc_w000";
return
}else{
if($gameVariables._data[802] == 0){
$gameVariables._data[519] = "efc_w000";
return
}else{
if($gameVariables._data[802] <= 9){
$gameVariables._data[519] += "00";
}else{
if($gameVariables._data[802] <= 90){
$gameVariables._data[519] += "0";
};
};
};
};
$gameVariables._data[519] += $gameVariables._data[802];
if(weps.jade){
$gameVariables._data[519] += "j";
};
if(weps.obsidian){
$gameVariables._data[519] += "b";
};
if(weps.misril){
$gameVariables._data[519] += "m";
};
}else{
$gameVariables._data[519] = "efc_w000";
};
};

BattleManager.cutinArmor = function() {
var actor = $gameActors.actor($gameVariables.value(60));
var weps = actor.equips()[3];
$gameVariables._data[519] = "efc_armor";
if(weps){
if(DataManager.isIndependent(weps)){
$gameVariables._data[802] = weps.originalBaseItemId;
if(!$gameVariables._data[802]) $gameVariables._data[802] = weps.baseItemId;
if(!$gameVariables._data[802]) $gameVariables._data[802] = 0;
}else{
$gameVariables._data[802] = weps.id;
};
if($gameVariables._data[802] == 0){
if(actor.isStateAffected(35)){
$gameVariables._data[519] += "000_f";
}else{
$gameVariables._data[519] += "000";
};
}else{
if($gameVariables._data[802] <= 9){
$gameVariables._data[519] += "00";
}else{
if($gameVariables._data[802] <= 99){
$gameVariables._data[519] += "0";
};
};
$gameVariables._data[519] += $gameVariables._data[802];
};
}else{
if(actor.isStateAffected(35)){
$gameVariables._data[519] += "000_f";
}else{
$gameVariables._data[519] += "000";
};
};
if($gameSwitches._data[806]){
$gameVariables._data[519] += "_at";
};
if(actor.isStateAffected(18)){
$gameVariables._data[519] += "_ho";
};
};

BattleManager.cutinChara = function() {
if($gameActors.actor($gameVariables._data[60]).equips()[3]){
if(DataManager.isIndependent($gameActors.actor($gameVariables._data[60]).equips()[3])){
$gameVariables._data[802] = $gameActors.actor($gameVariables._data[60]).equips()[3].originalBaseItemId;
}else{
$gameVariables._data[802] = $gameActors.actor($gameVariables._data[60]).equips()[3].id;
};
if($gameSwitches._data[806]){
$gameVariables._data[519] = "efc_at_armor";
}else{
$gameVariables._data[519] = "efc_armor";
};
if($gameVariables._data[802] == 0){
if(!$gameActors.actor($gameVariables._data[60]).isStateAffected(35)){
$gameVariables._data[519] = "000";
};
}else{
if($gameVariables._data[802] <= 9){
if($gameVariables._data[802] == 1){
if(!$gameActors.actor($gameVariables._data[60]).isStateAffected(35)){
$gameVariables._data[519] += "00";
};
}else{
$gameVariables._data[519] += "00";
};
}else{
if($gameVariables._data[802] <= 99){
$gameVariables._data[519] += "0";
};
};
$gameVariables._data[519] += $gameVariables._data[802];
};
}else{
if(!$gameActors.actor($gameVariables._data[60]).isStateAffected(35)){
$gameVariables._data[519] += "armor000";
};
};
};

Window_NumberInput.prototype.updatePlacement = function() {
    var messageY = this._messageWindow.y;
    var spacing = 8;
    this.width = this.windowWidth();
    this.height = this.windowHeight();
    this.x = (Graphics.boxWidth - this.width) / 2;
    if (messageY >= Graphics.boxHeight / 2) {
        this.y = messageY - this.height -100 - spacing;
    } else {
        this.y = messageY + this._messageWindow.height + spacing;
    }
};

Window_MenuCommand.prototype.makeCommandList = function() {
    this.addMainCommands();
    this.addFormationCommand();
    this.addOriginalCommands();
    this.addOptionsCommand();
    //this.addSaveCommand();
    this.addCommand(TextManager.cancel, 'cancel');
    this.addGameEndCommand();
};



Window_BattleStatus.prototype.numVisibleRows = function() {
    return 6;
};



})();
