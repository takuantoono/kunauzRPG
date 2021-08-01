/*:
 * @plugindesc Clear Cache, Yes = true    No = false
 * @author Eivind Teig
 * <ET Clear Cache>
 *
 * @param Mobile
 * @desc Cache clearing is ment for mobile (turn off at your own peril)
 * @default true
 *
 * @param Clear Everything
 * @desc Clear Everything (all other settings are ignored)
 * @default true
 *
 * @param Clear Animation folder
 * @desc Clear images from the animations folder
 * @default true
 *
 * @param Clear Battlebacks folder
 * @desc Clear images from Battleback folder
 * @default true
 *
 * @param Clear Battlers folder
 * @desc Clear images from Battler folder
 * @default true
 *
 * @param Clear Characters folder
 * @desc Clear images from Character folder
 * @default true
 *
 * @param Clear Faces folder
 * @desc Clear images from Face folder
 * @default true
 *
 * @param Clear Parallaxes folder
 * @desc Clear images from Parallax folder
 * @default true
 *
 * @param Clear Pictures folder
 * @desc Clear images from Picture folder
 * @default true
 *
 * @param Clear System folder
 * @desc Clear images from System folder (not recommended)
 * @default false
 *
 * @param Clear Tilesets folder
 * @desc Clear images from Tileset folder
 * @default true
 *
 * @param Clear Titles folder
 * @desc Clear images from Title folder
 * @default true
 *
 * @param Clear Custom Image folder
 * @desc a custom list of folders (img/equipts; img/weather)
 * @default
 * 
 */

var ET = ET || {};

ET.params                      = PluginManager.parameters('ET_ClearCache');
//ET.params                      = $plugins.filter(function(p) { return p.description.contains('<ET Clear Cache>'); })[0].parameters;
//returns an error.. hmmm.. using old method instead.
ET.ClearCache                  = ET.ClearCache || {};
ET.ClearCache.mobile           = ET.params['Mobile'].toLowerCase() === 'true';
ET.ClearCache.clearEverything  = ET.params['Clear Everything'].toLowerCase() === 'true';
ET.ClearCache.clearAnimation   = ET.params['Clear Animation folder'].toLowerCase() === 'true';
ET.ClearCache.clearBattlebacks = ET.params['Clear Battlebacks folder'].toLowerCase() === 'true';
ET.ClearCache.clearBattlers    = ET.params['Clear Battlers folder'].toLowerCase() === 'true';
ET.ClearCache.clearCharacters  = ET.params['Clear Characters folder'].toLowerCase() === 'true';
ET.ClearCache.clearFaces       = ET.params['Clear Faces folder'].toLowerCase() === 'true';
ET.ClearCache.clearParallaxes  = ET.params['Clear Parallaxes folder'].toLowerCase() === 'true';
ET.ClearCache.clearPictures    = ET.params['Clear Pictures folder'].toLowerCase() === 'true';
ET.ClearCache.clearSystem      = ET.params['Clear System folder'].toLowerCase() === 'true';
ET.ClearCache.clearTilesets    = ET.params['Clear Tilesets folder'].toLowerCase() === 'true';
ET.ClearCache.clearTitles      = ET.params['Clear Titles folder'].toLowerCase() === 'true';
ET.ClearCache.clearCustom      = ET.params['Clear Custom Image folder'];



(function() {

if (!ET.ClearCache.clearEverything) {
	clearPaths = [];
	if (ET.ClearCache.clearAnimation) clearPaths.push('img/animations');
	if (ET.ClearCache.clearBattlebacks) clearPaths.push('img/battlebacks1','img/battlebacks2');
	if (ET.ClearCache.clearBattlers) clearPaths.push('img/enemies', 'img/sv-actors', 'img/sv-enemies');
	if (ET.ClearCache.clearCharacters) clearPaths.push('img/characters');
	if (ET.ClearCache.clearFaces) clearPaths.push('img/faces');
	if (ET.ClearCache.clearParallaxes) clearPaths.push('img/parallaxes');
	if (ET.ClearCache.clearPictures) clearPaths.push('img/pictures');
	if (ET.ClearCache.clearSystem) clearPaths.push('img/system');
	if (ET.ClearCache.clearTilesets) clearPaths.push('img/tilesets');
	if (ET.ClearCache.clearTitles) clearPaths.push('img/titles1', 'img/titles2');
	ET.ClearCache.clearCustom.split(';').forEach(function(path) { if (path) clearPaths.push(path.trim()); }.bind(this));
}

ImageManager.clear = function() {
	for (var image in this._cache) {
		if (ET.ClearCache.clearEverything && image.indexOf('img/system') === -1) {
			this.removeFromCache(image);
		}else if(!ET.ClearCache.clearEverything && clearPaths.some(function(path) { return image.indexOf(path) > -1;}.bind(this))){
			this.removeFromCache(image);
		}

	}
};

ImageManager.removeFromCache = function(image) {
    if (image !== 'null') {
      if (this._cache.hasOwnProperty(image) && this._cache[image] instanceof Bitmap) {
        if (this._cache[image].baseTexture) {
          this._cache[image].baseTexture.destroy();
        }
      }
      delete this._cache[image];
    }
  };

  var _Scene_Map_create = Scene_Map.prototype.create;
  Scene_Map.prototype.create = function() {
    _Scene_Map_create.call(this);
    if (this._transfer && (!ET.ClearCache.mobile || Utils.isMobileDevice())) {
      ImageManager.clear();
    }
  };

})();