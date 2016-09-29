var randomXPos, randomYPos, pickup;

var food = {
	SpawnFood : function()
	{
		//spawn food
		this.RNG();
		//store food sprite in variable for global use
		pickup = game.add.sprite(randomXPos, randomYPos,'foodSprite');
	},

	RNG : function()
	{
		//generate random X and Y Coordinate
		randomXPos = Math.floor(Math.random() * 40 ) * square;
		randomYPos = Math.floor(Math.random() * 30 ) * square;
	},
}