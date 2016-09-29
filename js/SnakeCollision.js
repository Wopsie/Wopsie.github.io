var snakeCollision = {

	Collision : function()
	{
		this.FoodCollision();
		this.BoundsCollision(player[player.length -1]);
		this.SelfCollision(player[player.length -1]);
	},

	FoodCollision : function()
	{
		//check along the length of the snake if it collides with food
		for (var i = 0; i < player.length; i++) {
			if(player[i].x == pickup.x && player[i].y == pickup.y)
			{
				//add a new block to the player's length
				newBlock = true;

				pickup.destroy();
				food.SpawnFood();
			}
		}
	},

	BoundsCollision : function(head)
	{
		//=== TO ADD===
		//PHASER BASED BOUNDS COLLISION SO THAT IT SCALES CORRECTLY

		//check if snake is going off screen and out of bounds
		if(head.x >= window.screen.availWidth - 15 || head.x < 0 || head.y >= window.screen.availHeight - 90 - 125 || head.y < 0)
		{
			console.log("HIT THE WALL");
			game.state.start('start');
		}
	},

	SelfCollision : function(head)
	{
		//check if snake bites itself in the butt
		for (var i = 0; i < player.length - 1; i++) {
			if(head.x == player[i].x && head.y == player[i].y)
			{
				console.log('YOU PLAYED YOURSELF');
				game.state.start('start');
			}
		}
	}
}