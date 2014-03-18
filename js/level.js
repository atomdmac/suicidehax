var GAME = (function (GAME) {
    
/**
 * @class Level
 */
var Level = GAME.Level = function (options) {
    // Level dimensions.
    this.width  = options.width  || 10;
    this.height = options.height || 10;
    // The algorithm to use for creating this level.
    this.digger = options.digger || ROT.Map.Digger;
    // A hash to store map data in.
    this._map   = {};
    // A list of actors in this map.
    this._actors = [];
}

/**
 * Initialize the Level.  If the JSON parameter is provided, restore the Level
 * from the previously saved data.  Otherwise, create a new level from scratch.
 *
 * @memberOf Level.prototype
 * @param [json] {Object|String} Data describing the Level.
 * @returns Void
 */
Level.prototype.init = function (json) {
    if (this.json) {
        this._load(this.json);
    } else {
        this._create();
    }
}

/*
 * Create a Level from scratch.
 */
Level.prototype._create = function (seed) {
    // TODO
    if (seed) ROT.RNG.seed(seed);
    
    this.digger = new this.digger(this.width, this.height, options.map);
    this.digger.create(function (x, y, type) {
        
    });
}

/*
 * Restore a map from the given data.
 */
Level.prototype._load = function (json) {
    // TODO
}

/**
 * Returns a JSON representation of the Level.  This can be used to save the
 * Level to storage and restore it later via Level.init().
 *
 * @memberOf Level.prototype
 * @returns {String}
 */
Level.prototype.getJSON = function () {
    // TODO
}

/**
 * Adds an actor to the Level and places it in the cell found at col/row.
 *
 * @param actor {GAME.Actor} An Actor to add to the Level.
 * @param col   {Number}     Add the Actor to the cell found at this column.
 * @param row   {Number}     Add the Actor to the cell found at this row.
 * @returns     {Boolean}    TRUE if added successfully, FALSE if not.
 */
Level.prototype.addActor = function (actor, x, y) {
    // TODO
}

/**
 * Removes the given Actor from the Level.
 */
Level.prototype.removeActor = function (actor) {
    // TODO
};

return GAME;
})(GAME || {})