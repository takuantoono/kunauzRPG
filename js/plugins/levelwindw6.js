(function() {

Game_Map.prototype.draw_left2L_naname = function() {
if($gameSwitches._data[89]){
if($gameVariables._data[428]<3){
return;
};
}else{
if($gameVariables._data[428]<2){
return;
};
};
$gameVariables._data[526] = "left";
$gameVariables._data[523] = 2;
$gameMap.td_direction();
$gameVariables._data[516] = -2;
$gameMap.right_minus();
$gameMap.td_direction_second();
$gameMap.left2Lnaname_contents();
};

Game_Map.prototype.draw_left1_front = function() {
if($gameSwitches._data[89]){
if($gameSwitches._data[90]){
return;
}
}else{
if($gameSwitches._data[88]){
return;
};
};
$gameVariables._data[526] = "front";
$gameVariables._data[523] = 1;
$gameMap.td_direction();
$gameVariables._data[516] = -1;
$gameMap.right_minus();
$gameMap.td_direction_second();
$gameMap.leftfront1_contents();
};

Game_Map.prototype.draw_left1_naname = function() {
if($gameVariables._data[428]<2){
return;
};
$gameVariables._data[526] = "left";
$gameVariables._data[523] = 1;
$gameMap.td_direction();
$gameVariables._data[516] = -1;
$gameMap.right_minus();
$gameMap.td_direction_second();
$gameMap.leftNaname1_contents();
};

Game_Map.prototype.draw_left2_front = function() {
if($gameVariables._data[428]<2){
return;
};
$gameVariables._data[526] = "front";
$gameVariables._data[523] = 2;
$gameMap.td_direction();
$gameVariables._data[516] = -1;
$gameMap.right_minus();
$gameMap.td_direction_second();
$gameMap.leftfront2_contents();
};

Game_Map.prototype.draw_left2_naname = function() {
if($gameVariables._data[428]<3){
return;
};
$gameVariables._data[526] = "left";
$gameVariables._data[523] = 2;
$gameMap.td_direction();
$gameVariables._data[516] = -1;
$gameMap.right_minus();
$gameMap.td_direction_second();
$gameMap.leftNaname2_contents();
};

Game_Map.prototype.draw_left3_front = function() {
if($gameVariables._data[428]<3){
return;
};
$gameVariables._data[526] = "front";
$gameVariables._data[523] = 3;
$gameMap.td_direction();
$gameVariables._data[516] = -1;
$gameMap.right_minus();
$gameMap.td_direction_second();
$gameMap.leftfront3_contents();
};

Game_Map.prototype.draw_left3_naname = function() {
if($gameVariables._data[428]<4){
return;
};
$gameVariables._data[526] = "left";
$gameVariables._data[523] = 3;
$gameMap.td_direction();
$gameVariables._data[516] = -1;
$gameMap.right_minus();
$gameMap.td_direction_second();
$gameMap.leftNaname3_contents();
};

Game_Map.prototype.draw_left4_front = function() {
if($gameVariables._data[428]<4){
return;
};
$gameVariables._data[526] = "front";
$gameVariables._data[523] = 4;
$gameMap.td_direction();
$gameVariables._data[516] = -1;
$gameMap.right_minus();
$gameMap.td_direction_second();
$gameMap.leftfront4_contents();
};

Game_Map.prototype.draw_left4_naname = function() {
if($gameVariables._data[428]<5){
return;
};
$gameVariables._data[526] = "left";
$gameVariables._data[523] = 4;
$gameMap.td_direction();
$gameVariables._data[516] = -1;
$gameMap.right_minus();
$gameMap.td_direction_second();
$gameMap.leftNaname4_contents();
};

Game_Map.prototype.draw_left5_front = function() {
if($gameVariables._data[428]<5){
return;
};
$gameVariables._data[526] = "front";
$gameVariables._data[523] = 5;
$gameMap.td_direction();
$gameVariables._data[516] = -1;
$gameMap.right_minus();
$gameMap.td_direction_second();
$gameMap.leftfront5_contents();
};

Game_Map.prototype.draw_left3L_front = function() {
if($gameVariables._data[428]<3){
return;
};
$gameVariables._data[526] = "front";
$gameVariables._data[523] = 3;
$gameMap.td_direction();
$gameVariables._data[516] = -2;
$gameMap.right_minus();
$gameMap.td_direction_second();
$gameMap.left3Lfront_contents();
};

Game_Map.prototype.draw_left3L_naname = function() {
if($gameVariables._data[428]<4){
return;
};
$gameVariables._data[526] = "left";
$gameVariables._data[523] = 3;
$gameMap.td_direction();
$gameVariables._data[516] = -2;
$gameMap.right_minus();
$gameMap.td_direction_second();
$gameMap.left3Lnaname_contents();
};

Game_Map.prototype.draw_left4L_front = function() {
if($gameVariables._data[428]<4){
return;
};
$gameVariables._data[526] = "front";
$gameVariables._data[523] = 4;
$gameMap.td_direction();
$gameVariables._data[516] = -2;
$gameMap.right_minus();
$gameMap.td_direction_second();
$gameMap.left4Lfront_contents();
};

Game_Map.prototype.draw_left4L_naname = function() {
if($gameVariables._data[428]<5){
return;
};
$gameVariables._data[526] = "left";
$gameVariables._data[523] = 4;
$gameMap.td_direction();
$gameVariables._data[516] = -2;
$gameMap.right_minus();
$gameMap.td_direction_second();
$gameMap.left4Lnaname_contents();
};

Game_Map.prototype.draw_left5L_front = function() {
if($gameVariables._data[428]<6){
return;
};
$gameVariables._data[526] = "left";
$gameVariables._data[523] = 5;
$gameMap.td_direction();
$gameVariables._data[516] = -2;
$gameMap.right_minus();
$gameMap.td_direction_second();
$gameMap.left5Lfront_contents();
};

Game_Map.prototype.smartRoad = function() {
$gameSwitches._data[162] = false;
$gameSwitches._data[175] = false;
this.darkzone();
$gameVariables._data[751] = 0;
$gameVariables._data[717] = 1;
$gameSwitches._data[136] = false;
$gameVariables._data[723] = 0;
$gameVariables._data[724] = 0;
$gameVariables._data[725] = 0;
$gameVariables._data[726] = 0;
$gameVariables._data[727] = 0;
$gameVariables._data[728] = 0;
$gameVariables._data[729] = 0;
$gameVariables._data[730] = 0;
$gameVariables._data[731] = 0;
$gameVariables._data[732] = 0;
$gameVariables._data[736] = 0;
$gameVariables._data[737] = 0;
$gameVariables._data[738] = 0;
$gameVariables._data[739] = 0;
$gameVariables._data[196] = 0;
$gameVariables._data[197] = 0;
$gameSwitches._data[482] = false;
$gameSwitches._data[483] = false;
$gameSwitches._data[484] = false;
$gameSwitches._data[485] = false;
$gameSwitches._data[486] = false;
$gameSwitches._data[487] = false;
$gameSwitches._data[488] = false;
$gameSwitches._data[489] = false;
$gameSwitches._data[490] = false;
$gameSwitches._data[491] = false;
$gameSwitches._data[492] = false;
$gameSwitches._data[493] = false;
$gameVariables._data[735] = 0;
$gameVariables._data[745] = 0;
$gameSwitches._data[136] = false;
this.front_repeat0();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.front_repeat0();
};
$gameVariables._data[735] = 0;
this.front_repeat0naname();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.front_repeat0naname();
};
if($gameVariables._data[745] == 1){
$gameVariables._data[745] = 2;
this.front_repeat0();
this.front_repeat0naname();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.front_repeat0naname();
};
};
$gameSwitches._data[136] = false;
$gameVariables._data[735] = 0;
$gameVariables._data[745] = 0;
$gameSwitches._data[160] = false;
this.front_repeat1();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.front_repeat1();
};
$gameVariables._data[735] = 0;
this.front_repeat1naname();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.front_repeat1naname();
};
if($gameVariables._data[745] == 1){
$gameVariables._data[745] = 2;
this.front_repeat1();
this.front_repeat1naname();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.front_repeat1naname();
};
};
$gameSwitches._data[136] = false;
$gameSwitches._data[1048] = false;
$gameVariables._data[735] = 0;
$gameVariables._data[745] = 0;
$gameSwitches._data[160] = false;
this.front_repeat2();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.front_repeat2();
};
$gameVariables._data[735] = 0;
this.front_repeat2naname();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.front_repeat2naname();
};
if($gameVariables._data[745] == 1){
$gameVariables._data[745] = 2;
this.front_repeat2();
this.front_repeat2naname();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.front_repeat2naname();
};
};
$gameSwitches._data[136] = false;
$gameVariables._data[735] = 0;
$gameVariables._data[745] = 0;
$gameSwitches._data[160] = false;
this.front_repeat3();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.front_repeat3();
};
$gameVariables._data[735] = 0;
this.front_repeat3naname();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.front_repeat3naname();
};
if($gameVariables._data[745] == 1){
$gameVariables._data[745] = 2;
this.front_repeat3();
this.front_repeat3naname();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.front_repeat3naname();
};
};
$gameSwitches._data[136] = false;
$gameVariables._data[735] = 0;
$gameVariables._data[745] = 0;
$gameSwitches._data[160] = false;
this.front_repeat4();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.front_repeat4();
};
$gameVariables._data[735] = 0;
this.front_repeat4naname();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.front_repeat4naname();
};
if($gameVariables._data[745] == 1){
$gameVariables._data[745] = 2;
this.front_repeat4();
this.front_repeat4naname();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.front_repeat4naname();
};
};
$gameSwitches._data[160] = false;
this.front_repeat5();
if($gameVariables._data[745] == 1){
$gameVariables._data[745] = 2;
this.front_repeat5();
};
if($gameSwitches._data[205]) return;
$gameSwitches._data[89] = false;
this.leftSmart();
$gameSwitches._data[89] = true;
this.leftSmart();
};

Game_Map.prototype.darkzone = function() {
$gameVariables._data[752] = $gamePlayer.x;
$gameVariables._data[753] = $gamePlayer.y;
$gameVariables._data[766] = $gameMap.regionId($gameVariables._data[752], $gameVariables._data[753]);
if($gameVariables._data[766] == 73){
$gameVariables._data[518] = 1;
if(!$gameSwitches._data[158]){
$gameSwitches._data[158] = true;
if($gameParty.hasItem($dataItems[305])){
$gameSwitches._data[758] = true;
$gameVariables._data[452] += 1;
}
AudioManager.playSe({"name":"Absorb1","volume":90,"pitch":100,"pan":0})
if($gameSwitches._data[6]){
this._interpreter.wait(20);
$gameSwitches._data[6] = false;
AudioManager.playSe({"name":"Fire2","volume":90,"pitch":90,"pan":0})
$gameSwitches._data[429] = true;
};
};
var no = 50 - $gameVariables._data[518]
var name = "3d_background"
if($gameParty.hasItem($dataItems[305])){
$gameVariables._data[428] = 2;
$gameSwitches._data[603] = true;
$gameScreen.showPicture(no, name, 0, 0, 0, 100, 100, 155, 0);
}else{
$gameScreen.showPicture(no, name, 0, 0, 0, 100, 100, 255, 0);
}
return
};
if($gameSwitches._data[158]){
$gameSwitches._data[158] = false;
AudioManager.playSe({"name":"Absorb1","volume":90,"pitch":150,"pan":0})
$gameSwitches._data[872] = true;
};
};

Game_Map.prototype.leftSmart = function() {
$gameSwitches._data[88] = false;
$gameSwitches._data[160] = false;
$gameSwitches._data[136] = false;
$gameVariables._data[735] = 0;
$gameVariables._data[745] = 0;
$gameVariables._data[409] = 0;
this.left0all();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.left0all();
};
if($gameVariables._data[745] == 1){
$gameVariables._data[745] = 2;
this.left0all();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.left0all();
};
};
$gameVariables._data[735] = 0;
$gameVariables._data[745] = 0;
$gameSwitches._data[136] = false;
$gameSwitches._data[160] = false;
this.left1all();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.left1all();
};
if($gameVariables._data[745] == 1){
$gameVariables._data[745] = 2;
this.left1all();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.left1all();
};
};
$gameVariables._data[409] = 0;
$gameVariables._data[735] = 0;
$gameVariables._data[745] = 0;
$gameSwitches._data[136] = false;
$gameSwitches._data[160] = false;
this.left2all();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.left2all();
};
if($gameVariables._data[745] == 1){
$gameVariables._data[745] = 2;
this.left2all();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.left2all();
};
};
$gameVariables._data[735] = 0;
$gameVariables._data[745] = 0;
$gameSwitches._data[136] = false;
$gameSwitches._data[160] = false;
this.left3all();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.left3all();
};
if($gameVariables._data[745] == 1){
$gameVariables._data[745] = 2;
this.left3all();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.left3all();
};
};
$gameVariables._data[735] = 0;
$gameVariables._data[745] = 0;
$gameSwitches._data[136] = false;
$gameSwitches._data[160] = false;
this.left4all();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.left4all();
};
if($gameVariables._data[745] == 1){
$gameVariables._data[745] = 2;
this.left4all();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.left4all();
};
};
$gameVariables._data[735] = 0;
$gameVariables._data[745] = 0;
this.left5all();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.left5all();
};
if($gameVariables._data[745] == 1){
$gameVariables._data[745] = 2;
this.left5all();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.left5all();
};
};
$gameSwitches._data[136] = false;
this.leftSmartL();
};

Game_Map.prototype.leftSmartL = function() {
$gameSwitches._data[88] = false;
$gameVariables._data[735] = 0;
$gameVariables._data[745] = 0;
this.leftL2all();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.leftL2all();
};
if($gameVariables._data[745] == 1){
$gameVariables._data[745] = 2;
this.leftL2all();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.leftL2all();
};
};
$gameVariables._data[735] = 0;
$gameVariables._data[745] = 0;
this.leftL3all();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.leftL3all();
};
if($gameVariables._data[745] == 1){
$gameVariables._data[745] = 2;
this.leftL3all();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.leftL3all();
};
};
$gameVariables._data[735] = 0;
$gameVariables._data[745] = 0;
this.leftL4all();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.leftL4all();
};
if($gameVariables._data[745] == 1){
$gameVariables._data[745] = 2;
this.leftL4all();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.leftL4all();
};
};
$gameVariables._data[735] = 0;
$gameVariables._data[745] = 0;
this.leftL5all();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.leftL5all();
};
if($gameVariables._data[745] == 1){
$gameVariables._data[745] = 2;
this.leftL5all();
if($gameVariables._data[735] == 1){
$gameVariables._data[735] = 2;
this.leftL5all();
};
};
};

Game_Map.prototype.front_repeat5 = function() {
$gameSwitches._data[89] = false;
$gameVariables._data[526] = "front";
$gameVariables._data[534] = 0;
$gameVariables._data[543] = 0;
$gameVariables._data[523] = 5;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.directionId();
$gameMap.vartileId();
$gameMap.downfront4();
$gameMap.check_location_tileId();
if($gameSwitches._data[138]){
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[711]){
if($gameVariables._data[428] <= 4){
$gameSwitches._data[136] = true;
}else{
$gameSwitches._data[175] = true;
$gameMap.front5();
$gameMap.graphic_smart();
$gameSwitches._data[136] = true;
$gameMap.name_terrain();
$gameMap.pic_irustrator();
};
};
};
};

Game_Map.prototype.front_repeat4naname = function() {
$gameMap.directionId();
$gameVariables._data[543] = 0;
$gameVariables._data[534] = 0;
$gameSwitches._data[89] = false;
$gameVariables._data[523] = 4;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.vartileId();
$gameMap.check_location_tileId();
if($gameSwitches._data[138] && $gameVariables._data[428] > 4){
$gameSwitches._data[175] = true;
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[712] || $gamePlayer._direction == $gameVariables._data[713]){
$gameVariables._data[526] = "front";
if($gamePlayer._direction == $gameVariables._data[712]) $gameSwitches._data[89] = true;
$gameMap.front4();
if($gamePlayer._direction == $gameVariables._data[712]){
$gameVariables._data[520] = 448;
}else{
$gameVariables._data[520] -= 8;
};
$gameVariables._data[522] /= 10;
$gameMap.graphic_smart();
$gameMap.piller();
$gameMap.name_terrain();
if(!$gameSwitches._data[397]){
if($gameSwitches._data[89]){
if(!$gameSwitches._data[486]){
$gameMap.pic_irustrator();
$gameVariables._data[729] = $gameVariables._data[518];
$gameVariables._data[732] = 4;
};
}else{
if(!$gameSwitches._data[487]){
$gameMap.pic_irustrator();
$gameVariables._data[730] = $gameVariables._data[518];
$gameVariables._data[731] = 4;
};
};
};
$gameVariables._data[526] = "left";
$gameMap.graphic_smart();
$gameMap.leftNaname4_contents();
};
};
$gameMap.name_terrain();
$gameMap.pic_irustrator();
};

Game_Map.prototype.front_repeat4 = function() {
$gameSwitches._data[89] = false;
$gameVariables._data[526] = "front";
$gameVariables._data[534] = 0;
$gameVariables._data[543] = 0;
$gameVariables._data[523] = 4;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.directionId();
$gameMap.vartileId();
$gameMap.downfront4();
$gameMap.check_location_tileId();
if($gameSwitches._data[138]){
$gameSwitches._data[203] = false;
$gameSwitches._data[175] = true;
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[711]){
if($gameVariables._data[428] <= 3){
$gameSwitches._data[136] = true;
}else{
$gameMap.front4();
$gameMap.graphic_smart();
$gameSwitches._data[136] = true;
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0) $gameSwitches._data[397] = true;
$gameMap.name_terrain();
$gameMap.pic_irustrator();
$gameMap.downfront4();
$gameMap.smartEvents();
};
}else{
if($gamePlayer._direction == $gameVariables._data[710]){
if($gameSwitches._data[139]) return;
if($gameVariables._data[428] <= 4){
$gameSwitches._data[136] = true;
}else{
$gameMap.downfront4();
$gameMap.smartEvents();
$gameVariables._data[523] += 1;
$gameMap.graphic_smart();
$gameMap.downfront5();
$gameSwitches._data[203] = false;
$gameVariables._data[523] -= 1;
$gameSwitches._data[136] = true;
$gameMap.name_terrain();
$gameMap.pic_irustrator();
};
}else{
$gameMap.smartEvents();
};
};
}else{
$gameMap.smartEvents();
};
};

