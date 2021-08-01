//=============================================================================
// MrTS_LimitedInventory.js
//=============================================================================

/*:
* @plugindesc Limits inventory space by weight or item numbers.
* @author Mr. Trivel
*
* @param Limit Mode
* @desc Which mode to use? weight/number
* Default: number
* @default number
*
* @param Default Limit
* @desc Inventory limit.
* Default: 30
* @default 30
*
* @param Default Weight
* @desc If using 'weight' mode, how much items weight by default?
* Default: 1
* @default 1
*
* @param Show Window
* @desc Show inventory limit window in item menu? true/false
* Default: True
* @default True
*
* @param Limit Text
* @desc How will limit be named in Window?
* Default: Limit:
* @default Limit:
* 
* @help 
* --------------------------------------------------------------------------------
* Terms of Use
* --------------------------------------------------------------------------------
* Don't remove the header or claim that you wrote this plugin.
* Credit Mr. Trivel if using this plugin in your project.
* Free for commercial and non-commercial projects.
* --------------------------------------------------------------------------------
* Version 1.0
* --------------------------------------------------------------------------------
*
* --------------------------------------------------------------------------------
* Item Tags
* --------------------------------------------------------------------------------
* <Weight: [AMOUNT]>
* If using 'weight' mode, use the following to determine the weight of item.
*
* Example:
* <Weight: 5>
* --------------------------------------------------------------------------------
*
* --------------------------------------------------------------------------------
* Equipment Tags
* --------------------------------------------------------------------------------
* <InvLimitChange: [AMOUNT]>
* Changes inventory limit by AMOUNT while item is equipped. Works for both modes.
*
* <InvLimitChange: -5>
* <InvLimitChange: 10>
* --------------------------------------------------------------------------------
*
* --------------------------------------------------------------------------------
* Plugin Commands
* --------------------------------------------------------------------------------
* InventoryLimit Add [AMOUNT] - Adds Amount to limit.
* InventoryLimit Sub [AMOUNT] - Removes Amount from limit.
* InventoryLimit Ignore - Ignores inventory limit when adding items
* InventoryLimit StopIgnore - Stops ignoring inventory limit when adding items
*
* Examples:
* InventoryLimit Add 10
* InventoryLimit Sub 5
* InventoryLimit Ignore
* InventoryLimit StopIgnore
* --------------------------------------------------------------------------------
*
* --------------------------------------------------------------------------------
* Script Calls
* --------------------------------------------------------------------------------
* $gameParty.getInventorySpaceLeft() - returns amount of space left
* $gameParty.getInventorySpaceTotal() - returns total amount of space
* $gameParty.getInventorySpaceUsed() - returns used amount of space
* --------------------------------------------------------------------------------
*
* --------------------------------------------------------------------------------
* Version History
* --------------------------------------------------------------------------------
* 1.0 - Release
*/

