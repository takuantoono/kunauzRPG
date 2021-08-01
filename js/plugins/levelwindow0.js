(function() {

Window_Base.prototype.japList = function(id) {
if($gameSwitches.value(376)){
if(id==1)return "メンバー全員なると全滅。獲得EXP70%"
if(id==3)return "体勢を崩し、1-2T行動不能"
if(id==4)return "[常時]ダメージを受け続ける"
if(id==5)return "4-5T、武器攻撃が当たりにくい"
if(id==6)return "魔法等、音声が重要なスキルが4-5T使用不可"
if(id==7)return "3-4T、暴走して勝手に敵を通常攻撃。ﾀﾞﾒｰｼﾞで解除（30%）"
if(id==8)return "3-4T、混乱して勝手に敵味方を通常攻撃。ﾀﾞﾒｰｼﾞで解除（30%）"
if(id==9)return "2-3T、暴走して勝手に敵を通常攻撃する。ﾀﾞﾒｰｼﾞで解除（50%）"
if(id==10)return "3-7T、行動不能。ﾀﾞﾒｰｼﾞで解除（80%）"
if(id==41)return "[常時]仲間に感染の恐れがある。攻撃速度-20"
if(id==42)return "[常時]元気がない。時間経過でMPとHPにﾀﾞﾒｰｼﾞ"
if(id==43)return "[常時]食料がない。時間経過でHPに大ﾀﾞﾒｰｼﾞ"
if(id==45)return "3-5T、勝手に防御（50%）。敵は逃走も。ﾀﾞﾒｰｼﾞで解除（20%）"
if(id==46)return "[常時]15-20T特殊技が使えない"
if(id==47)return "1回、ダメージを半減する"
if(id==48)return "攻撃属性[対空]追加。ただし[対空]攻撃に対し弱化"
if(id==49)return "先制＋、敵に見つかりにくくなり、敵のアイテムドロップ＋"
if(id==50)return "3-5T 伏兵攻撃。ﾀﾞﾒｰｼﾞで解除（10%）"
if(id==51)return "[常時]15-20T、50%で自分を攻撃"
if(id==52)return "[常時]行動不能。老いないが、死に近い危険な状態"
if(id==53)return "[常時]仲間に感染の恐れがある。"
if(id==54)return "[常時]"
if(id==56)return "HPの低い味方をかばう"
if(id==73)return "隊列と武器射程が不適合"
if(id==83)return "[セリフボーナス]5T"
if(id==85)return "[踏破メシボーナス]"
if(id==1001)return "必要レベル"
if(id==1002)return "詳細ｸﾘｯｸ"
if(id==1003)return "ﾓﾝｸ専用"
if(id==1004)return "使用後休息まで使用不可"
if(id==2001)return "所持数："
}else{
if(id==1)return "Can't do anything. Get EXP70%."
if(id==3)return "1-2T unable to move"
if(id==4)return "[Allways] Take slip damage"
if(id==5)return "4-5T reduces Accuracy of weapon attack"
if(id==6)return "4-5T unable to cast Magic or Skill implemented by sound"
if(id==7)return "3-4T automatically attack a enemy. Remove by damage(30%)"
if(id==8)return "3-4T automatically attack a enemy. Remove by damage(30%)"
if(id==9)return "2-3T automatically attack a enemy. Remove by damage(50%)"
if(id==10)return "3-7T unable to move. Remove by damage(80%)."
if(id==41)return "[Allways]Infectious to friends. Speed of attack -20"
if(id==42)return "[Allways]No Stamina. HP & MP damage at time transition"
if(id==43)return "[Allways]No Food. Big HP damage at time transition"
if(id==45)return "3-5T auto.defend self(50%). Enemy might escape."
if(id==46)return "[Allways]15-20T unable use to Skill"
if(id==47)return "Damage is halved once"
if(id==48)return "add attack element[A.flying], but weekend toward [A.flying]"
if(id==49)return "Raise preemptive, encounter reduce, drop item double"
if(id==50)return "3-5T can ambush attack. Remove by damage(10%)"
if(id==51)return "[Allways]15-20T automatically attack oneself(50%)."
if(id==52)return "[Allways]unable to move. Not Aging, but dangerous situation."
if(id==53)return "[Allways]Infectious to friends"
if(id==54)return "[Allways]"
if(id==56)return "Substitute damage of a friend whose HP is low"
if(id==73)return "Unsuited formation place and weapon range"
if(id==83)return "[Phrase Bonus]5T"
if(id==85)return "[Meal Bonus]"
if(id==1001)return "Req.Level"
if(id==1002)return "Click Here for details"
if(id==1003)return "Monk Only"
if(id==1004)return "Unavailable after used until rest"
}
}


Window_MapName.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if($gameSwitches.value(415)){
    this._showCount=0
    $gameMap._nameDisplay=true;
    $gameSwitches.setValue(415,false)
    }
    if (this._showCount > 0 && $gameMap.isNameDisplayEnabled()) {
        this.updateFadeIn();
        this._showCount--;
    } else {
        this.updateFadeOut();
    }
};


Game_BattlerBase.prototype.canEquipWeapon = function(item) {
	var eok = true;
    if(this.isStateAffected(331)&&item.wtypeId!=8)eok=false;
    if(this.isStateAffected(332)&&item.wtypeId!=9)eok=false;
    if(this.isStateAffected(333)){
    eok=false
    if(item.wtypeId==1||item.wtypeId==2||item.wtypeId==3)eok=true;
    }
    if(this.isStateAffected(334)){
    eok=false
    if(item.wtypeId==11||item.wtypeId==12)eok=true;
    }
    if(this.isStateAffected(337)&&item.wtypeId!=1)eok=false;
    if(this.isStateAffected(338)&&item.wtypeId!=7)eok=false;
    if(this.isStateAffected(339)&&item.wtypeId!=6)eok=false;
    if(this.isStateAffected(349)&&item.wtypeId!=6)eok=false;
    if(this.isStateAffected(350)&&item.wtypeId!=6)eok=false;
    if(this.isStateAffected(353)&&item.wtypeId!=6)eok=false;
    if(this.isStateAffected(354)&&item.wtypeId!=6)eok=false;
    if(item.id==47)eok=true;
    return this.isEquipWtypeOk(item.wtypeId) && !this.isEquipTypeSealed(item.etypeId) && eok;
};


Game_BattlerBase.prototype.canEquipArmor = function(item) {
	var eok = true;
    if(this.isStateAffected(331)&&item.atypeId!=1)eok=false;
    if(this.isStateAffected(332)){
    if(item.etypeId!=5){
    if(item.atypeId==1||item.atypeId==2||item.atypeId==3||item.atypeId==5||item.atypeId==7)eok=false;
    }
    }
    if(this.isStateAffected(333)||this.isStateAffected(334)||this.isStateAffected(336)){
    if(item.atypeId==4||item.atypeId==6)eok=false;
    }
    if(this.isStateAffected(335)){
    if(item.atypeId==4||item.atypeId==5||item.atypeId==6)eok=false;
    }
    if(this.isStateAffected(337)&&item.atypeId!=1)eok=false;
    if(this.isStateAffected(344)){
    if(item.atypeId==5||item.atypeId==6)eok=false;
    }
    if(this.isStateAffected(339)&&item.atypeId!=1)eok=false;
    if(this.isStateAffected(340)){
    if(item.atypeId==3)eok=false;
    if(item.atypeId==4)eok=false;
    if(item.atypeId==5)eok=false;
    if(item.atypeId==6)eok=false;
    }
    if(this.isStateAffected(342)){
    if(item.atypeId==3)eok=false;
    if(item.atypeId==4)eok=false;
    if(item.atypeId==5)eok=false;
    if(item.atypeId==6)eok=false;
    }
    if(this.isStateAffected(349)||this.isStateAffected(350)||this.isStateAffected(351)||this.isStateAffected(353)||this.isStateAffected(354)){
    if(item.atypeId==3||item.atypeId==4||item.atypeId==5||item.atypeId==6||item.atypeId==11)eok=false;
    }
    return this.isEquipAtypeOk(item.atypeId) && !this.isEquipTypeSealed(item.etypeId) && eok;
};

Game_BattlerBase.prototype.addNewState = function(stateId) {
    if (stateId === this.deathStateId()) {
        this.die();
    }
    var restricted = this.isRestricted();
    if(stateId==188)this.photon=$gameVariables.value(305)
    this._states.push(stateId);
    this.sortStates();
    if (!restricted && this.isRestricted()) {
        this.onRestrict();
    }
};


Game_Battler.prototype.forceAction = function(skillId, targetIndex) {
    this.clearActions();
    var action = new Game_Action(this, true);
    action.setSkill(skillId);
    if (targetIndex === -2) {
        action.setTarget(this._lastTargetIndex);
    } else if (targetIndex === -3) {
        action.setTarget(this._actions._subjectEnemyIndex);
    } else if (targetIndex === -1) {
        action.decideRandomTarget();
    } else {
        action.setTarget(targetIndex);
    }
    this._actions.push(action);
};


Game_Enemy.prototype.dropItemRate = function() {
    var pow = 1
    for (var i = 0; i < $gameParty.members().length; i++) {
    if($gameParty.members()[i]&&$gameParty.members()[i].isStateAffected(337))pow+=1;
    if($gameParty.members()[i]&&$gameParty.members()[i].isStateAffected(91))pow+=1;
    }
    return pow;
};

Game_Interpreter.prototype.geri = function() {
$gameParty.members()[$gameVariables._data[70]]._growMhp /= 3
$gameParty.members()[$gameVariables._data[70]]._growMmp /= 3
$gameParty.members()[$gameVariables._data[70]]._growAtk /= 3
$gameParty.members()[$gameVariables._data[70]]._growDef /= 3
$gameParty.members()[$gameVariables._data[70]]._growMat /= 3
$gameParty.members()[$gameVariables._data[70]]._growMdf /= 3
$gameParty.members()[$gameVariables._data[70]]._growAgi /= 3
$gameParty.members()[$gameVariables._data[70]]._growLuk /= 3
$gameParty.members()[$gameVariables._data[70]]._growMhp *= 2
$gameParty.members()[$gameVariables._data[70]]._growMmp *= 2
$gameParty.members()[$gameVariables._data[70]]._growAtk *= 2
$gameParty.members()[$gameVariables._data[70]]._growDef *= 2
$gameParty.members()[$gameVariables._data[70]]._growMat *= 2
$gameParty.members()[$gameVariables._data[70]]._growMdf *= 2
$gameParty.members()[$gameVariables._data[70]]._growAgi *= 2
$gameParty.members()[$gameVariables._data[70]]._growLuk *= 2
}

Game_Interpreter.prototype.command113 = function() {
    while (this._index < this._list.length - 1) {
        this._index++;
        var command = this.currentCommand();
        if (command.code === 413 && command.indent < this._indent) {
            break;
        }
    }
    return true;
};

Game_Interpreter.prototype.zard = function() {
var id = $gameMap.eventIdXy($gamePlayer.x, $gamePlayer.y)
var jk = $gameSelfSwitches.value([this._mapId, id, "A"])
if(id>0&&!jk){
var event = $dataMap.events[id]
if(event){
if(event.meta.kamuri){
$gameVariables.setValue(375, 13)
$gameSelfSwitches.setValue([this._mapId, id, "QR"], false)
}
if(event.meta.take){
$gameVariables.setValue(375, 15)
$gameSelfSwitches.setValue([this._mapId, id, "QR"], false)
}
if(event.meta.kamo){
$gameVariables.setValue(375, 17)
$gameSelfSwitches.setValue([this._mapId, id, "QR"], false)
}
if(event.meta.inu){
$gameVariables.setValue(375, 18)
$gameSelfSwitches.setValue([this._mapId, id, "QR"], false)
}
if(event.meta.aro){
$gameVariables.setValue(375, 20)
$gameSelfSwitches.setValue([this._mapId, id, "QR"], false)
}
if(event.meta.fish){
$gameVariables.setValue(375, 22)
$gameSelfSwitches.setValue([this._mapId, id, "QR"], false)
}
if(event.meta.waka){
$gameVariables.setValue(375, 24)
$gameSelfSwitches.setValue([this._mapId, id, "QR"], false)
}
if(event.meta.kabu){
$gameVariables.setValue(375, 26)
$gameSelfSwitches.setValue([this._mapId, id, "QR"], false)
}
}
}
}

Game_Interpreter.prototype.unko = function() {
var hp = $gameActors.actor($gameVariables._data[421]).param(4)/2;
for (var i = 0; i < $gameTroop.members().length; i++) {
var enemy = $gameTroop.members()[i];
if(enemy._enemyId>0&&$dataEnemies[enemy._enemyId].meta.soul){
enemy.transform($gameVariables._data[907]);
$gameTroop.makeUniqueNames();
this.changeHp(enemy, -998, false);
this.changeHp(enemy, hp+30, false);
if($gameVariables._data[907]==91)this.changeHp(enemy, 70, false);
if($gameVariables._data[907]==118)this.changeHp(enemy, hp/3, false);
if($gameVariables._data[907]==170)this.changeHp(enemy, hp+100, false);
$gameVariables._data[906]=enemy;
enemy.startAnimation(248, false, 0);
enemy.gainMp(99);
}
}
}

Game_Interpreter.prototype.winner2 = function() {
var array = $gameVariables.value(667)
var cord = $gameVariables.value(936)
if(array[0][2]==cord) {
array[0] = [" ",0,0]
}else{
if(array[1][2]==cord) {
array[1] = [" ",0,0]
}else{
if(array[2][2]==cord) {
array[2] = [" ",0,0]
}
}
}
name = $gameActors.actor(6)._name
time = $gameVariables.value(21)
array[3] = [name, time, cord]
array.sort(function(a,b){
        if( a[1] > b[1] ) return -1;
        if( a[1] < b[1] ) return 1;
        return 0;
});
$gameVariables.setValue(667, array)
}

Game_Interpreter.prototype.winner = function() {
var array = $gameVariables.value(665)
var cord = $gameVariables.value(936)
if(array[0][2]==cord) {
array[0] = [" ",0,0]
}else{
if(array[1][2]==cord) {
array[1] = [" ",0,0]
}else{
if(array[2][2]==cord) {
array[2] = [" ",0,0]
}
}
}
name = $gameActors.actor(6)._name
fame = $gameVariables.value(433)
array[3] = [name, fame, cord]
array.sort(function(a,b){return(a[1] - b[1])*-1;})
$gameVariables.setValue(665, array)
}


Game_Temp.prototype.eleNum = function(user, ele) {
var tanza = 0;
if(ele==16&&!user.isStateAffected(25))return tanza;
if(ele==3&&!user.isStateAffected(26))return tanza;
if(ele==4&&!user.isStateAffected(27))return tanza;
if(ele==2&&!user.isStateAffected(28))return tanza;
if(ele==12&&!user.isStateAffected(29))return tanza;
if(ele==11&&!user.isStateAffected(30))return tanza;
if(ele==8&&!user.isStateAffected(31))return tanza;
if(ele==9&&!user.isStateAffected(32))return tanza;
if(ele==10&&!user.isStateAffected(33))return tanza;
if (user.isStateAffected(ele)) {
for (var i = 0; i < user._equips.length; i++) {
if(user._equips[i]){
var item = false;
if(user._equips[i]._dataClass=="weapon"&&$dataWeapons[user._equips[i]._itemId]){
item = $dataWeapons[user._equips[i]._itemId]
}
if(user._equips[i]._dataClass=="armor"&&$dataArmors[user._equips[i]._itemId]){
item = $dataArmors[user._equips[i]._itemId]
}
var name = false;
if(user.isStateAffected(25))name="item 69";
if(user.isStateAffected(27))name="item 70";//wind
if(user.isStateAffected(28))name="item 71";//fire
if(user.isStateAffected(26))name="item 72";//water
if(user.isStateAffected(29))name="item 73";
if(user.isStateAffected(30))name="item 74";
if(user.isStateAffected(31))name="item 75";
if(user.isStateAffected(32))name="item 76";
if(user.isStateAffected(33))name="item 77";
if(name&&item&&item.augmentSlotItems){
var slot = item.augmentSlotItems[0];
if(slot&&slot==name)tanza+=1;
slot = item.augmentSlotItems[1];
if(slot&&slot==name)tanza+=1;
slot = item.augmentSlotItems[2];
if(slot&&slot==name)tanza+=1;
slot = item.augmentSlotItems[3];
if(slot&&slot==name)tanza+=1;
}
var name = false;
if(user.isStateAffected(25))name="item 78";
if(user.isStateAffected(27))name="item 79";
if(user.isStateAffected(28))name="item 80";
if(user.isStateAffected(26))name="item 81";
if(user.isStateAffected(29))name="item 82";
if(user.isStateAffected(30))name="item 83";
if(user.isStateAffected(31))name="item 84";
if(user.isStateAffected(32))name="item 85";
if(user.isStateAffected(33))name="item 86";
if(name&&item&&item.augmentSlotItems){
var slot = item.augmentSlotItems[0];
if(slot&&slot==name)tanza+=2;
slot = item.augmentSlotItems[1];
if(slot&&slot==name)tanza+=2;
slot = item.augmentSlotItems[2];
if(slot&&slot==name)tanza+=2;
slot = item.augmentSlotItems[3];
if(slot&&slot==name)tanza+=2;
}
}
}
}
return tanza;
}

Game_Temp.prototype.eleNum2 = function(user) {
var tanza = 0;
for (var i = 0; i < user._equips.length; i++) {
if(user._equips[i]){
var item = false;
if(user._equips[i]._dataClass=="weapon"&&$dataWeapons[user._equips[i]._itemId]){
item = $dataWeapons[user._equips[i]._itemId]
}
if(user._equips[i]._dataClass=="armor"&&$dataArmors[user._equips[i]._itemId]){
item = $dataArmors[user._equips[i]._itemId]
}
var name = false;
var name2 = false;
if(user.isStateAffected(27)||user.isStateAffected(30))name="item 69";
if(user.isStateAffected(25))name="item 70";
if(user.isStateAffected(26))name="item 71";
if(user.isStateAffected(28))name="item 72";
if(user.isStateAffected(25))name2="item 74";
if(user.isStateAffected(32))name="item 75";
if(user.isStateAffected(31))name="item 76";
if(name&&item&&item.augmentSlotItems){
var slot = item.augmentSlotItems[0];
if(slot&&(slot==name||slot==name2))tanza+=1;
slot = item.augmentSlotItems[1];
if(slot&&(slot==name||slot==name2))tanza+=1;
slot = item.augmentSlotItems[2];
if(slot&&(slot==name||slot==name2))tanza+=1;
slot = item.augmentSlotItems[3];
if(slot&&(slot==name||slot==name2))tanza+=1;
}
name = false;
name2 = false;
if(user.isStateAffected(27)||user.isStateAffected(30))name="item 78";
if(user.isStateAffected(25))name="item 79";
if(user.isStateAffected(26))name="item 80";
if(user.isStateAffected(28))name="item 81";
if(user.isStateAffected(25))name2="item 83";
if(user.isStateAffected(32))name="item 84";
if(user.isStateAffected(31))name="item 85";
if(name&&item&&item.augmentSlotItems){
var slot = item.augmentSlotItems[0];
if(slot&&(slot==name||slot==name2))tanza+=2;
slot = item.augmentSlotItems[1];
if(slot&&(slot==name||slot==name2))tanza+=2;
slot = item.augmentSlotItems[2];
if(slot&&(slot==name||slot==name2))tanza+=2;
slot = item.augmentSlotItems[3];
if(slot&&(slot==name||slot==name2))tanza+=2;
}
}
}
return tanza;
}

Game_Enemy.prototype.originalName = function() {
        if(this.enemy().id==93)return $gameVariables._data[912]
    return this.enemy().name;
};



Game_Interpreter.prototype.inWater = function() {
var r = $gameMap.regionId($gamePlayer.x, $gamePlayer.y);
if(r==10 || r==37 || r==41 || r==42 || r==61) return true;
return false;
};

Game_Interpreter.prototype.setHunt = function() {
var actor = $gameActors.actor($gameVariables.value(421));
var map = this._mapId;
var x = $gamePlayer.x;
var y = $gamePlayer.y;
var pow = $gameVariables.value(108);
var time = Math.randomInt(9)+10;
var food = pow/3+2
food += Math.randomInt(food) + Math.randomInt(food);
if(this.inWater()){
var itemary = [[9,7],[64,13],[10,10]];
var list = $gameVariables._data[109];
}else{
var itemary = [[8,6]];
var list = $gameVariables._data[110];
}
var r = Math.floor(Math.random() * itemary.length);
var iid = 0;
if(itemary[r][1]<food){
iid=itemary[r][0];
food-=itemary[r][1];
};
r = Math.floor(Math.random() * list.length);
if(list[r][1]<food){
var trp=list[r][0];
var trpon=true;
}else{
if(this.inWater()){
var trp="雑多な魚介や可食の虫"
}else{
var trp="雑多な肉や可食の虫"
};
var trpon=false;
};
var ok = false;
if(!actor.trapArray)actor.trapArray=[];
if(!$gameSystem.hunt)$gameSystem.hunt=[];
$gameSystem.hunt.push([map,x,y]);
food=Math.floor(food)
actor.trapArray.push([map,x,y,pow,time,food,iid,trp,ok,trpon])
actor.worked=true;
};

Game_Interpreter.prototype.setCrop = function() {
var actor = $gameActors.actor($gameVariables.value(421));
var map = this._mapId;
var x = $gamePlayer.x;
var y = $gamePlayer.y;
var pow = $gameVariables.value(108);
var time = Math.randomInt(10)+38;
var food = pow/2+2
food += Math.randomInt(food);
var itemary = [[14,6],[13,5],[6,5],[63,12],[367,11]];
var r = Math.floor(Math.random() * itemary.length);
var iid = 0;
if(itemary[r][1]<food){
iid=itemary[r][0];
food-=itemary[r][1];
};
array = $gameVariables._data[111];
r = Math.floor(Math.random() * array.length);
if(array[r][1]<food){
var trp=array[r][0];
var trpon=true;
}else{
var trp="可食の草花"
var trpon=false;
};
var ok = false;
if(!actor.farmArray)actor.farmArray=[];
if(!$gameSystem.plant)$gameSystem.plant=[];
$gameSystem.plant.push([map,x,y]);
food=Math.floor(food)
actor.farmArray.push([map,x,y,pow,time,food,iid,trp,ok,trpon])
actor.worked=true;
};

Game_Interpreter.prototype.setMhunter = function() {
	$gameTemp._kamo=["鴨",8,"tori",20,1,1,1];
    $gameTemp._kiji=["雉",9,"tori",20,2,2,1];
    $gameTemp._hato=["鳩",6,"tori",20,3,1,1];
    $gameTemp._shika=["鹿",12,"shika",100,2,4,0];
    $gameTemp._usagi=["兎",3,"usagi",30,2,1,0];
    $gameVariables._data[110]=[];
    var emono = $gameVariables._data[110];
	emono.push($gameTemp._kamo)
	emono.push($gameTemp._hato)
	emono.push($gameTemp._usagi)
	var ary =[26,27,28,30,32,23]
	if(ary.indexOf(this._mapId)>=0)emono.push($gameTemp._shika)
	ary =[5,10,15,25]
	if(ary.indexOf(this._mapId)>=0)emono.push($gameTemp._kiji)
};

Game_Interpreter.prototype.setFhunter = function() {
	$gameTemp._funa=["鮒",5];
    $gameTemp._kingyo=["金魚",2];
    $gameTemp._ayu=["鮎",3];
    $gameTemp._kawaanago=["川穴子",6];
    $gameTemp._sougyo=["草魚",10];
    $gameTemp._chozame=["チョウザメ",15];
    $gameTemp._buluegill=["ブルーギル",9];
    $gameTemp._kajika=["鰍",10];
    $gameTemp._nijimasu=["虹鱒",12];
    $gameTemp._koi=["鯉",5];
    $gameTemp._dojo=["どじょう",3];
    $gameTemp._unagi=["うなぎ",11];
    $gameVariables._data[109]=[];
    var emono = $gameVariables._data[109];
	emono.push($gameTemp._funa)
	emono.push($gameTemp._kingyo)
	emono.push($gameTemp._ayu)
	var ary =[26,27,28]
	if(ary.indexOf(this._mapId)>=0){
	emono.push($gameTemp._kawaanago)
	emono.push($gameTemp._sogyo)
	}
	ary =[30,32]
	if(ary.indexOf(this._mapId)>=0){
	emono.push($gameTemp._kajika)
	emono.push($gameTemp._nijimasu)
	}
	ary =[19]
	if(ary.indexOf(this._mapId)>=0){
	emono.push($gameTemp._koi)
	emono.push($gameTemp._dojo)
	}
	ary =[5,10,15]
	if(ary.indexOf(this._mapId)>=0){
	emono.push($gameTemp._chozame)
	emono.push($gameTemp._bluegill)
	}
};

Game_Interpreter.prototype.setVhunter = function() {
	$gameTemp._ninjin=["にんじん",5,"ys01"];
    $gameTemp._tamanegi=["たまねぎ",6,"ys02"];
    $gameTemp._jagaimo=["じゃがいも",7,"ys03"];
    $gameTemp._shiitake=["しいたけ",8,"ys04"];
    $gameTemp._kurumi=["くるみ",9,"ys05"];
    $gameTemp._mikan=["みかん",10,"ys06"];
    $gameVariables._data[111]=[];
	var emono = $gameVariables._data[111];
	emono.push($gameTemp._ninjin)
	emono.push($gameTemp._tamanegi)
	emono.push($gameTemp._jagaimo)
	emono.push($gameTemp._shiitake)
	emono.push($gameTemp._mikan)
	emono.push($gameTemp._ninjin)
	emono.push($gameTemp._tamanegi)
	emono.push($gameTemp._jagaimo)
	emono.push($gameTemp._shiitake)
	emono.push($gameTemp._ninjin)
	emono.push($gameTemp._tamanegi)
	emono.push($gameTemp._kurumi)
};



Game_Troop.prototype.goldTotal = function() {
    var golden = this.deadMembers().reduce(function(r, enemy) {
        var gold = enemy.gold();
        if(enemy._enemyId==5&&$gameSwitches.value(40)&&$gameVariables.value(293)<4){
        if($gameMap._mapId==50||$gameMap._mapId==51||$gameMap._mapId==52||$gameMap._mapId==1||$gameMap._mapId==3)gold=Math.floor(gold*1.5);
        }
        return r + gold;
    }, 0) * this.goldRate() * this.goldRate2();
    
   return Math.floor(golden);
};

Game_Troop.prototype.goldRate2 = function() {
	var rate = 1;
    for (var i = 0; i < $gameParty.members().length; i++) {
    if($gameParty.members()[i].isStateAffected(408))rate+=0.3;
    if($gameParty.members()[i].isStateAffected(337)){
    if($gameParty.members()[i].isStateAffected(32)){
    rate+=0.5;
    }else{
    rate+=0.3;
    }
    }
    };
    return rate;
};

Game_Battler.prototype.consumeItem = function(item) {
	$gameParty.consumeItem(item);
};


Game_Actor.prototype.onPlayerWalk = function() {
    this.clearResult();
    this.checkFloorEffect();
    if ($gamePlayer.isNormal()) {
        this.turnEndOnMap();
        this.states().forEach(function(state) {
            this.updateStateSteps(state);
        }, this);
        this.showAddedStates();
        this.showRemovedStates();
    }
};

Game_Actor.prototype.turnEndOnMap = function() {
        this.onTurnEnd();
        if (this.result().hpDamage > 0) {
            this.performMapDamage();
        }
};

BattleManager.updateTurnEnd = function() {
    this.startInput();
    $gameScreen.erasePicture(10);
};



Game_Actor.prototype.nifeLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.nife) actor.nife = 1;
    $gameVariables.setValue(num, actor.nife);
};

