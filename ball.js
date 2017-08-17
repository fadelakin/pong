function Ball() {
    Entity.call(this)

    this.width = 20
    this.height = 20

    this.reset()
}

Ball.prototype = Object.create(Entity.prototype)
Ball.prototype.constructor = Ball

Ball.prototype.reset = function() {
    this.x = game.width / 2 - this.width // center horizontally
    this.y = game.height / 2 - this.height // center vertically

    // make ball move
    this.yVelocity = 10
    this.xVelocity = 5
}

Ball.prototype.update = function() {
    Entity.prototype.update.apply(this, arguments) // super

    if(this.y > game.height - this.height || this.y < 0) {
        this.yVelocity *= -1
    }

    if(this.x > game.width) {
        this.reset()
    }
}