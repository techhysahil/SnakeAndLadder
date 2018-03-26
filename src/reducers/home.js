import {Change_Player_Position,Change_CurrentPlayer_Id} from  '../constant/index'

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
};

function home(state=[], action){
	switch(action.type){
		case  Change_Player_Position: 
			var stateCopy = JSON.parse(JSON.stringify(state));
			var players = [];
			stateCopy.players = stateCopy.players.foreach((player,index) => {
				if(player.id === action.id){
					player.position = action.position;
				}
				return player;
			});
			return stateCopy;
		case Change_CurrentPlayer_Id:
			var stateCopy = JSON.parse(JSON.stringify(state));
			
			return state;
		default:
      		return state
	}
}

export default start;