Game_Actor.prototype.nifeAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.nife) actor.nife = 1;
    actor.nife += 1;
};

Game_Actor.prototype.swordLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.sword) actor.sword = 1;
    $gameVariables.setValue(num, actor.sword);
};

Game_Actor.prototype.swordAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.sword) actor.sword = 1;
    actor.sword += 1;
};

Game_Actor.prototype.twoSWLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.twoSW) actor.twoSW = 1;
    $gameVariables.setValue(num, actor.twoSW);
};

Game_Actor.prototype.twoSWAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.twoSW) actor.twoSW = 1;
    actor.twoSW += 1;
};

Game_Actor.prototype.axeLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.axe) actor.axe = 1;
    $gameVariables.setValue(num, actor.axe);
};

Game_Actor.prototype.axeAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.axe) actor.axe = 1;
    actor.axe += 1;
};

Game_Actor.prototype.twoAxeLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.twoAxe) actor.twoAxe = 1;
    $gameVariables.setValue(num, actor.twoAxe);
};

Game_Actor.prototype.twoAxeAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.twoAxe) actor.twoAxe = 1;
    actor.twoAxe += 1;
};

Game_Actor.prototype.twoAxeLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.twoAxe) actor.twoAxe = 1;
    $gameVariables.setValue(num, actor.twoAxe);
};

