var start = {

	preload : function()
	{
		//resizeGame.Resize();

		this.ScaleStage();

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

	ScaleStage : function()
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
}