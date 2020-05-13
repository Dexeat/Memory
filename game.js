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
    var cartedos;
}

function preload(){
    this.load.image('bg','Assets/background.jpg')
    this.load.image('cartedos','Assets/PNG/Cards/cardBack_blue3.png')
    this.load.image('cartedos','Assets/PNG/Cards/cardSpadesA.png')
    this.load.image('cartedos','Assets/PNG/Cards/cardHeartsA.png')
    this.load.image('cartedos','Assets/PNG/Cards/cardSpadesK.png')
    this.load.image('cartedos','Assets/PNG/Cards/cardSpadesQ.png')
    this.load.image('cartedos','Assets/PNG/Cards/cardHeartsK.png')
    this.load.image('cartedos','Assets/PNG/Cards/cardHeartsQ.png')
}

function create(){
    fond = this.add.image(300,400,'bg')//.setOrigin(0);
    cartedos = this.physics.add.staticGroup();
}

function update(){
    for(let index = 0;index<4;index++){
        for(let index2 = 0; index2 < 4; index2++) {
            var cartedos = cartedos.create(100*index,100*index2,'cartedos')
        }

    }



}