define(["game",
        "lib/jaws/jaws",],
function (GAME, jaws) {

/**
 * @class Actor
 * @extends jaws.Sprite
 */    
var Actor = GAME.Actor = function (options) {
    // Apply options to Sprite.
    this.set(options.sprite);
    
    // Apply options to monster.
    this.level = options.level;
    
    // Keep track of which cell we're in within the current level.
    this.cell = {
        x: 0,
        y: 0
    };
};
Actor.prototype = new jaws.Sprite();

/**
 * Called when it is this Actor's turn.
 *
 * @memberOf Actor.prototype
 */
Actor.prototype.act = function () {
    // TODO
};

/**
 * Attempt to move the Actor in the given direction.
 *
 * @memberOf Actor.prototype
 * @param direction {Array} Contains x/y offset to apply to the Actor's current
 *                          position (respectively).
 * @return {Boolean}
 */
Actor.prototype.move = function (direction) {
    // TODO
    
    // Call up to prototype to do actual movement.
    this.prototype.move.call(this, x, y);
};

Actor.prototype.moveTo = function (cell) {
    // TODO
};

/**
 * Called when the parent game state is suspended.
 * @memberOf Actor.prototype
 */
Actor.prototype.suspend = function () {
    // TODO
};

/**
 * Called when the parent game state is restored from a suspended state.
 * @memberOf Actor.prototype
 */
Actor.prototype.restore = function () {
    // TODO
};

return Actor;

});