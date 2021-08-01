//----------------------------------------------------------------------------
// SOUL_MV Animated Scene Credits Remilia
// Version 1.0 - author: Soulpour777 - soulxregalia.wordpress.com
//----------------------------------------------------------------------------
/*:
* @plugindesc v1.0 Creates an animated slideshow for your game as a credits scene.
* @author: Soulpour777 - soulxregalia.wordpress.com
*
* @param Skippable
* @desc Is the cutscene skippable?
* @default true
*
* @param -- PARTICLES --
*
* @param Use Particles
* @desc Do you want to use Particles?
* @default true
*
* @param Max Particles
* @desc How many particles do you want to show?
* @default 10
*
* @param -- MAX VALUES --
*
* @param Max Illustrations
* @desc Maximum number of Illustrations used in your credits. (Check help for guide)
* @default 12
*
* @param Max Pages
* @desc Maximum number of Pages (Text Images) used in your credits. (Check help for guide)
* @default 12
*
* @param -- IMAGES & CONTROL --
*
* @param Background
* @desc The background that you use in the scene.
* @default front_paper
*
* @param Particle Image
* @desc Image name used for Particles.
* @default Blot
*
* @param First Phase Wait
* @desc This is the FIRST waiting phase you will have to set your screen at. (Check Help for Info)
* @default 555
*
* @param Last Phase Wait
* @desc This is the LAST waiting phase you will have to set your screen at. (Check Help for Info)
* @default 550
*
* @param Magic Circle 1
* @desc Image name used for your first magic circle.
* @default golden magic circle
*
* @param Magic Circle 1 X
* @desc X axis of the first magic circle image.
* @default -50
*
* @param Magic Circle 1 Y
* @desc Y axis of the first magic circle image.
* @default -80
*
* @param Magic 1 Anchor X
* @desc Anchor X of the First Magic Circle.
* @default 0.5
*
* @param Magic 1 Anchor Y
* @desc Anchor Y of the First Magic Circle.
* @default 0.5
*
* @param Magic 1 Rotation
* @desc Rotation value of the first magic circle.
* @default 0.003
* 
* @param Magic Circle 2
* @desc Image name used for your second magic circle.
* @default golden magic circle
*
* @param Magic Circle 2 X
* @desc X axis of the second magic circle image.
* @default 740
*
* @param Magic Circle 2 Y
* @desc Y axis of the second magic circle image.
* @default 812
*
* @param Magic 2 Anchor X
* @desc Anchor X of the Second Magic Circle.
* @default 0.5
*
* @param Magic 2 Anchor Y
* @desc Anchor Y of the Second Magic Circle.
* @default 0.5
*
* @param Magic 2 Rotation
* @desc Rotation value of the second magic circle.
* @default 0.003
* 
* @help

SOUL_MV Animated Scene Credits Remilia
Version 1.0 - author: Soulpour777 - soulxregalia.wordpress.com

Reminder: Place all the images on the img / credits folder.

Plugin Commands

start_credits       This plugin command will allow you to start the credits.

This plugin allows Skip / Unskippable settings.

Phase

What does the First and Last Phase mean?

The First Phase means the first fade out transition for the first two images, 
image_1 and text_1. They flicker when they get slower in phase number. 
That means the lower the first phase, the more that it flickers. The longer, the more it
becomes effective. How ever, I balanced everything already. It's just that
if you want a better control, I just set that up for you.

The Last Phase is the phase for all the other images. Same settings above.

Credits:

Images: 
Animeflow, DeviantArt (original magic circle), 
Soulpour777 (for golden magic circle change)

Programming / Plugin: Soulpour777

Music: East New Sound

Terms of Use: https://soulxregalia.wordpress.com/terms-of-use/

*/


var SOUL_MV = SOUL_MV || {};
SOUL_MV.Remilia = {};

SOUL_MV.Remilia.Skip = PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['Skippable'] === "true" ? true : false;

