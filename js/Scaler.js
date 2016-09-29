var resizeGame = {

	Resize : function()
	{
		console.log("Scaling");

		var width = window.screen.width;
		var height = window.screen.height;

		game.width = width;
		game.height = height;

		game.stage.bounds.width = width;
		game.stage.bounds.height = height;

		if(game.renderType === Phaser.WEBGL)
		{
			game.renderer.resize(width, height);
		}
	}
}