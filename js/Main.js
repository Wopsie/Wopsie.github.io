var worldWidth = 600;
var worldHeight = 450;

var game = new Phaser.Game(worldWidth, worldHeight, Phaser.AUTO, 'game');

game.state.add('start', start);
game.state.add('gameScene', gameScene);

game.state.start('start');