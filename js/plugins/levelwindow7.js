(function() {

Game_Action.prototype.speed = function() {
    var agi = this.subject().agi;
    var speed = agi/2 + this.subject().luk/7;
    if (this.item()) {
        speed += this.item().speed * (agi + 100)/100;
    }
    if (this.isAttack()) {
        speed += this.subject().attackSpeed()
    }
    name=this.subject()._name
    console.log(name+speed)
    return speed;
};



})();
