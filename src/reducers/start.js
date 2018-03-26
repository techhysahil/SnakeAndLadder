import {Single_Player,Multi_Player,Initlize_State} from  '../constant/index'

function start(state=[], action){
	switch(action.type){
		case  Single_Player: 
			state = state.concat(action.payload)
			return state;
		case Multi_Player:
			state = state.concat(action.payload)
			return state;
		case Initlize_State:
			return [];
		default:
      		return state;
	}
}

export default start;