Game_Actor.prototype.twoAxeAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.twoAxe) actor.twoAxe = 1;
    actor.twoAxe += 1;
};

Game_Actor.prototype.staffLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.staff) actor.staff = 1;
    $gameVariables.setValue(num, actor.staff);
};

Game_Actor.prototype.staffAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.staff) actor.staff = 1;
    actor.staff += 1;
};

Game_Actor.prototype.bowLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.bow) actor.bow = 1;
    $gameVariables.setValue(num, actor.bow);
};

Game_Actor.prototype.bowAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.bow) actor.bow = 1;
    actor.bow += 1;
};

Game_Actor.prototype.handLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.hand) actor.hand = 1;
    $gameVariables.setValue(num, actor.hand);
};

Game_Actor.prototype.handAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.hand) actor.hand = 1;
    actor.hand += 1;
};

Game_Actor.prototype.maceLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.mace) actor.mace = 1;
    $gameVariables.setValue(num, actor.mace);
};

Game_Actor.prototype.maceAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.mace) actor.mace = 1;
    actor.mace += 1;
};

Game_Actor.prototype.twoMaceLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.twoMace) actor.twoMace = 1;
    $gameVariables.setValue(num, actor.twoMace);
};

Game_Actor.prototype.twoMaceAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.twoMace) actor.twoMace = 1;
    actor.twoMace += 1;
};