(function() {
	var parameters = PluginManager.parameters('MrTS_LimitedInventory');
	var paramLimitMode = String(parameters['Limit Mode'] || "number");
	var paramDefaultLimit = String(parameters['Default Limit'] || 30);
	var paramDefaultWeight = Number(parameters['Default Weight'] || 1);
	var paramShowWindow = (parameters['Show Window'] || "true").toLowerCase() === "true";
	var paramLimitText = String(parameters['Limit Text'] || "Limit:");


	//--------------------------------------------------------------------------
	// Window_InventoryLimit
	//
	// Shows how much is left.
	
	function Window_InventoryLimit() {
		this.initialize.apply(this, arguments);	
	};
	
	Window_InventoryLimit.prototype = Object.create(Window_Base.prototype);
	Window_InventoryLimit.prototype.constructor = Window_InventoryLimit;
	
	Window_InventoryLimit.prototype.initialize = function(x, y, w, h) {
		Window_Base.prototype.initialize.call(this, x, y, w, h);
		this.refresh();
	};
	
	Window_InventoryLimit.prototype.refresh = function() {
		this.contents.clear();
		var u = $gameVariables.value(146);
		var t = $gameVariables.value(707);
		var text = String($gameVariables.value(147));
		var limittext = paramLimitText;
		if(!$gameSwitches.value(376))limittext = "Weight"
		this.drawText(limittext + " " + u.toFixed(1) + "/" + t, 0, 0);
      	//if($gameVariables.value(147) != 0 && !$gameSwitches.value(242)) this.drawText(text, 250, 0, 100, 'right');
		
	};
	
	Window_InventoryLimit.prototype.standardPadding = function() {
    	return 14;
	};

	//--------------------------------------------------------------------------
	// Scene_Item
	// 


Scene_Item.prototype.onCategoryOk = function() {
    this._itemWindow.activate();
    this._itemWindow.selectLast();
    $gameSwitches.setValue(242,false)
    if (this._invLimitWindow) this._invLimitWindow.refresh();
};



	var _Scene_Item_create = Scene_Item.prototype.create;
	Scene_Item.prototype.create = function() {
		_Scene_Item_create.call(this);
		if (paramShowWindow)
			this.createLimitWindow();
	};

	Scene_Item.prototype.createLimitWindow = function() {
		var wx = this._itemWindow.x;
		var ww = this._itemWindow.width;
		var wh = this._itemWindow.fittingHeight(1) -20;
		this._itemWindow.height = this._itemWindow.height - wh;
		this._itemWindow.refresh();
		var wy = this._itemWindow.y + this._itemWindow.height;
		this._invLimitWindow = new Window_InventoryLimit(wx, wy, ww, wh);
		this.addWindow(this._invLimitWindow);
		
	};


	
	var _Scene_Item_useItem = Scene_Item.prototype.useItem;
	Scene_Item.prototype.useItem = function() {
		_Scene_Item_useItem.call(this);
		if (this._invLimitWindow) this._invLimitWindow.refresh();
	};

Scene_ItemBase.prototype.determineItem = function() {
    var action = new Game_Action(this.user());
    var item = this.item();
    action.setItemObject(item);
    if (action.isForFriend()) {
     $gameSwitches.setValue(380, true);
     SceneManager._scene._directionalPad.hide();
        this.showSubWindow(this._actorWindow);
        this._actorWindow.refresh();
        this._actorWindow.selectForItem(this.item());
	if(this._invLimitWindow) this._invLimitWindow.hide();
    } else {
        this.useItem();
        this.activateItemWindow();
    }
};


Scene_ItemBase.prototype.onActorCancel = function() {
	$gameSwitches.setValue(380, false);
    this.hideSubWindow(this._actorWindow);
    SceneManager._scene._directionalPad.show();
    if(this._invLimitWindow) this._invLimitWindow.show();
};



Scene_Shop.prototype.doBuyItem = function(number) {
    $gameParty.gainItem(this._item, number);
    $gameVariables.setValue(147,0)
if (this._invLimitWindow) this._invLimitWindow.refresh();
};

Scene_Shop.prototype.doSellItem = function(number) {
    $gameParty.loseItem(this._item, number);
    $gameVariables.setValue(147,0)
if (this._invLimitWindow) this._invLimitWindow.refresh();
};


	var _Scene_Shop_create = Scene_Shop.prototype.create;
	Scene_Shop.prototype.create = function() {
		_Scene_Shop_create.call(this);
		if (paramShowWindow)
		$gameVariables.setValue(147,0)
			this.createLimitWindow();
	};

	Scene_Shop.prototype.createLimitWindow = function() {
		var wx = 0;
		var ww = this._dummyWindow.width;
		var wh = 72
		var wy = this._dummyWindow.y + this._dummyWindow.height;
		this._invLimitWindow = new Window_InventoryLimit(wx, wy, ww, wh);
		this.addWindow(this._invLimitWindow);
	};




})();