var config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        },

    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
};