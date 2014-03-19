define([
    "game",
    "js/jaws/jaws"],
function (GAME, jaws) {

/**
 * @class Attackable
 * @description Augments an Object so it can be attacked by an attacker.
 */
var Attackable = GAME.Attackable = function (host) {
    var module = {};
    
    module._hp         = 100;
    module._maxHp      = 100;
    module._armorClass = 100;
    module._alive      = true;
    module._conscious  = true;
    
    /**
     * Target the host for an attack.
     *
     * @memberOf Attackable
     * @param {Number} hitCheck - The hit check rolled by the attacker.
     * @returns {Boolean} TRUE if successful, FALSE if not.
     */
    module.target = function (hitCheck) {
        // TODO
    };
    
    /**
     * Do harm to the host.
     *
     * @memberOf Attackable
     * @param {Number} damage - The amount of damage to do.
     * @param {String} type   - The type of damage to do.  Default is "physical".
     * @returns {Number}      - The hosts current health.
     */
    module.harm = function (damage, type) {
        // TODO
    };
    
    /**
     * Check to see if the host is still alive.
     *
     * @memberOf Attackable
     * @returns {Boolean} TRUE if the host is alive, FALSE if it is dead.
     */
    module.isAlive = function () {
        // TODO
    };
    
    /**
     * Check to see if the host is conscious.
     *
     * @memberOf Attackable
     * @returns {Boolean} TRUE if the host is conscious, FALSE if it is unconscious.
     */
    module.isConscious = function () {
        // TODO
    };
    
    host.attackable = module;
};

});