SOUL_MV.Remilia.rotation1 = Number(PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['Magic 1 Rotation'] || 0.003);
SOUL_MV.Remilia.rotation2 = Number(PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['Magic 2 Rotation'] || 0.003);


SOUL_MV.Remilia.ParticleImage = PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['Particle Image'] || "Blot";
SOUL_MV.Remilia.UseParticles = PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['Use Particles'] === "true" ? true : false;
SOUL_MV.Remilia.ParticleNumbers = Number(PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['Max Particles'] || 10);

SOUL_MV.Remilia.Background = PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['Background'] || "front_paper";

SOUL_MV.Remilia.MaxIllustration = Number(PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['Max Illustrations'] || 12);
SOUL_MV.Remilia.IllustrationPages = [];

SOUL_MV.Remilia.MaxPages = Number(PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['Max Pages'] || 12);
SOUL_MV.Remilia.TitlePages = [];
SOUL_MV.Remilia.phase = 0;

SOUL_MV.Remilia.MagicCircle1 = PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['Magic Circle 1'] || "golden magic circle";
SOUL_MV.Remilia.MagicCircle2 = PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['Magic Circle 2'] || "golden magic circle";


SOUL_MV.Remilia.PhaseWaitF = Number(PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['First Phase Wait'] || 555);
SOUL_MV.Remilia.PhaseWaitL = Number(PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['Last Phase Wait'] || 550);

SOUL_MV.Remilia.mcircleX = Number(PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['Magic Circle 1 X'] || -50);
SOUL_MV.Remilia.mcircleY = Number(PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['Magic Circle 1 Y'] || -80);
SOUL_MV.Remilia.mcircle2X = Number(PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['Magic Circle 2 X'] || 740);
SOUL_MV.Remilia.mcircle2Y = Number(PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['Magic Circle 2 Y'] || 812);


SOUL_MV.Remilia.mcircleAnchorX = Number(PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['Magic 1 Anchor X'] || 0.5);
SOUL_MV.Remilia.mcircleAnchorY = Number(PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['Magic 1 Anchor Y'] || 0.5);
SOUL_MV.Remilia.mcircle2AnchorX = Number(PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['Magic 2 Anchor X'] || 0.5);
SOUL_MV.Remilia.mcircle2AnchorY = Number(PluginManager.parameters('SOUL_MV Animated Scene Credits Remilia')['Magic 2 Anchor Y'] || 0.5);

function SOUL_MV_SceneCredits() {
    this.initialize.apply(this, arguments);
}

SOUL_MV_SceneCredits.prototype = Object.create(Scene_Base.prototype);
SOUL_MV_SceneCredits.prototype.constructor = SOUL_MV_SceneCredits;

SOUL_MV_SceneCredits.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
    this._maxIllust = SOUL_MV.Remilia.MaxIllustration + 1;
    this._maxPages = SOUL_MV.Remilia.MaxPages + 1;
    for (var i = 1; i < this._maxIllust; i++) {
        SOUL_MV.Remilia.IllustrationPages.push("image_"+i);
    }
    for (var i = 1; i < this._maxPages; i++) {
        SOUL_MV.Remilia.TitlePages.push("text_"+i);
    }
    SOUL_MV.Remilia.phase = 0;
    this.phase_wait = SOUL_MV.Remilia.PhaseWaitF;
    this.return_phase = false;
};

SOUL_MV_SceneCredits.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.createBackground();
    this.createOverlayPortraits();
    this.createOverlayTexts();
    if(SOUL_MV.Remilia.UseParticles)this.createParticles();
    this.createMagicCircles();
};

