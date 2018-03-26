import {Add_Player_Name} from  '../constant/index'

function detail(state=[
      {
        name : "",
        id : Date.now(),
        position : 1
      },
      {
        name : "",
      id : Date.now()+6787878,
      position : 1
      }
    ], action){
	switch(action.type){
		case  Add_Player_Name: 
			state = state.map((player,index) => {
				if(player.id === payload.id){
					player.name = payload.name;
				}
				return player;
			})
			return state;
		default:
      		return state
	}
}

export default detail;