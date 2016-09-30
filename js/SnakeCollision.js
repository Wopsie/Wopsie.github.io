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
		//check if snake is going off screen and out of bounds
		if(head.x >= game.width || head.x < 0 || head.y >= game.height || head.y < 0)
		{
			//game.state.start('start');
			this.restart();
		}
	},

	SelfCollision : function(head)
	{
		//check if snake bites itself in the butt
		for (var i = 0; i < player.length - 1; i++) {
			if(head.x == player[i].x && head.y == player[i].y)
			{
				game.state.start('start');
			}
		}
	},

	restart : function()
	{
		game.state.start('start');
	}
}