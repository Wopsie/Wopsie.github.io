var updateInterval, direction, directionChange, newBlock, prevLastBlockXPos, prevLastBlockYPos, lastBlock, firstBlock;

var playerMovement = {
	//gets called in preload method of game.js
	Start : function()
	{
		Input.GetKeyboardInput();
		//swipes.GetSwipeInput();

		newBlock = false;
		//direction player is moving in
		direction = 'right';
		//direction the player inputs
		directionChange = null;

		updateInterval = 0;
	},

	//gets called in update method of game.js
	Update : function()
	{
		swipes.Update();
		this.ReadInput();
		this.MoveSnake();
	},

	ReadInput : function()
	{
		//keyboard input
		if(cursors.left.isDown && direction != 'right'){
			directionChange = 'left';
		}else if(cursors.right.isDown && direction != 'left'){
			directionChange = 'right';
		}else if(cursors.up.isDown && direction != 'down'){
			directionChange = 'up';
		}else if(cursors.down.isDown && direction != 'up'){
			directionChange = 'down';
		}

		//mobile touch input
		if(swipeDirection)
		{
			if(swipeDirection == 'left' && direction != 'right')
			{
				directionChange = 'left';
			}else if(swipeDirection == 'right' && direction != 'left')
			{
				directionChange = 'right';
			}else if(swipeDirection == 'up' && direction != 'down')
			{
				directionChange = 'up';
			}else if (swipeDirection == 'down' && direction != 'up')
			{
				directionChange = 'down';
			}
		}
	},

	MoveSnake : function()
	{
		updateInterval++;
		
		//limit the update rate so that the snake won't move every frame
		if(updateInterval % 10 == 0)
		{
			//move the snake by placing the last square of the snake at the front
			//of the snake to create the illusion of a moving snake.
			firstBlock = player[player.length -1];
			lastBlock = player.shift();
			//store coordinates of the previously last block of the snake.
			prevLastBlockXPos = lastBlock.x;
			prevLastBlockYPos = lastBlock.y;

			this.IncreaseLength();

			//update snake direction with last input direction
			if(directionChange)
			{
				direction = directionChange;
				directionChange = null;
			}

			//change the last block's coordinates to be at the front of the snake
			if(direction == 'right'){
				lastBlock.x = firstBlock.x + square;
				lastBlock.y = firstBlock.y;
			}else if(direction == 'left'){
				lastBlock.x = firstBlock.x - square;
				lastBlock.y = firstBlock.y;
			}else if(direction == 'up'){
				lastBlock.x = firstBlock.x;
				lastBlock.y = firstBlock.y - square;
			}else if(direction == 'down'){
				lastBlock.x = firstBlock.x;
				lastBlock.y = firstBlock.y + square;
			}

			//put last block back into the player array
			player.push(lastBlock);
			firstBlock = lastBlock;
		}
	},

	IncreaseLength : function()
	{
		if(newBlock == true){
			player.unshift(game.add.sprite(prevLastBlockXPos, prevLastBlockYPos, 'playerSprite'));
			newBlock = false;
		}
	}
};