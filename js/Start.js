var start = {

	preload : function()
	{
		//resizeGame.Resize();

		this.scaleStage();
		game.state.start('gameScene');
	},

	create : function()
	{

	},

	update : function()
	{

	},

	render : function()
	{

	},

	scaleStage : function()
	{
		if (this.game.device.desktop)        
		{            
			console.log("playing on desktop");
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;            
			this.scale.minWidth = worldWidth/2;            
			this.scale.minHeight = worldHeight/2;            
			this.scale.maxWidth = worldWidth*(window.screen.availWidth / window.innerWidth);            
			this.scale.maxHeight = worldHeight* (window.screen.availHeight / window.innerHeight);            
			this.scale.pageAlignHorizontally = true;            
			this.scale.pageAlignVertically = true;            
			this.scale.setScreenSize(true);        
		}
		else{ 
		/*           
			console.log("playing on mobile");
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;            
			this.scale.minWidth = worldWidth/2;            
			this.scale.minHeight = worldHeight/2;            
			this.scale.maxWidth = 2048; 
			//You can change this to gameWidth*2.5 if needed            
			this.scale.maxHeight = 1228; 
			//Make sure these values are proportional to the gameWidth and gameHeight            
			this.scale.pageAlignHorizontally = true;            
			this.scale.pageAlignVertically = true;            
			this.scale.forceOrientation(true, false);            
			this.scale.hasResized.add(this.gameResized, this);            
			this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);            
			this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);            
			this.scale.setScreenSize(true);      
			*/  
		}
		
	}
}