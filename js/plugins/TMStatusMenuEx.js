//=============================================================================
// TMVplugin - ステータス表示拡張
// 作者: tomoaky (http://hikimoki.sakura.ne.jp/)
// Version: 1.0
// 最終更新日: 2016/02/26
//=============================================================================

/*:
 * @plugindesc ステータスシーンに表示するパラメータを追加します。
 *
 * @author tomoaky (http://hikimoki.sakura.ne.jp/)
 *
 * @param descriptionKeyCode
 * @desc 表示切替ボタンとして使うキー
 * 初期値: 65（ 65 = A, 66 = B, 67 = C, ... ）
 * @default 65
 *
 * @param useOkKey
 * @desc 表示切替ボタンとして決定キー（Enter, Z など）を使う
 * 初期値: 1（ 0 で使わない）
 * @default 1
 *
 * @param horzLineHeight
 * @desc 横線の余白も含めた高さ
 * 初期値: 28
 * @default 28
 *
 * @param xparamText
 * @desc 追加能力値の項目名（カンマ区切りで１０項目）
 * 初期値: 命中,回避,会心,会心回避,魔法回避,魔法反射,反撃,…
 * @default 命中,回避,会心,会心回避,魔法回避,魔法反射,反撃,ＨＰ再生,ＭＰ再生,ＴＰ再生
 *
 * @param sparamText
 * @desc 特殊能力値の項目名（カンマ区切りで１０項目）
 * 初期値: 狙われ率,防御効果,回復効果,薬の知識,ＭＰ消費,…
 * @default 狙われ率,防御効果,回復効果,薬の知識,ＭＰ消費,ＴＰチャージ,,,床ダメージ,経験値獲得
 *
 * @param paramNameX
 * @desc 通常能力値名の表示Ｘ座標
 * 初期値: 6
 * @default 6
 *
 * @param paramNameWidth
 * @desc 通常能力値名の表示幅
 * 初期値: 96
 * @default 96
 *
 * @param paramX
 * @desc 通常能力値の表示Ｘ座標
 * 初期値: 112
 * @default 112
 *
 * @param paramWidth
 * @desc 通常能力値の表示幅
 * 初期値: 60
 * @default 60
 *
 * @param xparamNameX
 * @desc 追加能力値名の表示Ｘ座標
 * 初期値: 204
 * @default 204
 *
 * @param xparamNameWidth
 * @desc 追加能力値名の表示幅
 * 初期値: 120
 * @default 120
 *
 * @param xparamX
 * @desc 追加能力値の表示Ｘ座標
 * 初期値: 330
 * @default 330
 *
 * @param xparamWidth
 * @desc 追加能力値の表示幅
 * 初期値: 60
 * @default 60
 *
 * @param xparamFixed
 * @desc 追加能力値の小数点以下桁数
 * 初期値: 0
 * @default 0
 *
 * @param sparamNameX
 * @desc 特殊能力値名の表示Ｘ座標
 * 初期値: 432
 * @default 432
 *
 * @param sparamNameWidth
 * @desc 特殊能力値名の表示幅
 * 初期値: 172
 * @default 172
 *
 * @param sparamX
 * @desc 特殊能力値の表示Ｘ座標
 * 初期値: 610
 * @default 610
 *
 * @param sparamWidth
 * @desc 特殊能力値の表示幅
 * 初期値: 80
 * @default 80
 *
 * @param sparamFixed
 * @desc 特殊能力値の小数点以下桁数
 * 初期値: 0
 * @default 0
 *
 * @param elementResistX
 * @desc 属性有効度の表示Ｘ座標
 * 初期値: 6
 * @default 6
 *
 * @param elementResistWidth
 * @desc 属性有効度の表示幅
 * 初期値: 160
 * @default 160
 *
 * @param elementResistIds
 * @desc 表示する属性有効度
 * 初期値: 2,3,4,5,6,7,8,9
 * @default 2,3,4,5,6,7,8,9
 *
 * @param elementResistIconIds
 * @desc 表示する属性有効度のアイコン番号
 * 初期値: 64,65,66,67,68,69,70,71
 * @default 64,65,66,67,68,69,70,71
 *
 * @param pdrIconId
 * @desc 物理ダメージ率のアイコン番号（ 0 で非表示）
 * 初期値: 77
 * @default 77
 *
 * @param mdrIconId
 * @desc 魔法ダメージ率のアイコン番号（ 0 で非表示）
 * 初期値: 79
 * @default 79
 *
 * @param stateResistX
 * @desc ステート有効度の表示Ｘ座標
 * 初期値: 204
 * @default 204
 *
 * @param stateResistWidth
 * @desc ステート有効度の表示幅
 * 初期値: 160
 * @default 160
 *
 * @param stateResistIds
 * @desc 表示するステート有効度
 * 初期値: 4,5,6,7,8,9,10
 * @default 4,5,6,7,8,9,10
 *
 * @param resistFixed
 * @desc 有効度の小数点以下桁数
 * 初期値: 1
 * @default 1
 *
 * @param paramBackGround
 * @desc パラメータの背景を暗くするかどうか
 * 初期値: 1 ( 0 で無効)
 * @default 1
 *
 * @param paramBackGroundOpacity
 * @desc パラメータの背景の暗さ（ 1 ～ 255 ）
 * 初期値: 160
 * @default 160
 *
 * @param useNicknameEx
 * @desc 二つ名と職業をまとめて表示する
 * 初期値: 0（ 1 で有効）
 * @default 0
 *
 * @param useMaxLevel
 * @desc 最大レベルを表示するかどうか
 * 初期値: 1（ 0 で無効）
 * @default 1
 *
 * @param maxLevelColor
 * @desc レベルが最大の場合の文字色番号
 * 初期値: 5
 * @default 5
 *
 * @help
 * 使い方:
 *   ステータスシーンでＡキーを押す、あるいは左クリック（シングルタップ）で
 *   表示するパラメータを切り替えることができます。
 *
 *   useNicknameEx を 1 に設定することで二つ名と職業をセットで表示できます。
 *   二つ名を '髪殺しの' とか '邪竜屠りの' とかにすることで、同じ職業でも
 *   キャラごとの違いを際立たせることができるかもしれません。
 *
 * プラグインコマンドはありません。
 * 
 */

