//=============================================================================
// Maliki's Attach Augments EX
// Mal_AttachAugments_Ext.js
// version 1.5
//=============================================================================
/*:  
 * @plugindesc Version 1.5 Allows you to preset Augments on items.  Also allows for mandatory slot fills.
 * @author Maliki79
 * @help You need two steps to use this plugin:
 * 1: To set an item's pre-loaded Augments add this tag to the item's note 
 * field: <preAugment: "item" number, etc, none>
 *
 *    where "item" is the augment's type in the database(item, weapon, or armor) 
 *    and number is the item Id.
 *    Augment slots left open must have "none" in that slot's place on the list.
 * 
 * Example: <preAugment:item 1, armor 2, none, weapon 1>
 * 
 * This will add item 1 to the item's first Augment slot, armor 2 to the second, 
 * nothing to the third and weapon 1 to the forth.
 * Note that you can put ANY item in the slots, but bear YanFly's rules regarding 
 * non-instance items in mind to prevent potential issues.
 * 
 * Example 2: <preAugment:item 1 or item 2, armor 2, none or armor 4, weapon 1 or weapon 5 or weapon 5>
 *
 * This will add item 1 OR item 2 to the item's first Augment slot, armor 2 to 
 * the second, nothing OR armor 4 to the third and weapon 1 
 * OR weapon 5 to the forth with weapon 5 having an increased chance to be added.
 * (There is no limit to the number of augments in the augment pool.)
 *
 * 1a: You can also set up augment tags with percentages in the following format: 
 * <preAugment: "item" number number%, etc>
 *
 *     where "item" is the augment's type in the database, number is the item's 
 *     Id and number% is the percentage chance of it being added.
 *     DO NOT use "none" with percentage tags and do not mix percentage with 
 *     non-percentage tags for the same slot.  "None" must still be present in 
 *     slots with no augments.
 *     Also, while you can technically set any percentages you like, any going 
 *     over 100% total chance will mess up the results.
 *
 * Example 3: <preAugment:item 1, armor 2, none, weapon 1 10%>
 * This will add item 1 to the item's first Augment slot, armor 2 to the second, 
 * nothing to the third and a 10% chance to add weapon 1 to the forth.
 *
 * Example 4: <preAugment:item 1 or item 2, armor 2, armor 4 50%, weapon 1 25% or weapon 5 6% or weapon 5 60%>
 * This will add item 1 OR item 2 at 50% each to the item's first Augment slot, 
 * armor 2 to the second, 50% chance of armor 4 to the third and weapon 1 
 * or weapon 5 to the forth with weapon 1 having 25% success and weapon 5 
 * with a combined chance of 66%.
 * 
 * Any percentage chance slots that do not add up to 100% have a chance for 
 * failure equal to leftover percentage.
 * So looking at example 4's final slot, the combined percentage is 
 * 25 + 6 + 60 = 91%.
 * So in that slot, there will be a 9% chance of nothing being placed there.
 * 
 * 2:  Adding the tag <augreplaceonly> to items will make it so once an 
 *     augment slot on the tagged item is filled, the 
 *     augment(s) can only be replaced, not removed leaving the slot empty.
 *
 * 2a: You can also specify which slots on an item are affected by the tag
 *     using <augreplaceonly: slotId, slotId, etc > (Note the space at the end)
 *     with slotId being the slot Ids for any slots on the item.
 *     (The slots are numbered in the order you place when tagging the item
 *     with slot names in the database.  The first slot is numbered 0.)
 * Note that you can start with an empty slot, but once filled will remain that way.
 *
 * With this add-on, Augments are represented properly in shops when buying.
 * With this comes the need to purchase weapons and armors one at a time during 
 * the current Shop Scene.  If you wish to have more than 1, simply add copies 
 * of the weapon when calling the Shop.
 * This will affect ALL weapons and armor, regardless of whether they have 
 * pre-loaded augments or not. 
 */
 
Window_AugmentItemList.prototype.makeItemList = function() {
    this._data = $gameParty.allItems().filter(function(item) {
      return this.includes(item);
    }, this);
    if (this._item.augmentSlotItems[this._slotId] !== 'none' && this.augreplaceonly(this._item, this._slotId)) {  
      this._data.unshift(null);
    }
};

Window_AugmentItemList.prototype.augreplaceonly = function(item, slot){

	if (!item.meta.augreplaceonly) return true;
	if (item.meta.augreplaceonly == true) return false;
	var augs = item.meta.augreplaceonly.split(", ");
	if (augs.length == -1) return false;
	for (var i = 0; i < augs.length; i++) augs[i] = Number(augs[i]);
	for (var i = 0; i < augs.length; i++) {
		if (augs[i] == slot) return false;
	}
	return true;
}

var MalNewIndieItem = ItemManager.customizeNewIndependentItem
ItemManager.customizeNewIndependentItem = function(baseItem, newItem) {
	MalNewIndieItem.call(this, baseItem, newItem);
	this.PreloadAugment(newItem);
};