Game_Actor.prototype.spearLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.spear) actor.spear = 1;
    $gameVariables.setValue(num, actor.spear);
};

Game_Actor.prototype.spearAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.spear) actor.spear = 1;
    actor.spear += 1;
};

Game_Actor.prototype.twoSPLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.twoSP) actor.twoSP = 1;
    $gameVariables.setValue(num, actor.twoSP);
};

Game_Actor.prototype.twoSPAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.twoSP) actor.twoSP = 1;
    actor.twoSP += 1;
};

Game_Actor.prototype.gunLevel = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.gun) actor.gun = 1;
    $gameVariables.setValue(num, actor.gun);
};

Game_Actor.prototype.gunAdd = function(num) {
    var actor = $gameActors.actor($gameVariables.value(60));
    if(!actor.gun) actor.gun = 1;
    actor.gun += 1;
};



Window_BattleLog.prototype.displayCritical = function(target) {
    if (target.result().critical && target.result().hpDamage>0) {
        if (target.isActor()) {
        AudioManager.playSe({"name":"Monster2","volume":90,"pitch":150,"pan":0})
        $gameScreen.startFlash([255,0,0,255], 30)
            this.push('addText', TextManager.criticalToActor);
        } else {
        AudioManager.playSe({"name":"Up7","volume":100,"pitch":130,"pan":0})
        $gameScreen.startFlash([255,255,200,255], 30)
            this.push('addText', TextManager.criticalToEnemy);
        }
        
    }
};

