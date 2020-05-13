var config = {

    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: {
        init: init,
        preload: preload,
        create: create,
        update: update
    }

}

var game = new Phaser.Game(config);

function init() {
    var bat;
}

function preload(){
    this.load.image('bg','Assets/background.jpg')
}

function create(){
    fond = this.add.image(300,400,'bg')//.setOrigin(0);
}

function update(){}