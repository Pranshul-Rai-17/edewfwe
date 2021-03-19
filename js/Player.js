class Player{
    constructor(){
            this.name = null;
            this.distance = 0;
            this.index = null;
    }

        

    getcount(){
        var sref = database.ref('PlayerCount');
        sref.on("value",function(data){
            playercount = data.val();
        })
    }
    update(){
        var Cname = "Players/player" + this.index;
        database.ref(Cname).set({
            Name:this.name,
            Distance:this.distance
        })
    }
    updateCount(count){
        database.ref('/').update({
            PlayerCount:count
        })
    }
    static getPlayerInfo(){
        var infoRef = database.ref('players');
        infoRef.on("value",(data)=> {
            allPlayers = data.val();
        })
    }
}

 