Game_Battler.prototype.initTp = function() {
    //this.setTp(Math.randomInt(25));
};

Game_Actor.prototype.performMapDamage = function() {
    if (!$gameParty.inBattle()) {
        if(!$gameSwitches.value(417))$gameScreen.startFlashForDamage();
    }
};


Game_BattlerBase.prototype.canUse = function(item) {
if ($gameSwitches.value(706)) return false;
    if (!item) {
        return false;
    } else if (DataManager.isSkill(item)) {
        return this.meetsSkillConditions(item);
    } else if (DataManager.isItem(item)) {
        return this.meetsItemConditions(item);
    } else {
        return false;
    }
};

Game_Battler.prototype.gainHp = function(value) {
    this._result.hpDamage = -value;
    this._result.hpAffected = true;
    this._flashDamageCol = false;
    if(value<0&&!$gameParty.inBattle()){
    AudioManager.playSe({"name":"Cursor2","volume":90,"pitch":30,"pan":0})
    this.performMapDamage()
    }
    this.setHp(this.hp + value);
};

Game_Action.prototype.setSubject = function(subject) {
    if (subject.isActor()) {
        this._subjectActorId = subject.actorId();
        this._subjectEnemyIndex = -1;
    } else {
        this._subjectEnemyIndex = subject.index();
        this._subjectActorId = 0;
    }
};


var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'chineseKingdom') {
    var actor = $gameActors.actor($gameVariables.value(60))
    if(actor._bComment){
	var com = actor._bComment[1]
	var ed = $gameActors.actor($gameVariables.value(60)).isStateAffected(83)
	var pp = 0
	var su = 1;
	pp += $gameVariables.value(106) * 25;
	if($gameParty.members()[$gameVariables.value(54)].isStateAffected(253)) su = 3;
	if($gameParty.members()[$gameVariables.value(54)].isStateAffected(118)) pp += 15;
	if($gameParty.members()[$gameVariables.value(54)].isStateAffected(85)) pp += 10;
	if($gameParty.members()[$gameVariables.value(54)].isStateAffected(329))pp += 10;
	if($gameParty.members()[$gameVariables.value(54)].hasSkill(227))pp += 2;
	if($gameSwitches.value(399)){
	 $gameSwitches.setValue(177, true);
	 return;
	 }
	if(com != 0 && !ed){
	var id = actor._bComment[0];
	if(id!=1&&$gameVariables.value(6)==0)su+=2;
	if($gameParty.members()[$gameVariables.value(54)].isStateAffected(46)||$gameParty.members()[$gameVariables.value(54)].isStateAffected(4))su+=1;
	if($gameParty.members()[$gameVariables.value(54)].isStateAffected(51))su+=3;
	if($gameParty.members()[$gameVariables.value(54)].isStateAffected(52))su+=3;
	if($gameParty.members()[$gameVariables.value(54)].isStateAffected(53))su+=2;
	if($gameParty.members()[$gameVariables.value(54)].isStateAffected(54))su+=2;
	if(id == 0 && $gameVariables.value(92) < (4 + pp) / su && $gameVariables.value(91) > 0) $gameSwitches.setValue(177, true)
	if(id == 1 && $gameVariables.value(92) < (15 + pp) / su && $gameVariables.value(6) < 40 && $gameVariables.value(91) > 0) $gameSwitches.setValue(177, true)
	if(id == 2 && $gameVariables.value(92) < (10 + pp) / su && $gameVariables.value(91) < 1) $gameSwitches.setValue(177, true)
	};
    };
    }
    
    if (command === 'picChara') {
    var no = $gameVariables.value(809);
	var name = $gameVariables.value(519);
	var x =  $gameVariables.value(520);
	var y = $gameVariables.value(521);
	var wide = $gameVariables.value(522);
	var hight = $gameVariables.value(532);
	var suke = $gameVariables.value(803);
	var type = $gameVariables.value(805);
	$gameScreen.showPicture(no, name, 0, x, y, wide, hight, suke, type);
    };
    if (command === 'picChara2') {
    var no = $gameVariables.value(809);
	var name = $gameVariables.value(519);
	var x =  $gameVariables.value(520);
	var y = $gameVariables.value(521);
	var wide = $gameVariables.value(522);
	var hight = $gameVariables.value(532);
	var suke = 0;
	var type = $gameVariables.value(805);
	$gameScreen.showPicture(no, name, 0, x, y, wide, hight, suke, type);
    };
    if (command === 'picChara3') {
    var no = $gameVariables.value(809);
	var name = $gameVariables.value(519);
	var x =  $gameVariables.value(520);
	var y = $gameVariables.value(521);
	var wide = $gameVariables.value(522);
	var hight = $gameVariables.value(532);
	var suke = $gameVariables.value(803);
	var type = $gameVariables.value(805);
	$gameScreen.showPicture(no, name, 1, x, y, wide, hight, suke, type);
    };
    if (command === 'picMove') {
    var no = $gameVariables.value(809);
	var x =  $gameVariables.value(520);
	var y = $gameVariables.value(521);
	var wide = $gameVariables.value(522);
	var hight = $gameVariables.value(532);
	var suke = $gameVariables.value(803);
	var time = $gameVariables.value(519);
	var type = $gameVariables.value(805);
	$gameScreen.movePicture(no,0,x, y, wide, hight, suke,type,time);
    };
    
    
    if (command === 'resetWeight') {
    $gameVariables.setValue(146, 0);
    var i = 0;
    var items = Object.keys($gameParty._items);
    var id = items[i];
    var item
    var num
    while (id) {
    item = $dataItems[id];
    num = $gameParty._items[id]
    if(item && item.meta.Weight)$gameVariables.setFloatValue(146, $gameVariables.value(146) + item.meta.Weight * num);
    i = i + 1
    var id = items[i];
    }
    i = 0;
    items = Object.keys($gameParty._weapons);
    id = items[i];
    while (id) {
    item = $dataWeapons[id];
    num = $gameParty._weapons[id]
    if(item && item.meta.Weight && item.wtypeId != 14)$gameVariables.setFloatValue(146, $gameVariables.value(146) + item.meta.Weight * num);
    i = i + 1
    var id = items[i];
    }
    i = 0;
    items = Object.keys($gameParty._armors);
    id = items[i];
    while (id) {
    item = $dataArmors[id];
    num = $gameParty._armors[id]
    if(item && item.meta.Weight && item.wtypeId != 7)$gameVariables.setFloatValue(146, $gameVariables.value(146) + item.meta.Weight * num);
    i = i + 1
    var id = items[i];
    }

    };
  };

