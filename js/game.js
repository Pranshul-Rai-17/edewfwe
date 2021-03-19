class Game{
    constructor(){

    }

    async start(){
        if(gamestate===0){
            player = new Player();
            var countref = await database.ref('PlayerCount').once("value");
            if(countref.exists()) {
                playercount = countref.val();
                player.getcount();
            }
        }
        form = new Form();
        form.display();
    }

    getstate(){
        var sref = database.ref('GameState');
        sref.on("value",function(data){
            gamestate = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            GameState:state
        })
    }

    play() {
        form.hide();
        textSize(30);
        text("Game Start", 120,100);
        Player.getPlayerInfo();

        if(allPlayers !== undefined) {
            var posy = 130;
            for(var plr in allPlayers) {
                posy += 20;
                textSize(15);
                text(allPlayers[plr].name + ":" +allPlayers[plr].distance,120,posy);
            }
        }
    }
    
}