ItemManager.PreloadAugment = function(item) {
	if (!item.meta.preAugment) return;
	var augs = item.meta.preAugment.split(", ");
	item.augmentSlotItems = [];
	if (SceneManager._scene instanceof Scene_Shop) return;
	for (var i = 0; i < item.augmentSlots.length; i++) {
		var pick = augs[i].split(" or ");
		pick2 = [];
		var choice = 0;
		for (var k = 0; k < pick.length; k++) {
			var newpick = pick[k].split(" ");
			if(newpick[0] === "none") continue;
			if(newpick[2]) {
			newpick[2] = Number(newpick[2].replace('%',''));
			} else {
			newpick[2] = 100 / pick.length;
			}
			newpick[2] += choice;
			choice = newpick[2];
			pick2.push(newpick[0] + ' ' + newpick[1] + ' ' + newpick[2]);
		}
		var chance = Math.randomInt(100);
		if (choice > 100) chance = Math.randomInt(choice);
		var done = 0;
		for (var k = 0; k < pick2.length; k++) {
		if (done == 1) continue;
			var finalpick = pick2[k].split(" ");
			if (finalpick[2] > chance){
				done = 1;
				if (finalpick[0] == "item")   this.installAugmentToSlot(item, $dataItems[Number(finalpick[1])], i);
				if (finalpick[0] == "weapon") this.installAugmentToSlot(item, $dataWeapons[Number(finalpick[1])], i);
				if (finalpick[0] == "armor")  this.installAugmentToSlot(item, $dataArmors[Number(finalpick[1])], i);
	}
	}
	}
};

ItemManager.PreloadTemp = function(item, slot) {
	if (!slot) return;
	item.augmentSlotItems = [];
	for (var i = 0; i < item.augmentSlots.length; i++) {
	var newSlot = "none";
	if (slot[i]) newSlot = slot[i].split(" ");	
	if (!newSlot[1]) this.installAugmentToSlot(item, null, i);
	if (newSlot[0] == "item") this.installAugmentToSlot(item, $dataItems[Number(newSlot[1])], i);
	if (newSlot[0] == "weapon") this.installAugmentToSlot(item, $dataWeapons[Number(newSlot[1])], i);
	if (newSlot[0] == "armor") this.installAugmentToSlot(item, $dataArmors[Number(newSlot[1])], i);
	}
}

Window_AugmentItemList.prototype.playOkSound = function() {
    //SoundManager.playEquip();
};

var MalonAugmentListOk = Scene_Item.prototype.onAugmentListOk
Scene_Item.prototype.onAugmentListOk = function() {
    var effectItem = this._augmentListWindow.item();
    var slotId = this._itemActionWindow.currentExt();
	if (effectItem === undefined) {
	SoundManager.playBuzzer(); 
	} else {
	ItemManager.applyAugmentEffects(this.item(), effectItem, slotId, 1);
	SoundManager.playEquip();
    }
	this._augmentListWindow.refresh();
    this._augmentListWindow.activate();
    this._statusWindow.refresh();
    this._infoWindow.refresh();
    this._itemWindow.refresh();
    this._itemActionWindow.refresh();
    var index = this._augmentListWindow.index();
    this.onAugmentListCancel();
};

Game_Interpreter.prototype.command302 = function() {
    if (!$gameParty.inBattle()) {
        var goods = [this._params];
        while (this.nextEventCode() === 605) {
            this._index++;
            goods.push(this.currentCommand().parameters);
        }
		for (var i = 0; i < goods.length; i++) {
		if (goods[i][0] == 1) goods[i].push(DataManager.registerTempItem($dataWeapons[goods[i][1]], 1, goods[i][1]));
		if (goods[i][0] == 2) goods[i].push(DataManager.registerTempItem($dataArmors[goods[i][1]], 2, goods[i][1]));
		}
        SceneManager.push(Scene_Shop);
        SceneManager.prepareNextScene(goods, this._params[4]);
    }
    return true;
};

DataManager.registerTempItem = function(item) {
    if (!this.isNewItemValid(item)) return item;
    var newItem = JsonEx.makeDeepCopy(item);
	ItemManager.PreloadAugment(newItem);
	console.log(newItem);
	return newItem;
};

Window_ShopBuy.prototype.makeItemList = function() {
    this._data = [];
    this._price = [];
    this._shopGoods.forEach(function(goods) {
        var item = null;
        switch (goods[0]) {
        case 0:
            item = $dataItems[goods[1]];
            break;
        case 1:
            item = $dataWeapons[goods[1]];
            break;
        case 2:
            item = $dataArmors[goods[1]];
            break;
        }
		if (goods[goods.length - 1].name && goods[0] > 0) {
		item = goods[goods.length - 1];
		item.id = goods[1];
		}
        if (item) {
            this._data.push(item);
            this._price.push(goods[2] === 0 ? item.price : goods[3]);
        }
    }, this);
};

DataManager.isWeapon = function(item) {
    return item && ($dataWeapons.contains(item) || item.wtypeId);
};

DataManager.isArmor = function(item) {
    return item && ($dataArmors.contains(item) || item.atypeId);
};

DataManager.isIndependent = function(item) {
    if (!item) return false;
    if (DataManager.isBattleTest()) return false;
    if (item.nonIndepdent) return false;
    if (DataManager.isItem(item)) return Yanfly.Param.ItemMaxItems > 0;
    if (DataManager.isWeapon(item)) return Yanfly.Param.ItemMaxWeapons > 0;
    if (DataManager.isArmor(item)) return Yanfly.Param.ItemMaxArmors > 0;
    return false;
};

Scene_Shop.prototype.doBuy = function(number) {
ItemManager.shopFlag = true;
	$gameParty.loseGold(number * this.buyingPrice());
	if (this._item.itypeId) $gameParty.gainItem($dataItems[this._item.id], number);
	if (this._item.wtypeId) {
	if (this._item.augmentSlotItems) var slots = this._item.augmentSlotItems;
	$gameParty.gainItem($dataWeapons[this._item.id], number);
	var newItem = $gameParty.weapons()[$gameParty.weapons().length - 1];
	ItemManager.PreloadTemp(newItem, slots);
	}
	if (this._item.atypeId) {
	if (this._item.augmentSlotItems) var slots = this._item.augmentSlotItems;
	$gameParty.gainItem($dataArmors[this._item.id], number);
	var newItem = $gameParty.armors()[$gameParty.armors().length - 1];
	ItemManager.PreloadTemp(newItem, slots);
	}
};