Game_Map.prototype.front_repeat3naname = function() {
$gameMap.directionId();
$gameVariables._data[543] = 0;
$gameVariables._data[534] = 0;
$gameSwitches._data[89] = false;
$gameVariables._data[523] = 3;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.vartileId();
$gameMap.check_location_tileId();
if($gameSwitches._data[138] && $gameVariables._data[428] > 3){
$gameSwitches._data[175] = true;
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[712] || $gamePlayer._direction == $gameVariables._data[713]){
$gameVariables._data[526] = "front";
if($gamePlayer._direction == $gameVariables._data[712]) $gameSwitches._data[89] = true;
$gameMap.front3();
if($gamePlayer._direction == $gameVariables._data[712]){
$gameVariables._data[520] = 496;
}else{
$gameVariables._data[520] -= 16;
};
$gameVariables._data[522] /= 10;
$gameMap.graphic_smart();
$gameMap.piller();
$gameMap.name_terrain();
if(!$gameSwitches._data[396]){
if($gameSwitches._data[89]){
if(!$gameSwitches._data[488]){
$gameMap.pic_irustrator();
$gameVariables._data[727] = $gameVariables._data[518];
};
$gameVariables._data[732] = 4;
}else{
if(!$gameSwitches._data[489]){
$gameMap.pic_irustrator();
$gameVariables._data[728] = $gameVariables._data[518];
};
$gameVariables._data[731] = 4;
};
};
$gameVariables._data[526] = "left";
$gameMap.graphic_smart();
$gameMap.leftNaname3_contents();
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0){
if($gameSwitches._data[89]){
$gameSwitches._data[486] = true;
}else{
$gameSwitches._data[487] = true;
};
};
};
};
$gameMap.name_terrain();
$gameMap.pic_irustrator();
};

Game_Map.prototype.front_repeat3 = function() {
taro=false
$gameSwitches._data[89] = false;
$gameVariables._data[526] = "front";
$gameVariables._data[534] = 0;
$gameVariables._data[543] = 0;
$gameVariables._data[523] = 3;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.directionId();
$gameMap.vartileId();
$gameMap.downfront3();
$gameMap.check_location_tileId();
if($gameSwitches._data[138]){
$gameSwitches._data[203] = false;
$gameSwitches._data[175] = true;
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[711]){
if($gameVariables._data[428] <= 2) return;
$gameMap.front3();
$gameMap.graphic_smart();
$gameSwitches._data[136] = true;
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0) $gameSwitches._data[396] = true;
$gameMap.name_terrain();
$gameMap.pic_irustrator();
$gameMap.downfront3();
$gameMap.smartEvents();
}else{
if($gamePlayer._direction == $gameVariables._data[710]){
if($gameSwitches._data[139]) return;
if($gameVariables._data[428] <= 3){
$gameSwitches._data[136] = true;
}else{
$gameMap.downfront3();
$gameMap.smartEvents();
$gameVariables._data[523] += 1;
$gameMap.graphic_smart();
$gameMap.downfront4();
taro=true
$gameSwitches._data[203] = false;
$gameVariables._data[523] -= 1;
$gameSwitches._data[136] = true;
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0) $gameSwitches._data[397] = true;
$gameMap.name_terrain();
$gameMap.pic_irustrator();
};
}else{
if(!$gameSwitches._data[136])$gameMap.smartEvents();
};
};
}else{
if(!$gameSwitches._data[136])$gameMap.smartEvents();
};
};

Game_Map.prototype.front_repeat2naname = function() {
$gameMap.directionId();
$gameVariables._data[543] = 0;
$gameVariables._data[534] = 0;
$gameSwitches._data[89] = false;
$gameVariables._data[523] = 2;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.vartileId();
$gameMap.check_location_tileId();
if($gameSwitches._data[138] && $gameVariables._data[428] > 2){
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[712] || $gamePlayer._direction == $gameVariables._data[713]){
$gameVariables._data[526] = "front";
if($gamePlayer._direction == $gameVariables._data[712]) $gameSwitches._data[89] = true;
$gameMap.front2();
if($gamePlayer._direction == $gameVariables._data[712]){
$gameVariables._data[520] = 592;
}else{
$gameVariables._data[520] -= 32;
};
$gameVariables._data[522] /= 10;
$gameMap.graphic_smart();
$gameMap.piller();
$gameMap.name_terrain();
if(!$gameSwitches._data[395]){
if($gameSwitches._data[89]){
if(!$gameSwitches._data[490]){
$gameMap.pic_irustrator();
$gameVariables._data[725] = $gameVariables._data[518];
$gameVariables._data[732] = 3;
};
}else{
if(!$gameSwitches._data[491]){
$gameMap.pic_irustrator();
$gameVariables._data[726] = $gameVariables._data[518];
$gameVariables._data[731] = 3;
};
};
};
$gameVariables._data[526] = "left";
$gameMap.graphic_smart();
$gameMap.leftNaname2_contents();
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0){
if($gameSwitches._data[89]){
$gameSwitches._data[488] = true;
}else{
$gameSwitches._data[489] = true;
};
};
};
};
$gameMap.name_terrain();
$gameMap.pic_irustrator();
};

Game_Map.prototype.front_repeat2 = function() {
$gameSwitches._data[89] = false;
$gameVariables._data[526] = "front";
$gameVariables._data[534] = 0;
$gameVariables._data[543] = 0;
$gameVariables._data[523] = 2;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.directionId();
$gameMap.vartileId();
$gameMap.downfront2();
$gameMap.check_location_tileId();
if($gameSwitches._data[138]){
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[711]){
if($gameVariables._data[428] <= 1) return;
$gameMap.front2();
if($gameVariables._data[428] >= 3)$gameSwitches._data[1038]=true;
$gameMap.graphic_smart();
$gameSwitches._data[136] = true;
$gameMap.name_terrain();
$gameMap.pic_irustrator();
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0) $gameSwitches._data[395] = true;
$gameMap.downfront2();
$gameMap.smartEvents();
}else{
if($gamePlayer._direction == $gameVariables._data[710]){
$gameMap.downfront2();
$gameMap.smartEvents();
if($gameVariables._data[428] <= 2) return;
if($gameSwitches._data[139]) return;
$gameVariables._data[523] += 1;
$gameMap.graphic_smart();
$gameMap.downfront3();
$gameSwitches._data[175] = true;
$gameSwitches._data[203] = false;
$gameVariables._data[523] -= 1;
$gameSwitches._data[136] = true;
$gameMap.name_terrain();
$gameMap.pic_irustrator();
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0) $gameSwitches._data[396] = true;
}else{
if(!$gameSwitches._data[136])$gameMap.smartEvents();
};
};
}else{
if(!$gameSwitches._data[136])$gameMap.smartEvents();
};
};

Game_Map.prototype.front_repeat1naname = function() {
$gameMap.directionId();
$gameVariables._data[543] = 0;
$gameVariables._data[534] = 0;
$gameSwitches._data[89] = false;
$gameVariables._data[523] = 1;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.vartileId();
$gameMap.check_location_tileId();
if($gameSwitches._data[138] && $gameVariables._data[428] > 1){
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[712] || $gamePlayer._direction == $gameVariables._data[713]){
$gameVariables._data[526] = "front";
if($gamePlayer._direction == $gameVariables._data[712]) $gameSwitches._data[89] = true;
$gameMap.front1();
if($gamePlayer._direction == $gameVariables._data[712]){
$gameVariables._data[520] = 784;
}else{
$gameVariables._data[520] -= 64;
};
$gameVariables._data[522] /= 10;
$gameSwitches._data[204] = true;
$gameMap.graphic_smart();
$gameSwitches._data[204] = false;
$gameMap.piller();
$gameMap.name_terrain();
if($gameSwitches._data[89]){
if(!$gameSwitches._data[492]){
$gameMap.pic_irustrator();
$gameVariables._data[723] = $gameVariables._data[518];
$gameVariables._data[732] = 2;
};
}else{
if(!$gameSwitches._data[493]){
$gameMap.pic_irustrator();
$gameVariables._data[724] = $gameVariables._data[518];
$gameVariables._data[731] = 2;
};
};
$gameVariables._data[526] = "left";
$gameMap.graphic_smart();
$gameMap.leftNaname1_contents();
$gameMap.name_terrain();
$gameVariables._data[521] += 3;
$gameMap.pic_irustrator();
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0){
if($gameSwitches._data[89]){
$gameSwitches._data[490] = true;
}else{
$gameSwitches._data[491] = true;
};
};
};
};
};

Game_Map.prototype.front_repeat1 = function(taru) {
$gameSwitches._data[89] = false;
$gameVariables._data[526] = "front";
$gameVariables._data[534] = 0;
$gameVariables._data[523] = 1;
$gameVariables._data[543] = 0;
$gameVariables._data[717] = 1;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.directionId();
$gameMap.vartileId();
$gameMap.downfront2();
$gameMap.check_location_tileId();
if($gameSwitches._data[138]){
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[711]){
$gameMap.front1();
$gameMap.graphic_smart();
$gameSwitches._data[136] = true;
$gameMap.name_terrain();
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0) $gameSwitches._data[394] = true;
$gameSwitches._data[1038]=true;
$gameMap.pic_irustrator();
$gameMap.downfront2();
$gameMap.smartEvents();
}else{
if($gamePlayer._direction == $gameVariables._data[710]){
$gameMap.downfront2();
console.log($gameVariables.value(789))
if($gameVariables.value(789).indexOf(1) < 0){
$gameVariables._data[789].push(1)
$gameMap.smartEvents();
}
if($gameVariables._data[428] <= 1) return;
if($gameSwitches._data[139]) return;
$gameVariables._data[523] += 1;
$gameMap.graphic_smart();
$gameMap.downfront2();
if($gameVariables._data[428] >= 3)$gameSwitches._data[1038]=true;
$gameMap.name_terrain();
$gameSwitches._data[203] = false;
$gameVariables._data[523] -= 1;
$gameSwitches._data[136] = true;
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0) $gameSwitches._data[395] = true;
$gameMap.pic_irustrator();
}else{
if(!$gameSwitches._data[136])$gameMap.smartEvents();
};
};
}else{
if(!$gameSwitches._data[136])$gameMap.smartEvents();
};
};

Game_Map.prototype.front_repeat0naname = function() {
$gameSwitches._data[89] = false;
$gameVariables._data[526] = "front";
$gameVariables._data[534] = 0;
$gameVariables._data[523] = 0;
$gameVariables._data[543] = 0;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.vartileId();
$gameMap.check_location_tileId();
if($gameSwitches._data[138]){
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[712] || $gamePlayer._direction == $gameVariables._data[713]){
if($gamePlayer._direction == $gameVariables._data[712]){
$gameSwitches._data[89] = true;
$gameVariables._data[732] = 1;
$gameVariables._data[196] = 1;
$gameSwitches._data[492] = true;
}else{
$gameVariables._data[731] = 1;
$gameVariables._data[197] = 1;
$gameSwitches._data[493] = true;
};
$gameVariables._data[526] = "left";
$gameMap.graphic_smart();
$gameVariables._data[520] = -240;
$gameMap.right_mirror();
$gameVariables._data[521] = -420;
$gameVariables._data[543] = 1;
$gameMap.left_percent();
$gameMap.name_terrain();
$gameVariables._data[521] += 6;
$gameMap.pic_irustrator();
};
};
};

Game_Map.prototype.front_repeat0 = function() {
$gameSwitches._data[394] = false;
$gameSwitches._data[395] = false;
$gameSwitches._data[396] = false;
$gameSwitches._data[397] = false;
$gameSwitches._data[89] = false;
$gameVariables._data[526] = "front";
$gameVariables._data[534] = 0;
$gameVariables._data[523] = 0;
$gameVariables._data[543] = 0;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.directionId();
$gameMap.vartileId();
$gameMap.downfront1();
$gameMap.check_location_tileId();
if($gameSwitches._data[138]){
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[710]){
$gameMap.smartEvents();
$gameVariables._data[523] += 1;
$gameMap.graphic_smart();
$gameMap.downfront1();
$gameVariables._data[523] -= 1;
$gameSwitches._data[136] = true;
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0) $gameSwitches._data[394] = true;
$gameMap.name_terrain();
$gameSwitches._data[1038]=true;
$gameMap.pic_irustrator();
}else{
$gameMap.name_terrain();
$gameMap.pic_irustrator();
};
}else{
$gameMap.smartEvents();
};
if(!$gameSwitches._data[136]) $gameMap.smartEvents();
};

Game_Map.prototype.leftL5all = function() {
$gameSwitches._data[495] = true;
$gameMap.directionId();
$gameSwitches._data[495] = false;
$gameVariables._data[534] = 0;
$gameVariables._data[526] = "front";
$gameVariables._data[523] = 5;
$gameVariables._data[543] = 2;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.vartileIdNanameL();
$gameMap.check_location_tileId();
if($gameSwitches._data[138]){
if($gameVariables._data[428] <= 5) return;
$gameSwitches._data[175] = true;
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[711]){
$gameVariables._data[526] = "front";
$gameMap.graphic_smart();
$gameMap.left5Lfront_contents();
$gameMap.name_terrain();
$gameMap.pic_irustrator();
$gameSwitches._data[632] = false;
};
};
};

Game_Map.prototype.leftL4all = function() {
$gameSwitches._data[495] = true;
$gameMap.directionId();
$gameSwitches._data[495] = false;
$gameVariables._data[534] = 0;
$gameVariables._data[526] = "front";
$gameVariables._data[523] = 4;
$gameVariables._data[543] = 2;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.vartileIdNanameL();
$gameMap.check_location_tileId();
if($gameSwitches._data[138]){
if($gameVariables._data[428] <= 4) return;
$gameSwitches._data[175] = true;
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[712] || $gamePlayer._direction == $gameVariables._data[713]){
if($gameVariables._data[716] == $gameVariables._data[715]) $gameMap.leftdownL4();
}else{
if($gamePlayer._direction == $gameVariables._data[711]){
$gameVariables._data[526] = "front";
$gameMap.graphic_smart();
$gameMap.left4Lfront_contents();
}else{
if($gamePlayer._direction == $gameVariables._data[710]){
if($gameVariables._data[428] <= 5) return;
$gameVariables._data[523] += 1;
$gameVariables._data[774] = $gameVariables._data[523];
$gameVariables._data[526] = "front";
$gameSwitches._data[632] = true;
$gameMap.graphic_smart();
$gameMap.left5Lfront_contents();
$gameVariables._data[523] -= 1;

};
};
};
};
$gameMap.name_terrain();
$gameMap.pic_irustrator();
$gameSwitches._data[632] = false;
};

Game_Map.prototype.leftL3all = function() {
$gameSwitches._data[495] = true;
$gameMap.directionId();
$gameSwitches._data[495] = false;
$gameVariables._data[534] = 0;
$gameVariables._data[526] = "front";
$gameVariables._data[523] = 3;
$gameVariables._data[543] = 2;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.vartileIdNanameL();
$gameMap.check_location_tileId();
if($gameSwitches._data[138]){
if($gameVariables._data[428] <= 3) return;
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[712] || $gamePlayer._direction == $gameVariables._data[713]){
if($gameVariables._data[716] == $gameVariables._data[715]) $gameMap.leftdownL3();
}else{
if($gamePlayer._direction == $gameVariables._data[711]){
$gameVariables._data[526] = "front";
$gameMap.graphic_smart();
$gameMap.left3Lfront_contents();
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0){
if($gameSwitches._data[89]){
$gameSwitches._data[485] = true;
if($gameVariables._data[736] >= 1){
var no = 50 - $gameVariables.value(736);
$gameScreen.erasePicture(no);
}
if($gameVariables._data[738] >= 1){
var no = 50 - $gameVariables.value(738);
$gameScreen.erasePicture(no);
}
}else{
$gameSwitches._data[484] = true;
if($gameVariables._data[737] >= 1){
var no = 50 - $gameVariables._data[737];
$gameScreen.erasePicture(no);
};
if($gameVariables._data[739] >= 1){
var no = 50 - $gameVariables.value(739);
$gameScreen.erasePicture(no);
};
};
};
}else{
if($gamePlayer._direction == $gameVariables._data[710]){
if($gameVariables._data[428] <= 4) return;
$gameVariables._data[523] += 1;
$gameVariables._data[774] = $gameVariables._data[523];
$gameVariables._data[526] = "front";
$gameSwitches._data[632] = true;
$gameMap.graphic_smart();
$gameMap.left4Lfront_contents();
$gameVariables._data[523] -= 1;
};
};
};
};
$gameMap.name_terrain();
$gameMap.pic_irustrator();
$gameSwitches._data[632] = false;
};

Game_Map.prototype.leftL2all = function() {
$gameSwitches._data[495] = true;
$gameMap.directionId();
$gameSwitches._data[495] = false;
$gameVariables._data[534] = 0;
$gameVariables._data[526] = "front";
$gameVariables._data[523] = 2;
$gameVariables._data[543] = 2;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.vartileIdNanameL();
$gameMap.check_location_tileId();
if($gameSwitches._data[138]){
if($gameVariables._data[428] <= 2) return;
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[712] || $gamePlayer._direction == $gameVariables._data[713]){
if($gameVariables._data[716] == $gameVariables._data[715]){
$gameMap.leftdownL2();
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0){
if($gameSwitches._data[89]){
$gameSwitches._data[483] = true;
if($gameVariables._data[736] >= 1){
var no = 50 - $gameVariables.value(736);
$gameScreen.erasePicture(no);
}
}else{
$gameSwitches._data[482] = true;
if($gameVariables._data[737] >= 1){
var no = 50 - $gameVariables._data[737];
$gameScreen.erasePicture(no);
};
};
};
};
}else{
if($gamePlayer._direction == $gameVariables._data[710]){
if($gameVariables._data[428] <= 3) return;
$gameVariables._data[523] += 1;
$gameVariables._data[774] = $gameVariables._data[523];
$gameSwitches._data[632] = true;
$gameVariables._data[526] = "front";
$gameSwitches._data[175] = true;
$gameMap.graphic_smart();
$gameSwitches._data[203] = false;
$gameMap.left3Lfront_contents();
$gameVariables._data[523] -= 1;
};
};
};
$gameMap.name_terrain();
$gameMap.pic_irustrator();
$gameSwitches._data[632] = false;
};