Sprite_Timer.prototype.updatePosition = function() {
    this.x = 60;
    this.y = 70;
};

Window_ActorCommand.prototype.addSkillCommands = function() {
    var skillTypes = this._actor.addedSkillTypes();
    skillTypes.sort(function(a, b) {
        return a - b;
    });
    skillTypes.forEach(function(stypeId) {
        var name = $dataSystem.skillTypes[stypeId];
        if(stypeId == 1){
        var sktype = 'magic'
        }
        if(stypeId == 2){
        var sktype = 'skill'
        }
        if(stypeId == 4){
        var sktype = 'summon'
        }
        this.addCommand(name, sktype, true, stypeId);
    }, this);
};

Scene_Menu.prototype.start = function() {
    Scene_MenuBase.prototype.start.call(this);
    $gameSwitches.setValue(535, true);
    this._statusWindow.refresh();
};



Game_Troop.prototype.expTotal = function() {
    return this.deadMembers().reduce(function(r, enemy) {
    var ppexp = enemy.exp();
    if($gameSwitches.value(443))ppexp *= 1.5;
    ppexp = Math.round(ppexp);
    return r + ppexp;
    }, 0);
};


Window_TitleCommand.prototype.maxCols = function() {
    return 3;
};

Scene_Title.prototype.drawGameTitle = function() {
    var x = 20;
    var y = Graphics.height / 4 + 55;
    var maxWidth = Graphics.width - x * 2;
    var text = $dataSystem.gameTitle;
    this._gameTitleSprite.bitmap.outlineColor = 'black';
    this._gameTitleSprite.bitmap.outlineWidth = 8;
    this._gameTitleSprite.bitmap.fontSize = 42;
    this._gameTitleSprite.bitmap.drawText(text, x, y, maxWidth, 48, 'center');
};


BattleManager.setup = function(troopId, canEscape, canLose) {
    this.initMembers();
    $gameParty._arrow = 0;
    this._canEscape = canEscape;
    this._canLose = canLose;
    $gameTroop.setup(troopId);
    $gameScreen.onBattleStart();
    this.makeEscapeRatio();
    var name = 'Window';
    $gameSystem.windowskinName = 'Window2';
    ImageManager.loadSystem(name);
    //this.setWaitMode('image');
};

BattleManager.endBattle = function(result) {

    this._phase = 'battleEnd';
    if (this._eventCallback) {
        this._eventCallback(result);
    }
    for (var i = 10; i < 150; i++) {
            	$gameScreen.erasePicture(i);
        		}
        		$gameSwitches.setValue(858, false);
    if (result === 0) {
        $gameSystem.onBattleWin();
    } else if (this._escaped) {
        $gameSystem.onBattleEscape();
    }
    $gameVariables._data[925]=0;
    $gameVariables._data[926]=0;
    $gameVariables._data[927]=0;
    $gameVariables._data[928]=0;
    $gameVariables._data[929]=0;
    $gameVariables._data[930]=0;
    $gameVariables._data[931]=0;
    $gameVariables._data[932]=0;
    $gameVariables._data[933]=0;
    $gameVariables._data[934]=0;
    $gameVariables._data[935]=0;
    $gameVariables._data[941]=0;
    $gameVariables._data[942]=0;
    $gameVariables._data[943]=0;
    $gameVariables._data[944]=0;
    $gameVariables._data[945]=0;
    $gameVariables._data[946]=0;
    $gameVariables._data[947]=0;
    $gameVariables._data[948]=0;
    $gameVariables._data[949]=0;
    if($gameSwitches._data[39]&&$gameVariables._data[910]==94){
    if($gameParty._gold<50){
    $gameSwitches._data[998]=true;
    }else{
    $gameParty.loseGold(50);
    $gameVariables._data[45]+=50;
    }
    }
    $gameVariables.setValue(484, 0);
    var name = 'Window';
    $gameSystem.windowskinName = 'Window';
    ImageManager.loadSystem(name);
    //this.setWaitMode('image');
};


Window_BattleStatus.prototype.windowWidth = function() {
    return Graphics.boxWidth -192;
};

Window_BattleStatus.prototype.drawBasicArea = function(rect, actor) {
	this.drawActorFace(actor, rect.x -7, rect.y, 124, 38);
    this.drawActorName(actor, rect.x + 117, rect.y, 120);
    this.drawActorIcons(actor, rect.x + 236, rect.y, 32);
};

Window_BattleStatus.prototype.basicAreaRect = function(index) {
    var rect = this.itemRectForText(index);
    rect.width -= this.gaugeAreaWidth() + 105;
    return rect;
};

Window_BattleStatus.prototype.gaugeAreaRect = function(index) {
    var rect = this.itemRectForText(index);
    rect.x += rect.width - this.gaugeAreaWidth() + 37;
    rect.width = this.gaugeAreaWidth();
    return rect;
};

Game_BattlerBase.prototype.die = function() {
    this._hp = 0;
    //this.clearStates();
    this.clearBuffs();
};



Sprite_Battler.prototype.setupAnimation = function() {
    while (this._battler.isAnimationRequested()) {
        var data = this._battler.shiftAnimation();
        var animation = $dataAnimations[data.animationId];
        if(!animation)return;
        var mirror = data.mirror;
        var delay = animation.position === 3 ? 0 : data.delay;
        this.startAnimation(animation, mirror, delay);
        for (var i = 0; i < this._animationSprites.length; i++) {
            var sprite = this._animationSprites[i];
            sprite.visible = true;//this._battler.isSpriteVisible();
        }
    }
};

BattleManager.startTurn = function() {
SceneManager._scene._directionalPad.hide();
$gameSwitches.setValue(382,true);
    this._phase = 'turn';
    this.clearActor();
    $gameTroop.increaseTurn();
    this.makeActionOrders();
    $gameParty.requestMotionRefresh();
    this._logWindow.startTurn();
};