SOUL_MV_SceneCredits.prototype.createMagicCircles = function() {
    this._magicCircle = new Sprite();
    this._magicCircle.bitmap = ImageManager.loadcredits(SOUL_MV.Remilia.MagicCircle1);
    this._magicCircle.x  = SOUL_MV.Remilia.mcircleX;
    this._magicCircle.y = SOUL_MV.Remilia.mcircleY;
    this._magicCircle.anchor.x = SOUL_MV.Remilia.mcircleAnchorX;
    this._magicCircle.anchor.y = SOUL_MV.Remilia.mcircleAnchorY;
    this._magicCircle2 = new Sprite();
    this._magicCircle2.bitmap = ImageManager.loadcredits(SOUL_MV.Remilia.MagicCircle1);
    this._magicCircle2.x = SOUL_MV.Remilia.mcircle2X;
    this._magicCircle2.y = SOUL_MV.Remilia.mcircle2Y;
    this._magicCircle2.anchor.x = SOUL_MV.Remilia.mcircle2AnchorX;
    this._magicCircle2.anchor.y = SOUL_MV.Remilia.mcircle2AnchorX;    
    this.addChildAt(this._magicCircle, 1);
    this.addChildAt(this._magicCircle2, 1);
}

SOUL_MV_SceneCredits.prototype.createParticles = function() {
    this._particles = new SOUL_MV_Particles();
    this.addChildAt(this._particles, 1);
}

SOUL_MV_SceneCredits.prototype.createOverlayTexts = function() {
    this._titleOverlay = new Sprite();
    this._titleOverlay.bitmap = ImageManager.loadcredits(SOUL_MV.Remilia.TitlePages[SOUL_MV.Remilia.phase]);
    this._titleOverlay.opacity = 0;
    this.addChildAt(this._titleOverlay, 2);
}

SOUL_MV_SceneCredits.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    this.startFadeIn(this.slowFadeSpeed(), false);
};


ImageManager.loadcredits = function(filename, hue) {
    return this.loadBitmap('img/credits/', filename, hue, true);
};

SOUL_MV_SceneCredits.prototype.update = function() {
    Scene_Base.prototype.update.call(this);



    if(this.phase_wait != 0 && this.phase_wait > 0) { 
        this.phase_wait--;
        
    } else {
        this.phase_wait = SOUL_MV.Remilia.PhaseWaitL;
        if (SOUL_MV.Remilia.phase === this._maxIllust-2 && SOUL_MV.Remilia.phase === this._maxPages-2) {
            SceneManager.goto(Scene_Map);
        } else {
            SOUL_MV.Remilia.phase = SOUL_MV.Remilia.phase + 1;
        }
    }
    if (this.return_phase) {
        if (this._overlayPortraits.opacity >= 255) {
            this.return_phase = false;
        } else {
            this._overlayPortraits.opacity+=2;
            this._overlayPortraits.bitmap = ImageManager.loadcredits(SOUL_MV.Remilia.IllustrationPages[SOUL_MV.Remilia.phase]);
        }  
        if (this._titleOverlay.opacity >= 255) {
            this.return_phase = false;
        } else {
            this._titleOverlay.opacity+=2;
            this._titleOverlay.bitmap = ImageManager.loadcredits(SOUL_MV.Remilia.TitlePages[SOUL_MV.Remilia.phase]);
        }            
    } else {
        if (this._overlayPortraits.opacity <= 0) {
            this.return_phase = true;
        } else {
            this._overlayPortraits.opacity-=0.30;
        }
        if (this._titleOverlay.opacity <= 0) {
            this.return_phase = true;
        } else {
            this._titleOverlay.opacity-=0.30;
        }
    }

    if (this.isActive() && !this.isBusy() && this.isTriggered() && SOUL_MV.Remilia.Skip) {
        SceneManager.push(SceneManager._previousClass);
    }


    this._magicCircle.rotation += SOUL_MV.Remilia.rotation1;
    this._magicCircle2.rotation += SOUL_MV.Remilia.rotation2;
};

SOUL_MV_SceneCredits.prototype.isTriggered = function() {
    return Input.isTriggered('ok') || TouchInput.isTriggered();
};


