var swipeStartX, swipeStartY, swipeEndX, swipeEndY, checkNewTouch, deltaX, deltaY;
//var startVector2 = new Phaser.Point();
//var endVector2 = new Phaser.Point();

var swipes = {

	//pointer1 default position = -1x, -1y

	Start : function()
	{
		checkNewTouch = true;
	},

	Update : function()
	{
		//this will let the swipe class know when the screen has been touched
		//and when it should start checking for a touch release
		if(checkNewTouch == true)
		{
			//change mousePointer to pointer1
			if(game.input.mousePointer.isDown)
			{
				//start recording the initiated swipe
				checkNewTouch = false;

				console.log("TOUCHED");
				this.StartSwipe();
			}else
			{
				
			}
		}else{
			if(!game.input.mousePointer.isDown)
			{
				checkNewTouch = true;
				console.log('NO TOUCH');
				this.EndSwipe();
			}
		}
	},

	StartSwipe : function()
	{
		//swipeStartX = game.input.pointer1.x;
		//swipeStartY = game.input.pointer1.y;

		swipeStartX = game.input.mousePointer.x;
		swipeStartY = game.input.mousePointer.y;

		//startVector2.add(swipeStartX, swipeStartY);
		console.log(swipeStartX);
	},

	EndSwipe : function()
	{
		//swipeEndX = game.input.pointer1.x;
		//swipeEndY = game.input.pointer1.y;

		swipeEndX = game.input.mousePointer.x;
		swipeEndY = game.input.mousePointer.y;

		//endVector2.add(swipeEndX, swipeEndY);
		console.log(swipeEndX);

		this.CalcDelta();
	},

	CalcDelta : function()
	{
		//calculate the diffrence in coordinates between the start and 
		//end point of the swipe
		deltaX = swipeStartX - swipeEndX;
		deltaY = swipeStartY - swipeEndY;

		console.log(deltaX, deltaY);
	}
}