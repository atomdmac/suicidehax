define([
    "game",
    "js/jaws/jaws"],
function (GAME, jaws) {

/**
 * @class Attacker
 * @description Augments an Object so it can attack attackable targets.
 */
var Attacker = GAME.Attackable = function (host) {
    var module = {};
    
    /**
     * Attempt a melee attack on the target (if it is Attackable).
     *
     * @memberOf Attacker.prototype
     * @param {Object} target - The target of the attack.
     * @param {Object} [item] - The item to wield.
     * @returns {Boolean} TRUE if the attack was successful and FALSE if it wasn't.
     */
    module.meleeAttack = function (target, item) {
        // TODO
    };
    
    /**
     * Attempt a magical attack on the target (if it is Attackable).
     *
     * @memberOf Attacker.prototype
     * @param {Object} target - The target of the attack.
     * @param {Object} item   - The item (ex. wand, spell, scroll, etc.) that
     *                          will facilitate the attack.
     * @returns {Boolean} TRUE if the attack was successful and FALSE if it wasn't.
     */
    module.magicAttack = function (target, item) {
        // TODO
    };
    
    /**
     * Attempt a ranged attack on the target (if it is Attackable).
     *
     * @memberOf Attacker.prototype
     * @param {Object} target     - The target of the attack.
     * @param {Object} missile    - The missile that will be used for this attack.
     * @param {Object} [launcher] - The launcher that will be used for this attack.
     * @returns {Boolean} TRUE if the attack was successful and FALSE if it wasn't.
     */
    module.rangedAttack = function (target, missile, item) {
        // TODO
    };
    
    host.attacker = module;
};

return Attackable;

});