Game_Map.prototype.left5all = function() {
$gameSwitches._data[495] = true;
$gameMap.directionId();
$gameSwitches._data[495] = false;
$gameVariables._data[526] = "front";
$gameVariables._data[534] = 0;
$gameVariables._data[523] = 5;
$gameVariables._data[543] = 1;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.vartileIdNaname();
$gameVariables._data[763] = 0;
$gameMap.check_location_tileId();
if($gameSwitches._data[138]){
$gameSwitches._data[175] = true;
if($gameVariables._data[428] <= 4) return;
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[711]){
$gameMap.leftfront5_contents();
$gameMap.graphic_smart();
$gameMap.name_terrain();
$gameMap.pic_irustrator();
};
};
};

Game_Map.prototype.left4abovepart = function() {
if($gameSwitches._data[149]) return;
if($gameSwitches._data[139]){
$gameMap.smartEvents();
$gameMap.leftdownL4();
$gameMap.name_terrain();
$gameMap.pic_irustrator();
}else{
if($gameVariables._data[428] <= 4) return;
$gameMap.front4();
$gameVariables._data[522] /= 10;
$gameMap.graphic_smart();
$gameMap.piller();
if(!$gameSwitches._data[89]){
$gameVariables._data[547] = -8;
}else{
$gameVariables._data[547] = -4;
$gameVariables._data[520] = 444;
};
$gameMap.pos_adjust();
$gameMap.name_terrain();
if(!$gameSwitches._data[397]) $gameMap.pic_irustrator();
$gameVariables._data[526] = "left";
$gameMap.graphic_smart();
$gameMap.leftNaname4_contents();
$gameVariables._data[547] = 0;
if($gameSwitches._data[89]) $gameVariables._data[520] = 440;
$gameMap.pos_adjust();
$gameMap.name_terrain();
$gameMap.pic_irustrator();
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0){
if($gameSwitches._data[89]){
if($gameVariables._data[729] >= 1){
var no = 50 - $gameVariables.value(729);
$gameScreen.erasePicture(no);
}
}else{
if($gameVariables._data[730] >= 1){
var no = 50 - $gameVariables._data[730];
$gameScreen.erasePicture(no);
};
};
};
};
};

Game_Map.prototype.left4belowpart = function() {
if($gamePlayer._direction == $gameVariables._data[711]){
$gameMap.graphic_smart();
$gameMap.leftfront4_contents();
$gameMap.name_terrain();
$gameMap.pic_irustrator();
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0){
if($gameSwitches._data[89]){
if($gameVariables._data[729] >= 1){
var no = 50 - $gameVariables._data[729];
$gameScreen.erasePicture(no);
};
if($gameVariables._data[732] == 4) return;
}else{
if($gameVariables._data[730] >= 1){
var no = 50 - $gameVariables._data[730];
$gameScreen.erasePicture(no);
};
if($gameVariables._data[731] == 4) return;
};
};
$gameMap.leftNaname4_contents();
$gameSwitches._data[136] = false;
$gameVariables._data[522] /= 40;
$gameMap.piller();
$gameMap.name_terrain();
if(!$gameSwitches._data[397]){
if($gameSwitches._data[89]){
if(!$gameSwitches._data[486]){
$gameMap.pic_irustrator();
$gameVariables._data[729] = $gameVariables._data[518];
};
}else{
if(!$gameSwitches._data[487]){
$gameMap.pic_irustrator();
$gameVariables._data[730] = $gameVariables._data[518];
};
};
};
}else{
if($gamePlayer._direction == $gameVariables._data[710]){
if($gameVariables._data[428] <= 4) return;
$gameMap.smartEvents();
$gameVariables._data[523] += 1;
$gameMap.leftfront5_contents();
$gameMap.graphic_smart();
$gameMap.name_terrain();
$gameMap.pic_irustrator();
$gameVariables._data[523] -= 1;
};
};
};

Game_Map.prototype.left4all = function() {
$gameSwitches._data[495] = true;
$gameMap.directionId();
$gameSwitches._data[495] = false;
$gameVariables._data[526] = "front";
$gameVariables._data[534] = 0;
$gameVariables._data[523] = 4;
$gameVariables._data[543] = 1;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.vartileIdNaname();
$gameMap.leftfront5_contents();
$gameMap.check_location_tileId();
if($gameSwitches._data[138]){
$gameSwitches._data[175] = true;
if($gameVariables._data[428] <= 3) return;
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[712] || $gamePlayer._direction == $gameVariables._data[713]){
this.left4abovepart();
}else{
this.left4belowpart();
};
};
};

Game_Map.prototype.left3abovepart = function() {
if($gameSwitches._data[149]) return;
if($gameSwitches._data[139]){
$gameMap.smartEvents();
$gameMap.leftdownL3();
$gameMap.name_terrain();
$gameMap.pic_irustrator();
}else{
if($gameVariables._data[428] <= 3) return;
$gameMap.front3();
$gameVariables._data[522] /= 10;
$gameMap.graphic_smart();
$gameMap.piller();
$gameVariables._data[547] = -16;
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0){
if($gameSwitches._data[89]){
$gameVariables._data[520] = 480;
if($gameVariables._data[729] >= 1){
var no = 50 - $gameVariables.value(729);
$gameScreen.erasePicture(no);
}
$gameVariables._data[732] = 4;
}else{
if($gameVariables._data[730] >= 1){
var no = 50 - $gameVariables._data[730];
$gameScreen.erasePicture(no);
};
$gameVariables._data[731] = 4;
};
};
$gameMap.pos_adjust();
$gameMap.name_terrain();
if(!$gameSwitches._data[396]) $gameMap.pic_irustrator();
$gameVariables._data[526] = "left";
$gameMap.graphic_smart();
$gameMap.leftNaname3_contents();
$gameMap.name_terrain();
$gameMap.pic_irustrator();
};
};

Game_Map.prototype.left3belowpart = function() {
if($gamePlayer._direction == $gameVariables._data[711]){
$gameMap.graphic_smart();
$gameMap.leftfront3_contents();
$gameMap.name_terrain();
$gameMap.pic_irustrator();
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0){
if($gameSwitches._data[89]){
if($gameVariables._data[727] >= 1){
var no = 50 - $gameVariables._data[727];
$gameScreen.erasePicture(no);
};
if($gameVariables._data[732] == 3) return;
}else{
if($gameVariables._data[728] >= 1){
var no = 50 - $gameVariables._data[728];
$gameScreen.erasePicture(no);
};
if($gameVariables._data[731] == 3) return;
};
};
$gameMap.leftNaname3_contents();
$gameVariables._data[526] = "left";
$gameMap.graphic_smart();
$gameSwitches._data[136] = false;
$gameVariables._data[522] /= 20;
$gameMap.piller();
$gameMap.name_terrain();
if(!$gameSwitches._data[396]) $gameMap.pic_irustrator();
}else{
if($gamePlayer._direction == $gameVariables._data[710]){
if($gameVariables._data[428] <= 3) return;
$gameMap.smartEvents();
$gameVariables._data[523] += 1;
$gameMap.graphic_smart();
$gameMap.leftfront4_contents();
$gameMap.name_terrain();
$gameMap.pic_irustrator();
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0){
if($gameSwitches._data[89]){
$gameSwitches._data[485] = true;
if($gameVariables._data[729] >= 1){
var no = 50 - $gameVariables.value(729);
$gameScreen.erasePicture(no);
}
if($gameVariables._data[732] == 4) return;
}else{
$gameSwitches._data[484] = true;
if($gameVariables._data[730] >= 1){
var no = 50 - $gameVariables._data[730];
$gameScreen.erasePicture(no);
};
if($gameVariables._data[731] == 4) return;
};
};
$gameMap.leftNaname4_contents();
$gameVariables._data[526] = "left";
$gameMap.graphic_smart();
$gameSwitches._data[136] = false;
$gameVariables._data[522] /= 20;
$gameMap.piller();
$gameVariables._data[523] -= 1;
$gameMap.name_terrain();
if(!$gameSwitches._data[397]) $gameMap.pic_irustrator();
};
};
};


Game_Map.prototype.left3all = function() {
$gameSwitches._data[495] = true;
$gameMap.directionId();
$gameSwitches._data[495] = false;
$gameVariables._data[526] = "front";
$gameVariables._data[534] = 0;
$gameVariables._data[523] = 3;
$gameVariables._data[543] = 1;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.vartileIdNaname();
$gameMap.leftfront4_contents();
$gameMap.check_location_tileId();
if($gameSwitches._data[138]){
$gameSwitches._data[175] = true;
if($gameVariables._data[428] <= 2) return;
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[712] || $gamePlayer._direction == $gameVariables._data[713]){
this.left3abovepart();
}else{
this.left3belowpart();
};
}else{
$gameMap.smartEvents();
};
};

Game_Map.prototype.left2abovepart = function() {
if($gameSwitches._data[149]) return;
if($gameVariables._data[428] <= 2) return;
if($gameSwitches._data[139]){
$gameMap.leftdownL2();
$gameMap.name_terrain();
$gameMap.pic_irustrator();
}else{
$gameMap.front2();
$gameVariables._data[522] /= 10;
$gameMap.graphic_smart();
$gameMap.piller();
$gameVariables._data[547] = -32;
$gameMap.pos_adjust();
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0){
if($gameSwitches._data[89]){
$gameVariables._data[520] = 592;
if($gameVariables._data[727] >= 1){
var no = 50 - $gameVariables.value(727);
$gameScreen.erasePicture(no);
}
$gameVariables._data[732] = 3;
}else{
if($gameVariables._data[728] >= 1){
var no = 50 - $gameVariables._data[728];
$gameScreen.erasePicture(no);
};
$gameVariables._data[731] = 3;
};
};
$gameMap.name_terrain();
if(!$gameSwitches._data[395]){
if($gameSwitches._data[89]){
if(!$gameSwitches._data[490]) $gameMap.pic_irustrator();
}else{
if(!$gameSwitches._data[491]) $gameMap.pic_irustrator();
};
};
$gameVariables._data[526] = "left";
$gameMap.graphic_smart();
$gameMap.leftNaname2_contents();
$gameMap.name_terrain();
$gameMap.pic_irustrator();
};
};

Game_Map.prototype.left2belowpart = function() {
if($gamePlayer._direction == $gameVariables._data[711]){
$gameMap.graphic_smart();
$gameMap.leftfront2_contents();
$gameMap.name_terrain();
$gameMap.pic_irustrator();
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0){
if($gameSwitches._data[89]){
if($gameVariables._data[725] >= 1){
var no = 50 - $gameVariables._data[725];
$gameScreen.erasePicture(no);
};
if($gameVariables._data[732] == 2){
$gameMap.leftfront3_contents();
return;
};
}else{
if($gameVariables._data[726] >= 1){
var no = 50 - $gameVariables._data[726];
$gameScreen.erasePicture(no);
};
if($gameVariables._data[731] == 2){
$gameMap.leftfront3_contents();
return;
};
};
};
$gameVariables._data[526] = "left";
$gameMap.graphic_smart();
$gameMap.leftNaname2_contents();
$gameSwitches._data[136] = false;
$gameVariables._data[522] /= 20;
$gameMap.piller();
$gameMap.name_terrain();
if(!$gameSwitches._data[395]){
if($gameSwitches._data[89]){
if(!$gameSwitches._data[490]) $gameMap.pic_irustrator();
}else{
if(!$gameSwitches._data[491]) $gameMap.pic_irustrator();
};
};
$gameMap.leftfront3_contents();
}else{
if($gamePlayer._direction == $gameVariables._data[710]){
if($gameVariables._data[428] <= 2) return;
$gameVariables._data[523] += 1;
$gameMap.graphic_smart();
$gameSwitches._data[203] = false;
$gameSwitches._data[175] = true;
$gameMap.leftfront3_contents();
$gameMap.name_terrain();
$gameMap.pic_irustrator();
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0){
$gameSwitches._data[396] = true;
if($gameSwitches._data[89]){
$gameSwitches._data[483] = true;
}else{
$gameSwitches._data[482] = true;
};
};
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0){
if($gameSwitches._data[89]){
if($gameVariables._data[727] >= 1){
var no = 50 - $gameVariables._data[727];
$gameScreen.erasePicture(no);
};
if($gameVariables._data[732] == 3) return;
}else{
if($gameVariables._data[728] >= 1){
var no = 50 - $gameVariables._data[728];
$gameScreen.erasePicture(no);
};
if($gameVariables._data[731] == 3){
//$gameMap.leftfront3_contents();
//$gameMap.smartEvents();
return;
};
};
};
$gameMap.leftNaname3_contents();
$gameVariables._data[526] = "left";
$gameMap.graphic_smart();
$gameSwitches._data[136] = false;
$gameVariables._data[522] /= 20;
$gameMap.piller();
$gameVariables._data[523] -= 1;
$gameMap.name_terrain();
if(!$gameSwitches._data[396]) $gameMap.pic_irustrator();
};
};
};


Game_Map.prototype.left2all = function() {
$gameSwitches._data[495] = true;
$gameMap.directionId();
$gameSwitches._data[495] = false;
$gameVariables._data[526] = "front";
$gameVariables._data[534] = 0;
$gameVariables._data[523] = 2;
$gameVariables._data[543] = 1;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.vartileIdNaname();
$gameMap.leftfront3_contents();
$gameMap.check_location_tileId();
if($gameSwitches._data[138]){
if($gameVariables._data[428] <= 1) return;
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[712] || $gamePlayer._direction == $gameVariables._data[713]){
if($gameVariables._data[409]==0){
$gameVariables._data[411] = $gameVariables._data[518]
//$gameMap.smartEvents();
if($gameVariables._data[411] != $gameVariables._data[518]){
if(!$gameSwitches._data[139])$gameVariables._data[409] = $gameVariables._data[518]
}
}
this.left2abovepart();
if($gameVariables._data[409] >= 1){
var no = 50 - $gameVariables.value(409);
$gameScreen.erasePicture(no);
}
}else{
this.left2belowpart();
};
}else{
$gameMap.smartEvents();
};
};

Game_Map.prototype.left1all = function() {
$gameSwitches._data[495] = true;
$gameMap.directionId();
$gameSwitches._data[495] = false;
$gameVariables._data[526] = "front";
$gameVariables._data[534] = 0;
$gameVariables._data[523] = 1;
$gameVariables._data[543] = 1;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.vartileIdNaname();
$gameMap.leftfront2_contents();
$gameMap.check_location_tileId();
if($gameSwitches._data[138]){
if($gameVariables._data[428] <= 1) return;
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[712] || $gamePlayer._direction == $gameVariables._data[713]){
if($gameSwitches._data[149]){
//$gameMap.smartEvents();
return;
};
if($gameSwitches._data[139]){
$gameMap.smartEvents();
return;
};
if($gameSwitches._data[149]){
$gameMap.smartEvents();
return;
};
$gameMap.front1();
$gameVariables._data[522] /= 10;
$gameMap.graphic_smart();
$gameMap.piller();
$gameVariables._data[547] = -64;
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0){
if($gameSwitches._data[89]){
$gameVariables._data[520] = 720;
if($gameVariables._data[725] >= 1){
var no = 50 - $gameVariables.value(725);
$gameScreen.erasePicture(no);
}
if($gameVariables._data[723] >= 1){
var no = 50 - $gameVariables.value(723);
$gameScreen.erasePicture(no);
}
$gameVariables._data[732] = 2;
}else{
if($gameVariables._data[726] >= 1){
var no = 50 - $gameVariables._data[726];
$gameScreen.erasePicture(no);
}
if($gameVariables._data[724] >= 1){
var no = 50 - $gameVariables._data[724];
$gameScreen.erasePicture(no);
}
$gameVariables._data[731] = 2;
};
};
$gameMap.pos_adjust();
$gameMap.name_terrain();
if(!$gameSwitches._data[394]) $gameMap.pic_irustrator();
$gameVariables._data[526] = "left";
$gameMap.graphic_smart();
$gameMap.leftNaname1_contents();
$gameMap.name_terrain();
$gameMap.pic_irustrator();
if($gameVariables._data[726] >= 1){
var no = 50 - $gameVariables.value(726);
$gameScreen.erasePicture(no);
}
if($gameVariables._data[725] >= 1){
var no = 50 - $gameVariables._data[725];
$gameScreen.erasePicture(no);
};
}else{
if($gamePlayer._direction == $gameVariables._data[711]){
$gameMap.graphic_smart();
$gameMap.leftfront1_contents();
$gameMap.name_terrain();
$gameMap.pic_irustrator();
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0){
if($gameSwitches._data[89]){
if($gameVariables._data[723] >= 1){
var no = 50 - $gameVariables._data[723];
$gameScreen.erasePicture(no);
};
if($gameVariables._data[732] == 1) return;
}else{
if($gameVariables._data[724] >= 1){
var no = 50 - $gameVariables._data[724];
$gameScreen.erasePicture(no);
};
if($gameVariables._data[731] == 1){
$gameMap.leftfront2_contents();
$gameMap.smartEvents();
};
};
};
$gameVariables._data[526] = "left";
$gameMap.graphic_smart();
$gameMap.leftNaname1_contents();
$gameSwitches._data[136] = false;
$gameVariables._data[522] /= 20;
$gameMap.piller();
$gameMap.name_terrain();
if(!$gameSwitches._data[394]) $gameMap.pic_irustrator();
$gameMap.leftfront2_contents();
}else{
if($gamePlayer._direction == $gameVariables._data[710]){
if($gameVariables._data[428] <= 1) return;
$gameMap.smartEvents();
$gameVariables._data[523] += 1;
$gameMap.graphic_smart();
$gameMap.leftfront2_contents();
$gameMap.name_terrain();
$gameMap.pic_irustrator();
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0){
if($gameSwitches._data[89]){
if($gameVariables._data[725] >= 1){
var no = 50 - $gameVariables._data[725];
$gameScreen.erasePicture(no);
};
if($gameVariables._data[732] == 2) return;
}else{
if($gameVariables._data[726] >= 1){
var no = 50 - $gameVariables._data[726];
$gameScreen.erasePicture(no);
};
if($gameVariables._data[731] == 2) return;
};
};
$gameVariables._data[526] = "left";
$gameMap.graphic_smart();
$gameMap.leftNaname2_contents();
$gameSwitches._data[136] = false;
$gameVariables._data[522] /= 20;
$gameMap.piller();
$gameVariables._data[523] -= 1;
$gameMap.name_terrain();
if(!$gameSwitches._data[395]){
if($gameSwitches._data[89]){
if(!$gameSwitches._data[490]) $gameMap.pic_irustrator();
}else{
if(!$gameSwitches._data[491]) $gameMap.pic_irustrator();
};
};
};
};
};
}else{
$gameMap.smartEvents();
};
};

