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
var gcarte = true

function init() {
    var carte;
}

function preload(){
    this.load.image('bg','Assets/background.jpg')
    this.load.image('cartedos','Assets/PNG/Cards/cardBack_blue3.png')
    this.load.image('carteP1','Assets/PNG/Cards/cardSpadesA.png')
    this.load.image('carteC1','Assets/PNG/Cards/cardHeartsA.png')
    this.load.image('carteP2','Assets/PNG/Cards/cardSpadesK.png')
    this.load.image('carteP3','Assets/PNG/Cards/cardSpadesQ.png')
    this.load.image('carteC2','Assets/PNG/Cards/cardHeartsK.png')
    this.load.image('carteC3','Assets/PNG/Cards/cardHeartsQ.png')
    carte = this.physics.add.staticGroup();
}

function create(){
    fond = this.add.image(300,400,'bg')//.setOrigin(0);
    carte2 = this.add.image(0,0,'carteP1').setOrigin(0);
    carte3 = this.add.image(0,200,'carteC2').setOrigin(0);
    carte4 = this.add.image(0,400,'carteP3').setOrigin(0);
    carte5 = this.add.image(0,600,'carteC1').setOrigin(0);
    carte6 = this.add.image(150,0,'carteC3').setOrigin(0);
    carte7 = this.add.image(150,200,'carteP2').setOrigin(0);
    carte8 = this.add.image(150,400,'carteC1').setOrigin(0);
    carte9 = this.add.image(150,600,'carteP1').setOrigin(0); 
    carte10 = this.add.image(300,0,'carteC2').setOrigin(0);
    carte11 = this.add.image(300,200,'carteP3').setOrigin(0);
    carte12 = this.add.image(300,400,'carteC3').setOrigin(0);
    carte1 = this.add.image(300,600,'carteP2').setOrigin(0);


    carte2.visible = false;
    carte3.visible = false;
    carte4.visible = false;
    carte5.visible = false;
    carte6.visible = false;
    carte7.visible = false;
    carte8.visible = false;
    carte9.visible = false;
    carte10.visible = false;
    carte11.visible = false;
    carte12.visible = false;
    carte1.visible = false;
}


function update(){
    if(gcarte){
        for (let index = 0; index < 4; index++) {
            for (let index2 = 0; index2 < 3; index2++) {
                carte.create(150 * index, 200 * index2, 'cartedos').setOrigin(0).refreshBody()
                //console.log('test');
            }
        }
        gcarte = false
    }
    
}
