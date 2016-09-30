var swipeInput;

var swipeStartX, swipeStartY, swipeEndX, swipeEndY;
var startVector2 = new Phaser.point();
var endVector2 = new Phaser.point();

var swipes = {

	//pointer1 default = -1x, -1y

	StartSwipes : function()
	{
		game.input.addPointer();
	},

	UpdateSwipes : function()
	{
		console.log("ver 1.1");

		if(game.input.pointer1.isDown)
		{
			console.log("TOUCHED");
			this.StartSwipe();
		}

		if(!game.input.pointer1.isDown)
		{
			console.log("RELEASED");
			this.EndSwipe();
		}
	},

	StartSwipe : function()
	{
		swipeStartX = game.input.pointer1.x;
		swipeStartY = game.input.pointer1.y;

		startVector2.add(swipeStartX, swipeStartY);
	}

	EndSwipe : function()
	{
		swipeEndX = game.input.pointer1.x;
		swipeEndY = game.input.pointer1.y;

		endVector2.add(swipeEndX, swipeEndY);
	}
}