Game_Map.prototype.left0all = function() {
$gameSwitches._data[495] = true;
$gameMap.directionId();
$gameSwitches._data[495] = false;
$gameVariables._data[526] = "front";
$gameVariables._data[534] = 0;
$gameVariables._data[523] = 0;
$gameVariables._data[543] = 1;
$gameMap.world_restriction();
if($gameSwitches._data[172]) return;
$gameMap.vartileIdNaname();
$gameMap.leftfront1_contents();
$gameMap.check_location_tileId();
if($gameSwitches._data[138]){
if($gameVariables._data[409]==0){
$gameVariables._data[411] = $gameVariables._data[518]
$gameMap.smartEvents();
if($gameVariables._data[411] != $gameVariables._data[518]){
$gameVariables._data[409] = $gameVariables._data[518]
}
}
$gameMap.directionId();
if($gamePlayer._direction == $gameVariables._data[712] || $gamePlayer._direction == $gameVariables._data[713]){
if($gameSwitches._data[139]){
 return;
 }
$gameVariables._data[526] = "left";
$gameMap.graphic_smart();
$gameMap.leftNaname0_contents();
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0){
if($gameSwitches._data[89]){
if($gameVariables._data[723] >= 1){
var no = 50 - $gameVariables.value(723);
$gameScreen.erasePicture(no);
}
$gameVariables._data[732] = 1;
}else{
if($gameVariables._data[724] >= 1){
var no = 50 - $gameVariables._data[724];
$gameScreen.erasePicture(no);
}
$gameVariables._data[731] = 1;
};
};
$gameMap.name_terrain();
$gameMap.pic_irustrator();
if($gameVariables._data[409] >= 1){
var no = 50 - $gameVariables.value(409);
$gameScreen.erasePicture(no);
}
$gameSwitches._data[136] = true;
}else{
if($gamePlayer._direction == $gameVariables._data[710]){
$gameVariables._data[523] += 1;
$gameMap.graphic_smart();
$gameMap.leftfront1_contents();
$gameMap.name_terrain();
$gameMap.pic_irustrator();
$gameVariables._data[526] = "left";
$gameMap.graphic_smart();
$gameMap.leftNaname1_contents();
$gameSwitches._data[136] = false;
$gameVariables._data[522] /= 20;
$gameMap.piller();
$gameVariables._data[523] -= 1;
$gameMap.name_terrain();
if($gameVariables._data[534] != "tome" && $gameVariables._data[534] != 0){
if($gameSwitches._data[89]){
if($gameVariables._data[723] >= 1){
var no = 50 - $gameVariables._data[723];
$gameScreen.erasePicture(no);
};
if($gameVariables._data[196] == 1) return;
if($gameVariables._data[732] == 1) return;
}else{
if($gameVariables._data[724] >= 1){
var no = 50 - $gameVariables._data[724];
$gameScreen.erasePicture(no);
};
if($gameVariables._data[197] == 1) return;
if($gameVariables._data[731] == 1) return;
};
};
$gameMap.pic_irustrator();
};
};
}else{
$gameMap.smartEvents();
};
};


Game_Map.prototype.leftdownL2 = function() {
if($gameVariables._data[428] <= 2) return;
$gameVariables._data[526] = "left";
$gameMap.graphic_smart();
$gameMap.left2Lnaname_contents();
};

Game_Map.prototype.leftdownL3 = function() {
if($gameVariables._data[428] <= 3) return;
$gameVariables._data[526] = "front";
$gameMap.graphic_smart();
$gameSwitches._data[137] = true;
$gameMap.front3();
$gameSwitches._data[137] = false;
$gameVariables._data[522] /= 40;
$gameMap.piller();
$gameVariables._data[547] = -170;
if($gameSwitches._data[89]) $gameVariables._data[520] = 482;
$gameMap.pos_adjust();
$gameMap.name_terrain();
if($gameSwitches._data[89]){
if(!$gameSwitches._data[483]){
$gameMap.pic_irustrator();
$gameVariables._data[736] = $gameVariables._data[518];
};
if($gameVariables._data[738] >= 1){
var no = 50 - $gameVariables.value(738);
$gameScreen.erasePicture(no);
};
}else{
if(!$gameSwitches._data[482]){
$gameMap.pic_irustrator();
$gameVariables._data[737] = $gameVariables._data[518];
};
if($gameVariables._data[739] >= 1){
var no = 50 - $gameVariables.value(739);
$gameScreen.erasePicture(no);
};
};
$gameVariables._data[526] = "left";
$gameMap.graphic_smart();
$gameMap.left3Lnaname_contents();
};

Game_Map.prototype.leftdownL4 = function() {
if($gameVariables._data[428] <= 4) return;
$gameVariables._data[526] = "front";
$gameMap.graphic_smart();
$gameSwitches._data[137] = true;
$gameMap.front4();
$gameSwitches._data[137] = false;
$gameVariables._data[522] /= 40;
$gameMap.piller();
$gameVariables._data[547] = -85;
if($gameSwitches._data[89]) $gameVariables._data[520] = 441;
$gameMap.pos_adjust();
$gameMap.name_terrain();
if($gameSwitches._data[89]){
if(!$gameSwitches._data[485]){
$gameMap.pic_irustrator();
$gameVariables._data[738] = $gameVariables._data[518];
};
}else{
if(!$gameSwitches._data[484]){
$gameMap.pic_irustrator();
$gameVariables._data[739] = $gameVariables._data[518];
};
};
$gameVariables._data[526] = "left";
$gameMap.graphic_smart();
$gameMap.left4Lnaname_contents();
};

Game_Map.prototype.piller = function() {
if($gameSwitches._data[8]){
if($gameVariables._data[437]>=1){
$gameVariables._data[534] = "haiwood";
}else{
if($gameSwitches._data[739]){
$gameVariables._data[534] = "plwood";
}else{
if($gameSwitches._data[445]){
$gameVariables._data[534] = "rock";
}else{
if($gameSwitches._data[420]){
$gameVariables._data[534] = "swood";
}else{
if($gameSwitches._data[1000]){
$gameVariables._data[534] = "mwood";
}else{
$gameVariables._data[534] = "wood";
};
};
};
};
};
if($gameSwitches._data[729]){
$gameVariables._data[534] = "rock";
}
if($gameVariables._data[751] == 95 || $gameVariables._data[751] == 90 ||
$gameVariables._data[751] == 27) $gameVariables._data[534] = "stone";
if($gameVariables._data[751] >= 86 && $gameVariables._data[751] <= 89) $gameVariables._data[534] = "tome";
if($gameVariables._data[751] == 84) $gameVariables._data[534] = "wood";
if($gameVariables._data[751] == 83 || $gameVariables._data[751] == 92) $gameVariables._data[534] = "tome";
if($gameVariables._data[751] == 63) $gameVariables._data[534] = "ugomeki";
if($gameVariables._data[751] == 62) $gameVariables._data[534] = "rock";
if($gameVariables._data[751] >= 52 && $gameVariables._data[751] <= 55) $gameVariables._data[534] = "tome";
if($gameVariables._data[751] == 48 || $gameVariables._data[751] == 47 ||
$gameVariables._data[751] == 45 || $gameVariables._data[751] == 39 || $gameVariables._data[751] == 88){ 
$gameVariables._data[534] = "tome";
};
if($gameVariables._data[751] == 44 || $gameVariables._data[751] == 33 ||
$gameVariables._data[751] == 62){
if($gameSwitches._data[420]){
 $gameVariables._data[534] = "rocksnow";
}else{
 $gameVariables._data[534] = "rock";
 }
}
if($gameVariables._data[751] == 30 || $gameVariables._data[751] == 36 ||
$gameVariables._data[751] == 37) $gameVariables._data[534] = "transp";
if($gameVariables._data[751] == 34 || $gameVariables._data[751] == 35) $gameVariables._data[534] = "ruinwall";
}else{
if($gameSwitches._data[629]){
$gameVariables._data[534] == "bwall";
}else{
if($gameSwitches._data[392]){
$gameVariables._data[534] == "drock";
}else{
$gameVariables._data[534] == "wall";
};
};
};
};

Game_Map.prototype.pos_adjust = function() {
if($gameSwitches._data[89]) $gameVariables._data[547] *= -1;
$gameVariables._data[520] += $gameVariables._data[547];
};

Game_Map.prototype.smartEvents = function() {
if(!$gameSwitches._data[160]){
$gameMap.pic_excute_events();
$gameVariables._data[534] = 0;
};
};



Game_Party.prototype.scopeFight = function(num, sneak) {
	var actor = false;
	var n = $gameParty.members().length;
	var point = 0;
	for (var i = 0; i < n; i++) {
	actor = this.members()[i]
	if(actor){
	point += actor._searchPow;
	if(actor.isStateAffected(216)){
	point += 2;
	point *= 2;
	}
	if(this.narrowedScope($gameParty.members()[i]._actorId))point /= 2
	if(sneak&&$gameParty.members()[i].isStateAffected(49))point *= 2
	if(sneak&&$gameParty.members()[i].isStateAffected(90)&&$gameSwitches.value(8))point *= 2
	}
	}
	point /= n;
	point += 1;
	var es = $dataMap.events[num].meta.scope;
	if(!es)es=0;
	es += $gameVariables._data[426];
	es += Math.randomInt(7) - 3;
	point-=es;
	return point;
};

Game_Party.prototype.enemyVisible = function(num) {
	if($gameSwitches.value(286))return true;
	var point = $gameParty.scopeFight(num, false);
	var x = $gameMap._events[num].x - $gamePlayer.x
	if(x < 0)x*=-1;
	var y = $gameMap._events[num].y - $gamePlayer.y
	if(y < 0)y*=-1;
	x+=y;
	if($gameSwitches._data[311])x=1
	if(x<7){
	if(x==0)return true;
	if(x==1&&point>=-3)return true;
	if(x==2&&point>=0)return true;
	if(x==3&&point>=3)return true;
	if(x==4&&point>=6)return true;
	if(x==5&&point>=9)return true;
	if(x==6&&point>=12)return true;
	}
	return false;
};

Game_Party.prototype.someSneaking = function(num) {
	var point = $gameParty.scopeFight(num, true);
	var x = $gameMap._events[num].x - $gamePlayer.x
	if(x < 0)x*=-1;
	var y = $gameMap._events[num].y - $gamePlayer.y
	if(y < 0)y*=-1;
	x+=y;
	if(x>=0&&point>=12)return true;
	if(x>=1&&point>=9)return true;
	if(x>=2&&point>=6)return true;
	if(x>=3&&point>=3)return true;
	if(x>=4&&point>=0)return true;
	if(x>=5&&point>=-3)return true;
	if(x>=6)return true;
	return false;
};

Game_Party.prototype.isScoping = function(num) {
	return this.members().some(function(actor) {
        return actor.isStateAffected(225);
    });
};


Game_Map.prototype.underPart = function(num) {
if($dataMap.events[num].meta.dosha &&
!$gameSelfSwitches.value([this._mapId, num, "B"]) &&
$gameSelfSwitches.value([this._mapId, num, "C"])){
$gameVariables._data[519] = "3d_dosha";
$gameMap.draw_events();
};
if($dataMap.events[num].meta.thief &&
$gameSwitches._data[107] &&
!$gameSelfSwitches.value([this._mapId, num, "A"]) &&
!$gameSelfSwitches.value([this._mapId, num, "B"]) &&
$gameSelfSwitches.value([this._mapId, num, "C"])){
$gameVariables._data[519] = "3d_enemy";
$gameMap.draw_events();
};
if($dataMap.events[num].meta.fixedEnemy &&
$gameParty.enemyVisible(num) &&
!$gameSelfSwitches.value([this._mapId, num, "A"]) &&
!$gameSelfSwitches.value([this._mapId, num, "B"])){
$gameSwitches._data[168] = true;
if($gameParty.someSneaking(num)){
$gameVariables._data[519] = "3d_enemy00";
}else{
$gameVariables._data[519] = "3d_enemyred00";
}
if($dataMap.events[num].meta.redEnemy)$gameVariables._data[519] = "3d_enemyred00";
$gameMap.draw_events();
$gameSwitches._data[168] = false;
};
if($dataMap.events[num].meta.enemy &&
!$gameSelfSwitches.value([this._mapId, num, "A"]) &&
!$gameSelfSwitches.value([this._mapId, num, "B"]) &&
$gameSelfSwitches.value([this._mapId, num, "C"])){
$gameVariables._data[519] = "3d_enemy";
$gameMap.draw_events();
};
if($dataMap.events[num].meta.flower &&
!$gameSelfSwitches.value([this._mapId, num, "B"]) &&
$gameSelfSwitches.value([this._mapId, num, "C"])){
$gameVariables._data[519] = "3d_flower";
$gameMap.draw_events();
};

if($dataMap.events[num].meta.chest){
$gameSwitches._data[258] = false;
if($gameSelfSwitches.value([this._mapId, num, "C"])){
if(!$gameSelfSwitches.value([this._mapId, num, "B"])){
if($gameSwitches._data[8]){
$gameVariables._data[519] = "3d_chest_small";
}else{
$gameVariables._data[519] = "3d_chest";
};
$gameMap.draw_events();
};
};
};

if($dataMap.events[num].meta.rbox){
$gameSwitches._data[258] = false;
if($dataMap.events[num].meta.rbox) this.checkSecret();
if($gameSwitches._data[258]){
if(!$gameSelfSwitches.value([this._mapId, num, "B"])){
$gameSwitches._data[168] = true;
$gameVariables._data[519] = "3d_paca00";
$gameMap.draw_events();
$gameSwitches._data[168] = false;
};
};
};

if($dataMap.events[num].meta.green &&
!$gameSelfSwitches.value([this._mapId, num, "B"]) &&
!$gameSelfSwitches.value([this._mapId, num, "A"])){
$gameVariables._data[519] = "3d_paca00";
$gameSwitches._data[168] = true;
$gameMap.draw_events();
$gameSwitches._data[168] = false;
};
if($dataMap.events[num].meta.mstn &&
!$gameSelfSwitches.value([this._mapId, num, "B"])){
$gameVariables._data[519] = "3d_mineral_magic";
$gameMap.draw_events();
};
$gameSwitches._data[258] = false;
if($dataMap.events[num].meta.jade) this.checkSecret();
if($gameSwitches._data[258] && !$gameSelfSwitches.value([this._mapId, num, "B"])){
$gameVariables._data[519] = "3d_mineral_jade";
$gameMap.draw_events();
};
$gameSwitches._data[258] = false;
if($dataMap.events[num].meta.misril) this.checkSecret();
if($gameSwitches._data[258] && !$gameSelfSwitches.value([this._mapId, num, "B"])){
$gameVariables._data[519] = "3d_mineral_misril";
$gameMap.draw_events();
};
if($dataMap.events[num].meta.black &&
!$gameSelfSwitches.value([this._mapId, num, "B"])){
$gameVariables._data[519] = "3d_mineral_black";
$gameMap.draw_events();
};
if($dataMap.events[num].meta.ido &&
!$gameSelfSwitches.value([this._mapId, num, "B"]) &&
$gameSelfSwitches.value([this._mapId, num, "C"])){
if($gameSwitches._data[9]){
$gameVariables._data[519] = "3d_ido";
}else{
$gameVariables._data[519] = "3d_idorock";
};
$gameMap.draw_events();
};
if($dataMap.events[num].meta.ladder &&
!$gameSelfSwitches.value([this._mapId, num, "B"]) &&
$gameSelfSwitches.value([this._mapId, num, "C"])){
$gameVariables._data[519] = "3d_ladder";
$gameMap.draw_events();
};
if($dataMap.events[num].meta.todai &&
!$gameSelfSwitches.value([this._mapId, num, "B"])){
$gameVariables._data[519] = "3d_todai";
$gameMap.draw_events();
};
if($dataMap.events[num].meta.npc &&
!$gameSelfSwitches.value([this._mapId, num, "B"]) &&
$gameSelfSwitches.value([this._mapId, num, "C"])){
if($gameSwitches._data[8]){
$gameVariables._data[519] = "3d_npc_small";
}else{
$gameVariables._data[519] = "3d_npc";
};
$gameMap.draw_events();
};
if($dataMap.events[num].meta.pica00 &&
!$gameSelfSwitches.value([this._mapId, num, "A"]) &&!$gameSelfSwitches.value([this._mapId, num, "B"]) &&
$gameSelfSwitches.value([this._mapId, num, "C"])){
$gameVariables._data[519] = "3d_pica00";
$gameSwitches._data[168] = true;
$gameMap.draw_events();
$gameSwitches._data[168] = false;
};
if($dataMap.events[num].meta.lball00 &&
!$gameSelfSwitches.value([this._mapId, num, "B"]) &&
$gameSelfSwitches.value([this._mapId, num, "C"])){
$gameVariables._data[519] = "3d_lball00";
$gameSwitches._data[168] = true;
$gameMap.draw_events();
$gameSwitches._data[168] = false;
};
if($dataMap.events[num].meta.greenball00 &&
!$gameSelfSwitches.value([this._mapId, num, "B"]) &&
$gameSelfSwitches.value([this._mapId, num, "C"])){
$gameVariables._data[519] = "3d_greenball00";
$gameSwitches._data[168] = true;
$gameMap.draw_events();
$gameSwitches._data[168] = false;
};
if($dataMap.events[num].meta.redball00 &&
!$gameSelfSwitches.value([this._mapId, num, "B"]) &&
$gameSelfSwitches.value([this._mapId, num, "C"])){
$gameVariables._data[519] = "3d_redball00";
$gameSwitches._data[168] = true;
$gameMap.draw_events();
$gameSwitches._data[168] = false;
};
if($dataMap.events[num].meta.circle &&
!$gameSelfSwitches.value([this._mapId, num, "B"]) &&
$gameSelfSwitches.value([this._mapId, num, "C"])){
$gameVariables._data[519] = "3d_circle";
$gameMap.draw_events();
};
if($dataMap.events[num].meta.ev &&
!$gameSelfSwitches.value([this._mapId, num, "B"]) &&
$gameSelfSwitches.value([this._mapId, num, "C"])){
$gameVariables._data[519] = "3d_event";
$gameMap.draw_events();
};
};

