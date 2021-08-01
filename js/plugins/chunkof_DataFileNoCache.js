//=============================================================================
// chunkof_DataFileNoCache.js
//
// Copyright (c) chunkof
//=============================================================================

/*:
 * @plugindesc Not use cached DataFile(*.json)
 *
 * @param useCacheByVersionID
 * @desc  1:Use cache if no changes. 0:Not use cache in any cases. (Changes are detected by versionId if loaded versionId)
 * @default 1
 *
 * @author chunkof
 */

/*:ja
 * @plugindesc データファイル(*.json)のキャッシュを使用しない。
 *
 * @param useCacheByVersionID
 * @desc  1:変更がない場合キャッシュ使用。0:キャッシュ常に不使用。※変更有無はversionIDで検出(versionIDがロード完了していれば)
 * @default 1
 *
 * @author chunkof
 */

(function() {

  var parameters = PluginManager.parameters('chunkof_DataFileNoCache');
  var useCacheByVersionID = Number(parameters['useCacheByVersionID']) != 0;

  //------------
  // DataManager.loadDataFile
  //------------
  var _DataManager_loadDataFile = DataManager.loadDataFile;
  DataManager.loadDataFile = function(name, src_org) {

    // Append query.
    var src = src_org + "?v=";
    if (useCacheByVersionID && $dataSystem && $dataSystem.versionId) {
      src += $dataSystem.versionId;
    } else {
      src += (Math.random() * 1000000000000000000).toString();
    }

    // Load DataFile
    _DataManager_loadDataFile.call(this, name, src);

  }

})();
