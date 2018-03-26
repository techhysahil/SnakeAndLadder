import {Update_Player_Position,Update_CurrentPlayer_Id,Update_Players,Update_Game_State} from  '../constant/index'

function dataSource(){
				var arr=[];
				for(var i=0;i<10;i++){
					arr[i]=[];
					for(var j=1;j<=10;j++){
						if(i==9){
							arr[i][j]={
								index : j.toString()
							};	
						}else{
							if(i%2 === 0){
								if(j===1){
									arr[i][j]={
										index : (10-i).toString()+(0).toString()
									};	
								}else{
									arr[i][j]={
										index : (9-i).toString()+(11-j).toString()
									};	
								}
							}else{
								if(j===10){
									arr[i][j]={
										index : (10-i).toString()+(0).toString()
									};	
								}else{
									arr[i][j]={
										index : (9-i).toString()+(j).toString()
									};
								}
							}
						}
					}	
				}
				return arr;
		};

var initialState = {
	dataSource : dataSource(),
	snakes : [
		{
			start : 13,
			end : 43
		},
		{
			start : 33,
			end : 78
		}
	],
	ladders : [
		{
			start : 7,
			end : 53
		},
		{
			start : 73,
			end : 96
		},
		{
			start : 41,
			end : 82
		}
	],
	players : [],
	currentPlayerId : null,
	gameState : "running"
};

function home(state=initialState, action){
	switch(action.type){
		case  Update_Player_Position: 
			var stateCopy = JSON.parse(JSON.stringify(state));
			var players = [];
			stateCopy.players = stateCopy.players.map((player,index) => {
				if(player.id === action.id){
					player.position = action.position;
				}
				return player;
			});
			return stateCopy;
		case Update_CurrentPlayer_Id:
			var stateCopy = JSON.parse(JSON.stringify(state));
			stateCopy.currentPlayerId = action.id
			return stateCopy;
		case Update_Players:
			var playersCopy = JSON.parse(JSON.stringify(action.players));
			var stateCopy = JSON.parse(JSON.stringify(state));
			var currentPlayerId = playersCopy[0].id

			stateCopy.players = playersCopy;
			stateCopy.currentPlayerId = currentPlayerId;
			return stateCopy;
		case Update_Game_State:
			var stateCopy = JSON.parse(JSON.stringify(state));
			stateCopy.gameState = "completed";
			return stateCopy;
		default:
      		return state
	}
}

export default home;