Game_Map.prototype.kaidan = function(num) {
if($dataMap.events[num].meta.kaidan_west &&
!$gameSelfSwitches.value([this._mapId, num, "B"]) &&
$gameSelfSwitches.value([this._mapId, num, "C"])){
if($gameVariables._data[523] == 2 && $gameVariables._data[543] != 0){
if($gameSwitches._data[89]){
$gameVariables._data[529] += 40;
}else{
$gameVariables._data[529] -= 40;
};
};
if($gamePlayer._direction == 6) $gameVariables._data[519] = "3d_stairs_front";
if($gamePlayer._direction == 4) $gameVariables._data[519] = "3d_stone_front";
if($gamePlayer._direction == 2){
if($gameSwitches._data[89]){
$gameVariables._data[519] = "3d_kaidan_side2";
}else{
$gameVariables._data[519] = "3d_kaidan_side";
};
}
if($gamePlayer._direction == 8){
if($gameSwitches._data[89]){
$gameVariables._data[519] = "3d_kaidan_side";
}else{
$gameVariables._data[519] = "3d_kaidan_side2";
};
};
$gameMap.draw_events();
};
if($dataMap.events[num].meta.kaidan_east &&
!$gameSelfSwitches.value([this._mapId, num, "B"]) &&
$gameSelfSwitches.value([this._mapId, num, "C"])){
if($gameVariables._data[523] == 2 && $gameVariables._data[543] != 0){
if($gameSwitches._data[89]){
$gameVariables._data[529] += 40;
}else{
$gameVariables._data[529] -= 40;
};
};
if($gamePlayer._direction == 4) $gameVariables._data[519] = "3d_stairs_front";
if($gamePlayer._direction == 6) $gameVariables._data[519] = "3d_stone_front";
if($gamePlayer._direction == 8){
if($gameSwitches._data[89]){
$gameVariables._data[519] = "3d_kaidan_side2";
}else{
$gameVariables._data[519] = "3d_kaidan_side";
};
}
if($gamePlayer._direction == 2){
if($gameSwitches._data[89]){
$gameVariables._data[519] = "3d_kaidan_side";
}else{
$gameVariables._data[519] = "3d_kaidan_side2";
};
};
$gameMap.draw_events();
};
if($dataMap.events[num].meta.kaidan_south &&
!$gameSelfSwitches.value([this._mapId, num, "B"]) &&
$gameSelfSwitches.value([this._mapId, num, "C"])){
if($gameVariables._data[523] == 2 && $gameVariables._data[543] != 0){
if($gameSwitches._data[89]){
$gameVariables._data[529] += 40;
}else{
$gameVariables._data[529] -= 40;
};
};
if($gamePlayer._direction == 8) $gameVariables._data[519] = "3d_wall_front";
if($gamePlayer._direction == 2) $gameVariables._data[519] = "3d_stairs_front";
if($gamePlayer._direction == 6){
if($gameSwitches._data[89]){
$gameVariables._data[519] = "3d_kaidan_side2";
}else{
$gameVariables._data[519] = "3d_kaidan_side";
};
}
if($gamePlayer._direction == 4){
if($gameSwitches._data[89]){
$gameVariables._data[519] = "3d_kaidan_side";
}else{
$gameVariables._data[519] = "3d_kaidan_side2";
};
};
$gameMap.draw_events();
};
if($dataMap.events[num].meta.kaidan_north &&
!$gameSelfSwitches.value([this._mapId, num, "B"]) &&
$gameSelfSwitches.value([this._mapId, num, "C"])){
if($gameVariables._data[523] == 2 && $gameVariables._data[543] != 0){
if($gameSwitches._data[89]){
$gameVariables._data[529] += 40;
}else{
$gameVariables._data[529] -= 40;
};
};
if($gamePlayer._direction == 2) $gameVariables._data[519] = "3d_wall_front";
if($gamePlayer._direction == 8) $gameVariables._data[519] = "3d_stairs_front";
if($gamePlayer._direction == 4){
if($gameSwitches._data[89]){
$gameVariables._data[519] = "3d_kaidan_side2";
}else{
$gameVariables._data[519] = "3d_kaidan_side";
};
}
if($gamePlayer._direction == 6){
if($gameSwitches._data[89]){
$gameVariables._data[519] = "3d_kaidan_side";
}else{
$gameVariables._data[519] = "3d_kaidan_side2";
};
};
$gameMap.draw_events();
};
};

Game_Map.prototype.niji = function() {
if(!$gameSwitches._data[13] && $gameVariables._data[168] > 0 &&
$gamePlayer._direction == $gameVariables._data[161]){
$gameSwitches._data[258] = true;
};
};

Game_Map.prototype.checkSecret = function() {
$gameSwitches._data[258] = false;
if($gameSwitches._data[667]){
$gameSwitches._data[258] = true;
}else{
if($gameSwitches._data[8]&&!$gameSwitches._data[629]){
if($gameActors.actor(1).isStateAffected(176)) this.niji();
if(!$gameSwitches._data[9] && !$gameSwitches._data[14]) this.niji();
if($gameSwitches._data[9] && !$gameSwitches._data[13] && $gameVariables._data[163] > 0){
if($gameVariables._data[163] == 3) $gameSwitches._data[258] = true;
if($gamePlayer._direction == $gameVariables._data[162]) $gameSwitches._data[258] = true;
};
};
};
};

Game_Map.prototype.listMatch = function(num) {
$gameSwitches._data[99] = false;
var id = this.evThere();
var array = $gameVariables._data[num];
if (array.indexOf(id) >= 0 && id > 0) $gameSwitches._data[99] = true;
return $gameSwitches._data[99];
};

Game_Map.prototype.evSelfB = function() {
return $gameSelfSwitches.value([this._mapId, this.evThere(), "B"]);
};

Game_Map.prototype.evThere = function() {
return $gameMap.eventIdXy($gamePlayer.x + $gameVariables._data[514], $gamePlayer.y + $gameVariables._data[515]);
};

Game_Map.prototype.pic_excute_events = function() {
if($gameVariables._data[523] == 5) return;
$gameMap.event_pictures();
if(!$gameSwitches._data[77]){
if($gameSwitches._data[97]){
this.autoMap_events();
}else{
this.normal_events();
};
};
};

Game_Map.prototype.autoMap_events = function() {
$gameVariables._data[519]=0;
if(($gamePlayer.x + $gameVariables._data[514]) == $gameVariables._data[566] &&
($gamePlayer.y + $gameVariables._data[515]) == $gameVariables._data[567]){
if($gameSwitches._data[8]){
if($gameSwitches._data[684]){
$gameVariables._data[519] = "3d_swampnext_front";
}else{
$gameVariables._data[519] = "3d_next_front";
};
$gameMap.draw_events();
}else{
if(!$gameSwitches._data[524]){
if($gameSwitches._data[918]){
$gameVariables._data[519] = "3d_ruinnext_front";
}else{
$gameVariables._data[519] = "3d_stairs_front";
};
$gameMap.draw_events();
};
};
}else{
if(this.listMatch(553)){
if(!this.evSelfB()){
if($gameSwitches._data[8]){
if($gameSwitches._data[684]){
$gameVariables._data[519] = "3d_swampnext_front";
}else{
$gameVariables._data[519] = "3d_enemy";
};
$gameMap.draw_events();
}else{
if($gameSwitches._data[918]){
$gameVariables._data[519] = "3d_enemy";
$gameMap.draw_events();
}else{
if($gameVariables._data[293] == 9){
$gameVariables._data[519] = "3d_enemy";
$gameMap.draw_events();
}else{
if($gameSwitches._data[524]){
$gameVariables._data[519] = "3d_stairs_front";
$gameMap.draw_events();
};
};
};
};
};
}else{
if(this.listMatch(570)){
if(!this.evSelfB()){
$gameVariables._data[519] = "3d_chest_small";
$gameMap.draw_events();
return;
};
}else{
if(this.listMatch(336)){
if(!this.evSelfB()){
$gameVariables._data[519] = "3d_mineral_magic";
$gameMap.draw_events();
return;
};
}else{
if(this.listMatch(340)){
if(!this.evSelfB()){
if($gameVariables._data[337] == 2){
$gameVariables._data[519] = "3d_mineral_jade";
$gameMap.draw_events();
return;
}else{
$gameVariables._data[519] = "3d_mineral_black";
$gameMap.draw_events();
return;
};
};
}else{
if(this.listMatch(347)){
if(!this.evSelfB()){
$gameVariables._data[519] = "3d_mineral_misril";
$gameMap.draw_events();
return;
};
}else{
if(this.listMatch(349)){
if(!this.evSelfB()){
$gameVariables._data[519] = "3d_npc";
$gameMap.draw_events();
return;
};
}else{
if(this.listMatch(355)){
if(!this.evSelfB()){
$gameVariables._data[519] = "3d_pica00";
$gameSwitches._data[168] = true;
$gameMap.draw_events();
$gameSwitches._data[168] = false;
return;
};
}else{
if(this.listMatch(359)){
if(!this.evSelfB()){
$gameVariables._data[519] = "3d_paca00";
$gameSwitches._data[168] = true;
$gameSwitches._data[403] = true;
$gameMap.draw_events();
$gameSwitches._data[403] = false;
$gameSwitches._data[168] = false;
return;
};
}else{
if(this.listMatch(405)){
if(!this.evSelfB()){
this.checkSecret();
if($gameSwitches._data[667]||$gameSwitches._data[258]){
$gameVariables._data[519] = "3d_chestsp_small";
$gameMap.draw_events();
return;
};
};
}else{

};
};
};
};
};
};
};
};
};
};
if($gameVariables._data[519]==0){
var eid = 0;
var events=$gameMap._events;
for(i=0; i<events.length; i++){
if(events[i]&&events[i]._x&&events[i]._x==$gamePlayer.x + $gameVariables._data[514]&&events[i]._y==$gamePlayer.y + $gameVariables._data[515]){
var event = events[i];
if($gameParty.isScoping()&&event&&event._eventData&&event._eventData.meta.fixedEnemy&&!$gameSelfSwitches.value([this._mapId, eid, "B"])){
$gameVariables._data[519]="3d_enemy00"
$gameMap.draw_events();
return;
};
};
};
};
};

Game_Map.prototype.normal_events = function() {
$gameVariables._data[519]=0;
var id = $gameVariables.value(763);
var event = $dataMap.events[id];
if(event){
if(!$gameSelfSwitches.value([this._mapId, id, "AW"])){
if(event.meta.rain && !$gameSwitches._data[13]) return;
if(event.meta.norain && $gameSwitches._data[13]) return;
if(event.meta.night && !$gameSwitches._data[9]) return;
if(event.meta.nomidn && !$gameSwitches._data[430] == 3) return;
if(event.meta.daytime && $gameSwitches._data[9]) return;
};
if(event.meta.ruin){
if($gameSelfSwitches.value([this._mapId, id, "B"])){
$gameVariables._data[519] = "3d_ruin";
$gameMap.draw_events();
};
};
if(event.meta.tate){
if($gamePlayer._direction == 2 || $gamePlayer._direction == 8){
$gameVariables._data[519] = "3d_go1";
}else{
$gameVariables._data[519] = "3d_go2";
};
$gameMap.draw_events();
};
if(event.meta.yoko){
if($gamePlayer._direction == 2 || $gamePlayer._direction == 8){
$gameVariables._data[519] = "3d_go2";
}else{
$gameVariables._data[519] = "3d_go1";
};
$gameMap.draw_events();
};
if(event.meta.kanban){
if($gameSelfSwitches.value([this._mapId, id, "C"])){
$gameVariables._data[519] = "3d_kanban";
$gameMap.draw_events();
};
};
if(event.meta.prb){
if($gameSelfSwitches.value([this._mapId, id, "C"])){
$gameVariables._data[519] = "3d_prb";
$gameMap.draw_events();
};
};
if(event.meta.rockball){
if($gameSelfSwitches.value([this._mapId, id, "C"])){
$gameVariables._data[519] = "3d_rockball";
$gameMap.draw_events();
};
};
if(event.meta.spring){
$gameVariables._data[519] = "3d_spring00";
$gameSwitches._data[631] = true;
$gameMap.draw_events();
$gameSwitches._data[631] = false;
};
if(event.meta.filled){
$gameVariables._data[519] = "3d_filledspring";
$gameMap.draw_events();
};
if(event.meta.kare){
if($gameSwitches._data[13]){
$gameVariables._data[519] = "3d_filledspring";
$gameMap.draw_events();
}else{
$gameVariables._data[519] = "3d_kare";
$gameMap.draw_events();
};
};
if(event.meta.people && $gameVariables._data[430] <= 2 && !$gameSwitches._data[110]){
if($gameSwitches._data[9]){
if($gameSwitches._data[13]){
return;
}else{
$gameVariables._data[519] = "3d_people";
};
}else{
if($gameSwitches._data[13]){
$gameVariables._data[519] = "3d_people_night";
}else{
$gameVariables._data[519] = "3d_people";
};
};
$gameMap.draw_events();
};
var num = $gameVariables._data[763];
this.kaidan(num);
this.underPart(num);
};
var xy =[];
if($gameVariables._data[519]==0){
xy = [$gamePlayer.x + $gameVariables._data[514],$gamePlayer.y + $gameVariables._data[515]];
if($gameSystem.plant){
for(i=0; i<$gameSystem.plant.length; i++){
if($gameSystem.plant[i][0]==$gameMap._mapId&&$gameSystem.plant[i][1]==xy[0]&&$gameSystem.plant[i][2]==xy[1]){
$gameVariables._data[519] = "3d_plant";
$gameMap.draw_events();
}}}
}
if($gameVariables._data[519]==0){
xy = [$gamePlayer.x + $gameVariables._data[514],$gamePlayer.y + $gameVariables._data[515]];
if($gameSystem.hunt){
for(i=0; i<$gameSystem.hunt.length; i++){
if($gameSystem.hunt[i][0]==$gameMap._mapId&&$gameSystem.hunt[i][1]==xy[0]&&$gameSystem.hunt[i][2]==xy[1]){
$gameVariables._data[519] = "3d_hunt";
$gameMap.draw_events();
}}}
}
};

Game_Map.prototype.draw_events = function() {
$gameVariables._data[518] += 1;
if(!$gameSwitches._data[168] &&
$gameSwitches._data[8] && $gameSwitches._data[9]){
if($gameSwitches._data[631]){
$gameVariables._data[519] += "_night00";
}else{
$gameVariables._data[519] += "_night";
};
};
if($gameSwitches._data[168] || $gameSwitches._data[631]){ 
var cellNumber   = 2;
var frameNumber  = 20;
var direction    = '連番';
var fadeDuration = 0;
$gameScreen.setPicturesAnimation(cellNumber, frameNumber, direction, fadeDuration);
};
no = 50 - $gameVariables._data[518];
name = $gameVariables._data[519];
x =  $gameVariables._data[520] + $gameVariables._data[529];
y = $gameVariables._data[521] + $gameVariables._data[530];
wide = $gameVariables._data[522];
hight = $gameVariables._data[532];
var suke = 255;
if($gameSwitches.value(403)) suke = 120;
$gameScreen.showPicture(no, name, 0, x, y, wide, hight, suke, 0)
if($gameSwitches._data[168] || $gameSwitches._data[631]){ 
var pictureNum     = 50 - $gameVariables._data[518];
pictureNum += 20;
var animationType  = 1;
var customArray    = 1;
var picture        = $gameScreen.picture(pictureNum);
if (picture) picture.startAnimationFrame(animationType, true, customArray);
if(!$gameVariables._data[34])$gameVariables._data[34]=[]
var array = $gameVariables._data[34];
array.push($gameVariables._data[518]);
};
};