var Imported = Imported || {};
Imported.TMStatusMenuEx = true;

(function() {

  var parameters = PluginManager.parameters('TMStatusMenuEx');
  Input.keyMapper[+parameters['descriptionKeyCode']] = 'description';
  var useOkButton = parameters['useOkButton'] === '1' ? true : false;
  var horzLineHeight = +parameters['horzLineHeight'];
  var xparamText = parameters['xparamText'].split(',');
  var sparamText = parameters['sparamText'].split(',');
  var paramNameX      = +parameters['paramNameX'];
  var paramNameWidth  = +parameters['paramNameWidth'];
  var paramX          = +parameters['paramX'];
  var paramWidth      = +parameters['paramWidth'];
  var xparamNameX     = +parameters['xparamNameX'];
  var xparamNameWidth = +parameters['xparamNameWidth'];
  var xparamX         = +parameters['xparamX'];
  var xparamWidth     = +parameters['xparamWidth'];
  var xparamFixed     = +parameters['xparamFixed'];
  var sparamNameX     = +parameters['sparamNameX'];
  var sparamNameWidth = +parameters['sparamNameWidth'];
  var sparamX         = +parameters['sparamX'];
  var sparamWidth     = +parameters['sparamWidth'];
  var sparamFixed     = +parameters['sparamFixed'];
  var elementResistX       = +parameters['elementResistX'];
  var elementResistWidth   = +parameters['elementResistWidth'];
  var elementResistIds     = parameters['elementResistIds'].split(',');
  var elementResistIconIds = parameters['elementResistIconIds'].split(',');
  var pdrIconId            = +parameters['pdrIconId'];
  var mdrIconId            = +parameters['mdrIconId'];
  var stateResistX         = +parameters['stateResistX'];
  var stateResistWidth     = +parameters['stateResistWidth'];
  var stateResistIds       = parameters['stateResistIds'].split(',');
  var resistFixed          = +parameters['resistFixed'];
  var paramBackGround        = parameters['paramBackGround'] === '1' ? true : false;
  var paramBackGroundOpacity = +parameters['paramBackGroundOpacity'];
  var useNicknameEx = parameters['useNicknameEx'] === '1' ? true : false;
  var useMaxLevel = parameters['useMaxLevel'] === '1' ? true : false;
  var maxLevelColor = +parameters['maxLevelColor'];
  
  //-----------------------------------------------------------------------------
  // Window_Base
  //
  
  Window_Base.prototype.levelWidth = function() {
    return 160;
  };

  var _Window_Base_drawActorLevel = Window_Base.prototype.drawActorLevel;
  Window_Base.prototype.drawActorLevel = function(actor, x, y) {
    if (useMaxLevel) {
      this.changeTextColor(this.systemColor());
      this.drawText(TextManager.levelA, x, y, 48);
      var level = actor.level;
      var maxLevel = actor.maxLevel();
      var color1 = level === maxLevel ? this.textColor(maxLevelColor) : this.normalColor();
      this.drawCurrentAndMax(level, maxLevel, x, y, this.levelWidth(),
                             color1, this.normalColor());
    } else {
      _Window_Base_drawActorLevel.call(this, actor, x, y);
    }
  };

  var _Window_Base_drawActorSimpleStatus = Window_Base.prototype.drawActorSimpleStatus;
  Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
    if (useNicknameEx) {
      var lineHeight = this.lineHeight();
      y -= lineHeight * 0.5 - 8;
      this.contents.fontSize = 20;
      var text = actor.nickname() + actor.currentClass().name;
      this.contents.drawText(text, x, y, width, 20, 'left');
      this.resetFontSettings();
      var x2 = x + 180;
      y += 20;
      var width2 = Math.min(200, width - 180 - this.textPadding());
      this.drawActorName(actor, x + 20, y);
      this.drawActorLevel(actor, x, y + lineHeight * 1);
      this.drawActorIcons(actor, x, y + lineHeight * 2);
      this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
      this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
    } else {
      _Window_Base_drawActorSimpleStatus.call(this, actor, x, y, width);
    }
  };

  //-----------------------------------------------------------------------------
  // Window_Status
  //

  Window_Status.prototype.levelWidth = function() {
    return 186;
  };

  var _Window_Status_initialize = Window_Status.prototype.initialize;
  Window_Status.prototype.initialize = function() {
    this._parameterMode = 0;
    _Window_Status_initialize.call(this);
  };
  

  Window_Status.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
      var lineHeight = this.lineHeight();
      var y = 0;
      this.contents.fontSize = 28;
      y = this.drawBlock1(y);
      y = this.drawHorzLine(y);
      if (this._parameterMode === 0) {
        y = this.drawBlock2(y);
        y = this.drawHorzLine(y);
        this.contents.fontSize = 20;
        this.drawBlock3(y-2);
      } 
      if (this._parameterMode === 1) {
      this.contents.fontSize = 20;
        this.drawBlock5(y);
      }
      if (this._parameterMode === 2) {
      this.drawMasteries(48, y);
      this.drawSparams(y);
      }
      //if (this._parameterMode === 3) {
      //this.drawOmake(48, y);
      //}
      if (this._parameterMode === 0) {
      this.contents.fontSize = 20;
      y = this.contents.height - lineHeight * 2 - horzLineHeight;
      y = this.drawHorzLine(y);
      this.drawBlock4(y);
      }
    }
  };
  
  Window_Status.prototype.drawBlock4 = function(y) {
  x=6
    this.drawProfile(x, y);
    var name = 0;
    var actor = this._actor;
    name = this.amaClass(actor, name);
    if(name!=0)this.drawText(" 《"+name+"》", 550, y, 150, 'right')
    y+=34;
    text="暗視力："
    if(!$gameSwitches.value(376))text="N.Sight:"
    this.drawText(text, x, y, 100, 'left')
    x+=105
    text=actor._viewPoint
    this.drawText(text, x, y, 50, 'left');
    x+=60
    text="指先力："
    if(!$gameSwitches.value(376))text="Dexterity:"
    this.drawText(text, x, y, 100, 'left')
    x+=105
    text=actor._unlockPow
    this.drawText(text, x, y, 50, 'left');
    x+=60
    text="探索力："
    if(!$gameSwitches.value(376))text="Search:"
    this.drawText(text, x, y, 100, 'left')
    x+=105
    text=actor._searchPow
    this.drawText(text, x, y, 50, 'left');
    x+=60
    text="交渉力："
    if(!$gameSwitches.value(376))text="Negotiate:"
    this.drawText(text, x, y, 100, 'left')
    x+=105
    text=actor._negoPow
    this.drawText(text, x, y, 50, 'left');
};

