function Paddle() {
    Entity.call(this)
}

Paddle.prototype = Object.create(Entity.prototype)
Paddle.prototype.constructor = Paddle