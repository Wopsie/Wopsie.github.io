var player, square, speed;

//because javascript hates tidy code, this "class" will be managing the 
//snake, spawning the food and be adding length to the snake when it eats.
//also restarts game when player dies
var gameScene = {

	preload : function()
	{
		//load sprites
		game.load.image('player', 'assets/SnakeBlock.png');
		game.load.image('foodSprite', 'assets/Tile.png');
	},

	create : function()
	{
		//make array for the multiple sprites of the player
		player = [];
		//size of the "grid" square
		square = 15;
		//player speed
		speed = 0;

		//player movement start
		playerMovement.Start();

		//make canvas background brown
		game.stage.backgroundColor = '#703800';

		//create the snake starting at 5 squares, add them to the player array
		for (var i = 0; i < 5; i++) {
			player[i] = game.add.sprite(300 + i * square, 300, 'player');
		}

		food.SpawnFood();
	},

	update : function()
	{
		//player movement update (check for input);
		playerMovement.Update();
		snakeCollision.Collision();
	}
}