//==============================================================================
// TEM_Formation_Battle_A
// TEM_Formation_Battle_A.js
// Version: 2.1
// 最終更新日: 2016/09/07
//=============================================================================
//■更新履歴
// 2016/04/16 - 公開
// 2016/04/16 - 修正（匿名の方のご協力）
// 2016/09/05 - アクター1人目の「攻撃」「防御」のところに「隊列」をいれたバージョン
// 2016/09/07 - コアスクリプト1.3.1で不具合報告、確認できたので修正対応しました。
//=============================================================================
/*:
 *
 * @plugindesc 戦闘中のアクターコマンドに隊列変更を追加
 * @author みみおとこ
 *
 * @help
 * 戦闘中のアクターコマンド（一人目）に隊列変更を追加します
 * フロントビュー・サイドビュー両対応。
 * 
 * 再配布・改造、自由にしてください。クレジットあると嬉しいです。
 * 
 */
 
 Scene_Battle.prototype.createActorCommandWindow = function() {
    this._actorCommandWindow = new Window_ActorCommand();
    this._actorCommandWindow.setHandler('attack', this.commandAttack.bind(this));
    this._actorCommandWindow.setHandler('skill',  this.commandSkill.bind(this));
    this._actorCommandWindow.setHandler('guard',  this.commandGuard.bind(this));
    this._actorCommandWindow.setHandler('equip', this.commandEquip.bind(this));
    this._actorCommandWindow.setHandler('item',   this.commandItem.bind(this));
    this._actorCommandWindow.setHandler('cancel', this.selectPreviousCommand.bind(this));
    this._actorCommandWindow.setHandler('magic',  this.commandSkill.bind(this));
    this._actorCommandWindow.setHandler('summon',  this.commandSkill.bind(this));
    this.addWindow(this._actorCommandWindow);
};


Window_PartyCommand.prototype.makefStatusCommand = function() {
  if (!$gameSystem.isFormationEnabled()) return;
  var index = this.findSymbol('escape');
  this.setLanguageWords();
  var text = this._formation_w;
  this.addCommandAt(index, text, 'formation', true);
};


Scene_Battle.prototype.commandFormation = function() {
    this._fstatusWindow.setFormationMode(true);
    this._fstatusWindow.selectLast();
    this._fstatusWindow.activate();
    this._fstatusWindow.show();
//    this._statusWindow.refresh();
    this._fstatusWindow.refresh();
    this._fstatusWindow.setHandler('ok',     this.onFormationOk.bind(this));
    this._fstatusWindow.setHandler('cancel', this.onFormationCancel.bind(this));
};
Scene_Battle.prototype.onFormationOk = function() {
    var index = this._fstatusWindow.index();
    var actor = $gameParty.allMembers()[index];
    var pendingIndex = this._fstatusWindow.pendingIndex();
    if (pendingIndex >= 0) {
        $gameParty.swapOrder(index, pendingIndex);
        this._fstatusWindow.setPendingIndex(-1);
        this._fstatusWindow.redrawItem(index);
        this._statusWindow.refresh();
    } else {
        this._fstatusWindow.setPendingIndex(index);
    }
    this._fstatusWindow.activate();
};
Scene_Battle.prototype.onFormationCancel = function() {
    if (this._fstatusWindow.pendingIndex() >= 0) {
        this._fstatusWindow.setPendingIndex(-1);
        this._fstatusWindow.activate();
        //this._partyCommandWindow.activate();
    } else {
        this._fstatusWindow.deselect();
        this._fstatusWindow.hide();
        this._partyCommandWindow.activate();
		//BattleManager.startInput();
    }
};
var F_Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows;
Scene_Battle.prototype.createAllWindows = function() {
    F_Scene_Battle_createAllWindows.call(this);
    this.createFWindow();
};
Scene_Battle.prototype.createFWindow = function() {
    this._fstatusWindow = new Window_FStatus(190, 0, 100 , 100);        
    this.addWindow(this._fstatusWindow);
    this._fstatusWindow.deactivate();
    this._fstatusWindow.hide();

};



Window_PartyCommand.prototype.isFormationEnabled = function() {
    return $gameParty.size() >= 2 && $gameSystem.isFormationEnabled();
};


//-----------------------------------------------------------------------------
// Window_FStatus
//
// The window for displaying party member status on the menu screen.

function Window_FStatus() {
    this.initialize.apply(this, arguments);
}
Window_FStatus.prototype = Object.create(Window_MenuStatus.prototype);
Window_FStatus.prototype.constructor = Window_FStatus;

Window_FStatus.prototype.maxItems = function() {
    return $gameParty.allMembers().length;;
};
Window_FStatus.prototype.loadImages = function() {
    $gameParty.allMembers().forEach(function(actor) {
        ImageManager.loadFace(actor.faceName());
    }, this);
};
Window_FStatus.prototype.drawItemImage = function(index) {
    var actor = $gameParty.allMembers()[index];
    var rect = this.itemRect(index);
    this.changePaintOpacity(actor.isBattleMember());
    this.drawActorFace(actor, rect.x + 1, rect.y + 1, Window_Base._faceWidth, 58);
    this.changePaintOpacity(true);
    
};
Window_FStatus.prototype.drawItemStatus = function(index) {
    var actor = $gameParty.allMembers()[index];    
    var rect = this.itemRect(index);
    var x = rect.x + 162;
    var y = rect.y + rect.height / 2 - this.lineHeight() * 1.5;
    var width = rect.width - x - this.textPadding();

    this.drawActorSimpleStatus(actor, x, y, width);
};
Window_FStatus.prototype.processOk = function() {
if (this.isCurrentItemEnabled()) {
        this.playOkSound();
    this.updateInputData();
    this.deactivate();
    this.callOkHandler();
    $gameParty.setMenuActor($gameParty.allMembers()[this.index()]);
    } else {
        this.playBuzzerSound();
    }
    
};

Window_FStatus.prototype.isCurrentItemEnabled = function() {
    if (this._formationMode &&
        this.index() === 5) {
      return false;
    } else {
      return true;
    }    
};