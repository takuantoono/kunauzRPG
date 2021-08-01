//=============================================================================
// UCHU_MobileOperation.js
// Version: 1.1.4
//----------------------------------------------------------------------------
// Copyright (c) 2015 uchuzine
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
@plugindesc
スマホ操作用プラグイン。横持ち/縦持ちに対応した仮想ボタン、
タッチ操作の方法を追加拡張し、スマホプレイを快適にします。
@author
uchuzine
@help
UCHU_MobileOperation (Version: 1.1.4)
------------------------------------------------------------------------------
■更新履歴
------------------------------------------------------------------------------
1.1.4 2015/12/04  画面下部メッセージ表示後に下記の問題が再発する不具合を修正
1.1.3 2015/11/29  画面左上にボタンを設置した際にボタンが押せない不具合を修正
1.1.2 2015/11/24  パラメータを変更できない不具合を修正
1.1.1 2015/11/23  PC上での仮想ボタン操作時の不具合を修正
1.1.0 2015/11/17  「AnalogMove.js」使用時のアナログ移動に対応。下記説明を参照
1.0.0 2015/11/15 プラグイン公開

------------------------------------------------------------------------------
■特徴
------------------------------------------------------------------------------
プラグイン作成にあたり、por Masked氏のMBS_MobileDirPad.jsを参考にしています。

○本プラグインの特徴
・ゲーム画面外(黒帯部分)にボタンを設置するため、プレイ画面に干渉しにくい
・パッドやボタンは個別に表示／非表示の切り替えが可能
・ボタンの基準点を画面四隅のいずれかに指定でき、縦持ち操作に対応可能
・方向パッドの操作性を重視し、タッチ判定領域、斜め方向の感度など調整可能
　（詳細は下記の説明を参照）
・方向パッドによる移動と、デフォルトの目的地タッチによる移動を併用可能
・特定のタッチ操作、ジェスチャーによるボタン操作の拡張

これらを利用し、

・仮想十字キーは使わずに、MENUボタンと決定ボタンのみ使用
・ボタンは全て使用せず、画面長押しでオート連打、画面外タッチでメニュー呼出

といった使い方もできます。

------------------------------------------------------------------------------
■一部のパラメータの説明
------------------------------------------------------------------------------
▼ DPad OpelationRange（方向パッド作動領域）‥‥
方向パッド画像の表示サイズに対する、タッチ判定領域の大きさを倍率で指定します。
数値を上げても見た目は変わりませんが、画像の中心から外側に判定が広がります。
例）
「1」のとき‥‥画像のサイズがタッチ判定の大きさになる（画像の内接円の中のみ）
「2」のとき‥‥タッチ判定の大きさが縦横２倍になる（画像の外側に50%ずつ広がる）

数値を上げることで操作ミスを防ぎ、操作性を上げることができますが
上げ過ぎて他のボタン等に重なってしまわないように注意してください。

▼ DPad DiagonalRange（方向パッドの斜め方向範囲）‥‥
方向の判定は、パッド画像の対角線を境界線にして上下左右に分けていますが、
この数値を上げると、対角線上をタッチしたときにその両側の方向がオンになり
（「右」＋「上」など）、８方向判定ができるようになります。
８方向移動のプラグインを使用している時などは、この数値を設定してください。

数値の大きさが斜め判定角度の広さとなり、「0～1」の範囲で指定します
例)
「0」のとき‥‥上下左右の４方向のみ入力可能。
「0.5」のとき‥均等８分割の８方向入力が可能。
「1」のとき‥‥「右上」「右下」「左上」「左下」の４方向入力。

数値を上げるほど、「上を押すつもりが右上になっていた」等のミスが起こるため
４方向で問題ない場合は、「0」を指定すると操作ミスが最小限になります。


（var1.1.0より追加）
▼ AnalogMove（アナログ移動）‥‥
サンシロ様のプラグイン「AnalogMove.js」使用時に、アナログ移動を可能にします。
方向パッドの中心からタッチ位置の距離と角度で、ドット単位の移動ができます。
使用の際はプラグインマネージャーで、先に「AnalogMove.js」を読み込み
こちらのパラメータ「AnalogMove」をtrueに変えてください。
※アナログ移動使用中は、「DPad DiagonalRange」の数値は無視されます。

▼ AnalogSensitivity（入力感度）‥‥
「AnalogSensitivity」は入力感度で、数値を上げるほど
最大値（最大スピード）まで入力するのに必要な指の動きが小さくなります。
例)
「1」のとき‥‥入力判定の外端で最大値に。大きな指の移動が必要。
「DPad OpelationRange」と同じとき‥‥方向パッド画像の外端で最大値に。

DPad OpelationRangeよりも大きめの数値を指定すると、入力が楽になります。
（DPad OpelationRangeの初期値1.3に対し、AnalogSensitivityの初期値は1.8です)

