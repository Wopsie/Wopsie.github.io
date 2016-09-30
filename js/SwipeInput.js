var swipeInput;

var swipes = {

	StartSwipes : function()
	{
		game.input.addPointer();
	},

	UpdateSwipes : function()
	{
		if(game.input.pointer1.x != -1 && game.input.pointer1.y != -1)
		{
			game.add.sprite(game.input.pointer1.x, game.input.pointer1.y,'foodSprite');
		}


		console.log(game.input.pointer1.x, game.input.pointer1.y);
	}
}