//=============================================================================
// NewMenuScreen.js
//=============================================================================

/*:
 * @plugindesc Alternative menu screen layout.
 * @author Florian Strasser
 * www.florian-strasser.de
 *
 * @help This plugin does not provide plugin commands.
 */

(function() {

    var _Scene_Menu_new = Scene_Menu.prototype.create;
    Scene_Menu.prototype.create = function() {
        _Scene_Menu_new.call(this);
        		this.createLocationWindow();
    };
	// Here begins the location window
	//-----------------------------------------------------------------------------
	// Window_Locations
	//
	// The window for displaying the players current location.
	
	Scene_Menu.prototype.createLocationWindow = function() {
    this._locationWindow = new Window_Location(0, 0);
	this._locationWindow.width = this._commandWindow.width - this._goldWindow.width ;
    this._locationWindow.x = 0;
	this._locationWindow.y = Graphics.boxHeight - (this._locationWindow.height*2)+72;
    this.addWindow(this._locationWindow);
	};
	
	function Window_Location() {
		this.initialize.apply(this, arguments);
	}
	
	Window_Location.prototype = Object.create(Window_Base.prototype);
	Window_Location.prototype.constructor = Window_Location;
	
	Window_Location.prototype.initialize = function(x, y) {
		var width = this.windowWidth();
		var height = this.windowHeight();
		Window_Base.prototype.initialize.call(this, x, y, width, height);
		this.refresh();
	};
	
	Window_Location.prototype.windowWidth = function() {
		return 440;
	};
	
	Window_Location.prototype.windowHeight = function() {
		return this.fittingHeight(1);
	};
	
	Window_Location.prototype.refresh = function() {
	
		var x = this.textPadding();
		var width = this.contents.width - this.textPadding() * 2;
		this.contents.clear();
		this.drawText(this.value(), x+230, 0, width);
		var name = $gameActors.actor(6)._name
		this.drawText(name, x, 0, width);
	};
	
	Window_Location.prototype.value = function() {
		if ($gameMap.displayName())
			return $gameMap.displayName();
		else
			return 'Unknown location';
	};
	
	
	Window_Location.prototype.open = function() {
		this.refresh();
		Window_Base.prototype.open.call(this);
	};

})();
