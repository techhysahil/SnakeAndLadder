import {Add_Player_Name,Add_New_Player} from  '../constant/index'

function detail(state=[], action){
	switch(action.type){
		case  Add_Player_Name: 
      		var stateCopy = JSON.parse(JSON.stringify(state));
			stateCopy = stateCopy.map((player,index) => {
				if(player.id === action.payload.id){
					player.name = action.payload.name;
				}
				return player;
			})
			return stateCopy;
    case  Add_New_Player:
      var stateCopy = JSON.parse(JSON.stringify(state));
      stateCopy = stateCopy.concat(action.payload);
      return stateCopy;
		default:
      return state
	}
}

export default detail;