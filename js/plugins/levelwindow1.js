(function() {



Game_Interpreter.prototype.raceId = function(actor) {
if(actor.isStateAffected(14))return 1;
if(actor.isStateAffected(15))return 2;
if(actor.isStateAffected(16))return 3;
if(actor.isStateAffected(17))return 4;
if(actor.isStateAffected(18))return 5;
if(actor.isStateAffected(19))return 6;
if(actor.isStateAffected(20))return 7;
if(actor.isStateAffected(21))return 8;
if(actor.isStateAffected(22))return 9;
if(actor.isStateAffected(23))return 10;
if(actor.isStateAffected(24))return 11;
};

Game_Interpreter.prototype.godId = function(actor) {
if(actor.isStateAffected(25))return 1;
if(actor.isStateAffected(26))return 2;
if(actor.isStateAffected(27))return 3;
if(actor.isStateAffected(28))return 4;
if(actor.isStateAffected(29))return 5;
if(actor.isStateAffected(30))return 6;
if(actor.isStateAffected(31))return 7;
if(actor.isStateAffected(32))return 8;
if(actor.isStateAffected(33))return 9;
};


Game_Interpreter.prototype.isNearedEnemy = function() {
var xx = $gamePlayer.x;
var yy = $gamePlayer.y;
var n = 5;
for (var i = 0; i < n; i++) {
for (var ii = 0; ii < n; ii++) {
xxx = xx + i;
yyy = yy + ii;
id = $gameMap.eventIdXy(xxx, yyy);
if(id>0){
if($dataMap.events[id].meta.fixedEnemy){
if(!$gameSelfSwitches.value([this._mapId, id, "A"])&&!$gameSelfSwitches.value([this._mapId, id, "B"])){
var xd = xx - xxx;
var yd = yy - yyy;
if(xd<0)xd*=-1;
if(yd<0)yd*=-1;
var rr = xd+yd;
if(rr<=5)return true;
};
};
};
};
};
return false;
};

Game_Interpreter.prototype.invisableCheck = function() {
$gameVariables._data[6]=0;
$gameVariables._data[7]=0;
var sx = 0;
if($gameSwitches._data[8]){
if(!$gameSwitches._data[13] && $gameVariables._data[168] > 0 &&
$gamePlayer._direction == $gameVariables._data[161]){
sx = 12
}else{
if($gameSwitches._data[9] && !$gameSwitches._data[14] && $gameVariables._data[163] > 0){
if($gameVariables._data[163] == 3)sx = 3;
if($gamePlayer._direction == $gameVariables._data[162])sx = 6;
}else{
return;
};
};
}else{
sx = 4;
};
if($gamePlayer._direction==2){
var xx = $gamePlayer.x-3;
var yy = $gamePlayer.y;
var n1 = 8;
var n2 = sx;
};
if($gamePlayer._direction==8){
var xx = $gamePlayer.x-3;
var yy = $gamePlayer.y-sx;
var n1 = 8;
var n2 = sx;
};
if($gamePlayer._direction==4){
var xx = $gamePlayer.x-sx;
var yy = $gamePlayer.y-3;
var n1 = sx;
var n2 = 8;
};
if($gamePlayer._direction==6){
var xx = $gamePlayer.x;
var yy = $gamePlayer.y-3;
var n1 = sx;
var n2 = 8;
};
for (var i = 0; i < n1; i++) {
for (var ii = 0; ii < n2; ii++) {
xxx = xx + i;
yyy = yy + ii;
id = $gameMap.eventIdXy(xxx, yyy);
if(id>0){
if($dataMap.events[id].meta.rbox || $dataMap.events[id].meta.jade || $dataMap.events[id].meta.misril){
if(!$gameSelfSwitches.value([this._mapId, id, "A"])&&!$gameSelfSwitches.value([this._mapId, id, "B"])){
var xd = xx - xxx;
var yd = yy - yyy;
if(xd<0)xd*=-1;
if(yd<0)yd*=-1;
$gameVariables._data[7]=xd+yd;
$gameVariables._data[6]=id;
i=20
ii=20
};
};
};
};
};
};

Game_Interpreter.prototype.invisableCheckAuto = function() {
$gameVariables._data[6]=0;
$gameVariables._data[7]=0;
var sx = 0;
var n = 0;
if($gameSwitches._data[8]){
if(!$gameSwitches._data[13] && $gameVariables._data[168] > 0 &&
$gamePlayer._direction == $gameVariables._data[161]){
sx = 12
}else{
if($gameSwitches._data[9] && !$gameSwitches._data[14] && $gameVariables._data[163] > 0){
if($gameVariables._data[163] == 3)sx = 3;
if($gamePlayer._direction == $gameVariables._data[162])sx = 6;
}else{
return;
};
};
}else{
sx = 4;
};
if($gamePlayer._direction==2){
var xx = $gamePlayer.x-3;
var yy = $gamePlayer.y;
var n1 = 8;
var n2 = sx;
};
if($gamePlayer._direction==8){
var xx = $gamePlayer.x-3;
var yy = $gamePlayer.y-sx;
var n1 = 8;
var n2 = sx;
};
if($gamePlayer._direction==4){
var xx = $gamePlayer.x-sx;
var yy = $gamePlayer.y-3;
var n1 = sx;
var n2 = 8;
};
if($gamePlayer._direction==6){
var xx = $gamePlayer.x;
var yy = $gamePlayer.y-3;
var n1 = sx;
var n2 = 8;
};
for (var i = 0; i < n1; i++) {
for (var ii = 0; ii < n2; ii++) {
xxx = xx + i;
yyy = yy + ii;
id = $gameMap.eventIdXy(xxx, yyy);
if(id>0){
if(!$gameSelfSwitches.value([this._mapId, id, "A"])&&!$gameSelfSwitches.value([this._mapId, id, "B"])){
if($gameVariables._data[340].indexOf(id)>=0&&$gameVariables._data[337]==2){
var xd = xx - xxx;
var yd = yy - yyy;
if(xd<0)xd*=-1;
if(yd<0)yd*=-1;
$gameVariables._data[7]=xd+yd;
$gameVariables._data[6]=id;
i=20
ii=20
};
if($gameVariables._data[405].indexOf(id)>=0){
var xd = xx - xxx;
var yd = yy - yyy;
if(xd<0)xd*=-1;
if(yd<0)yd*=-1;
$gameVariables._data[7]=xd+yd;
$gameVariables._data[6]=id;
i=20
ii=20
};
};
};
};
};
};


Game_Interpreter.prototype.navigateScope = function() {
var id = $gameVariables._data[6];
var x = this.character(id).x;
var y = this.character(id).y;
var xx = $gamePlayer.x;
var yy = $gamePlayer.y;
$gameVariables._data[7]="範囲外"
$gameVariables._data[6]=" "
var id = $gameVariables._data[7]
if(x>=xx-10 && x<=xx+10 && y>=yy-10 && y<=yy+10){
if(x==xx){
$gameVariables._data[6] = 0;
};
if(x<xx){
$gameVariables._data[6] = "西";
};
if(x>xx){
$gameVariables._data[6] = "東";
};
if(y==yy){
$gameVariables._data[7] = 0;
};
if(y<yy){
$gameVariables._data[7] = "北";
};
if(y>yy){
$gameVariables._data[7] = "南";
};
};
if($gameVariables._data[7]==0&&$gameVariables._data[6]==0){
$gameVariables._data[7]="到"
$gameVariables._data[6]="達"
};
if($gameVariables._data[7]==0)$gameVariables._data[7]=" "
if($gameVariables._data[6]==0)$gameVariables._data[6]=" "
};


Window_Base.prototype.drawActorLevel = function(actor, x, y) {
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.levelA, x, y, 48);
    this.resetTextColor();
    this.drawText(actor.level, x + 24, y, 36, 'right');
    if($gameSwitches.value(380)){
    
    if(actor.isStateAffected(11)){
    this.drawIcon(481, x + 74, y);
    }else{
    this.drawIcon(483, x + 74, y);
    }
    }
};






})();
