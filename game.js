// the game engine

function Game(canvas) {
    var self = this

    this.context = canvas.getContext("2d")
    this.width = canvas.width
    this.height = canvas.height

    // keep track of key states
    // Eg.:
    //   game.keyPressed.up === true // while UP key is pressed
    //   game.keyPressed.up === false // while UP key is released
    this.keyPressed = {}

    $(canvas).on('keydown keyup', function(e) {
        // convert key code to key name
        var keyName = Game.keys[e.which]

        if (keyName) {
            // eg.: `self.keyPressed.up = true` on keydown
            // will be set to `false` on keyup
            self.keyPressed[keyName] = e.type === 'keydown'
            e.preventDefault()
        }
    })
}

// some key codes to key name mapping
Game.keys = {
    32: 'space',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
}

Game.prototype.start = function() {
    var self = this
    var fps = 60
    var interval = 1000 / fps // ms per frame

    setInterval(function() {
        self.update()
        self.draw()
    }, interval)
}