Game_Map.prototype.event_pictures = function() {
$gameSwitches._data[77] = false;
$gameVariables._data[529] = 0;
if($gameVariables._data[523] == 4){
$gameVariables._data[530] = 0;
$gameVariables._data[531] = 100;
$gameVariables._data[544] = 100;
if($gameVariables._data[543] != 0){
$gameVariables._data[530] = -20;
if($gameSwitches._data[89]){
$gameVariables._data[529] = 60;
}else{
$gameVariables._data[529] = -60;
};
};
if($gameSwitches._data[97]){
$gameVariables._data[157] = 60;
$gameVariables._data[158] = 20;
};
if($gameVariables._data[516] <= -2 || $gameVariables._data[516] >= 2){
$gameSwitches._data[77] = true;
if($gameSwitches._data[97]) $gameVariables._data[157] += 15;
};
};
if($gameVariables._data[523] == 3){
$gameVariables._data[530] = 0;
$gameVariables._data[531] = 150;
$gameVariables._data[544] = 150;
if($gameVariables._data[543] != 0){
$gameVariables._data[530] = -40;
if($gameSwitches._data[89]){
$gameVariables._data[529] = 120;
}else{
$gameVariables._data[529] = -120;
};
if($gameVariables._data[519] == "3d_chest_small"){
if($gameSwitches._data[89]){
$gameVariables._data[529] += 30;
}else{
$gameVariables._data[529] -= 30;
};
};
};
if($gameSwitches._data[97]){
$gameVariables._data[157] = 120;
$gameVariables._data[158] = 40;
};
if($gameVariables._data[516] == -2 || $gameVariables._data[516] == 2){
$gameSwitches._data[77] = true;
};
};
if($gameVariables._data[523] == 2){
$gameVariables._data[530] = 0;
$gameVariables._data[531] = 200;
$gameVariables._data[544] = 200;
if($gameVariables._data[543] != 0){
$gameVariables._data[530] = -80;
if($gameSwitches._data[89]){
$gameVariables._data[529] = 200;
}else{
$gameVariables._data[529] = -200;
};
};
if($gameSwitches._data[97]){
$gameVariables._data[157] = 200;
$gameVariables._data[158] = 82;
};
};
if($gameVariables._data[523] == 1){
$gameVariables._data[530] = -160;
$gameVariables._data[531] = 280;
$gameVariables._data[544] = 250;
$gameVariables._data[529] = -160;
if($gameVariables._data[543] != 0){
if($gameSwitches._data[89]){
$gameVariables._data[529] = 480;
}else{
$gameVariables._data[529] = -480;
};
};
if($gameSwitches._data[97]){
$gameVariables._data[157] = 480;
$gameVariables._data[158] = 170;
};
};
if($gameVariables._data[523] == 0){
$gameVariables._data[530] = -330;
$gameVariables._data[531] = 290;
$gameVariables._data[544] = 330;
$gameVariables._data[529] = -300;
if($gameVariables._data[543] != 0){
if($gameSwitches._data[89]){
$gameVariables._data[529] = 680;
}else{
$gameVariables._data[529] = -680;
};
};
};
if($gameSwitches._data[97]){
$gameVariables._data[530] += $gameVariables._data[158];
if($gameSwitches._data[89]){
$gameVariables._data[529] -= $gameVariables._data[157];
}else{
$gameVariables._data[529] += $gameVariables._data[157];
};
};
$gameVariables._data[706] = $gameVariables._data[523];
$gameVariables._data[706] += 1;
$gameSwitches._data[403] = false;
if($gameVariables._data[516] == 0){
if($gameVariables._data[523] >= 2){
if($gameVariables._data[428] < $gameVariables._data[706]) $gameSwitches._data[77] = true;
}else{
if($gameVariables._data[428] < $gameVariables._data[706]) $gameSwitches._data[403] = true;
};
}else{
if($gameVariables._data[428] < $gameVariables._data[706]) $gameSwitches._data[77] = true;
};
if($gameSwitches._data[97] &&
$gameVariables._data[516] == 0 &&
$gameVariables._data[523] == 0 &&
$gameSwitches._data[77]){
$gameSwitches._data[77] = false;
$gameVariables._data[529] = 0;
$gameVariables._data[530] = 0;
};
};


Game_Map.prototype.graphic_smart = function() {
if($gameSwitches._data[8]){
if($gameSwitches._data[445]){
$gameVariables._data[534] = "rock";
}else{
if($gameSwitches._data[739]){
$gameVariables._data[534] = "plwood";
}else{
if($gameSwitches._data[1000]){
$gameVariables._data[534] = "mwood";
}else{
if($gameSwitches._data[420]){
$gameVariables._data[534] = "swood";
}else{
if($gameVariables._data[437]>=1){
$gameVariables._data[534] = "haiwood";
}else{
$gameVariables._data[534] = "wood";
};
};
};
};
};
if($gameVariables._data[751] == 98) $gameVariables._data[534] = "nextfar";
if($gameVariables._data[751] == 97) $gameVariables._data[534] = "ruinnext";
if($gameVariables._data[751] == 96) $gameVariables._data[534] = "shutter";
if($gameVariables._data[751] >= 93 && $gameVariables._data[751] <= 95) $gameVariables._data[534] = "outgate";
if($gameVariables._data[751] == 92) $gameVariables._data[534] = "grhouse2";
if($gameVariables._data[751] == 91) $gameVariables._data[534] = "next";
if($gameVariables._data[751] == 90) $gameVariables._data[534] = "stone";
if($gameVariables._data[751] == 85) $gameVariables._data[534] = "kanban";
if($gameVariables._data[751] == 84) $gameVariables._data[534] = "woodkanban";
if($gameVariables._data[751] == 83) $gameVariables._data[534] = "grhouse";
if($gameVariables._data[751] == 62) $gameVariables._data[534] = "rock";
if($gameVariables._data[751] == 79) $gameVariables._data[534] = "cottage";
if($gameVariables._data[751] == 78) $gameVariables._data[534] = "house3";
if($gameVariables._data[751] == 65) $gameVariables._data[534] = "next";
if($gameVariables._data[751] == 63) $gameVariables._data[534] = "ugomeki";
if($gameVariables._data[751] == 59) $gameVariables._data[534] = "tome";
if($gameVariables._data[751] == 88) $gameVariables._data[534] = "tome";
if($gameVariables._data[751] == 56) $gameVariables._data[534] = "bell";
if($gameVariables._data[751] == 54) $gameVariables._data[534] = "bridge";
if($gameVariables._data[751] == 79) $gameVariables._data[534] = "cottage";
if($gameVariables._data[751] == 21) $gameVariables._data[534] = "town";
if($gameVariables._data[751] == 22) $gameVariables._data[534] = "snowtown";
if($gameVariables._data[751] == 55){
if($gamePlayer._direction == 2){
$gameVariables._data[534] = "waterin";
}else{
if($gamePlayer._direction == 8){
$gameVariables._data[534] = "tome";
}else{
$gameVariables._data[534] = "tome";
if($gameVariables._data[543] != 0){
if($gamePlayer._direction == 4){
if(!$gameSwitches._data[89]) $gameVariables._data[534] = "waterin";
}else{
if($gameSwitches._data[89]) $gameVariables._data[534] = "waterin";
};
};
};
};
};

if($gameVariables._data[751] == 53){
if($gamePlayer._direction == 8){
$gameVariables._data[534] = "waterin";
}else{
if($gamePlayer._direction == 2){
$gameVariables._data[534] = "tome";
}else{
$gameVariables._data[534] = "tome";
if($gameVariables._data[543] != 0){
if($gamePlayer._direction == 4){
if($gameSwitches._data[89]) $gameVariables._data[534] = "waterin";
}else{
if(!$gameSwitches._data[89]) $gameVariables._data[534] = "waterin";
};
};
};
};
};

if($gameVariables._data[751] == 52) $gameVariables._data[534] = "fencehalf";
if($gameVariables._data[751] == 51){
this.frontCheck();
 $gameVariables._data[534] = "tome";
};
if($gameVariables._data[751] == 50){
this.frontCheck();
 $gameVariables._data[534] = "tome";
};
if($gameVariables._data[751] == 49){
this.frontCheck();
 $gameVariables._data[534] = "tome";
};
if($gameVariables._data[751] == 48){
this.frontCheck();
 $gameVariables._data[534] = "tome";
};
if($gameVariables._data[751] == 47){
this.frontCheck();
 $gameVariables._data[534] = "tome";
};
if($gameVariables._data[751] == 45) $gameVariables._data[534] = "ugomeki";
if($gameVariables._data[751] == 44){
if($gameSwitches._data[420]){
 $gameVariables._data[534] = "rockstairssnow";
}else{
 $gameVariables._data[534] = "rockstairs";
 }
 }
if($gameVariables._data[751] == 43) $gameVariables._data[534] = "rocks";
if($gameVariables._data[751] == 42) $gameVariables._data[534] = "rockw";
if($gameVariables._data[751] == 41) $gameVariables._data[534] = "woodw";
if($gameVariables._data[751] == 40) $gameVariables._data[534] = "next";
if($gameVariables._data[751] == 39) $gameVariables._data[534] = "swampwall";
if($gameVariables._data[751] == 30) $gameVariables._data[534] = "swampnext";
if($gameVariables._data[751] == 37) $gameVariables._data[534] = "fence";
if($gameVariables._data[751] == 36) $gameVariables._data[534] = "fence";
if($gameVariables._data[751] == 35) $gameVariables._data[534] = "ruinwall2";
if($gameVariables._data[751] == 34) $gameVariables._data[534] = "ruinwall";
if($gameVariables._data[751] == 33){
if($gameSwitches._data[420]){
 $gameVariables._data[534] = "rocksnow";
}else{
 $gameVariables._data[534] = "rock";
 }
 }
if($gameVariables._data[751] == 32) $gameVariables._data[534] = "woodf";
if($gameVariables._data[751] == 31) $gameVariables._data[534] = "woodf";
if($gameVariables._data[751] == 20) $gameVariables._data[534] = "dnomi_house";
if($gameVariables._data[751] == 16) $gameVariables._data[534] = "dnomi_shop01";
if($gameVariables._data[751] == 17) $gameVariables._data[534] = "shop02";
if($gameVariables._data[751] == 18) $gameVariables._data[534] = "dnomi_shop03";
if($gameVariables._data[751] == 19) $gameVariables._data[534] = "dnomi_shop04";
if($gameVariables._data[751] == 23) $gameVariables._data[534] = "dnomi_shop07";
if($gameVariables._data[751] == 24) $gameVariables._data[534] = "dnomi_shop08";
if($gameVariables._data[751] == 25) $gameVariables._data[534] = "dnomi_shop09";
if($gameVariables._data[751] == 26) $gameVariables._data[534] = "castle";
if($gameVariables._data[751] == 27) $gameVariables._data[534] = "stone";
if($gameVariables._data[751] == 15){
if($gameVariables._data[437]>0){
$gameVariables._data[534] = "gate";
}else{
$gameVariables._data[534] = "gate2";
};
};
this.oneside_entrance();
}else{
if($gameSwitches._data[629]){
$gameVariables._data[534] = "bwall";
}else{
if($gameSwitches._data[392]){
if($gameSwitches._data[420]){
 $gameVariables._data[534] = "rocksnow";
}else{
 $gameVariables._data[534] = "drock";
 }
}else{
if($gameSwitches._data[639]){
$gameVariables._data[534] = "mwall";
}else{
$gameVariables._data[534] = "wall";
};
};
};
if($gameVariables._data[751] == 71) $gameVariables._data[534] = "glid";
if($gameVariables._data[751] == 15) $gameVariables._data[534] = "stairs";
if($gameVariables._data[751] == 73) $gameVariables._data[534] = "black";
if($gameVariables._data[751] == 17) {
if($gameSwitches._data[639]){
$gameVariables._data[534] = "door2";
}else{
$gameVariables._data[534] = "door";
};
}
if($gameVariables._data[751] == 18){
if($gamePlayer._direction == 2 || $gamePlayer._direction == 8){
if($gameVariables._data[526] == "front"){
if($gameSwitches._data[639]){
$gameVariables._data[534] = "mwall2";
}else{
$gameVariables._data[534] = "nazokabe";
}
}
}else{
if($gameVariables._data[526] == "left"){
if($gameSwitches._data[639]){
$gameVariables._data[534] = "mwall2";
}else{
$gameVariables._data[534] = "nazokabe";
}
}
};
};
if($gameVariables._data[751] == 19){
if($gamePlayer._direction == 4 || $gamePlayer._direction == 6){
if($gameVariables._data[526] == "front"){
if($gameSwitches._data[639]){
$gameVariables._data[534] = "mwall2";
}else{
$gameVariables._data[534] = "nazokabe";
}
 }
}else{
if($gameVariables._data[526] == "left"){
if($gameSwitches._data[639]){
$gameVariables._data[534] = "mwall2";
}else{
$gameVariables._data[534] = "nazokabe";
}
 }
};
};
if($gameVariables._data[751] == 14){
if($gameSwitches._data[9]){
 $gameVariables._data[534] = "walloutnight";
}else{
 $gameVariables._data[534] = "wallout";
}
}
this.oneside_entrance();
};
this.wall_complicated();
this.speciallWall();
};

Game_Map.prototype.frontCheck = function() {
if(!$gameSwitches._data[204] &&
!$gameSwitches._data[13] &&
$gameVariables._data[428] >= 3 &&
$gameVariables._data[526] == "front" &&
$gameVariables._data[543] == 0 &&
$gameVariables._data[523] == 1){
if(!$gameSwitches._data[994])$gameSwitches._data[203] = true;
};
};


Game_Map.prototype.speciallWall = function() {
if($gameSwitches._data[497]) return;
$gameVariables._data[760] = this._mapId;
if(!$gameSwitches._data[97]) $gameVariables._data[769] = $gameMap.eventIdXy($gamePlayer.x + $gameVariables._data[514], $gamePlayer.y + $gameVariables._data[515]);
};

Game_Map.prototype.wall_complicated = function() {
$gameVariables._data[760] = this._mapId;
$gameVariables._data[769] = $gameVariables._data[763];
if($gameVariables._data[751] == 89){
$gameVariables._data[534] = "fencehalf";
if(!$gameSwitches._data[9] && !$gameSwitches._data[13] &&
$dataMap.events[$gameVariables._data[769]] &&
$gamePlayer.y <= $dataMap.events[$gameVariables._data[769]].y &&
!$gameSelfSwitches.value([this._mapId, $gameVariables._data[769], "B"]) &&
$gameSelfSwitches.value([this._mapId, $gameVariables._data[769], "C"])){
$gameVariables._data[534] = "npcsaku";
};
};

if($gameVariables._data[751] == 53){
$gameVariables._data[534] = "waterin";
if($dataMap.events[$gameVariables._data[769]] &&
$gamePlayer.y <= $dataMap.events[$gameVariables._data[769]].y){
$gameVariables._data[534] = 0;
};
};
if($gameVariables._data[751] == 87){
$gameVariables._data[534] = "npcsaku";
};
if($gameVariables._data[751] == 86){
$gameVariables._data[534] = "fencehalf";
if(!$gameSwitches._data[9] && !$gameSwitches._data[13] &&
$dataMap.events[$gameVariables._data[769]] &&
$gamePlayer.y >= $dataMap.events[$gameVariables._data[769]].y &&
!$gameSelfSwitches.value([this._mapId, $gameVariables._data[769], "B"]) &&
$gameSelfSwitches.value([this._mapId, $gameVariables._data[769], "C"])){
$gameVariables._data[534] = "npcsaku";
};
};
if($gameVariables._data[751] == 77){
$gameVariables._data[534] = "ugomeki";
};
if($gameVariables._data[751] == 76){
if(!$gameSelfSwitches.value([this._mapId, $gameVariables._data[769], "B"])){
$gameVariables._data[534] = "ugomeki";
}else{
$gameVariables._data[534] = 0;
};
};
if($gameVariables._data[751] == 74){
if($gameVariables._data[769] == 0){
$gameVariables._data[534] = "fence";
}else{
if(!$gameSelfSwitches.value([this._mapId, $gameVariables._data[769], "B"])){
$gameVariables._data[534] = "fence";
}else{
$gameVariables._data[534] = 0;
};
};
};
if($gameVariables._data[751] == 72){
if(!$gameSelfSwitches.value([this._mapId, $gameVariables._data[769], "B"])){
$gameVariables._data[534] = "glid";
}else{
$gameVariables._data[534] = "openGlid";
};
};
if($gameVariables._data[751] == 81){
if($dataMap.events[$gameVariables._data[769]] && !$dataMap.events[$gameVariables._data[769]].meta.outme &&
$gamePlayer.y <= $dataMap.events[$gameVariables._data[769]].y){
$gameVariables._data[534] = 0;
};
};
if($gameVariables._data[751] == 81){
if($dataMap.events[$gameVariables._data[769]] && $dataMap.events[$gameVariables._data[769]].meta.outme &&
$gamePlayer.y < $dataMap.events[$gameVariables._data[769]].y){
$gameVariables._data[534] = 0;
};
};
if($gameVariables._data[751] == 70){
if($dataMap.events[$gameVariables._data[769]] &&
$gamePlayer.y >= $dataMap.events[$gameVariables._data[769]].y){
$gameVariables._data[534] = 0;
};
};
if($gameVariables._data[751] == 69){
if($dataMap.events[$gameVariables._data[769]] &&
$gamePlayer.x >= $dataMap.events[$gameVariables._data[769]].x){
$gameVariables._data[534] = 0;
};
};
if($gameVariables._data[751] == 68){
if($dataMap.events[$gameVariables._data[769]] &&
$gamePlayer.x <= $dataMap.events[$gameVariables._data[769]].x){
$gameVariables._data[534] = 0;
};
};
if($gameVariables._data[751] == 66){
if($gameSelfSwitches.value([this._mapId, $gameVariables._data[769], "B"])){
$gameVariables._data[534] = 0;
}else{
$gameVariables._data[534] = "baria";
};
};

};


Game_Map.prototype.oneside_entrance = function() {
if($gameVariables._data[751] == 60){
if($gamePlayer._direction == 4 || $gamePlayer._direction == 6){
if($gamePlayer._direction == 4){
if($gameVariables._data[526] =="front") $gameVariables._data[534] = 0;
}
}else{
if($gameVariables._data[526] == "left"){
if($gameSwitches._data[89]){
if($gamePlayer._direction == 2) $gameVariables._data[534] = 0;
}else{
if($gamePlayer._direction == 8) $gameVariables._data[534] = 0;
};
};
};
};
if($gameVariables._data[751] == 58){
if($gamePlayer._direction == 4 || $gamePlayer._direction == 6){
if($gamePlayer._direction == 6){
if($gameVariables._data[526] =="front") $gameVariables._data[534] = 0;
}
}else{
if($gameVariables._data[526] == "left"){
if($gameSwitches._data[89]){
if($gamePlayer._direction == 8) $gameVariables._data[534] = 0;
}else{
if($gamePlayer._direction == 2) $gameVariables._data[534] = 0;
};
};
};
};
if($gameVariables._data[751] == 59){
if($gamePlayer._direction == 2 || $gamePlayer._direction == 8){
if($gamePlayer._direction == 2){
if($gameVariables._data[526] =="front") $gameVariables._data[534] = 0;
}
}else{
if($gameVariables._data[526] == "left"){
if($gameSwitches._data[89]){
if($gamePlayer._direction == 6) $gameVariables._data[534] = 0;
}else{
if($gamePlayer._direction == 4) $gameVariables._data[534] = 0;
};
};
};
};
if($gameVariables._data[751] == 57){
if($gamePlayer._direction == 2 || $gamePlayer._direction == 8){
if($gamePlayer._direction == 8){
if($gameVariables._data[526] =="front") $gameVariables._data[534] = 0;
}
}else{
if($gameVariables._data[526] == "left"){
if($gameSwitches._data[89]){
if($gamePlayer._direction == 4) $gameVariables._data[534] = 0;
}else{
if($gamePlayer._direction == 6) $gameVariables._data[534] = 0;
};
};
};
};
};