------------------------------------------------------------------------------
■パッド、ボタン画像について
------------------------------------------------------------------------------
・画像ファイルは任意のサイズで作成可能ですが、縦横比1:1で作成してください。
　表示の際は、「DPad Size」で指定したpixel数にリサイズされます。
　ボタン画像も同様です。
・方向パッドのグラフィックの中心が画像の中心になるようにしてください。



@param ---PC Option---
@default

@param PC BtnDisplay
@desc PCで実行時も、仮想ボタンを表示する:true しない:false
初期値:false
@default false

@param PC TouchExtend
@desc PCで実行時も、タッチの操作拡張を有効にする:true しない:false
初期値:true;
@default true

@param ---File Path---
@default

@param DPad Image
@desc 方向パッド画像のファイルパス
@default ./img/system/DirPad.png

@param ActionBtn Image
@desc 決定ボタン画像のファイルパス
@default ./img/system/ActionButton.png

@param CancelBtn Image
@desc キャンセル（メニュー）ボタン画像のファイルパス
@default ./img/system/CancelButton.png

@param ---Button Customize---
@default

@param Button Opacity
@desc ボタンの不透明度(0～1) 初期値:0.7
@default 0.7

@param Vertical BtnZoom
@desc スマホ縦持ちで表示したときの全ボタンの拡大率
初期値:1.7
@default 1.7

@param Tablet BtnZoom
@desc タブレット横持ちで表示したときの全ボタンの拡大率
初期値:0.8
@default 0.8

@param TabVertical BtnZoom
@desc タブレット縦持ちで表示したときの全ボタンの拡大率
初期値:1.1
@default 1.1

@param HideButton OnMessage
@desc 画面下部にメッセージ表示時、仮想ボタンの表示順位をゲーム画面の下に下げる:true そのまま:false
初期値:true
@default true

@param DPad Visible
@desc 方向パッドを表示する：true しない:false  初期値:true
@default true

