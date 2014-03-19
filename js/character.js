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
    
    module._stats = {
        "experience": 0,
        "level"     : 0,
        
        "dexterity" : 0,
        "perception": 0,
        "strength"  : 0,
        "toughness" : 0,
        "wisdom"    : 0,
        "charisma"  : 0
    };
    
    host.character = module;
};

return Character;

});