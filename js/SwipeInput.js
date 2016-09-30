var swipeInput;

var swipes = {

	//pointer1 default = -1x, -1y

	StartSwipes : function()
	{
		game.input.addPointer();
	},

	UpdateSwipes : function()
	{
		if(game.input.pointer1.isDown)
		{
			console.log("TOUCHED");
			food.SpawnFood();
		}
	}
}