SOUL_MV_SceneCredits.prototype.stop = function() {
    Scene_Base.prototype.stop.call(this);
    this.fadeOutAll();
};

SOUL_MV_SceneCredits.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);
    AudioManager.stopAll();
};

SOUL_MV_SceneCredits.prototype.createOverlayPortraits = function() {
    this._overlayPortraits = new Sprite();
    this._overlayPortraits.bitmap = ImageManager.loadcredits(SOUL_MV.Remilia.IllustrationPages[SOUL_MV.Remilia.phase]);
    this._overlayPortraits.opacity = 0;
    this.addChildAt(this._overlayPortraits, 1);
};

SOUL_MV_SceneCredits.prototype.gotoTitle = function() {
    SceneManager.goto(Scene_Map);
};

SOUL_MV_SceneCredits.prototype.createBackground = function() {
    this._backSprite = new Sprite();
    this._backSprite.bitmap = ImageManager.loadcredits(SOUL_MV.Remilia.Background);
    this.addChildAt(this._backSprite, 0);
}

function SOUL_MV_Particles() {
    this.initialize.apply(this, arguments);
}

SOUL_MV_Particles.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
SOUL_MV_Particles.prototype.constructor = SOUL_MV_Particles;

SOUL_MV_Particles.prototype.initialize = function() {
    PIXI.DisplayObjectContainer.call(this);

    this._width = Graphics.width;
    this._height = Graphics.height;
    this._sprites = [];

    this._createBitmaps();
    this.type = 'none';
    this.power = 1;
    this.origin = new Point();
};
SOUL_MV_Particles.prototype.update = function() {
    this._updateAllSprites();
};

SOUL_MV_Particles.prototype._createBitmaps = function() {
    this._snowBitmap = new Bitmap(9, 9);
};

SOUL_MV_Particles.prototype._updateAllSprites = function() {
    var maxSprites = SOUL_MV.Remilia.ParticleNumbers;
    while (this._sprites.length < maxSprites) {
        this._addSprite();
    }
    while (this._sprites.length > maxSprites) {
        this._removeSprite();
    }
    this._sprites.forEach(function(sprite) {
        this._updateSprite(sprite);
        sprite.x = sprite.ax - this.origin.x;
        sprite.y = sprite.ay - this.origin.y;
    }, this);
};

SOUL_MV_Particles.prototype._addSprite = function() {
    var sprite = new Sprite(this.viewport);
    sprite.opacity = 0;
    this._sprites.push(sprite);
    this.addChild(sprite);
};

SOUL_MV_Particles.prototype._removeSprite = function() {
    this.removeChild(this._sprites.pop());
};

SOUL_MV_Particles.prototype._updateSprite = function(sprite) {
    this._updateSnowSprite(sprite);
    if (sprite.opacity < 40) {
        this._rebornSprite(sprite);
    }
};

SOUL_MV_Particles.prototype._updateSnowSprite = function(sprite) {
    sprite.bitmap = ImageManager.loadcredits(SOUL_MV.Remilia.ParticleImage);
    sprite.rotation = Math.PI / 16;
    for (var i = 0; i < this._sprites.length; i++) {
       sprite.ax += Math.sin(new Date().getTime() / 2000) / 4;
    }
    sprite.ay -= 1;
    sprite.opacity -= 1;
};

SOUL_MV_Particles.prototype._rebornSprite = function(sprite) {
    sprite.ax = Math.randomInt(Graphics.width + 100) - 100 + this.origin.x;
    sprite.ay = Math.randomInt(Graphics.height + 200) - 200 + this.origin.y;
    sprite.opacity = 160 + Math.randomInt(60);
};

SOUL_MV.Remilia.pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    SOUL_MV.Remilia.pluginCommand.call(this, command, args);
    if (command === "start_credits") {
        SceneManager.push(SOUL_MV_SceneCredits);
    }
};