Game_Map.prototype.name_terrain = function() {
$gameVariables._data[519] = "3d_" + $gameVariables._data[534];
if($gameVariables._data[526] == "left" && $gameVariables._data[519].match(/dnomi_/)){
if($gameSwitches._data[89]){
$gameVariables._data[519] += "_right";
}else{
$gameVariables._data[519] += "_" + $gameVariables._data[526];
};
}else{
$gameVariables._data[519] += "_" + $gameVariables._data[526];
};
};


Game_Map.prototype.pic_irustrator = function() {
if($gameVariables._data[534] == 0) return;
if($gameSwitches._data[8] && $gameSwitches._data[9]){
if($gameVariables._data[534] == "dnomi_shop09"){
if($gameVariables._data[430] == 3){
$gameVariables._data[519] += "_night2";
}else{
$gameVariables._data[519] += "_night";
};
}else{
$gameVariables._data[519] += "_night";
};
};
$gameVariables._data[518] += 1;
//if($gameVariables._data[534] == "wall"){
//$gameVariables._data[522] *= 2;
//$gameVariables._data[532] *= 2;
//};
if($gameSwitches._data[206]) return;
if($gameVariables._data[114] >= 1 && $gameVariables._data[518] >= $gameVariables._data[114]) return;
if($gameVariables._data[519].match(/dnomi_/) && $gameVariables._data[522] < 0){
$gameVariables._data[522] *= -1;
if($gameVariables._data[523] == 1) $gameVariables._data[520] -= 640;
if($gameVariables._data[523] == 2) $gameVariables._data[520] -= 320;
if($gameVariables._data[523] == 3) $gameVariables._data[520] -= 160;
if($gameVariables._data[523] == 4) $gameVariables._data[520] -= 80;
if($gameVariables._data[523] == 5) $gameVariables._data[520] -= 40;
if($gameSwitches._data[632]){
if($gameVariables._data[774] == 3) $gameVariables._data[520] += 160;
if($gameVariables._data[774] == 4) $gameVariables._data[520] += 80;
if($gameVariables._data[774] == 5) $gameVariables._data[520] += 40;
};
if($gameVariables._data[519].match(/_right/)){
if($gameVariables._data[543] == 2){
if($gameVariables._data[523] == 2) $gameVariables._data[520] += 80;
if($gameVariables._data[523] == 3) $gameVariables._data[520] += 40;
if($gameVariables._data[523] == 4) $gameVariables._data[520] += 20;
}else{
if($gameVariables._data[523] == 0) $gameVariables._data[520] -= 320;
if($gameVariables._data[523] == 1) $gameVariables._data[520] += 480;
if($gameVariables._data[523] == 2) $gameVariables._data[520] += 240;
if($gameVariables._data[523] == 3) $gameVariables._data[520] += 120;
if($gameVariables._data[523] == 4) $gameVariables._data[520] += 60;
};
};
};
var no = 50 - $gameVariables.value(518);
var name = $gameVariables.value(519);
var x =  $gameVariables.value(520);
var y = $gameVariables.value(521);
var wide = $gameVariables.value(522);
var hight = $gameVariables.value(532);
if($gameVariables.value(516)==0&&$gameVariables._data[519].match(/front/)&&wide>10){
$gameVariables.value(608).push(no+20)
}
$gameScreen.showPicture(no, name, 0, x, y, wide, hight, 255, 0);
};

Game_Map.prototype.world_restriction = function() {
$gameSwitches._data[172] = false;
if($gameSwitches._data[421]){
if($gameSwitches._data[626]){
if($gamePlayer._direction == 4){
if(($gamePlayer.x - $gameVariables._data[523]) < -1) $gameSwitches._data[172] = true;
if($gameSwitches._data[89]){
if(($gamePlayer.y - $gameVariables._data[543]) < -1) $gameSwitches._data[172] = true;
}else{
if(($gamePlayer.y + $gameVariables._data[543]) > 101) $gameSwitches._data[172] = true;
};
};
if($gamePlayer._direction == 6){
if(($gamePlayer.x + $gameVariables._data[523]) > 101) $gameSwitches._data[172] = true;
if($gameSwitches._data[89]){
if(($gamePlayer.y + $gameVariables._data[543]) > 101) $gameSwitches._data[172] = true;
}else{
if(($gamePlayer.y - $gameVariables._data[543]) < -1) $gameSwitches._data[172] = true;
};
};
if($gamePlayer._direction == 2){
if(($gamePlayer.y + $gameVariables._data[523]) > 101) $gameSwitches._data[172] = true;
if($gameSwitches._data[89]){
if(($gamePlayer.x - $gameVariables._data[543]) < -1) $gameSwitches._data[172] = true;
}else{
if(($gamePlayer.x + $gameVariables._data[543]) > 101) $gameSwitches._data[172] = true;
};
};
if($gamePlayer._direction == 8){
if(($gamePlayer.y - $gameVariables._data[523]) < -1) $gameSwitches._data[172] = true;
if($gameSwitches._data[89]){
if(($gamePlayer.x + $gameVariables._data[543]) > 101) $gameSwitches._data[172] = true;
}else{
if(($gamePlayer.x - $gameVariables._data[543]) < -1) $gameSwitches._data[172] = true;
};
};
}else{
if($gamePlayer._direction == 4){
if(($gamePlayer.x - $gameVariables._data[523]) < -1) $gameSwitches._data[172] = true;
if($gameSwitches._data[89]){
if(($gamePlayer.y - $gameVariables._data[543]) < -1) $gameSwitches._data[172] = true;
}else{
if(($gamePlayer.y + $gameVariables._data[543]) > 21) $gameSwitches._data[172] = true;
};
};
if($gamePlayer._direction == 6){
if(($gamePlayer.x + $gameVariables._data[523]) > 21) $gameSwitches._data[172] = true;
if($gameSwitches._data[89]){
if(($gamePlayer.y + $gameVariables._data[543]) > 21) $gameSwitches._data[172] = true;
}else{
if(($gamePlayer.y - $gameVariables._data[543]) < -1) $gameSwitches._data[172] = true;
};
};
if($gamePlayer._direction == 2){
if(($gamePlayer.y + $gameVariables._data[523]) > 21) $gameSwitches._data[172] = true;
if($gameSwitches._data[89]){
if(($gamePlayer.x - $gameVariables._data[543]) < -1) $gameSwitches._data[172] = true;
}else{
if(($gamePlayer.x + $gameVariables._data[543]) > 21) $gameSwitches._data[172] = true;
};
};
if($gamePlayer._direction == 8){
if(($gamePlayer.y - $gameVariables._data[523]) < -1) $gameSwitches._data[172] = true;
if($gameSwitches._data[89]){
if(($gamePlayer.x + $gameVariables._data[543]) > 21) $gameSwitches._data[172] = true;
}else{
if(($gamePlayer.x - $gameVariables._data[543]) < -1) $gameSwitches._data[172] = true;
};
};
};
}else{
if(!$gameSwitches._data[169]){
if($gamePlayer._direction == 4){
if(($gamePlayer.x - $gameVariables._data[523]) < 0) $gameSwitches._data[172] = true;
if($gameSwitches._data[89]){
if(($gamePlayer.y - $gameVariables._data[543]) < 0) $gameSwitches._data[172] = true;
}else{
if(($gamePlayer.y + $gameVariables._data[543]) > 19) $gameSwitches._data[172] = true;
};
};
if($gamePlayer._direction == 6){
if(($gamePlayer.x + $gameVariables._data[523]) > 20) $gameSwitches._data[172] = true;
if($gameSwitches._data[89]){
if(($gamePlayer.y + $gameVariables._data[543]) > 19) $gameSwitches._data[172] = true;
}else{
if(($gamePlayer.y - $gameVariables._data[543]) < 0) $gameSwitches._data[172] = true;
};
};
if($gamePlayer._direction == 2){
if(($gamePlayer.y + $gameVariables._data[523]) > 19) $gameSwitches._data[172] = true;
if($gameSwitches._data[89]){
if(($gamePlayer.x - $gameVariables._data[543]) < 0) $gameSwitches._data[172] = true;
}else{
if(($gamePlayer.x + $gameVariables._data[543]) > 20) $gameSwitches._data[172] = true;
};
};
if($gamePlayer._direction == 8){
if(($gamePlayer.y - $gameVariables._data[523]) < 0) $gameSwitches._data[172] = true;
if($gameSwitches._data[89]){
if(($gamePlayer.x + $gameVariables._data[543]) > 20) $gameSwitches._data[172] = true;
}else{
if(($gamePlayer.x - $gameVariables._data[543]) < 0) $gameSwitches._data[172] = true;
};
};
};
};
};

Game_Map.prototype.check_location_tileId = function() {
$gameSwitches._data[138] = false;
if($gameVariables._data[535] == $gameVariables._data[718]){
$gameSwitches._data[138] = true;
};
if($gameVariables._data[535] == $gameVariables._data[719]){
$gameSwitches._data[138] = true;
};
if($gameVariables._data[535] == $gameVariables._data[720]){
$gameSwitches._data[138] = true;
};
if($gameVariables._data[535] == $gameVariables._data[721]){
$gameSwitches._data[138] = true;
};
if($gameVariables._data[535] == $gameVariables._data[734]){
$gameSwitches._data[138] = true;
};
if($gameVariables._data[535] == $gameVariables._data[740]){
$gameSwitches._data[138] = true;
};
if($gameVariables._data[535] == $gameVariables._data[741]){
$gameSwitches._data[138] = true;
};
if($gameVariables._data[535] == $gameVariables._data[742]){
$gameSwitches._data[138] = true;
};
if($gameVariables._data[535] == $gameVariables._data[743]){
if($gameVariables._data[543] == 0) $gameSwitches._data[162] = true;
$gameSwitches._data[138] = true;
};
if($gameVariables._data[535] == $gameVariables._data[744]){
$gameSwitches._data[138] = true;
};
if($gameVariables._data[535] == $gameVariables._data[746]){
$gameSwitches._data[138] = true;
};
if($gameVariables._data[535] == $gameVariables._data[747]){
$gameSwitches._data[138] = true;
};
if($gameVariables._data[535] == $gameVariables._data[748]){
$gameSwitches._data[138] = true;
};
if($gameVariables._data[535] == $gameVariables._data[749]){
$gameSwitches._data[138] = true;
};
if($gameVariables._data[535] == $gameVariables._data[750]){
$gameSwitches._data[138] = true;
};
};

Game_Map.prototype.directionId = function() {
$gameSwitches._data[139] = false;
$gameSwitches._data[140] = false;
$gameSwitches._data[149] = false;
$gameVariables._data[718] = 1569;
$gameVariables._data[719] = 1577;
$gameVariables._data[720] = 1570;
$gameVariables._data[721] = 1578;
$gameVariables._data[734] = 1571;
$gameVariables._data[740] = 1579;
$gameVariables._data[741] = 1580;
$gameVariables._data[742] = 1581;
$gameVariables._data[743] = 1582;
$gameVariables._data[744] = 1583;
$gameVariables._data[746] = 1584;
$gameVariables._data[747] = 1585;
$gameVariables._data[748] = 1586;
$gameVariables._data[749] = 1587;
$gameVariables._data[750] = 1576;
if($gameVariables._data[535] == $gameVariables._data[718]){
this.direct1data();
return;
};
if($gameVariables._data[535] == $gameVariables._data[719]){
this.direct2data();
return;
};
if($gameVariables._data[535] == $gameVariables._data[720]){
this.direct3data();
return;
};
if($gameVariables._data[535] == $gameVariables._data[721]){
this.direct4data();
return;
};
if($gameVariables._data[535] == $gameVariables._data[734]){
this.direct5data();
return;
};
if($gameVariables._data[535] == $gameVariables._data[740]){
this.direct6data();
return;
};
if($gameVariables._data[535] == $gameVariables._data[741]){
this.direct7data();
return;
};
if($gameVariables._data[535] == $gameVariables._data[742]){
this.direct8data();
return;
};
if($gameVariables._data[535] == $gameVariables._data[743]){
this.direct9data();
return;
};
if($gameVariables._data[535] == $gameVariables._data[744]){
this.direct10data();
return;
};
if($gameVariables._data[535] == $gameVariables._data[746]){
this.direct11data();
return;
};
if($gameVariables._data[535] == $gameVariables._data[747]){
this.direct12data();
return;
};
if($gameVariables._data[535] == $gameVariables._data[748]){
this.direct13data();
return;
};
if($gameVariables._data[535] == $gameVariables._data[749]){
this.direct14data();
return;
};
if($gameVariables._data[535] == $gameVariables._data[750]){
this.direct15data();
return;
};
};

Game_Map.prototype.direct1data = function() {
$gameVariables._data[710] = 8;
$gameVariables._data[711] = 2;
$gameVariables._data[712] = 4;
$gameVariables._data[713] = 6;
$gameVariables._data[714] = 1;
$gameVariables._data[715] = 2;
$gameVariables._data[716] = $gameVariables._data[515];
if($gamePlayer._direction == 4 || $gamePlayer._direction == 6){
if($gameVariables._data[515] < 0) $gameSwitches._data[139] = true;
};
};

Game_Map.prototype.direct2data = function() {
$gameVariables._data[710] = 2;
$gameVariables._data[711] = 8;
$gameVariables._data[712] = 6;
$gameVariables._data[713] = 4;
$gameVariables._data[714] = -1;
$gameVariables._data[715] = -2;
$gameVariables._data[716] = $gameVariables._data[515];
if($gamePlayer._direction == 4 || $gamePlayer._direction == 6){
if($gameVariables._data[515] > 0) $gameSwitches._data[139] = true;
};
};

Game_Map.prototype.direct3data = function() {
$gameVariables._data[710] = 4;
$gameVariables._data[711] = 6;
$gameVariables._data[712] = 2;
$gameVariables._data[713] = 8;
$gameVariables._data[714] = 1;
$gameVariables._data[715] = 2;
$gameVariables._data[716] = $gameVariables._data[514];
if($gamePlayer._direction == 2 || $gamePlayer._direction == 8){
if($gameVariables._data[514] < 0) $gameSwitches._data[139] = true;
};
};

Game_Map.prototype.direct4data = function() {
$gameVariables._data[710] = 6;
$gameVariables._data[711] = 4;
$gameVariables._data[712] = 8;
$gameVariables._data[713] = 2;
$gameVariables._data[714] = -1;
$gameVariables._data[715] = -2;
$gameVariables._data[716] = $gameVariables._data[514];
if($gamePlayer._direction == 2 || $gamePlayer._direction == 8){
if($gameVariables._data[514] > 0) $gameSwitches._data[139] = true;
};
};

Game_Map.prototype.direct5data = function() {
if(!$gameSwitches._data[495] && $gameVariables._data[735] == 0){
$gameVariables._data[735] = 1;
};
if($gamePlayer._direction == 2){
if($gameVariables._data[735] == 1){
this.direct1data();
$gameSwitches._data[139] = true;
};
if($gameVariables._data[735] == 2){
this.direct2data();
$gameSwitches._data[139] = false;
};
}else{
if($gameVariables._data[735] == 1){
this.direct2data();
$gameSwitches._data[139] = true;
};
if($gameVariables._data[735] == 2){
this.direct1data();
$gameSwitches._data[139] = false;
};
};
};

Game_Map.prototype.direct6data = function() {
if(!$gameSwitches._data[495] && $gameVariables._data[735] == 0){
$gameVariables._data[735] = 1;
};
if($gamePlayer._direction == 4){
if($gameVariables._data[735] == 1){
this.direct4data();
$gameSwitches._data[139] = true;
};
if($gameVariables._data[735] == 2){
this.direct3data();
$gameSwitches._data[139] = false;
};
}else{
if($gameVariables._data[735] == 1){
this.direct3data();
$gameSwitches._data[139] = true;
};
if($gameVariables._data[735] == 2){
this.direct4data();
$gameSwitches._data[139] = false;
};
};
};

Game_Map.prototype.direct7data = function() {
if(!$gameSwitches._data[495] && $gameVariables._data[735] == 0){
$gameVariables._data[735] = 1;
};
if($gamePlayer._direction == 4){
if($gameVariables._data[735] == 1){
this.direct1data();
};
if($gameVariables._data[735] == 2){
this.direct3data();
};
};
if($gamePlayer._direction == 6){
if($gameVariables._data[735] == 1){
this.direct3data();
};
if($gameVariables._data[735] == 2){
this.direct1data();
};
};
if($gamePlayer._direction == 8){
if($gameVariables._data[735] == 1){
this.direct3data();
};
if($gameVariables._data[735] == 2){
this.direct1data();
};
};
if($gamePlayer._direction == 2){
if($gameVariables._data[735] == 1){
this.direct1data();
};
if($gameVariables._data[735] == 2){
this.direct3data();
};
};
};

Game_Map.prototype.direct9data = function() {
if(!$gameSwitches._data[495] && $gameVariables._data[735] == 0){
$gameVariables._data[735] = 1;
};
if($gamePlayer._direction == 6){
if($gameVariables._data[735] == 1){
this.direct2data();
$gameSwitches._data[140] = true;
};
if($gameVariables._data[735] == 2){
this.direct4data();
$gameSwitches._data[140] =false;
};
};
if($gamePlayer._direction == 4){
if($gameVariables._data[735] == 1){
this.direct4data();
$gameSwitches._data[140] = true;
};
if($gameVariables._data[735] == 2){
this.direct2data();
$gameSwitches._data[140] = false;
};
};
if($gamePlayer._direction == 2){
if($gameVariables._data[735] == 1){
this.direct4data();
$gameSwitches._data[140] = true;
};
if($gameVariables._data[735] == 2){
this.direct2data();
$gameSwitches._data[140] = false;
};
};
if($gamePlayer._direction == 8){
if($gameVariables._data[735] == 1){
this.direct2data();
$gameSwitches._data[140] = true;
};
if($gameVariables._data[735] == 2){
this.direct4data();
$gameSwitches._data[140] = false;
};
};
};

