define([
    "game",
    "js/jaws/jaws"],
function (GAME, jaws) {

/**
 * @class Character
 * @description Augments an Object so it's experience and abilities can be
 *              described, tracked and augmented.
 */
// TODO: Is there a more descriptive module name that can be given to Character?
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
    
    // Base skill scores.
    // TODO: Should skills be added to a separate module?
    module.skills = {
        "dodge"         : 0,
        "stealth"       : 0,
        "unarmed-combat": 0,
        "short-blades"  : 0,
        "swords"        : 0,
        "throwing"      : 0,
        "bows"          : 0
    };
    
    /**
     * Return an object that represents the Character's score for a given
     * attribute or skill.  Scores will be calculated based on a number of
     * criteria, such as base attribute/skill score, current equipment, 
     *
     * @memberOf Character.prototype
     * @param {String} field - The attribute or skill score to calculate and return.
     * @return {Object}
     */
    module.getScore = function (field) {
        // TODO
    };
    
    host.character = module;
};

return Character;

});