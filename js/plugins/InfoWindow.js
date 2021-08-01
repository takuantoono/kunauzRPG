//=============================================================================
// InfoWindow.js
//=============================================================================

/*:
 * @plugindesc 情報表示ウィンドウをメニュー画面に追加するプラグイン
 * @author Me
 *
 * @help 情報表示ウィンドウをメニュー画面上に追加します。
 *
 */

(function() {

	// マップ上にウィンドウ表示するよ宣言
	var Scene_map_start = Scene_Map.prototype.start;
	Scene_Map.prototype.start = function() {
	     
		Scene_map_start.call(this);
		this._InfoWindow3 = new Window_Info3();
	    this._InfoWindow = new Window_Info();
	    this._InfoWindow2 = new Window_Info2();
	    this._AutomapWindow = new Window_Automap();
	    this._CommentWindow = new Window_Comment();
	    this._SmallmapWindow = new Window_Smallmap();
	    this.addWindow(this._SmallmapWindow);
		this._SmallmapWindow.hide();
        this.addWindow(this._InfoWindow3);
		this._InfoWindow3.hide();
	    this.addWindow(this._InfoWindow);
	    this._InfoWindow.hide();
	    this.addWindow(this._InfoWindow2);
	    this._InfoWindow2.hide();
	    this.addWindow(this._AutomapWindow);
	    this._AutomapWindow.hide();
	    this.addWindow(this._CommentWindow);
	    this._CommentWindow.hide();
	};
 

	
var _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _Scene_Map_update.call(this);

if($gameSwitches.value(269)&&!$gameSwitches.value(825)){
	if($gameSwitches.value(912)){
		this._AutomapWindow.hide();
		this._SmallmapWindow.show();
        this._SmallmapWindow.setText();
	}else{
		this._SmallmapWindow.hide();
		this._AutomapWindow.show();
        this._AutomapWindow.setText();
	};
};

if($gameSwitches.value(270)||$gameSwitches.value(734)){
		this._AutomapWindow.hide();
		this._SmallmapWindow.hide();
		$gameSwitches.setValue(270,false)
}

if($gameSwitches.value(265)){
		this._InfoWindow3.show();
        this._InfoWindow3.setText();
}

if($gameSwitches.value(266)){
		this._InfoWindow3.hide();
}

if($gameSwitches.value(550)){
		this._CommentWindow.show();
		this._CommentWindow.setText();
}

if($gameSwitches.value(551)){
		this._CommentWindow.hide();
}

if($gameSwitches.value(267)){
	if($gameSwitches.value(68)){
		this._InfoWindow.hide();
	    this._InfoWindow2.show();
        this._InfoWindow2.setText();
	}else{
		this._InfoWindow2.hide();
	    this._InfoWindow.show();
        this._InfoWindow.setText();
	}
}

if($gameSwitches.value(268)){
	if($gameSwitches.value(68)){
	    this._InfoWindow2.hide();
	}else{
	    this._InfoWindow.hide();
	}
}



    };

	// ここからメニューウィンドウ作り始まります。
	function Window_Info() {
	    this.initialize.apply(this, arguments);
	}

	Window_Info.prototype = Object.create(Window_Base.prototype);
	Window_Info.prototype.constructor = Window_Info;
	Window_Info.prototype.initialize = function() {
		var x = 0;
		var y = 0;
	    var width = 720;
	    var height = this.lineHeight()+10;
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	};

	Window_Info.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};
	
	Window_Base.prototype.setLanguageWords = function() {
	if($gameSwitches.value(376)){
	    this._time_w = "　　　　視界";
	    this._am_w = "午前";
	    this._pm_w = "午後";
	    this._night_w = "夜　　：視界"
	    this._mnight_w = "深夜　：視界"
	    this._food_w = "食料"
	    this._stamina_w = "　元気"
	    this._formation_w = "隊列";
	    this._autobattle_w = "自動";
	    this._equip_w = "装備";
	    this._customize_w = "着脱/修理";
	    this._back_w = "戻る"
	    }else{
	    this._time_w = "　　　SIGHT";
	    this._am_w = "AM";
	    this._pm_w = "PM";
	    this._night_w = "NIGHT：SIGHT"
	    this._mnight_w = "MID.N：SIGHT"
	    this._food_w = "FOOD"
	    this._stamina_w = "STAMINA";
	    this._formation_w = "Formation";
	    this._autobattle_w = "AUTO";
	    this._equip_w = "Equip";
	    this._customize_w = "Customize/Repair";
	    this._back_w = "Back"
	}
	}
	
	
	// ウィンドウに載せる内容
	Window_Info.prototype.refresh = function() {
	    this.contents.clear();
	    this.setLanguageWords();
if($gameVariables.value(493)>=1){
this.drawIcon(79, 0, 0);
}
this.changeTextColor(this.textColor(16));
if(!$gameSwitches.value(8)){
this.drawText(this._time_w ,35,0);
this.resetTextColor();
this.drawText($gameVariables.value(428) ,155,1);
}
else{
if($gameVariables.value(430)==0){
this.drawText(this._am_w ,35,0);
}
if($gameVariables.value(430)==1){
this.drawText(this._pm_w ,35,0);
}
if($gameVariables.value(430)==2){
this.drawText(this._night_w ,35,0);
this.resetTextColor();
this.drawText($gameVariables.value(428) ,165,1);
}
if($gameVariables.value(430)==3){
this.drawText(this._mnight_w ,35,0);
this.resetTextColor();
this.drawText($gameVariables.value(428) ,165,1);
}
}


if($gameVariables.value(15)<=0){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
		

		this.drawText(this._food_w,210, 0);

if($gameVariables.value(15)>=$gameVariables.value(423)){
this.changeTextColor(this.textColor(3));
}
else{
this.resetTextColor();
}
		this.drawText($gameVariables.value(15) ,270,0);
if($gameVariables.value(15)<=0){
this.drawIcon(13, 310, 0);
}

if($gameVariables.value(16)<=0){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}

	  	this.drawText(this._stamina_w,370, 0);
if($gameVariables.value(16)>=$gameVariables.value(422)){
this.changeTextColor(this.textColor(3));
}
else{
this.resetTextColor();
}
		this.drawText($gameVariables.value(16) ,450,0);
if($gameVariables.value(16)<=0){
this.drawIcon(12, 470, 0);
}



if($gameSwitches.value(32)){
if($gameSwitches.value(238)){
if($gameVariables.value(17)>=$gameVariables.value(253)){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
}else{
if($gameVariables.value(17)<=10){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
}

	};
	
}


	// フォントサイズ
	Window_Info.prototype.standardFontSize = function() {
    	return 20;
    };
	// ウィンドウの透明度
	Window_Info.prototype.standardBackOpacity = function() {
    	return 255;
	};
    // ウィンドウの余白
	Window_Info.prototype.standardPadding = function() {
    	return 6;
	};
	// ウィンドウの色調
	Window_Info.prototype.updateTone = function() {
    	this.setTone(64, 0, 128);
	};
	




function Window_Info2() {
	    this.initialize.apply(this, arguments);
	}

	Window_Info2.prototype = Object.create(Window_Base.prototype);
	Window_Info2.prototype.constructor = Window_Info2;
	Window_Info2.prototype.initialize = function() {
		var x = 0;
		var y = 0;
	    var width = 420;
	    var height = this.lineHeight()*2+6;
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	};

	Window_Info2.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};
	
	// ウィンドウに載せる内容
	Window_Info2.prototype.refresh = function() {
	    this.contents.clear();
	    this.setLanguageWords();
if($gameVariables.value(493)>=1){
this.drawIcon(79, 0, 0);

}
this.changeTextColor(this.textColor(16));
if(!$gameSwitches.value(8)){
this.drawText(this._time_w ,35,0);
this.resetTextColor();
this.drawText($gameVariables.value(428) ,155,1);
}
else{
if($gameVariables.value(430)==0){
this.drawText(this._am_w ,35,0);
}
if($gameVariables.value(430)==1){
this.drawText(this._pm_w ,35,0);
}
if($gameVariables.value(430)==2){
this.drawText(this._night_w ,35,0);
this.resetTextColor();
this.drawText($gameVariables.value(428) ,155,1);
}
if($gameVariables.value(430)==3){
this.drawText(this._mnight_w ,35,0);
this.resetTextColor();
this.drawText($gameVariables.value(428) ,155,1);
}
}


if($gameVariables.value(15)<=0){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
		

		this.drawText(this._food_w,200, 0);

if($gameVariables.value(15)>=$gameVariables.value(423)){
this.changeTextColor(this.textColor(3));
}
else{
this.resetTextColor();
}
		this.drawText($gameVariables.value(15) ,270,0);
if($gameVariables.value(15)<=0){
this.drawIcon(13, 310, 0);
}

if($gameVariables.value(16)<=0){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}

	  	this.drawText(this._stamina_w,30, 30);
if($gameVariables.value(16)>=$gameVariables.value(422)){
this.changeTextColor(this.textColor(3));
}
else{
this.resetTextColor();
}
		this.drawText($gameVariables.value(16) ,130,30);
if($gameVariables.value(16)<=0){
this.drawIcon(12, 160, 30);
}

if($gameSwitches.value(32)){
if($gameSwitches.value(238)){
if($gameVariables.value(17)>=$gameVariables.value(253)){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
}else{
if($gameVariables.value(17)<=10){
this.changeTextColor(this.textColor(10));
}
else{
this.changeTextColor(this.textColor(16));
}
}

	};
}


	// フォントサイズ
	Window_Info2.prototype.standardFontSize = function() {
    	return 20;
    };
	// ウィンドウの透明度
	Window_Info2.prototype.standardBackOpacity = function() {
    	return 255;
	};
    // ウィンドウの余白
	Window_Info2.prototype.standardPadding = function() {
    	return 6;
	};
	// ウィンドウの色調
	Window_Info2.prototype.updateTone = function() {
    	this.setTone(64, 0, 128);
	};

Window_Base.prototype.setTiaojian = function(rid, ppap) {
    this._hasen = false;
	if($dataMap.events[ppap] && $dataMap.events[ppap].meta.nowall){
    return true;
    }
	if($dataMap.events[ppap] && rid == 76 && $gameSelfSwitches.value([$gameMap._mapId, ppap, "B"])){
    return true;
    }
    if($dataMap.events[ppap] && rid == 74 && $gameSelfSwitches.value([$gameMap._mapId, ppap, "B"])){
    return true;
    }
    if($dataMap.events[ppap] && rid == 66 && $gameSelfSwitches.value([$gameMap._mapId, ppap, "B"])){
    return true;
    }
    if($dataMap.events[ppap] && rid == 72 && $gameSelfSwitches.value([$gameMap._mapId, ppap, "B"])){
    return true;
    }
    if(rid == 60 || rid == 69 || rid == 68 || rid == 70 || rid == 81 || rid == 57){
    this._hasen = true;
    return true;
    }
    return false;
};

Window_Base.prototype.setSmallIcon = function(index, x, y) {
	if($gameSwitches.value(912)){
	var iconIndex = index;
    var bitmap = ImageManager.loadSystem('IconSet');
    var pw = Window_Base._iconWidth;
    var ph = Window_Base._iconHeight;
    var sx = iconIndex % 16 * pw;
    var sy = Math.floor(iconIndex / 16) * ph;
    var dw = 12;
    var dh = 12;
    var dx = x;
    var dy = y;
    this.contents._context.imageSmoothingEnabled = false;
    this.contents.blt(bitmap, sx, sy, pw, ph, dx, dy, dw, dh);
    this.contents._context.imageSmoothingEnabled = true;
	}else{
    if($gameSwitches.value(627)){
    var iconIndex = index;
    var bitmap = ImageManager.loadSystem('IconSet');
    var pw = Window_Base._iconWidth;
    var ph = Window_Base._iconHeight;
    var sx = iconIndex % 16 * pw;
    var sy = Math.floor(iconIndex / 16) * ph;
    var dw = 6;
    var dh = 6;
    var dx = x;
    var dy = y;
    this.contents._context.imageSmoothingEnabled = false;
    this.contents.blt(bitmap, sx, sy, pw, ph, dx, dy, dw, dh);
    this.contents._context.imageSmoothingEnabled = true;
    }else{
    this.drawIcon(index, x, y);
    };
    };
};


Window_Base.prototype.drawingMap = function(script) {
this.contents.clear();
var x = 0;
var y = 0;
var id = 0;
var idd = 0;
var sid = 0;
var tid = 0;
var rid = 0;
var sta = 0;
var ms = 400;
var xxx = 0;
var yyy = 0;
var twf = 24;
var ttt = 3;



if($gameSwitches.value(627)){
ms = 10100;
var twf = 4;
var ttt = 0;
}else{
if($gameSwitches.value(626)){
if(small){
xp = $gamePlayer.x - 6;
yp = $gamePlayer.y - 6;
}else{
xp = $gamePlayer.x - 10;
yp = $gamePlayer.y - 10;
}
if(xp<0) xp = 0;
if(yp<0) yp = 0;
if(xp>96) xp = 96;
if(yp>96) yp = 96;
sta = xp + yp * 100
ms=2000;
}else{
if(small){
xp = $gamePlayer.x - 6;
yp = $gamePlayer.y - 6;
if($gameSwitches.value(169)){
xp -= 6;
yp -= 7;
};
if(xp<0) xp = 0;
if(yp<0) yp = 0;
if(xp>17) xp = 17;
if(yp>17) yp = 17;
sta = xp + yp * 20;
};
};
};


for (var i = 0; i < ms; i++) {
if($gameVariables.value(2)[sta + i]=="Z"){
if($gameSwitches.value(627)){
x = i % 100;
y = i / 100;
x = Math.floor(x);
y = Math.floor(y);
xx = x * 4 + 50;
yy = y * 4 + 50;
xxx = x;
yyy = y;
}else{
if($gameSwitches.value(626)){
if(small){
var twf = 8;
var ttt = 0;
xxx = (sta + i) % 100;
yyy = (sta + i) / 100;
xxx = Math.floor(xxx);
yyy = Math.floor(yyy);
x = xxx - xp;
y = yyy - yp;
xx = x * 9;
yy = y * 9;
}else{
xxx = (sta + i) % 100;
yyy = (sta + i) / 100;
xxx = Math.floor(xxx);
yyy = Math.floor(yyy);
x = xxx - xp;
y = yyy - yp;
xx = x * 24;
yy = y * 24;
};
}else{
if(small){
var twf = 8;
var ttt = 0;
xxx = (sta + i) % 20;
yyy = (sta + i) / 20;
xxx = Math.floor(xxx);
yyy = Math.floor(yyy);
x = xxx - xp;
y = yyy - yp;
xx = x * 9;
yy = y * 9;
}else{
x = i % 20;
y = i / 20;
x = Math.floor(x);
y = Math.floor(y);
xx = x * 24;
yy = y * 24;
xxx = x;
yyy = y;
};
};
};

if($gameSwitches.value(169)){
xxx += 6;
yyy += 7;
};
if(!$gameSwitches.value(626)&&$gameSwitches.value(421)){
xxx += 1;
yyy += 1;
};
id = $gameMap.tileId(xxx, yyy, 0);
rid = $gameMap.regionId(xxx, yyy);
var ppap = $gameMap.eventIdXy(xxx, yyy);
if($dataMap.events[ppap]&&$dataMap.events[ppap].meta.muri) {
this.drawSmallIcon(335, xx + ttt, yy + ttt);
}
if(this.tiaojian(rid, ppap)){
if(this._hasen){
if(id == 1569) this.drawSmallIcon(944, xx + ttt, yy + ttt);
if(id == 1577) this.drawSmallIcon(945, xx + ttt, yy + ttt);
if(id == 1570) this.drawSmallIcon(946, xx + ttt, yy + ttt);
if(id == 1578) this.drawSmallIcon(947, xx + ttt, yy + ttt);
}else{
this.drawSmallIcon(335, xx + ttt, yy + ttt);
}
}else{
if(!$dataMap.events[ppap]) {
if(id == 1569) this.drawSmallIcon(320, xx + ttt, yy + ttt);
if(id == 1577) this.drawSmallIcon(321, xx + ttt, yy + ttt);
if(id == 1570) this.drawSmallIcon(322, xx + ttt, yy + ttt);
if(id == 1578) this.drawSmallIcon(323, xx + ttt, yy + ttt);
}else{
if(id == 1569) {
if($dataMap.events[ppap].meta.blue) {
this.drawSmallIcon(337, xx + ttt, yy + ttt);
}else{
if($gameSelfSwitches.value([$gameMap._mapId, ppap, "SB"])) {
this.drawSmallIcon(914, xx + ttt, yy + ttt);
}else{
this.drawSmallIcon(320, xx + ttt, yy + ttt);
}
}
}
if(id == 1577) {
if($dataMap.events[ppap].meta.blue) {
this.drawSmallIcon(338, xx + ttt, yy + ttt);
}else{
if($gameSelfSwitches.value([$gameMap._mapId, ppap, "SB"])) {
this.drawSmallIcon(915, xx + ttt, yy + ttt);
}else{
this.drawSmallIcon(321, xx + ttt, yy + ttt);
}
}
}
if(id == 1570) {
if($dataMap.events[ppap].meta.blue) {
this.drawSmallIcon(339, xx + ttt, yy + ttt);
}else{
if($gameSelfSwitches.value([$gameMap._mapId, ppap, "SB"])) {
this.drawSmallIcon(916, xx + ttt, yy + ttt);
}else{
this.drawSmallIcon(322, xx + ttt, yy + ttt);
}
}
}
if(id == 1578) {
if($dataMap.events[ppap].meta.blue) {
this.drawSmallIcon(340, xx + ttt, yy + ttt);
}else{
if($gameSelfSwitches.value([$gameMap._mapId, ppap, "SB"])) {
this.drawSmallIcon(917, xx + ttt, yy + ttt);
}else{
this.drawSmallIcon(323, xx + ttt, yy + ttt);
}
}
}

}

if(id == 1579) this.drawSmallIcon(324, xx + ttt, yy + ttt);
if(id == 1571) this.drawSmallIcon(325, xx + ttt, yy + ttt);
if(id == 1580){
if($dataMap.events[ppap] && $dataMap.events[ppap].meta.novwall) {
 this.drawSmallIcon(322, xx + ttt, yy + ttt);
}else{
 this.drawSmallIcon(326, xx + ttt, yy + ttt);
 }
 }
if(id == 1581) this.drawSmallIcon(327, xx + ttt, yy + ttt);
if(id == 1583){
if($dataMap.events[ppap] && $dataMap.events[ppap].meta.novwall) {
 this.drawSmallIcon(322, xx + ttt, yy + ttt);
}else{
 this.drawSmallIcon(328, xx + ttt, yy + ttt);
 }
} 
if(id == 1582) this.drawSmallIcon(329, xx + ttt, yy + ttt);
if(id == 1584) this.drawSmallIcon(330, xx + ttt, yy + ttt);
if(id == 1585) this.drawSmallIcon(331, xx + ttt, yy + ttt);
if(id == 1586) this.drawSmallIcon(332, xx + ttt, yy + ttt);
if(id == 1587) this.drawSmallIcon(333, xx + ttt, yy + ttt);
if(id == 1576) this.drawSmallIcon(334, xx + ttt, yy + ttt);
if(id == 1552) this.drawSmallIcon(335, xx + ttt, yy + ttt);
};

if($gameSwitches.value(97)){
tid = $gameMap.terrainTag(xxx, yyy);
if(tid == 3) this.drawSmallIcon(335, xx + ttt, yy + ttt);
tid = $gameMap.terrainTag(xxx-1, yyy);
if(tid == 1) this.drawSmallIcon(346, xx + ttt, yy + ttt);
tid = $gameMap.terrainTag(xxx+1, yyy);
if(tid == 1) this.drawSmallIcon(346, xx + twf, yy + ttt);
tid = $gameMap.terrainTag(xxx, yyy-1);
if(tid == 1) this.drawSmallIcon(345, xx + ttt, yy + ttt);
tid = $gameMap.terrainTag(xxx, yyy+1);
if(tid == 1) this.drawSmallIcon(345, xx + ttt, yy + twf);

tid = $gameMap.eventIdXy(xxx-1, yyy);
};


if($dataMap.events[ppap]){
if($dataMap.events[ppap].meta.aka && $gameSelfSwitches.value([$gameMap._mapId, ppap, "A"]) && !$gameSelfSwitches.value([$gameMap._mapId, ppap, "B"])){
 this.drawSmallIcon(348, xx + ttt, yy + ttt);
}
}

if($dataMap.events[ppap]){
if($dataMap.events[ppap].meta.ent && $gameSelfSwitches.value([$gameMap._mapId, ppap, "E"])){
     this.drawSmallIcon(351, xx + ttt, yy + ttt);
    }
if($dataMap.events[ppap].meta.exit){
     this.drawSmallIcon(336, xx + ttt, yy + ttt);
    }
    if($dataMap.events[ppap].meta.exitb&&$gameVariables.value(293)<15){
     this.drawSmallIcon(336, xx + ttt, yy + ttt);
    }
if($dataMap.events[ppap].meta.hate && $gameSelfSwitches.value([$gameMap._mapId, ppap, "E"]) && !$gameSelfSwitches.value([$gameMap._mapId, ppap, "B"])){
     this.drawSmallIcon(823, xx + ttt, yy + ttt);
    }
}


idd = $gameMap.tileId(xxx-1, yyy, 0)
rid = $gameMap.regionId(xxx-1, yyy);
ppap = $gameMap.eventIdXy(xxx-1, yyy);
if(this.tiaojian(rid, ppap)){
if($dataMap.events[ppap] && $dataMap.events[ppap].meta.bem){
this.drawSmallIcon(346, xx + ttt-1, yy + ttt);
}else{
if(this._hasen&&idd==1578)this.drawSmallIcon(346, xx + ttt, yy + ttt);
}
}else{
if(idd==1578 || idd==1579 || idd==1581 || idd==1582 ||
 idd==1584 || idd==1585 || idd==1587 || idd==1576) {
 if($dataMap.events[ppap] && $dataMap.events[ppap].meta.blue) {
 this.drawSmallIcon(913, xx + ttt, yy + ttt);
 }else{
 if($dataMap.events[ppap] && $dataMap.events[ppap].meta.novwall) {
 }else{
 this.drawSmallIcon(346, xx + ttt, yy + ttt);
 }
 }}
}
idd = $gameMap.tileId(xxx+1, yyy, 0)
rid = $gameMap.regionId(xxx+1, yyy);
ppap = $gameMap.eventIdXy(xxx+1, yyy);
if(this.tiaojian(rid, ppap)){
if(this._hasen&&idd==1570)this.drawSmallIcon(686, xx + twf, yy + ttt);
}else{
if(idd==1570 || idd==1579 || idd==1580 || idd==1583 ||
 idd==1584 || idd==1585 || idd==1586 || idd==1576) {
 if($dataMap.events[ppap] && $dataMap.events[ppap].meta.blue) {
 this.drawSmallIcon(913, xx + twf, yy + ttt);
 }else{
 if($dataMap.events[ppap] && $dataMap.events[ppap].meta.novwall) {
 }else{
 this.drawSmallIcon(346, xx + twf, yy + ttt);
 }
 }}
}
idd = $gameMap.tileId(xxx, yyy-1, 0)
rid = $gameMap.regionId(xxx, yyy-1);
ppap = $gameMap.eventIdXy(xxx, yyy-1);
if(this.tiaojian(rid, ppap)){
if($dataMap.events[ppap] && $dataMap.events[ppap].meta.bem){
if(this._hasen&&idd==1577)this.drawSmallIcon(345, xx + ttt, yy + ttt);
}else{
if(this._hasen&&idd==1577)this.drawSmallIcon(685, xx + ttt, yy + ttt);
}
}else{
if(idd==1577 || idd==1571 || idd==1582 || idd==1583 ||
 idd==1585 || idd==1586 || idd==1587 || idd==1576) {
 if($dataMap.events[ppap] && $dataMap.events[ppap].meta.blue) {
 this.drawSmallIcon(912, xx + ttt, yy + ttt);
 }else{
 if($dataMap.events[ppap] && $dataMap.events[ppap].meta.novwall) {
 }else{
 this.drawSmallIcon(345, xx + ttt, yy + ttt);
 }
 }}
}
idd = $gameMap.tileId(xxx, yyy+1, 0)
rid = $gameMap.regionId(xxx, yyy+1);
ppap = $gameMap.eventIdXy(xxx, yyy+1);
if(this.tiaojian(rid, ppap)){
if(this._hasen&&idd==1569)this.drawSmallIcon(345, xx + ttt, yy + twf);
}else{
if(idd==1569 || idd==1571 || idd==1580 || idd==1581 ||
 idd==1584 || idd==1586 || idd==1587 || idd==1576) {
 if($dataMap.events[ppap] && $dataMap.events[ppap].meta.blue) {
 this.drawSmallIcon(912, xx + ttt, yy + twf);
 }else{
 if($dataMap.events[ppap] && $dataMap.events[ppap].meta.novwall) {
 }else{
 this.drawSmallIcon(345, xx + ttt, yy + twf);
 }
 }}
 }
 
 
rid = $gameMap.regionId(xxx, yyy);

var ppap2 = $gameMap.eventIdXy(xxx, yyy);
if(xxx == $gamePlayer.x && yyy == $gamePlayer.y){
if($gamePlayer._direction == 8)this.drawSmallIcon(341, xx + ttt, yy + ttt);
if($gamePlayer._direction == 2)this.drawSmallIcon(342, xx + ttt, yy + ttt);
if($gamePlayer._direction == 4)this.drawSmallIcon(343, xx + ttt, yy + ttt);
if($gamePlayer._direction == 6)this.drawSmallIcon(344, xx + ttt, yy + ttt);
};
};
};
};



function Window_Smallmap() {
	    this.initialize.apply(this, arguments);
	}

	Window_Smallmap.prototype = Object.create(Window_Base.prototype);
	Window_Smallmap.prototype.constructor = Window_Smallmap;
	Window_Smallmap.prototype.initialize = function() {
		var x = 0;
		var y = 400;
	    var width = 120;
	    var height = 120;
	    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
	    this.maxItem = 50;
	    this.masCol = 50;
	};

	Window_Smallmap.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
		$gameSwitches.setValue(269,false)
	};
	
	Window_Smallmap.prototype.tiaojian = function(rid, ppap) {
		return this.setTiaojian(rid, ppap);
	};
	
	
	Window_Smallmap.prototype.drawSmallIcon = function(index, x, y) {
		this.setSmallIcon(index, x, y);
	};
	
	// ウィンドウに載せる内容
	Window_Smallmap.prototype.refresh = function() {
		this.drawingMap(small=true);
	}
	// フォントサイズ
	Window_Smallmap.prototype.standardFontSize = function() {
    	return 12;
    };
	// ウィンドウの透明度
	Window_Smallmap.prototype.standardBackOpacity = function() {
    	return 255;
	};
    // ウィンドウの余白
	Window_Smallmap.prototype.standardPadding = function() {
    	return 6;
	};
	// ウィンドウの色調
	Window_Smallmap.prototype.updateTone = function() {
    	this.setTone(64, 0, 128);
	};

function Window_Automap() {
	    this.initialize.apply(this, arguments);
	}

	Window_Automap.prototype = Object.create(Window_Base.prototype);
	Window_Automap.prototype.constructor = Window_Automap;
	Window_Automap.prototype.initialize = function() {
		var x = 150;
		var y = 50;
	    var width = 500;
	    var height = this.lineHeight()*14-6;
	    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
	    this.maxItem = 50;
	    this.masCol = 50
	};

	Window_Automap.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
		$gameSwitches.setValue(269,false)
	};
	
	Window_Automap.prototype.tiaojian = function(rid, ppap) {
		return this.setTiaojian(rid, ppap);
	};
	
	
	Window_Automap.prototype.drawSmallIcon = function(index, x, y) {
		this.setSmallIcon(index, x, y);
	};
	
	// ウィンドウに載せる内容
	Window_Automap.prototype.refresh = function() {
		this.drawingMap(small=false);
	}
	// フォントサイズ
	Window_Automap.prototype.standardFontSize = function() {
    	return 12;
    };
	// ウィンドウの透明度
	Window_Automap.prototype.standardBackOpacity = function() {
    	return 50;
	};
    // ウィンドウの余白
	Window_Automap.prototype.standardPadding = function() {
	return 6;
	};
	// ウィンドウの色調
	Window_Automap.prototype.updateTone = function() {
    	this.setTone(64, 0, 128);
	};
	



function Window_Info3() {
	    this.initialize.apply(this, arguments);
	}

	Window_Info3.prototype = Object.create(Window_Base.prototype);
	Window_Info3.prototype.constructor = Window_Info3;
	Window_Info3.prototype.initialize = function() {
		var x = 0;
		var y = 82;
	    var width = 440;
	    if($gameVariables.value(705)==5){
	    	var height = 310;
	    }else{
	    	var height = 250;
	    }
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	};

	Window_Info3.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};
	
	// ウィンドウに載せる内容
	Window_Info3.prototype.refresh = function() {
	    this.contents.clear();
	    var actor = $gameParty.members()[0];
	    this.drawActorSuperSimpleStatus(actor, 0,0,200);
	    if($gameVariables.value(705)>=2){
	    var actor = $gameParty.members()[1];
	    this.drawActorSuperSimpleStatus(actor, 0,60,200);
	    }
	    if($gameVariables.value(705)>=3){
	    var actor = $gameParty.members()[2];
	    this.drawActorSuperSimpleStatus(actor, 0,120,200);
	    }
	    if($gameVariables.value(705)>=4){
	    var actor = $gameParty.members()[3];
	    this.drawActorSuperSimpleStatus(actor, 0,180,200);
	    }
	    if($gameVariables.value(705)>=5){
	    	var actor = $gameParty.members()[4];
	    	this.drawActorSuperSimpleStatus(actor, 0,240,200);
	    }
}


	// フォントサイズ
	Window_Info3.prototype.standardFontSize = function() {
    	return 12;
    };
	// ウィンドウの透明度
	Window_Info3.prototype.standardBackOpacity = function() {
    	return 155;
	};
    // ウィンドウの余白
	Window_Info3.prototype.standardPadding = function() {
    	return 6;
	};
	// ウィンドウの色調
	Window_Info3.prototype.updateTone = function() {
    	this.setTone(64, 128, 128);
	};

Window_Base.prototype.drawActorSuperSimpleStatus = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
    var x2 = x + 280;
    var x3 = x + 180;
    var width2 = 70;
    this.drawActorName(actor, x3, y);
    
    this.drawActorIcons(actor, x3+180, y + 10);
    this.drawActorClass(actor, x2, y);
    this.drawActorHp(actor, x3, y + lineHeight / 2 , width2);
    this.drawActorMp(actor, x3 + 100, y + lineHeight / 2, width2);
    this.drawActorFace3(actor, 1, y, 144, 58);
    
};