Game_Action.prototype.applyCritical = function(damage) {
	var kake = 1.5;
	var tashi = 5;
	return damage * kake + tashi;
};

Window_NumberInput.prototype.updateButtonsVisiblity = function() {
    this.showButtons();
};

Game_Actor.prototype.showRemovedStates = function() {
    this.result().removedStateObjects().forEach(function(state) {
        if (state.message4) {
        if ($gameParty.inBattle()) {
            $gameMessage.add(this._name + state.message4);
        }else{
        var nyanya = $gameVariables.value(283);
        if(nyanya==0) nyanya = "";
        $gameVariables.setValue(283, nyanya + this._name + state.message4 + "\n");
        $gameSwitches.setValue(498, true);
        }
        }
    }, this);
};

Spriteset_Battle.prototype.createLowerLayer = function() {
    Spriteset_Base.prototype.createLowerLayer.call(this);
    //this.createBackground();
    this.createBattleField();
    this.createBattleback();
    
    this.createEnemies();
    this.createActors();
};


BattleManager.endTurn = function() {
    this._phase = 'turnEnd';
    if($gameTroop.turnCount()>0){
    this._preemptive = false;
    this._surprise = false;
    }
    this.allBattleMembers().forEach(function(battler) {
        battler.clearResult();
    }, this);
};

BattleManager.endTurn2 = function() {
    this.allBattleMembers().forEach(function(battler) {
        battler.onTurnEnd();
        this.refreshStatus();
        this._logWindow.displayAutoAffectedStatus(battler);
        this._logWindow.displayRegeneration(battler);
    }, this);
};

Game_Battler.prototype.onTurnEnd = function() {
    this.regenerateAll();
    this.updateStateTurns();
    this.updateBuffTurns();
    this.removeStatesAuto(2);
};

Game_BattlerBase.prototype.updateStateTurns = function() {
    this._states.forEach(function(stateId) {
    	if($gameSwitches.value(479) && this.isActor()){
    	}else{
        if (this._stateTurns[stateId] > 0) {
        if(!$gameParty.inBattle() && $dataStates[stateId].meta.heranai){
        }else{
        this._stateTurns[stateId]--;
        }
        }
        }
    }, this);
};

Game_Battler.prototype.removeStatesAuto = function(timing) {
    this.states().forEach(function(state) {
        if (this.isStateExpired(state.id) && state.autoRemovalTiming === timing) {
        if($gameSwitches.value(479) && this.isActor()){
        }else{
            this.removeState(state.id);
         }
        }
    }, this);
};

Game_Battler.prototype.removeBattleStates = function() {
    this.states().forEach(function(state) {
        if (state.removeAtBattleEnd) {
        if($gameSwitches.value(479) && this.isActor()){
        }else{
            this.removeState(state.id);
            }
        }
    }, this);
};

Game_Party.prototype.increaseSteps = function() {
    this._steps+=20;
};

Game_Actor.prototype.stepsForTurn = function() {
    return 10;
};

Scene_Map.prototype.updateEncounterEffect = function() {
    if (this._encounterEffectDuration > 0) {
        this._encounterEffectDuration = 0;
    }
};

Scene_Map.prototype.launchBattle = function() {
    BattleManager.saveBgmAndBgs();
    this.stopAudioOnBattleStart();
    SoundManager.playBattleStart();
    this.startEncounterEffect();
    this._mapNameWindow.hide();
};

Window_MapName.prototype.initialize = function() {
    var wight = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, 0, 80, wight, height);
    this.opacity = 0;
    this.contentsOpacity = 0;
    this._showCount = 0;
    this.refresh();
};

Scene_Map.prototype.startEncounterEffect = function() {
    //this._spriteset.hideCharacters();
    this._encounterEffectDuration = this.encounterEffectSpeed();
};

Game_Map.prototype.displayName = function() {
	if($gameSwitches.value(24)){
	return $gameVariables.value(778)
	}else{
	if($gameSwitches.value(376)){
    return $dataMap.displayName;
    }else{
    return $dataMap.meta.en
    }
    }
};

Spriteset_Map.prototype.createLowerLayer = function() {
    Spriteset_Base.prototype.createLowerLayer.call(this);
    if(!$gameSwitches.value(574)){
    //this.createParallax();
    //this.createTilemap();
    //this.createCharacters();
    //this.createShadow();
    //this.createDestination();
    //this.createWeather();
    }else{
    this.createTilemap();
    this.createCharacters();
    this.createShadow();
    this.createDestination();
    }
};



Spriteset_Map.prototype.update = function() {
    Spriteset_Base.prototype.update.call(this);
    if(!$gameSwitches.value(574)){
    //this.updateTileset();
    //this.updateParallax();
    //this.updateTilemap();
    //this.updateShadow();
    //this.updateWeather();
    }else{
    this.updateTileset();
    this.updateTilemap();
    this.updateShadow();
    }
};

Scene_Map.prototype.createDisplayObjects = function() {
    this.createSpriteset();
    this.createMapNameWindow();
    this.createWindowLayer();
    this.createAllWindows();
};

Scene_Map.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);
    if (!SceneManager.isNextScene(Scene_Battle)) {
        this._spriteset.update();
        this._mapNameWindow.hide();
        //SceneManager.snapForBackground();
    }
    $gameScreen.clearZoom();
};

Scene_Title.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);
    //SceneManager.snapForBackground();
};

Scene_Map.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    SceneManager.clearStack();
    if (this._transfer) {
        this.fadeInForTransfer();
        this._mapNameWindow.open();
        $gameMap.autoplay();
    } else if (this.needsFadeIn()) {
        this.startFadeIn(this.fadeSpeed(), false);
    }
    this.menuCalling = false;
};

Scene_Map.prototype.stop = function() {
    Scene_Base.prototype.stop.call(this);
    $gamePlayer.straighten();
    this._mapNameWindow.close();
    if (this.needsSlowFadeOut()) {
        this.startFadeOut(this.slowFadeSpeed(), false);
    } else if (SceneManager.isNextScene(Scene_Map)) {
        this.fadeOutForTransfer();
    } else if (SceneManager.isNextScene(Scene_Battle)) {
        this.launchBattle();
    }
};




Game_BattlerBase.prototype.param = function(paramId) {
    var value = this.paramBase(paramId);
    if(this.isActor())value += this.paramPlus2(paramId)
    value *= this.paramRate2(paramId);
    value += this.paramPlus(paramId);
    if(this._buffs[paramId] == 1) value += 3;
    if(this._buffs[paramId] == 2) value += 5;
    if(this._buffs[paramId] == 3) value += 6;
    if(this._buffs[paramId] == 4) value += 7;
    if(this._buffs[paramId] == 5) value += 8;
    if(this._buffs[paramId] == 6) value += 10;
    value *= this.paramRate3(paramId) * this.paramBuffRate(paramId);
    if(this.isActor())value += this.paramPlus3(paramId);
    var maxValue = this.paramMax(paramId);
    var minValue = this.paramMin(paramId);
    return Math.round(value.clamp(minValue, maxValue));
};

Game_BattlerBase.prototype.paramBuffRate = function(paramId) {
	if(this._buffs[paramId] > 2) return (this._buffs[paramId] - 2) * 0.10 + 1.6;
    return this._buffs[paramId] * 0.30 + 1.0;
};

