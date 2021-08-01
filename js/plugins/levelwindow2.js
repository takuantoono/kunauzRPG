(function() {

Game_Map.prototype.repairDoing = function(index, num) {
var user = $gameParty.members()[index]
if(!user) return;
if(!user._equips[num]) return;
if(user._equips[num]._dataClass == "weapon"){
var item = $dataWeapons[user._equips[num]._itemId]
}else{
var item = $dataArmors[user._equips[num]._itemId]
};
if(!item) return;
if(item.meta.no_count)return;
if(item.durability >= 0){
var cur = DataManager.getDurability(item);
var max = DataManager.getMaxDurability(item);
if(cur < max){
var popi = max - cur;
item.durability += Math.floor(popi);
if(!item._olden)item._olden=0;
if(Math.randomInt(5)==0)item._olden+=1;
if(item.durability > 0) item._broken = false;
ItemManager.clampDurability2(item);
}
}
};

Game_Map.prototype.repairCheck = function(index, num) {
var user = $gameParty.members()[index]
if(!user) return;
if(!user._equips[num]) return;
if(user._equips[num]._dataClass == "weapon"){
var item = $dataWeapons[user._equips[num]._itemId]
}else{
var item = $dataArmors[user._equips[num]._itemId]
};
if(!item) return;
if(item.meta.no_count)return;
if(item.durability >= 0){
var cur = DataManager.getDurability(item);
var max = DataManager.getMaxDurability(item);
if(cur < max){
var popi = max - cur;
if(item.meta.bronze) popi /= 5;
if(item.meta.iron) popi /= 2;
if(item.meta.silver) popi *= 1;
if(item.meta.jade) popi *= 1.5;
if(item.meta.obsidian) popi *= 1.5;
if(item.meta.misril) popi *= 2;
if(item.meta.repSP) popi *= 1;
if(!item.meta.bronze && !item.meta.iron && !item.meta.silver && !item.meta.jade && !item.meta.obsidian && !item.meta.misril && !item.meta.repSP) popi /= 20;
$gameVariables._data[8] += Math.floor(popi);
}
}
};


Game_Map.prototype.repairMember2 = function(index, num) {
var user = $gameParty.members()[index]
if(!user) return;
if(!user._equips[num]) return;
if(user._equips[num]._dataClass == "weapon"){
var item = $dataWeapons[user._equips[num]._itemId]
}else{
var item = $dataArmors[user._equips[num]._itemId]
};
if(!item) return;
if(item.meta.no_count)return;
if(item.durability >= 0){
var cur = DataManager.getDurability(item);
var max = DataManager.getMaxDurability(item) / 2;
if(cur > 0){
if(cur < max){
$gameVariables._data[8] += 1;
if($gameVariables._data[6]==0)$gameVariables._data[412]+=1;
if($gameVariables._data[6]==1)$gameVariables._data[413]+=1;
if($gameVariables._data[6]==2)$gameVariables._data[414]+=1;
if($gameVariables._data[6]==3)$gameVariables._data[415]+=1;
if($gameVariables._data[6]==4)$gameVariables._data[416]+=1;
}
}
}
};

Game_Map.prototype.repairMember = function(index, num) {
var user = $gameParty.members()[index]
if(!user) return;
if(!user._equips[num]) return;
if(user._equips[num]._dataClass == "weapon"){
var item = $dataWeapons[user._equips[num]._itemId]
}else{
var item = $dataArmors[user._equips[num]._itemId]
};
if(!item) return;
if(item.meta.no_count)return;
if(item.durability >= 0){
var cur = DataManager.getDurability(item);
var max = DataManager.getMaxDurability(item) / 2;
if(cur < max){
$gameVariables._data[8] += 1;
var popi = 8;
if(item.meta.iron) popi = 7;
if(item.meta.silver) popi = 6;
if(item.meta.jade) popi = 4;
if(item.meta.obsidian) popi = 5;
if(item.meta.misril) popi = 3;
if(item.meta.repSP) popi = 10;
if(!item.meta.bronze && !item.meta.iron && !item.meta.silver && !item.meta.jade && !item.meta.obsidian && !item.meta.misril && !item.meta.repSP) popi = 12;
item.durability += Math.floor(Math.random() * popi) + 1;
item.durability +=$gameVariables.value(934)*10;
if(item.durability > 0) item._broken = false;
if(!item._olden)item._olden=0;
if(Math.randomInt(10)==0)item._olden+=1;
ItemManager.clampDurability2(item);
}
}
};



BattleManager.invokeAction = function(subject, target) {
    this._logWindow.push('pushBaseLine');
    if (Math.random() < this._action.itemCnt(target)) {
        this.invokeCounterAttack(subject, target);
    } else if (Math.random() < this._action.itemMrf(target)) {
        if(!target.isDead()){
        this.invokeMagicReflection(subject, target);
        }else{
        this.invokeNormalAction(subject, target);
        }
    } else {
        this.invokeNormalAction(subject, target);
    }
    subject.setLastTarget(target);
    this._logWindow.push('popBaseLine');
    this.refreshStatus();
};



BattleManager.updateTurnEnd = function() {
	this._statusWindow.refresh();
    this.startInput();
    
};

Scene_Equip.prototype.refreshActor = function() {
    var actor = this.actor();
    this._statusWindow.setActor(actor);
    this._slotWindow.setActor(actor);
    this._itemWindow.setActor(actor);
    $gameParty.formationState(0);
    if($gameVariables._data[705]>=2)$gameParty.formationState(1)
	if($gameVariables._data[705]>=3)$gameParty.formationState(2)
	if($gameVariables._data[705]>=4)$gameParty.formationState(3)
	if($gameVariables._data[705]>=5)$gameParty.formationState(4)
    $gameVariables.setValue(173, actor);
    this._statusWindow.refresh();
};

Game_Party.prototype.formationState = function(index) {
var user = $gameParty.members()[index];
if(!user)return;
if(user.isStateAffected(70))user.eraseState(70)
if(user.isStateAffected(71))user.eraseState(71)
if(user.isStateAffected(73))user.eraseState(73)

if(index==0 && !user.isStateAffected(65)){
user.addNewState(65)
if(user.isStateAffected(66))user.eraseState(66)
if(user.isStateAffected(67))user.eraseState(67)
if(user.isStateAffected(68))user.eraseState(68)
if(user.isStateAffected(69))user.eraseState(69)
}
if(index==1 && !user.isStateAffected(66)){
user.addNewState(66)
if(user.isStateAffected(65))user.eraseState(65)
if(user.isStateAffected(67))user.eraseState(67)
if(user.isStateAffected(68))user.eraseState(68)
if(user.isStateAffected(69))user.eraseState(69)
}
if(index==2 && !user.isStateAffected(67)){
user.addNewState(67)
if(user.isStateAffected(65))user.eraseState(65)
if(user.isStateAffected(66))user.eraseState(66)
if(user.isStateAffected(68))user.eraseState(68)
if(user.isStateAffected(69))user.eraseState(69)
}
if(index==3 && !user.isStateAffected(68)){
user.addNewState(68)
if(user.isStateAffected(65))user.eraseState(65)
if(user.isStateAffected(66))user.eraseState(66)
if(user.isStateAffected(67))user.eraseState(67)
if(user.isStateAffected(69))user.eraseState(69)
}
if(index==4 && !user.isStateAffected(69)){
user.addNewState(69)
if(user.isStateAffected(65))user.eraseState(65)
if(user.isStateAffected(66))user.eraseState(66)
if(user.isStateAffected(67))user.eraseState(67)
if(user.isStateAffected(68))user.eraseState(68)
}

var condition = false;
if(index==0){
var weapon = $dataWeapons[user._equips[0]._itemId]
if(user._equips[1]&&user._equips[1]._dataClass=="weapon"){
var weapon1 = $dataWeapons[user._equips[1]._itemId];
}else{
var weapon1 = $dataArmors[user._equips[1]._itemId];
};
if(weapon!=null){
if(weapon.meta.bow) condition = true;
}
if(user._equips[1]._dataClass=="weapon"){
if(weapon1.meta.bow) condition = true;
}
}
var yao=false;
if(index==0&&condition && !user.isStateAffected(73))user.addNewState(73)
if(index==2){
var weapon = $dataWeapons[user._equips[0]._itemId]
if(user._equips[1]&&user._equips[1]._dataClass=="weapon"){
var weapon1 = $dataWeapons[user._equips[1]._itemId];
}else{
var weapon1 = $dataArmors[user._equips[1]._itemId];
};
if(weapon!=null){
if(weapon.meta.middle) condition = true;
if(weapon.meta.backignore) condition2 = true;
}
if(user._equips[1]._dataClass=="weapon"){
if(weapon1.meta.middle) condition = true;
if(weapon1.meta.backignore) condition2 = true;
}
}
var yao=false;
if(index==2&&condition2){
yao=true;
}else{
if(index==2&&!condition && !user.isStateAffected(73))user.addNewState(73)
}
var condition = false;
if(index==3){
var weapon = $dataWeapons[user._equips[0]._itemId]
var weapon1 = $dataWeapons[user._equips[1]._itemId]
if(weapon!=null){
if(weapon.meta.middle) {
condition = true;
}else{
}
if(weapon.meta.back) condition = true;
if(weapon.meta.backignore) condition2 = true;
}
if(user._equips[1]._dataClass=="weapon"){
if(weapon1.meta.middle) condition = true;
if(weapon1.meta.back) condition = true;
if(weapon1.meta.backignore){
 condition2 = true;
if(weapon&&!weapon.meta.middle) condition2 = false;
 }
}
}
if(index==3 && condition2){
yao=true;
}else{
if(index==3 && !condition && !user.isStateAffected(70)){
user.addNewState(70)
}
}
var condition2 = false
var condition = false;
if(index==4){
var weapon = $dataWeapons[user._equips[0]._itemId]
var weapon1 = $dataWeapons[user._equips[1]._itemId]
if(weapon!=null){
if(weapon.meta.back) condition = true;
if(weapon.meta.backignore) condition2 = true;
}
if(user._equips[1]._dataClass=="weapon"){
if(weapon1.meta.back) condition = true;
if(weapon1.meta.backignore) condition2 = true;
}
}
var yao=false;
if(index==4&&condition2){
yao=true;
}else{
if(index==4&&!condition && !user.isStateAffected(71))user.addNewState(71);
}
if(yao){
if(!user.isStateAffected(72))user.addNewState(72)
}else{
user.eraseState(72)
}
}



Game_Party.prototype.swapOrder = function(index1, index2) {
if(!$gameParty.members()[index1].isStateAffected(1)&&!$gameParty.members()[index2].isStateAffected(1)){
    var temp = this._actors[index1];
    this._actors[index1] = this._actors[index2];
    this._actors[index2] = temp;
if(index1 != index2){
this.formationState(index1);
this.formationState(index2);
$gamePlayer.refresh();
};
}
};



})();
