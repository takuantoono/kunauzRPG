// [SQUARE PHOENIX] : http://enix.web.fc2.com/

/*:
* @plugindesc ステート解除後別のステートになるプラグイン
* @author SQUARE PHOENIX
* @help
* ステートのメモに<next:17>と書くと、
ステートが解除されたときにステート番号１７のステートになります。

例えば、「エネルギー充填中」のステートが解除されたとき、
「エネルギー充填120％」のステートに変化させることができます。

細かく、エネルギー充填30％　40％　などを作ってつなげていくこともできます。

* 利用規約：
*  自己責任で自由にお使いください。
*/
(function(){
  ///////////////////////////rpg_window//////////////////////////////////////////////
    Window_BattleLog.prototype.displayRemovedStates = function(target) {
       target.result().removedStateObjects().forEach(function(state) {
             if (state.meta['next']){
                if (state.meta['next'] == 0){
                  $gameActors.actor(target._actorId).removeState(state.id)
                }else{
                  $gameActors.actor(target._actorId).addState(Number($dataStates[state.id].meta['next']));
                }
             }
          if (state.message4) {
              this.push('popBaseLine');
              this.push('pushBaseLine');
              this.push('addText', target.name() + state.message4);
          }
      }, this);
  };
///////////////////////////rpg_object//////////////////////////////////////////////
  Game_BattlerBase.prototype.updateStateTurns = function() {
      this._states.forEach(function(stateId) {
          if (this._stateTurns[stateId] > 0) {
              this._stateTurns[stateId]--;
              //--------------------------------
              if (typeof this._actorId !== "undefined"){
                if (this._stateTurns[stateId] <= 0){
                  if($dataStates[stateId].meta['next']){//nextタグあれば
                      $gameActors.actor(this._actorId).removeState(stateId);
                  }
                }
              }
              //---------------------------------------------------------------------------
          }
      }, this);
  };
/////////////////////////////////////////////////////////////////////////////////////
})();
