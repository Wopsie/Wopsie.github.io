var swipeInput;

var swipes = {

	StartSwipes : function()
	{
		game.input.addPointer();
	},

	UpdateSwipes : function()
	{
		console.log(game.input.pointer1.x);


		game.add.sprite(game.input.pointer1.x, game.input.pointer1.y,'foodSprite');
	}
}