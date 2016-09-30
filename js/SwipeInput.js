var swipeStartX, swipeStartY, swipeEndX, swipeEndY, deltaX, deltaY, swipeDirection;
var checkNewTouch = true;

var swipes = {

	Update : function()
	{
		//this will let the swipe class know when the screen has been touched
		//and when it should start checking for a touch release
		if(checkNewTouch == true)
		{
			//change mousePointer to pointer1
			if(game.input.pointer1.isDown)
			{
				//start recording the initiated swipe
				checkNewTouch = false;

				console.log("TOUCHED");
				this.StartSwipe();
			}else
			{
				//console.log("NO TOUCH");
			}
		}else{
			if(!game.input.pointer1.isDown)
			{
				checkNewTouch = true;
				console.log('NO TOUCH');
				this.EndSwipe();
			}
		}
	},

	StartSwipe : function()
	{
		swipeStartX = game.input.pointer1.x;
		swipeStartY = game.input.pointer1.y;

		console.log(swipeStartX, swipeStartY);
	},

	EndSwipe : function()
	{
		swipeEndX = game.input.pointer1.x;
		swipeEndY = game.input.pointer1.y;

		console.log(swipeEndX, swipeEndY);

		this.CalcDelta();
	},

	CalcDelta : function()
	{
		//calculate the diffrence in coordinates between the start and 
		//end point of the swipe
		deltaX = swipeStartX - swipeEndX;
		deltaY = swipeStartY - swipeEndY;

		console.log(deltaX, deltaY);

		this.DetermineDirection();
	},

	DetermineDirection : function()
	{
		//work out the general directions of the swipe,
		//if it went up or down, or left or right

		//if the swipe went at all to the right on the X axis
		if(deltaX < 0)
		{
			var horizontalLength = -deltaX;
		}else
		{//if the swipe went at all to the left on the X axis
			var horizontalLength = deltaX;
		}

		//if the swipe went at all downwards
		if(deltaY < 0)
		{
			var verticalLength = -deltaY;
		}else
		{//if swipe went at all upwards
			var verticalLength = deltaY;
		}

		//check in which direction the most distance was travled by the swipe
		//if horizontal distance is greater than vertical distance, the general direction 
		//swiped in can only have been left or right.
		if(horizontalLength >= verticalLength)
		{
			if(deltaX < 0)
			{
				console.log('RIGHT');
				swipeDirection = 'right';
				return 'right';
			}else{
				console.log('LEFT');
				swipeDirection = 'left';
				return 'left';
			}
		}
		else
		{
			if(deltaY < 0)
			{
				console.log('DOWN');
				swipeDirection = 'down';
				return 'down';
			}else{
				console.log('UP');
				swipeDirection = 'up';
				return 'up';
			}
		}
	}
}