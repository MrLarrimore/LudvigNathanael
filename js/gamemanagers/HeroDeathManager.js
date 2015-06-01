game.HeroDeathManager = Object.extend ({
    //Initializes the class by always updating
    init: function(x, y, settings){
        this.alwaysUpdate = true;
    },
    
    //If the player died, then he and the mini player location gets reset.
    update: function() {
        if(game.data.player1.dead) {
            me.game.world.removeChild(game.data.player1);
            me.game.world.removeChild(game.data.player2);
            me.state.current().resetPlayer(350, 0);
        }
        
        if(game.data.player2.dead) {
            me.game.world.removeChild(game.data.player2);
            me.game.world.removeChild(game.data.player1);
            me.state.current().resetPlayer(350, 0);
        }
    }
});