@param DPad Size
@desc 方向パッドの大きさ(px）。 初期値:200
@default 200

@param DPad Margin
@desc 方向パッド画像の位置。画面端からの隙間の大きさで指定。
 (左からの幅; 下からの幅) 初期値:10; 10
@default 10; 10

@param DPad Orientation
@desc 方向パッドの基準位置を、左下以外に変えたい場合。
left か right; top か bottom で指定。 初期値:left; bottom
@default left; bottom

@param DPad OpelationRange
@desc 方向パッド画像に対する、タッチの作動範囲(倍率、1～)
画像の外側にタッチ判定を広げ、操作ミスを防ぐ。初期値:1.3
@default 1.3

@param DPad DiagonalRange
@desc 方向パッド斜め方向の判定の広さ(0～1)。斜めに入りやすくする程、操作がブレやすくなる。4方向でよい場合は0に。初期値:0.3;
@default 0.3

@param ActionBtn Visible
@desc 決定ボタンを表示する:true しない:false  初期値:true
@default true

@param ActionBtn Size
@desc 決定ボタンの大きさ(px）。 初期値:100
@default 100

@param ActionBtn Margin
@desc 決定ボタンの位置。画面端からの隙間の大きさで指定。
 (右からの幅; 下からの幅) 初期値:10; 90
@default 10; 90

@param ActionBtn Orientation
@desc 決定ボタンの基準位置を、右下以外に変えたい場合。
left か right; top か bottom で指定。 初期値:right; bottom
@default right; bottom

@param CancelBtn Visible
@desc キャンセル（メニュー）ボタンを表示する:true しない:false
初期値:true
@default true

@param CancelBtn Size
@desc キャンセルボタンの大きさ(px）。 初期値:100
@default 100

@param CancelBtn Margin
@desc キャンセルボタンの位置。画面端からの隙間の大きさで指定。
 (右からの幅; 下からの幅) 初期値:110; 10
@default 110; 10

@param CancelBtn Orientation
@desc キャンセルボタンの基準位置を、右下以外に変えたい場合。
left か right; top か bottomで指定。 初期値:right; bottom
@default right; bottom


@param ---TouchInput Extend---
@default 

@param Flick PageUp-PageDown
@desc 画面上を左右にフリックすると、PageUp/PageDown操作になる。
ステータス画面でキャラを切り替えたい時などに。初期値:true
@default true

@param HoldCanvas ActionBtn
@desc 画面を長押しすると、決定ボタンを押した状態になる。
初期値:true
@default true

@param OutCanvas CancelBtn
@desc ゲーム画面外の黒帯部分全体が、キャンセルボタン扱いになる。
初期値:false
@default false

@param OutCanvas ActionBtn
@desc ゲーム画面外の黒帯部分全体が、決定ボタン扱いになる。
初期値:false
@default false

@param --!need AnalogMove.js!--
@default

@param Analog Move
@desc [※AnalogMove.jsを先に読み込んでください]
方向パッドでアナログ移動ができるようにする。初期値:false
@default false

@param Analog Sensitivity
@desc アナログ移動の入力感度。数値を上げると、細かい指の動きでキャラが大きく動く。
初期値:1.8
@default 1.8

*/

var Imported = Imported || {};
Imported.UCHU_MobileOperation = "1.1.4";

var UCHU_MobileOperation = {};

(function() {
    "use strict";
	
	//-----------------------------------------------------------------------------
	// Setup
	
	var Parameters = PluginManager.parameters('UCHU_MobileOperation');
	var PRM = PRM || {};
	
	PRM.url=[];
	PRM.visible=[];
	PRM.size=[];
	PRM.pos=[];
	PRM.spot=[];
	
	PRM.pcBtn = Boolean(Parameters["PC BtnDisplay"] === 'true' || false);
	PRM.pcExt = Boolean(Parameters["PC TouchExtend"] === 'true' || false);
	PRM.url[0] = String(Parameters["DPad Image"]);
	PRM.url[1] = String(Parameters["ActionBtn Image"]);
	PRM.url[2] = String(Parameters["CancelBtn Image"]);
	PRM.opacity = Number(Parameters["Button Opacity"]);
	PRM.vZoom = Number(Parameters["Vertical BtnZoom"]);
	PRM.tabZoom = Number(Parameters["Tablet BtnZoom"]);
	PRM.tabvZoom = Number(Parameters["TabVertical BtnZoom"]);
	PRM.hideBtn = Boolean(Parameters["HideButton OnMessage"] === 'true' || false);
	PRM.visible[0] = Boolean(Parameters["DPad Visible"] === 'true' || false);
	PRM.size[0] = Number(Parameters["DPad Size"]);
	PRM.pos[0] =Parameters["DPad Margin"].split(";");
	PRM.spot[0] = Parameters["DPad Orientation"].split(";");
	PRM.pad_scale = Number(Parameters["DPad OpelationRange"]);
	PRM.pad_dia = Math.max(0,Math.min(1,(1-Number(Parameters["DPad DiagonalRange"]))));
	PRM.visible[1] = Boolean(Parameters["ActionBtn Visible"] === 'true' || false);
	PRM.size[1] = Number(Parameters["ActionBtn Size"]);
	PRM.pos[1] = Parameters["ActionBtn Margin"].split(";");
	PRM.spot[1] = Parameters["ActionBtn Orientation"].split(";");
	PRM.visible[2] = Boolean(Parameters["CancelBtn Visible"] === 'true' || false);
	PRM.size[2] = Number(Parameters["CancelBtn Size"]);
	PRM.pos[2] = Parameters["CancelBtn Margin"].split(";");
	PRM.spot[2] = Parameters["CancelBtn Orientation"].split(";");
	PRM.flickpage = Boolean(Parameters["Flick PageUp-PageDown"] === 'true' || false);
	PRM.holdaction = Boolean(Parameters["HoldCanvas ActionBtn"] === 'true' || false);
	PRM.outcansel = Boolean(Parameters["OutCanvas CancelBtn"] === 'true' || false);
	PRM.outaction = Boolean(Parameters["OutCanvas ActionBtn"] === 'true' || false);
	PRM.analogmove = Boolean(Parameters["Analog Move"] === 'true' || false);
	PRM.sensitivity = Number(Parameters["Analog Sensitivity"]);
	
	var btn_id=["DirPad","ok","escape"];
	var current_zoom=1;	
	var st_x = 0;
	var st_y = 0;
	var pad_range=PRM.size[0]*PRM.pad_scale;
	var pad_size=pad_range*current_zoom/2;
	var Btn_ready=false;
	var Btn_hide=false;
	var PressBtn=false;
	var dirx=0;
	var diry=0;
	var touchx=0;
	var touchy=0;
	var autofire=false;
	var hvzoom=[1, PRM.vZoom];
	var ua = (function(u){
	  return {
	    Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1) || u.indexOf("ipad") != -1 || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) || u.indexOf("kindle") != -1 || u.indexOf("silk") != -1 || u.indexOf("playbook") != -1
	  };
	})(window.navigator.userAgent.toLowerCase());

	if(ua.Tablet){
		hvzoom=[PRM.tabZoom, PRM.tabvZoom];
	}
	if (!Utils.isMobileDevice() && !PRM.pcBtn) {PRM.visible[0]=PRM.visible[1]=PRM.visible[2]=false;}

	//-----------------------------------------------------------------------------
	// Locate_DirPad

	//-----------------------------------------------------------------------------
	// Replace function
			

		
	
	//-----------------------------------------------------------------------------
	// Option

	if(PRM.hideBtn){

	
		var Scene_Map_createMessageWindows = Scene_Map.prototype.createMessageWindow;
		var Scene_Map_processMapTouch = Scene_Map.prototype.processMapTouch;

		


		Scene_Map.prototype.createMessageWindow = function() {
			Scene_Map_createMessageWindows.call(this);
			var oldStartMessage = this._messageWindow.startMessage;
			var oldTerminateMessage = this._messageWindow.terminateMessage;
			//var scene = this;
			//
			//this._messageWindow.startMessage = function() {	
			//	oldStartMessage.apply(this, arguments);
			//	if($gameMessage.positionType()==2){
			//		scene.hideUserInterface();
			//	}
			//};
			//Window_Message.prototype.terminateMessage = function() {
			//	oldTerminateMessage.apply(this, arguments);
			//	Btn_hide=false;
			//	setTimeout("Scene_Base.prototype.showUserInterface();", 200);
			//};
		};
		
		var Scene_Battle_createMessageWindow = Scene_Battle.prototype.createMessageWindow;
		Scene_Battle.prototype.createMessageWindow = function() {
			Scene_Battle_createMessageWindow.call(this);
			var oldStartMessage = this._messageWindow.startMessage;
			var oldTerminateMessage = this._messageWindow.terminateMessage;
			//var scene = this;
			//this._messageWindow.startMessage = function() {
			//	oldStartMessage.apply(this, arguments);
			//	if($gameMessage.positionType()==2){
			//		scene.hideUserInterface();
			//	}
			//};
			//Window_Message.prototype.terminateMessage = function() {
			//	oldTerminateMessage.apply(this, arguments);
			//	Btn_hide=false;
			//	setTimeout("Scene_Base.prototype.showUserInterface();", 200);
			//};
		};
	}

	if(Utils.isMobileDevice() || PRM.pcExt){
		if(PRM.holdaction){
			var TouchInput_update = TouchInput.update;
			TouchInput.update = function() {
				TouchInput_update.call(this);
				if (!PressBtn && TouchInput.isLongPressed()) {
					Input._currentState['ok']=true;autofire=true;
				}
				if(!TouchInput.isPressed() && autofire){
					Input._currentState['ok']=false;autofire=false;
				}
			};
		}
		
		if(PRM.flickpage || PRM.outcansel || PRM.outaction){
			TouchInput._endRequest= function(type) {
				Input._currentState[type]=false;
			}
			if(Utils.isMobileDevice()){
				var TouchInput_onTouchStart = TouchInput._onTouchStart;
				TouchInput._onTouchStart = function(event) {
				    TouchInput_onTouchStart.apply(this, arguments);
					var touch = event.changedTouches[0];
					if(!PressBtn){
						st_x = Graphics.pageToCanvasX(touch.pageX);
						st_y = Graphics.pageToCanvasY(touch.pageY);
						if(st_x<0 || st_y<0 || st_x>Graphics.boxWidth || st_y>Graphics.boxHeight){
							if(PRM.outcansel){Input._currentState['escape']=true;setTimeout("TouchInput._endRequest('escape');", 100);}
							if(PRM.outaction){Input._currentState['ok']=true;setTimeout("TouchInput._endRequest('ok');", 100);}
						}
					}
				};
			}else{
				var TouchInput_onLeftButtonDown = TouchInput._onLeftButtonDown;
				TouchInput._onLeftButtonDown = function(event) {
					TouchInput_onLeftButtonDown.apply(this, arguments);
					if(!PressBtn){
						st_x = Graphics.pageToCanvasX(event.pageX);
						st_y = Graphics.pageToCanvasY(event.pageY);
						if(st_x<0 || st_y<0 || st_x>Graphics.boxWidth || st_y>Graphics.boxHeight){
							if(PRM.outcansel){Input._currentState['escape']=true;setTimeout("TouchInput._endRequest('escape');", 100);}
							if(PRM.outaction){Input._currentState['ok']=true;setTimeout("TouchInput._endRequest('ok');", 100);}
						}
					}
				};
			}
		}
			
		if(PRM.flickpage){
			var TouchInput_onMove = TouchInput._onMove;
			TouchInput._onMove = function(x, y) {
				TouchInput_onMove.apply(this, arguments);
				if(!PressBtn){
					if((st_x-x)<-50 && Math.abs(st_y-y)<100){st_y=9999;Input._currentState['pageup']=true;setTimeout("TouchInput._endRequest('pageup');", 100);}
					if((st_x-x)>50 && Math.abs(st_y-y)<100){st_y=9999;Input._currentState['pagedown']=true;setTimeout("TouchInput._endRequest('pagedown');", 100);}
				}
			}
		}
	}
	

})(UCHU_MobileOperation);