Game_Map.prototype.direct11data = function() {
if(!$gameSwitches._data[495] && $gameVariables._data[745] == 0){
$gameVariables._data[745] = 1;
};
if($gameVariables._data[543] == 0){
if($gamePlayer._direction == 4 || $gamePlayer._direction == 6){
if($gameVariables._data[745] == 1) this.direct6data();
if($gameVariables._data[745] == 2) this.direct1data();
}else{
if($gameVariables._data[745] == 1) this.direct1data();
if($gameVariables._data[745] == 2) this.direct6data();
};
}else{
if($gamePlayer._direction == 4 || $gamePlayer._direction == 6){
if($gameVariables._data[745] == 1) {
if($gameVariables._data[515] < 0) $gameSwitches._data[149] = true;
this.direct1data();
};
if($gameVariables._data[745] == 2) this.direct6data();
};
if($gamePlayer._direction == 8){
if($gameVariables._data[745] == 1) this.direct6data();
if($gameVariables._data[745] == 2) this.direct1data();
};
if($gamePlayer._direction == 2){
if($gameVariables._data[745] == 1) this.direct1data();
if($gameVariables._data[745] == 2) this.direct6data();
};
};
};

Game_Map.prototype.direct12data = function() {
if(!$gameSwitches._data[495] && $gameVariables._data[745] == 0){
$gameVariables._data[745] = 1;
};
if($gameVariables._data[543] == 0){
if($gamePlayer._direction == 4 || $gamePlayer._direction == 6){
if($gameVariables._data[745] == 1) this.direct6data();
if($gameVariables._data[745] == 2) this.direct2data();
}else{
if($gameVariables._data[745] == 1) this.direct2data();
if($gameVariables._data[745] == 2) this.direct6data();
};
}else{
if($gamePlayer._direction == 4 || $gamePlayer._direction == 6){
if($gameVariables._data[745] == 1) {
if($gameVariables._data[515] > 0) $gameSwitches._data[149] = true;
this.direct2data();
};
if($gameVariables._data[745] == 2) this.direct6data();
};
if($gamePlayer._direction == 2){
if($gameVariables._data[745] == 1) this.direct6data();
if($gameVariables._data[745] == 2) this.direct2data();
};
if($gamePlayer._direction == 8){
if($gameVariables._data[745] == 1) this.direct2data();
if($gameVariables._data[745] == 2) this.direct6data();
};
};
};

Game_Map.prototype.direct13data = function() {
if(!$gameSwitches._data[495] && $gameVariables._data[745] == 0){
$gameVariables._data[745] = 1;
};
if($gameVariables._data[543] == 0){
if($gamePlayer._direction == 2 || $gamePlayer._direction == 8){
if($gameVariables._data[745] == 1) this.direct5data();
if($gameVariables._data[745] == 2) this.direct3data();
}else{
if($gameVariables._data[745] == 1) this.direct3data();
if($gameVariables._data[745] == 2) this.direct5data();
};
}else{
if($gamePlayer._direction == 2 || $gamePlayer._direction == 8){
if($gameVariables._data[745] == 1) {
if($gameVariables._data[514] < 0) $gameSwitches._data[149] = true;
this.direct3data();
};
if($gameVariables._data[745] == 2) this.direct5data();
};
if($gamePlayer._direction == 4){
if($gameVariables._data[745] == 1) this.direct5data();
if($gameVariables._data[745] == 2) this.direct3data();
};
if($gamePlayer._direction == 6){
if($gameVariables._data[745] == 1) this.direct3data();
if($gameVariables._data[745] == 2) this.direct5data();
};
};
};

Game_Map.prototype.direct14data = function() {
if(!$gameSwitches._data[495] && $gameVariables._data[745] == 0){
$gameVariables._data[745] = 1;
};
if($gameVariables._data[543] == 0){
if($gamePlayer._direction == 2 || $gamePlayer._direction == 8){
if($gameVariables._data[745] == 1) this.direct5data();
if($gameVariables._data[745] == 2) this.direct4data();
}else{
if($gameVariables._data[745] == 1) this.direct4data();
if($gameVariables._data[745] == 2) this.direct5data();
};
}else{
if($gamePlayer._direction == 2 || $gamePlayer._direction == 8){
if($gameVariables._data[745] == 1) {
if($gameVariables._data[514] > 0) $gameSwitches._data[149] = true;
this.direct4data();
};
if($gameVariables._data[745] == 2) this.direct5data();
};
if($gamePlayer._direction == 6){
if($gameVariables._data[745] == 1) this.direct5data();
if($gameVariables._data[745] == 2) this.direct4data();
};
if($gamePlayer._direction == 4){
if($gameVariables._data[745] == 1) this.direct4data();
if($gameVariables._data[745] == 2) this.direct5data();
};
};
};

Game_Map.prototype.direct15data = function() {
if($gameVariables._data[543] == 0){
if($gameVariables._data[523] == 0){
if($gamePlayer._direction == 2) this.direct12data();
if($gamePlayer._direction == 8) this.direct11data();
if($gamePlayer._direction == 4) this.direct13data();
if($gamePlayer._direction == 6) this.direct14data();
}else{
if($gamePlayer._direction == 2) this.direct1data();
if($gamePlayer._direction == 8) this.direct2data();
if($gamePlayer._direction == 4) this.direct4data();
if($gamePlayer._direction == 6) this.direct3data();
}
}else{
if($gamePlayer._direction == 2){
if($gameVariables._data[514] < 0) {
this.direct8data();
}else{
this.direct7data();
};
};
if($gamePlayer._direction == 8){
if($gameVariables._data[514] < 0) {
this.direct9data();
}else{
this.direct10data();
};
};
if($gamePlayer._direction == 4){
if($gameVariables._data[515] < 0) {
this.direct9data();
}else{
this.direct8data();
};
};
if($gamePlayer._direction == 6){
if($gameVariables._data[515] < 0) {
this.direct10data();
}else{
this.direct7data();
};
};
};
};

Game_Map.prototype.direct8data = function() {
if($gameVariables._data[735] == 0) $gameVariables._data[735] = 1;
if($gamePlayer._direction == 4){
if($gameVariables._data[735] == 1) this.direct4data();
if($gameVariables._data[735] == 2) this.direct1data();
};
if($gamePlayer._direction == 6){
if($gameVariables._data[735] == 1) this.direct1data();
if($gameVariables._data[735] == 2) this.direct4data();
};
if($gamePlayer._direction == 8){
if($gameVariables._data[735] == 1) this.direct4data();
if($gameVariables._data[735] == 2) this.direct1data();
};
if($gamePlayer._direction == 2){
if($gameVariables._data[735] == 1) this.direct1data();
if($gameVariables._data[735] == 2) this.direct4data();
};
};

Game_Map.prototype.direct10data = function() {
if($gameVariables._data[735] == 0) $gameVariables._data[735] = 1;
if($gamePlayer._direction == 6){
if($gameVariables._data[735] == 1) {
this.direct3data();
$gameSwitches._data[140] = true;
};
if($gameVariables._data[735] == 2) {
this.direct2data();
$gameSwitches._data[140] = false;
};
};
if($gamePlayer._direction == 4){
if($gameVariables._data[735] == 1) {
this.direct2data();
$gameSwitches._data[140] = true;
};
if($gameVariables._data[735] == 2) {
this.direct3data();
$gameSwitches._data[140] = false;
};
};
if($gamePlayer._direction == 8){
if($gameVariables._data[735] == 1) {
this.direct2data();
$gameSwitches._data[140] = true;
};
if($gameVariables._data[735] == 2) {
this.direct3data();
$gameSwitches._data[140] = false;
};
};
if($gamePlayer._direction == 2){
if($gameVariables._data[735] == 1) {
this.direct3data();
$gameSwitches._data[140] = true;
};
if($gameVariables._data[735] == 2) {
this.direct2data();
$gameSwitches._data[140] = false;
};
};
};

Game_Map.prototype.vartileId = function() {
$gameMap.td_direction();
$gameMap.td_direction_second();
var a = $gamePlayer.x + $gameVariables._data[514];
var aa = $gamePlayer.y + $gameVariables._data[515];
$gameVariables._data[535] = $gameMap.tileId(a, aa, 0);
$gameVariables._data[751] = $gameMap.regionId(a, aa);
$gameVariables._data[763] = $gameMap.eventIdXy(a, aa);
};

Game_Map.prototype.vartileIdNanameL = function() {
$gameMap.td_direction();
$gameVariables._data[516] = -2;
$gameMap.right_minus();
$gameMap.td_direction_second();
var a = $gamePlayer.x + $gameVariables._data[514];
var aa = $gamePlayer.y + $gameVariables._data[515];
$gameVariables._data[535] = $gameMap.tileId(a, aa, 0);
$gameVariables._data[751] = $gameMap.regionId(a, aa);
//if($gameVariables._data[523]==2||$gameVariables._data[523]==3)$gameVariables._data[763] = $gameMap.eventIdXy(a, aa);
};

Game_Map.prototype.vartileIdNaname = function() {
$gameMap.td_direction();
$gameVariables._data[516] = -1;
$gameMap.right_minus();
$gameMap.td_direction_second();
var a = $gamePlayer.x + $gameVariables._data[514];
var aa = $gamePlayer.y + $gameVariables._data[515];
$gameVariables._data[535] = $gameMap.tileId(a, aa, 0);
$gameVariables._data[751] = $gameMap.regionId(a, aa);
$gameVariables._data[763] = $gameMap.eventIdXy(a, aa);
};

Game_Map.prototype.front1 = function() {
$gameVariables._data[523] = 1;
$gameMap.td_direction();
$gameMap.td_direction_second();
$gameMap.downfront1();
};

Game_Map.prototype.front2 = function() {
$gameVariables._data[523] = 2;
$gameMap.td_direction();
$gameMap.td_direction_second();
$gameMap.downfront2();
};

Game_Map.prototype.front3 = function() {
$gameVariables._data[523] = 3;
$gameMap.td_direction();
$gameMap.td_direction_second();
$gameMap.downfront3();
};

Game_Map.prototype.front4 = function() {
$gameVariables._data[523] = 4;
$gameMap.td_direction();
$gameMap.td_direction_second();
$gameMap.downfront4();
};

Game_Map.prototype.front5 = function() {
$gameVariables._data[523] = 5;
$gameMap.td_direction();
$gameMap.td_direction_second();
$gameMap.downfront5();
};

Game_Map.prototype.leftNaname1_contents = function() {
$gameVariables._data[520] = 80;
$gameMap.right_mirror();
$gameVariables._data[521] = -100;
$gameVariables._data[543] = 1;
this.left_percent();
};

Game_Map.prototype.leftNaname2_contents = function() {
$gameVariables._data[520] = 240;
$gameMap.right_mirror();
$gameVariables._data[521] = 60;
$gameVariables._data[543] = 1;
this.left_percent();
};

Game_Map.prototype.leftNaname3_contents = function() {
$gameVariables._data[520] = 320;
$gameMap.right_mirror();
$gameVariables._data[521] = 140;
$gameVariables._data[543] = 1;
this.left_percent();
};

Game_Map.prototype.leftNaname4_contents = function() {
$gameVariables._data[520] = 360;
$gameMap.right_mirror();
$gameVariables._data[521] = 180;
$gameVariables._data[543] = 1;
this.left_percent();
};

Game_Map.prototype.leftNaname0_contents = function() {
$gameVariables._data[520] = -240;
$gameMap.right_mirror();
$gameVariables._data[521] = -420;
$gameVariables._data[543] = 1;
this.left_percent();
};

Game_Map.prototype.leftfront1_contents = function() {
$gameVariables._data[520] = -560;
$gameMap.right_mirror();
$gameVariables._data[521] = -100;
$gameVariables._data[543] = 1;
this.left_percent();
};

Game_Map.prototype.leftfront2_contents = function() {
$gameVariables._data[520] = -80;
$gameMap.right_mirror();
$gameVariables._data[521] = 60;
$gameVariables._data[543] = 1;
this.left_percent();
};

Game_Map.prototype.leftfront3_contents = function() {
$gameVariables._data[520] = 160;
$gameMap.right_mirror();
$gameVariables._data[521] = 140;
$gameVariables._data[543] = 1;
this.left_percent();
};

Game_Map.prototype.leftfront4_contents = function() {
$gameVariables._data[520] = 280;
$gameMap.right_mirror();
$gameVariables._data[521] = 180;
$gameVariables._data[543] = 1;
this.left_percent();
};

Game_Map.prototype.leftfront5_contents = function() {
$gameVariables._data[520] = 340;
$gameMap.right_mirror();
$gameVariables._data[521] = 200;
$gameVariables._data[543] = 1;
this.left_percent();
};

Game_Map.prototype.left2Lnaname_contents = function() {
$gameVariables._data[520] = -80;
$gameMap.right_mirror();
$gameVariables._data[521] = 60;
$gameVariables._data[543] = 2;
this.left_percent();
};

Game_Map.prototype.left3Lnaname_contents = function() {
$gameVariables._data[520] = 160;
$gameMap.right_mirror();
$gameVariables._data[521] = 140;
$gameVariables._data[543] = 2;
this.left_percent();
};

Game_Map.prototype.left4Lnaname_contents = function() {
$gameVariables._data[520] = 280;
$gameMap.right_mirror();
$gameVariables._data[521] = 180;
$gameVariables._data[543] = 2;
this.left_percent();
};

Game_Map.prototype.left3Lfront_contents = function() {
$gameVariables._data[520] = 0;
$gameMap.right_mirror();
$gameVariables._data[521] = 140;
$gameVariables._data[543] = 1;
this.left_percent();
};

Game_Map.prototype.left4Lfront_contents = function() {
$gameVariables._data[520] = 200;
$gameMap.right_mirror();
$gameVariables._data[521] = 180;
$gameVariables._data[543] = 1;
this.left_percent();
};

Game_Map.prototype.left5Lfront_contents = function() {
$gameVariables._data[520] = 300;
$gameMap.right_mirror();
$gameVariables._data[521] = 200;
$gameVariables._data[543] = 1;
this.left_percent();
};

Game_Map.prototype.right_minus = function() {
if($gameSwitches._data[89]){
$gameVariables._data[516] *= -1;
};
};

Game_Map.prototype.right_mirror = function() {
if($gameSwitches._data[89]){
$gameVariables._data[520] *= -1;
$gameVariables._data[520] += 800;
};
};

Game_Map.prototype.downfront1 = function() {
$gameVariables._data[520] = 80;
$gameVariables._data[521] = -100;
this.left_percent();
};

Game_Map.prototype.downfront2 = function() {
$gameVariables._data[520] = 240;
$gameVariables._data[521] = 60;
this.left_percent();
};

Game_Map.prototype.downfront3 = function() {
$gameVariables._data[520] = 320;
$gameVariables._data[521] = 140;
this.left_percent();
};

Game_Map.prototype.downfront4 = function() {
$gameVariables._data[520] = 360;
$gameVariables._data[521] = 180;
this.left_percent();
};

Game_Map.prototype.downfront5 = function() {
$gameVariables._data[520] = 380;
$gameVariables._data[521] = 200;
this.left_percent();
};

Game_Map.prototype.left_percent = function() {

var tdpicdn = $gameVariables.value(523);
if(tdpicdn == 0){
$gameVariables._data[522] = 400;
$gameVariables._data[532] = 400;
}
if(tdpicdn == 1){
$gameVariables._data[522] = 200;
$gameVariables._data[532] = 200;
}
if(tdpicdn == 2){
$gameVariables._data[522] = 100;
$gameVariables._data[532] = 100;
}
if(tdpicdn == 3){
$gameVariables._data[522] = 50;
$gameVariables._data[532] = 50;
}
if(tdpicdn == 4){
$gameVariables._data[522] = 25;
$gameVariables._data[532] = 25;
}
if(tdpicdn == 5){
$gameVariables._data[522] = 12.5;
$gameVariables._data[532] = 12.5;
}
if($gameSwitches._data[89]){
$gameVariables._data[522] *= -1;
};
if($gameSwitches._data[137]){
$gameVariables._data[522] *= 3;
}else{
if($gameMap.terrainTag($gamePlayer.x+$gameVariables.value(514),$gamePlayer.y+$gameVariables.value(515))!=2){
if($gameVariables._data[543] == 2)$gameVariables._data[522] *= 3;
};
};

};


Game_Map.prototype.td_direction_second = function() {

var td_input = $gameVariables.value(516);
$gameVariables._data[524] = 0;
var tdx = td_input;
if($gamePlayer._direction == 4){
tdx *= -1;
$gameVariables._data[515] = tdx;
};
if($gamePlayer._direction == 6){
$gameVariables._data[515] = tdx;
};
if($gamePlayer._direction == 8){
$gameVariables._data[514] = tdx;
};
if($gamePlayer._direction == 2){
tdx *= -1;
$gameVariables._data[514] = tdx;
};

};

Game_Map.prototype.td_direction = function() {

var td_input = $gameVariables.value(523);
$gameVariables._data[516] = 0;
var dark_distance = td_input * -1;
$gameVariables._data[527] = dark_distance;
var tdx = td_input;
if($gamePlayer._direction == 4){
tdx *= -1;
$gameVariables._data[514] = tdx;
};
if($gamePlayer._direction == 6){
$gameVariables._data[514] = tdx;
};
if($gamePlayer._direction == 8){
tdx *= -1;
$gameVariables._data[515] = tdx;
};
if($gamePlayer._direction == 2){
$gameVariables._data[515] = tdx;
};

};





Scene_Map.prototype.updateCallMenu = function() {
    if (this.isMenuEnabled()) {
        if (this.isMenuCalled()) {
            this.menuCalling = true;
        }
        if (this.menuCalling && !$gamePlayer.isMoving()) {
        if($gameVariables.value(156)==1) $gameVariables.setValue(156, 2);
        $gameMap._interpreter.setup($dataCommonEvents[83].list);
            //this.callMenu();
        }else{
        if (Input.isTriggered('pagedown') && !$gamePlayer.isMoving()) {
        $gameMap._interpreter.setup($dataCommonEvents[160].list);
        }else{
        if (Input.isTriggered('pageup') && !$gamePlayer.isMoving()) {
        $gameMap._interpreter.setup($dataCommonEvents[163].list);
        }else{
        if (Input.isPressed('shift') && !$gamePlayer.isMoving()) {
        }
        }
        }
        }
    } else {
        this.menuCalling = false;
    }
};

Scene_Menu.prototype.initialize = function() {
if($gameVariables.value(156)==1) $gameVariables.setValue(156, 2);
    Scene_MenuBase.prototype.initialize.call(this);
};


})();
