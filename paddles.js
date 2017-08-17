function Paddle() {
    Entity.call(this)

    this.width = 20
    this.height = 100

    this.y = game.height / 2 - this.height / 2
    this.x = 20
}

Paddle.prototype = Object.create(Entity.prototype)
Paddle.prototype.constructor = Paddle