function Window_Comment() {
	    this.initialize.apply(this, arguments);
	}

	Window_Comment.prototype = Object.create(Window_Base.prototype);
	Window_Comment.prototype.constructor = Window_Comment;
	Window_Comment.prototype.initialize = function() {
		var x = 30;
		var y = 152;
	    var width = 730;
	    var height = 60;
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	};
	

	Window_Comment.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};
	
	// ウィンドウに載せる内容
	Window_Comment.prototype.refresh = function() {
	    this.contents.clear();
	    if($gameVariables.value(310) <= $gameVariables.value(705)){
	    var actor = $gameActors.actor($gameVariables.value(310));
	    this.drawActorFace(actor, 1, 0, 144, 58);
	    }
	    var text = $gameVariables.value(308);
	    this.drawText(text,150, 0);
	    if($gameVariables.value(310) <= $gameVariables.value(705)){
	    var num = $gameVariables.value(311);
	    if(num == 1) this.drawIcon(717, 670, 0);
	    if(num == 2) this.drawIcon(717, 670, 0);
	    if(num == 3) this.drawIcon(718, 670, 0);
	    if(num == 4) this.drawIcon(362, 670, 0);
	    if(num == 5) {
	    this.drawIcon(362, 670, 0);
	    this.drawIcon(362, 685, 0);
	    }
	    }
}


	// フォントサイズ
	Window_Comment.prototype.standardFontSize = function() {
    	return 22;
    };
	// ウィンドウの透明度
	Window_Comment.prototype.standardBackOpacity = function() {
    	return 50;
	};
    // ウィンドウの余白
	Window_Comment.prototype.standardPadding = function() {
    	return 6;
	};
	// ウィンドウの色調
	Window_Comment.prototype.updateTone = function() {
    	this.setTone(64, 128, 128);
	};



})();