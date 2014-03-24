define([
    "game",
    "js/jaws/jaws"],
function (GAME, jaws) {

/**
 * @class Character
 * @description Augments an Object so it's experience and abilities can be
 *              described, tracked and augmented.
 */
var Character = GAME.Character = function (host) {
    var module = {};
    
    // Experience
    module.experience = 0;
    module.level      = 1;
    
    // Base attribute scores.
    module.attributes = {
        "dexterity" : 0,
        "perception": 0,
        "strength"  : 0,
        "toughness" : 0,
        "wisdom"    : 0,
        "charisma"  : 0
    };
    
    module.skills = {
        "dodge":  0,
        "blades": 0,
        "etc":    0
    };
    
    // Calculated scores
    module.getStealth = function () {};
    module.getDodge   = function () {};
    
    host.character = module;
};

return Character;

});