Game_BattlerBase.prototype.buffIconIndex = function(buffLevel, paramId) {
    if (buffLevel > 0) {
    	if (buffLevel > 2) {
        return (buffLevel - 3) * 8 + paramId + 832;
        }else{
        return Game_BattlerBase.ICON_BUFF_START + (buffLevel - 1) * 8 + paramId;
        }
    } else if (buffLevel < 0) {
        return Game_BattlerBase.ICON_DEBUFF_START + (-buffLevel - 1) * 8 + paramId;
    } else {
        return 0;
    }
};
Game_BattlerBase.prototype.isMaxBuffAffected = function(paramId) {
    return this._buffs[paramId] === 6;
};


Scene_Battle.prototype.onSkillCancel = function() {
    this._skillWindow.hide();
    this._actorCommandWindow.activate();
    $gameSwitches.setValue(381,false);
};

ImageManager.loadPicture = function(filename, hue) {
if ($gameSwitches.value(961)) {
return this.loadBitmap('save/', filename, hue, true);
}else{
if ($gameSwitches.value(837)) {
return this.loadBitmap('img/enemies/', filename, hue, true);
}else{
if ( filename.match(/3d/)) {
    return this.loadBitmap('img/pictures/textures/', filename, hue, true);
}else{
if ( filename.match(/efc/)) {
    return this.loadBitmap('img/pictures/effects/', filename, hue, true);
}else{
    return this.loadBitmap('img/pictures/', filename, hue, true);
}
}
}
}
};

BattleManager.displayStartMessages = function() {
    if (this._preemptive) {
        $gameMessage.add(TextManager.preemptive.format($gameActors.actor(6)._name));
    } else if (this._surprise) {
        $gameMessage.add(TextManager.surprise.format($gameActors.actor(6)._name));
    }
};

BattleManager.displayVictoryMessage = function() {
    $gameMessage.add(TextManager.victory.format($gameActors.actor(6)._name));
};

BattleManager.displayDefeatMessage = function() {
    $gameMessage.add(TextManager.defeat.format($gameActors.actor(6)._name));
};

BattleManager.displayEscapeSuccessMessage = function() {
    $gameMessage.add(TextManager.escapeStart.format($gameActors.actor(6)._name));
};

BattleManager.displayEscapeFailureMessage = function() {
    $gameMessage.add(TextManager.escapeStart.format($gameActors.actor(6)._name));
    $gameMessage.add('\\.' + TextManager.escapeFailure);
};


Window_MenuStatus.prototype.numVisibleRows = function() {
    return 5;
};

Game_Battler.prototype.speed = function() {

if(this._actorId>0){
if($gameActors.actor(this._actorId)._spd == false){
	$gameActors.actor(this._actorId)._spd = true;
    if($gameActors.actor(this._actorId).isStateAffected(160) && $dataSkills[this._actions[0]._item._itemId].stypeId == 1) this._speed += 20;
    
    }
}
    return this._speed;
};


Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
    var x2 = x + 180;
    var width2 = Math.min(200, width - 180 - this.textPadding());
    this.drawActorName(actor, x, y);
    this.drawActorLevel(actor, x, y + lineHeight * 1);
    this.drawActorIcons(actor, x, y + lineHeight * 2);
    this.drawActorClass(actor, x2, y, 100);
    this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
    this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
};

Scene_Skill.prototype.useItem = function() {
    Scene_ItemBase.prototype.useItem.call(this);
    this._statusWindow.refresh();
    $gameVariables.setValue(586, $gameParty.numItems($dataItems[4]))
    this._helpWindow.refresh();
    this._itemWindow.refresh();
};


Game_Party.prototype.ratePreemptive = function(troopAgi) {
    //var rate = this.agility() >= troopAgi ? 0.05 : 0.03;
    if (this.hasRaisePreemptive()) {
        var rate = this.agility() * 4 / troopAgi / 10;
    } else {
        var rate = this.agility() / troopAgi / 10;
    }
    if($gameSwitches.value(479))rate=0;
    if($gameSwitches.value(461))rate=0;
    if($gameSwitches.value(104))rate = 0;
    if($gameSwitches.value(4))rate = 0;
    if($gameSwitches.value(332))rate=1;
    return rate;
};

Game_Party.prototype.rateSurprise = function(troopAgi) {
    //var rate = this.agility() >= troopAgi ? 0.03 : 0.05;
    if (this.hasCancelSurprise()) {
        var rate = troopAgi / 5 / this.agility() / 10;
    } else {
        var rate = troopAgi / this.agility() / 10;
    }
    if($gameSwitches.value(479))rate=0;
    if($gameSwitches.value(461))rate=0;
    if($gameSwitches.value(332))rate=0;
    if($gameSwitches.value(104))rate = 1
    return rate;
};

Game_Player.prototype.moveByInput = function() {
    if (!this.isMoving() && this.canMove()) {
    if(!$gameSwitches.value(574)){
        var direction = this.getInputDirection();
        if (direction > 0) {

            $gameTemp.clearDestination();
        } else if ($gameTemp.isDestinationValid()){
        //    var x = $gameTemp.destinationX();
        //    var y = $gameTemp.destinationY();
        //    direction = this.findDirectionTo(x, y);
        }
        if (direction == 8) {
            $gameSwitches.setValue(86,true)
        }
	if (direction == 2) {
            $gameSwitches.setValue(85,true)
        }
        if (direction == 4) {
            $gameSwitches.setValue(83,true)
        }
        if (direction == 6) {
            $gameSwitches.setValue(84,true)
        }
    }else{
    	var direction = this.getInputDirection();
        if (direction > 0) {
            $gameTemp.clearDestination();
        } else if ($gameTemp.isDestinationValid()){
            var x = $gameTemp.destinationX();
            var y = $gameTemp.destinationY();
            direction = this.findDirectionTo(x, y);
        }
        if (direction > 0) {
            this.executeMove(direction);
        }
    }
    }
    };
    
    

Game_Action.prototype.itemEffectCommonEvent = function(target, effect) {
if(this.subject().isActor()){
$gameVariables.setValue(421,this.subject()._actorId)
}else{
$gameVariables.setValue(421,0)
}
};

Game_Action.prototype.applyGlobal = function() {
    this.item().effects.forEach(function(effect) {
        if (effect.code === Game_Action.EFFECT_COMMON_EVENT) {
$gameTemp._skillActorId=this.subject()._actorId
$gameVariables.setValue(52,this._item._itemId)
            $gameTemp.reserveCommonEvent(effect.dataId);
            
        }
    }, this);
};

Game_Interpreter.prototype.setup = function(list, eventId) {
    this.clear();
    this._mapId = $gameMap.mapId();
    this._eventId = eventId || 0;
    this._list = list;
    if($gameTemp._skillActorId)$gameVariables._data[421]=$gameTemp._skillActorId
    Game_Interpreter.requestImages(list);
};

Scene_Map.prototype.updateScene = function() {
    this.checkGameover();
    if (!SceneManager.isSceneChanging()) {
        this.updateTransferPlayer();
    }
    if (!SceneManager.isSceneChanging()) {
        this.updateEncounter();
    }
    if (!SceneManager.isSceneChanging()) {
        this.updateCallMenu();
    }
    if (!SceneManager.isSceneChanging()) {
        this.updateCallDebug();
    }
};

Game_Event.prototype.stopCountThreshold = function() {
if($gameSwitches.value(31)){
return 0
}
else{
    return 240 * (5 - this.moveFrequency());
}
};


})();