Window_Base.prototype.drawActorFace2 = function(actor, x, y, width, height) {
    this.drawFace(actor.faceName(), actor.faceIndex(), x, y, width, height);
    var id = 0;
	if(actor._classId==1)id=966;
	if(actor._classId==2)id=967;
	if(actor._classId==3)id=968;
	if(actor._classId==4)id=969;
	if(actor._classId==5)id=970;
	if(actor._classId==6)id=971;
	if(actor._classId==8)id=972;
	if(actor._classId==12)id=973;
	if(actor._classId==13)id=974;
	if(actor._classId==14)id=975;
	if(id>0)this.drawIcon(id, x, y);
};

Window_Base.prototype.drawActorFace3 = function(actor, x, y, width, height) {
    this.drawFace(actor.faceName(), actor.faceIndex(), x, y, width, height);
    var id = 0;
	if(actor._classId==1)id=966;
	if(actor._classId==2)id=967;
	if(actor._classId==3)id=968;
	if(actor._classId==4)id=969;
	if(actor._classId==5)id=970;
	if(actor._classId==6)id=971;
	if(actor._classId==8)id=972;
	if(actor._classId==12)id=973;
	if(actor._classId==13)id=974;
	if(actor._classId==14)id=975;
	if(id>0)this.drawIcon(id, x+140, y);
};



  var _Window_Status_drawBlock1 = Window_Status.prototype.drawBlock1;
  Window_Status.prototype.drawBlock1 = function(y) {
    if (useNicknameEx) {
      this.drawActorName(this._actor, 6, y);
      this.resetTextColor();
      var x = this.textWidth(this._actor.name()) + 6;
      var text = this._actor.nickname() + this._actor.currentClass().name;
      this.drawText(text, x, y, this.contents.width - x - this.textPadding(), 'right');
    } else {
      _Window_Status_drawBlock1.call(this, y);
    }
    return y + this.lineHeight() * 1;
  };



  //var _Window_Status_drawBlock2 = Window_Status.prototype.drawBlock2;
  Window_Status.prototype.drawBlock2 = function(y) {
    //_Window_Status_drawBlock2.call(this, y);
    this.drawActorFace2(this._actor, 12, y);
    this.drawBasicInfo(204, y);
    this.drawExpInfo(456, y);
    return y + this.lineHeight() * 4;
  };

  Window_Status.prototype.drawBlock5 = function(y) {
    this.drawElementResists(y);
    this.drawStateResists(y);
  };
  
  Window_Status.prototype.drawOmake = function(y) {
    this.drawCerticicates(y);
    y = this.lineHeight() * 9;
    y = this.drawHorzLine(y);
    this.drawMiscellaneous(y);
  };
  
  Window_Status.prototype.drawCerticicates = function(y) {
    var x = 10;
    var w = 150;
    var lineHeight = this.lineHeight();
    this.drawText("　　　～踏破資制～", x, y, 300, 'left');
    y += lineHeight;
    var yy = y;
    var lineHeight = this.lineHeight();
    var certicicates = this._actor.certicicates();
    for (var i = 0; i < certicicates.length; i++) {
      var name = certicicates[i].name;
      if(name){
      this.drawText(name, x, yy, w, 'left');
      var text = certicicates[i].meta.certicicate;
      if(text)this.drawText(":"+text, x+180, yy, 630, 'left');
      yy += lineHeight;
      };
    }
  };
  
  Window_Status.prototype.drawMiscellaneous = function(y) {
    var x = 10;
    var w = 750;
    var lineHeight = this.lineHeight();
    var text = this._actor._miscellaneous1;
    if(text)this.drawText(text, x, y, w, 'left');
    y += lineHeight;
    var text = this._actor._miscellaneous2;
    if(text)this.drawText(text, x, y, w, 'left');
    y += lineHeight;
    var text = this._actor._miscellaneous3;
    if(text)this.drawText(text, x, y, w, 'left');
  };
  
  Game_Actor.prototype.certicicates = function() {
  var certificates = [];
  for (var i = 0; i < 100; i++) {
  if(this.isStateAffected(400+i))certificates.push($dataStates[400+i]);
  };
  return certificates;
  };
  
  Window_Status.prototype.drawEquipments = function(x, y) {
    var equips = this._actor.equips();
    var count = Math.min(equips.length, this.maxEquipmentLines());
    for (var i = 0; i < count; i++) {
        this.drawItemName(equips[i], x+30, y + this.lineHeight() * i);
    }
};
  
  Window_Status.prototype.drawHorzLine = function(y) {
    this.contents.paintOpacity = 48;
    this.contents.fillRect(0, y + horzLineHeight / 2 - 1,
                           this.contentsWidth(), 2, this.lineColor());
    this.contents.paintOpacity = 255;
    return y + horzLineHeight;
  };

  Window_Status.prototype.drawParamBackGround = function(x, y, width) {
    this.contents.paintOpacity = paramBackGroundOpacity;
    this.contents.fillRect(x, y + this.lineHeight() / 2, width,
                           this.lineHeight() / 2, this.gaugeBackColor());
    this.contents.paintOpacity = 255;
  };
 
    Game_Actor.prototype.ignoreEquipment = function(slotIndex) {
        this._ignoreEquipIndex = slotIndex;
    };

  Window_Status.prototype.drawParameters = function(x, y) {
    //this.drawParams(y);
    y2 = y
x -= 30
       if (VictorEngine.Parameters.DualWield.SeparatedAttack) {
            
            this._copy = JsonEx.makeDeepCopy(this._actor);
            for (var i = 0; i < 7; i++) {
                this.dualWieldParameters(x, y, i);
		y += 3
            }
            this._copy = null;
            this.resetFontSettings();
        } else {
            VictorEngine.DualWield.drawParameters.call(this, x, y)
        }
y = y2
this.drawXparams(y);
  };
  
	Window_Status.prototype.dualWieldParameters = function(x, y, i) {
        var dualwield = this._actor.isDualWield();
        var y2 = y + (this.lineHeight() - 4) * i;
        if (i < 2 && dualwield) {
            var index = this._actor.isLeftHanded() ? i === 0 ? 2 : 1 : i + 1;
            this._copy.ignoreEquipment(index);
            var actor = this._copy;
        } else {
            var actor = this._actor;
        }
        this.drawDualWieldParameters(x, y2, i, actor);
    }

    Window_Status.prototype.drawDualWieldParameters = function(x, y, i, actor) {
        var dualwield = this._actor.isDualWielding();
        var paramId = i === 0 ? 2 : i + 1;
        var right = VictorEngine.Parameters.DualWield.RightHandPrefix + ' ';
        var left = VictorEngine.Parameters.DualWield.LeftHandPrefix + ' ';
        var name = i === 0 ? right : i === 1 ? left : ''
		this.drawParamBackGround(x, y, 180);
        this.changeTextColor(this.systemColor());
        this.drawText(name + TextManager.param(paramId), x, y, 160);
        var iconIndex=721+paramId;
        this.drawIcon(iconIndex, x + 110, y);
        this.resetTextColor();
        if (dualwield || i !== 1) {
            this.drawText(actor.param(paramId), x + 120, y, 60, 'right');
        } else {
            this.drawText('---', x + 120, y, 60, 'right');
        }
	
    }



  Window_Status.prototype.drawParams = function(y) {
    var x = paramNameX;
    var w = paramNameWidth;
    var x2 = paramX;
    var w2 = paramWidth;
    var lineHeight = this.lineHeight();
    for (var i = 0; i < 6; i++) {
      var paramId = i + 2;
      if (TextManager.param(paramId)) {
      y -=5
        if (paramBackGround) this.drawParamBackGround(x, y, x2 + w2 - x);
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.param(paramId), x, y, w);
        this.resetTextColor();
        this.drawText(this._actor.param(paramId), x2, y, w2, 'right');
        y += lineHeight;
      }
    }
  };
  


  Window_Status.prototype.drawXparams = function(y) {
    var x = xparamNameX;
    var w = xparamNameWidth;
    var x2 = xparamX;
    var w2 = xparamWidth;
    var lineHeight = this.lineHeight();
    this.contents.fontSize = 20;
    for (var i = 0; i < 7; i++) {
      if (xparamText[i]) {
      y -= 3
        if (paramBackGround) this.drawParamBackGround(x, y, x2 + w2 - x);
        this.changeTextColor(this.systemColor());
        var iconId = this.xIcons(i)
        this.drawIcon(iconId, x-26, y)
        var name = this.xArray(i)
        this.drawText(name, x+7, y, w);
        this.resetTextColor();
        var value = this._actor.xparam(i) * 100;
        this.drawText(value.toFixed(xparamFixed), x2, y, w2, 'right');
        y += lineHeight+1;
      }
    }
  };

  Window_Status.prototype.drawSparams = function(y) {
    var x = sparamNameX;
    var w = sparamNameWidth;
    var x2 = sparamX;
    var w2 = sparamWidth;
    var lineHeight = this.lineHeight();
    y += 300
    yy = y
    for (var i = 7; i < 10; i++) {
      if (xparamText[i]) {
      y -= 3
        if (paramBackGround) this.drawParamBackGround(x, y, x2 + w2 - x);
        this.changeTextColor(this.systemColor());
        var iconId = this.xIcons(i)
        this.drawIcon(iconId, x-33, y)
        var name = this.xArray(i)
        this.drawText(name, x, y, w);
        this.resetTextColor();
        var value = this._actor.xparam(i) * 100;
        this.drawText(value.toFixed(xparamFixed) + '%', x2, y, w2, 'right');
        y += lineHeight+1;
      }
    }
    this.drawParamBackGround(x, y, x2 + w2 - x);
    this.changeTextColor(this.systemColor());
    if($gameSwitches.value(376)){
    this.drawText("通常攻撃速補", x-20, y, w+20);
    }else{
    this.drawText("Attack Speed", x-20, y, w+20);
    }
    this.resetTextColor();
    var value = this._actor.attackSpeed();
    this.drawText(value.toFixed(sparamFixed), x2, y, w2, 'right');
    y += lineHeight;
    x += 200
    x2 += 210
    y = yy
    for (var i = 0; i < 7; i++) {
      if (sparamText[i]) {
      if(i==4){
      x += 200
    x2 += 210
    y = yy
      }
      y -= 2
        if (paramBackGround) this.drawParamBackGround(x, y, x2 + w2 - x);
        this.changeTextColor(this.systemColor());
        var iconId = this.sIcons(i)
        this.drawIcon(iconId, x-33, y)
        var name = this.sArray(i)
        this.drawText(name, x, y, w);
        this.resetTextColor();
        var value = this._actor.sparam(i) * 100;
        this.drawText(value.toFixed(sparamFixed) + '%', x2, y, w2, 'right');
        y += lineHeight;
      }
    }
    y -= 2
    this.changeTextColor(this.systemColor());
     var iconId = this.sIcons(9)
      this.drawIcon(iconId, x-33, y)
      var name = this.sArray(9)
      this.drawText(name, x, y, w);
     this.resetTextColor();
     var value = this._actor.sparam(9) * 100;
     this.drawText(value.toFixed(sparamFixed) + '%', x2, y, w2, 'right');
     y += lineHeight;

  };
  
  Window_Status.prototype.drawElementResists = function(y) {
    var x = elementResistX;
    var w = elementResistWidth;
    var lineHeight = this.lineHeight();
    var yy = y;
    var text1 = '物理ﾀﾞﾒｰｼﾞ';
    var text2 = '魔法ﾀﾞﾒｰｼﾞ';
    var text3 = '威力';
    var text4 = '被ﾀﾞﾒｰｼﾞ';
    var eleNames = ['熱','冷','電','水','地','風','光','闇','刃','対空','打撃','対死','対植','対動','対甲','対無','対機','対人','対妖','対竜','対魔','対神']
    if(!$gameSwitches.value(376)){
     eleNames = ['heat','cold','elect','water','earth','wind','light','dark','blade','arrow','beat','undead','plant','animal','shell','inorga','machin','humand','beast','dragon','deamon','god']
     text1 = 'Phisical Damage';
     text2 = 'Magical Damage';
     text3 = 'Boost';
     text4 = 'Take';
    }
    if (pdrIconId > 0) {
      if (paramBackGround) this.drawParamBackGround(x, y, w);
      this.drawIcon(pdrIconId, x, y);
      var n = this._actor.pdr * 100;
      this.drawText(n.toFixed(resistFixed) + '%', x + Window_Base._iconWidth,
                    y, w - Window_Base._iconWidth, 'right');
                    this.contents.fontSize = 12;
      this.drawText(text1, x + Window_Base._iconWidth -70,
                    y+3, w - Window_Base._iconWidth, 'right');
                    this.contents.fontSize = 20;
      y += lineHeight;
    }
    if (mdrIconId > 0) {
      if (paramBackGround) this.drawParamBackGround(x, y, w);
      this.drawIcon(mdrIconId, x, y);
      var n = this._actor.mdr * 100;
      this.drawText(n.toFixed(resistFixed) + '%', x + Window_Base._iconWidth,
                    y, w - Window_Base._iconWidth, 'right');
                    this.contents.fontSize = 12;
      this.drawText(text2, x + Window_Base._iconWidth -70,
                    y+3, w - Window_Base._iconWidth, 'right');
                    this.contents.fontSize = 20;
      y += lineHeight;
    }
    this.contents.fontSize = 10;
    this.drawText(text3, x + Window_Base._iconWidth -100,
                    y+10, w - Window_Base._iconWidth, 'right');
    this.drawText(text4, x + Window_Base._iconWidth-20,
                    y+10, w - Window_Base._iconWidth, 'right');
    this.contents.fontSize = 20;
    y += lineHeight;
    ww=w-50
    for (var i = 0; i < elementResistIds.length; i++) {
    if(i==11){
    x+=225
    y=yy;
    }
      if (paramBackGround) this.drawParamBackGround(x, y, ww);
      var elementId = +elementResistIds[i];
      this.drawIcon(elementResistIconIds[i], x, y);
      var n = this._actor.elementRate(elementId) * 100;
      if(i<11){
      this.drawText(n.toFixed(resistFixed) + '%', x + Window_Base._iconWidth,
                    y, w - Window_Base._iconWidth, 'right');
      }
      n = this._actor.traitsPi(Game_BattlerBase.TRAIT_ELEMENT_BOOST, elementId) * 100;
      var atackElements = this._actor.attackElements();
      if(atackElements.indexOf(elementId) >= 0){
      this.changeTextColor("#ffd700")
      }
      this.drawText(n.toFixed(resistFixed) + '%', x + Window_Base._iconWidth -77,
                    y, w - Window_Base._iconWidth, 'right');
      this.resetTextColor();
      var ename = eleNames[i]
      this.contents.fontSize = 12;
      this.drawText(ename, x + Window_Base._iconWidth -142,
                    y+3, w - Window_Base._iconWidth, 'right');
      this.contents.fontSize = 20;
      y += lineHeight;
    }
  };
  

  
  Window_Status.prototype.drawStateResists = function(y) {
    var x = stateResistX-30;
    var w = stateResistWidth;
    var yy = y;
    var lineHeight = this.lineHeight();
    for (var i = 0; i < stateResistIds.length; i++) {
    if(i==14){
    x+=175
    y=yy;
    }
      if (paramBackGround) this.drawParamBackGround(x, y, w);
      var stateId = +stateResistIds[i];
      this.drawIcon($dataStates[stateId].iconIndex, x, y);
      this.contents.fontSize = 20;
      var n = this._actor.stateRate(stateId) * 100;
      if (this._actor.isStateResist(stateId)) n = 0;
      this.drawText(n.toFixed(resistFixed) + '%', x + Window_Base._iconWidth+30,
                    y, w - Window_Base._iconWidth, 'right');
            this.contents.fontSize = 12;
      this.drawText($dataStates[stateId].name, x + Window_Base._iconWidth -38,
                    y+3, w - Window_Base._iconWidth, 'right');
      y += lineHeight;
    }
  };
  
  Window_Status.prototype.changeParameterMode = function() {
    this._parameterMode = this._parameterMode + 1;
    if(this._parameterMode == 3) this._parameterMode = 0;
    this.refresh();
  };

  //-----------------------------------------------------------------------------
  // Scene_Status
  //

  var _Scene_Status_update = Scene_Status.prototype.update;
  Scene_Status.prototype.update = function() {
    _Scene_Status_update.call(this);
    if (Input.isTriggered('description') || TouchInput.isTriggered() ||
        (useOkButton && Input.isTriggered('ok'))) {
        if(TouchInput.y>500||TouchInput.y<50){
        return;
        }
      SoundManager.playOk();
      this._statusWindow.changeParameterMode();
      this._statusWindow.activate();
    }
  };

})();
