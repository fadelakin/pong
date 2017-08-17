// the game is composed of entities

function Entity() {
    // A game entity has...

    // A position
    this.x = 0
    this.y = 0

    // dimensions
    this.width = 0
    this.height = 0

    // a velocity: speed with direction
    this.xVelocity = 0
    this.yVelocity = 0
}

// on each update, we apply the velocity to the current position
// this makes the entity move
// entities are expected to override this method
Entity.prototype.update = function() {
    this.x += this.xVelocity
    this.y += this.yVelocity
}

// the entity knows how to draw itself
// all entities of our game will be white rectangles
Entity.prototype.draw = function(context) {
    context.fillStyle = "#fff"
    context.fillRect(this.x, this.y, this.width, this.height)
}

// basic bounding box collision detection/
// returns `true` if the entity intersect with another one
Entity.prototype.intersect = function(other) {
    return this.y + this.height > other.y &&
            this.y              < other.y + other.height &&
            this.x + this.width > other.x &&
            this.x              < other.x + other.width
}