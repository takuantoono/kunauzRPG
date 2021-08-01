//=============================================================================
// Outher_png_load.js	2017/07/11
// RPGツクールMV以降のKADOKAWA社製ソフトウェアのみの利用についての制限は一切ありません。
//=============================================================================
// 1.02 具体的に変更した部分にコメントを追記
// 1.00 初版

/*:
 * @plugindesc Pictureの外の画像を参照する。
 * @author RRX
 *
 * @help このプラグインにはプラグインコマンドはありません。
 * スクリプトコマンドの$gameScreen.showPictureのファイルパス動作を置き換えます。
 * "../titles1/book" のように、Pictureとは別な場所のpng画像をロードします。
 *
 * スクリプトコマンド
 * $gameScreen.showPicture(ピクチャ番号,ファイルパス/ファイル名,原点,x座標,y座標,幅の拡大率,高さの拡大率,不透明度,合成方法)
 *
 * スクリプトコマンド例
 * $gameScreen.showPicture(1,"../titles1/book",0,0,0,100,100,255,0);
 * 
 * 注意１：png以外のファイルは読み込めません。
 * 注意２：全項目省略できません。下記使い方をメモにコピペを推奨します。
 * 注意３：（）内各項目は、[,]で区切って入力します。
 * 
 *  以下詳しい使い方。
 * *イベントコマンド「ピクチャの表示」も参考にして下さい。
 * 
 * ピクチャ番号：
 * 　ピクチャの表示番号です。1～100で入力します。
 * 　小さい番号が下、大きい番号が上に表示されます。
 * 
 * ファイルパス/ファイル名：
 * 　表示したい画像のファイル名をダブルクォーテーション（" "）で囲んで入力します。
 * 　ダブルクォーテーションの間をファイル名に置き換えて下さい。
 * 　また、ひとつ上のフォルダに戻りたい場合には[../]
 * 　フォルダの中のファイルを読み込ませる場合には[/]を挟みます。
 * *例1:
 * 　「picture」の中に「001」フォルダ、その中の002というファイルを読み込ませる
 *  　→　["001/002"]
 * *例2:
 * 　「enemies」フォルダの中にある「Actor1_3」を読み込ませる
 *  　→　["../enemies/Actor1_3"]
 * 
 * 原点：
 * 　0または1と入力します。
 * 　0で表示させる画像の左上を基準に、1で中央を基準に描写します。
 * 　わからなければ0にすることを推奨します。
 * 
 * x座標：
 * 　ピクチャを表示する画面X（横軸）座標。左からXドット目から描写します。
 * 
 * y座標：
 * 　ピクチャを表示する画面Y（縦軸）座標。上からYドット目から描写します。
 * 
 * 幅の拡大率：
 * 　％で入力します。等倍なら100、2倍なら200、1/2なら50と入力します。
 * 
 * 高さの拡大率：
 * 　％で入力します。等倍なら100、2倍なら200、1/2なら50と入力します。
 * 
 * 不透明度：
 * 　0～255の間の値で入力します。数字が大きいほど濃く、小さいほど薄くなります。
 * 
 * 合成方法：
 * 　ピクチャをゲーム画面と合成する方法です。
 * 　0で通常、1で加算、2で乗算、3でスクリーンです。
 */

(function(_global) {

ImageManager.loadBitmap = function(folder, filename, hue, smooth) {
    if (filename) {
        var path = folder + encodeURIComponent(filename) + '.png';
        //悪あがき。%2Fを/に置換してる。
        path = path.replace(eval('/'+'%2F'+'/g'), '/');
        var bitmap = this.loadNormalBitmap(path, hue || 0);
        bitmap.smooth = smooth;
        return bitmap;
    } else {
        return this.loadEmptyBitmap();
    }
};

ImageManager.reserveBitmap = function(folder, filename, hue, smooth, reservationId) {
    if (filename) {
        var path = folder + encodeURIComponent(filename) + '.png';
        //悪あがき。%2Fを/に置換してる。
        path = path.replace(eval('/'+'%2F'+'/g'), '/');
        var bitmap = this.reserveNormalBitmap(path, hue || 0, reservationId || this._defaultReservationId);
        bitmap.smooth = smooth;
        return bitmap;
    } else {
        return this.loadEmptyBitmap();
    }
};

ImageManager.requestBitmap = function(folder, filename, hue, smooth) {
    if (filename) {
        var path = folder + encodeURIComponent(filename) + '.png';
        //悪あがき。%2Fを/に置換してる。
        path = path.replace(eval('/'+'%2F'+'/g'), '/');
        var bitmap = this.requestNormalBitmap(path, hue || 0);
        bitmap.smooth = smooth;
        return bitmap;
    } else {
        return this.loadEmptyBitmap();
    }
};


})(this);