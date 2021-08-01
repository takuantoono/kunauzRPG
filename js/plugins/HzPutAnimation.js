/*:
 *
 * @plugindesc 任意の座標にアニメーションを表示するプラグイン
 * @author hiz
 * 
 *  @help
 * プラグイン コマンド:
 *   HZANIM PUT x y animId             # 座標([x], [y])にID[animId]のアニメーションを表示します
 *  
 */

(function() {
    function cnvEsc(txt) {
        if(txt == null) return txt;
        return Window_Base.prototype.convertEscapeCharacters(txt);
    };
    
    var _Game_Interpreter_pluginCommand =
            Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        
        if (command.toUpperCase() === 'HZANIM') {
            if(args[0].toUpperCase() === 'PUT') {
                var x      = Number(cnvEsc(args[1]));
                var y      = Number(cnvEsc(args[2]));
                var animId = Number(cnvEsc(args[3]));
               HzPutAnimation.putAnimation(x, y, animId);
            }
        }
    };
    
    var _Spriteset_Map_createUpperLayer = Spriteset_Map.prototype.createUpperLayer;
    Spriteset_Map.prototype.createUpperLayer = function() {
        _Spriteset_Map_createUpperLayer.call(this);
        console.log("s")
        this.createAnimTargets();
    };
    
    Spriteset_Map.prototype.createAnimTargets = function() {
        this._animTargetsContainer = new Sprite();
        this._animTargetsContainer.x = Graphics.width / 2;
        this._animTargetsContainer.y = Graphics.height / 2;
        this.addChild(this._animTargetsContainer);
    };
    
    var _Spriteset_Map_update = Spriteset_Map.prototype.update;
    Spriteset_Map.prototype.update = function() {
        _Spriteset_Map_update.call(this);
        this.updateAnimTargets();
    };
    
    Spriteset_Map.prototype.updateAnimTargets = function() {
        this._animTargetsContainer.children.forEach(function(animTarget) {
            animTarget.update();
        }, this);
    };
    
    Spriteset_Map.prototype.addAnimTarget = function(animTarget) {
        this._animTargetsContainer.addChild(animTarget);
    };
    
    var _Game_Map_initialize = Game_Map.prototype.initialize;
    Game_Map.prototype.initialize = function() {
        _Game_Map_initialize.call(this);
        this._animTargets = [];
    };
    
    var _Game_Map_update = Game_Map.prototype.update;
    Game_Map.prototype.update = function(sceneActive) {
        _Game_Map_update.call(this, sceneActive);
        if(!this._animTargets)return
        var len = this._animTargets.length;
        for(var i=len-1;i>=0;i--) {
            this._animTargets[i].update();
            if(!this._animTargets[i].isActive()) {
                this._animTargets.splice(i, 1);
            }
        }
    };
})();

function Game_AnimTarget() {
    this.initialize.apply(this, arguments);
};

Game_AnimTarget.prototype = Object.create(Game_CharacterBase.prototype);
Game_AnimTarget.prototype.constructor = Game_AnimTarget;

Game_AnimTarget.prototype.initialize = function(x, y, animId) {
    Game_CharacterBase.prototype.initMembers();
    this._x = x;
    this._y = y;
    this._animationId      = animId;
};

Game_AnimTarget.prototype.isActive = function() {
    return this.isAnimationPlaying();
};


function Sprite_AnimTarget() {
    this.initialize.apply(this, arguments);
};

Sprite_AnimTarget.prototype = Object.create(Sprite_Character.prototype);
Sprite_AnimTarget.prototype.constructor = Sprite_AnimTarget;

Sprite_AnimTarget.prototype.update = function() {
    Sprite_Character.prototype.update.call(this);
    if(!this._character.isActive()) {
        this.parent.removeChild(this);
    }
};

Sprite_AnimTarget.prototype.updatePosition = function() {
    this.x = this._character.x - Graphics.width / 2;
    this.y = this._character.y - Graphics.height / 2;
    this.z = this._character.z;
};

function HzPutAnimation() {
    
}

HzPutAnimation.putAnimation = function(x, y, animId) {
    var animTarget = new Game_AnimTarget(x, y, animId);
    var sprite = new Sprite_AnimTarget(animTarget);
    SceneManager._scene._spriteset.addAnimTarget(sprite);
    $gameMap._animTargets.push(animTarget);
};