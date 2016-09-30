var worldWidth = 600;
var worldHeight = 420;

//window.screen.availWidth - 15, window.screen.availHeight - 90

var game = new Phaser.Game(worldWidth, worldHeight, Phaser.AUTO, 'game');

game.state.add('start', start);
game.state.add('gameScene', gameScene);

game.state.start('start');

