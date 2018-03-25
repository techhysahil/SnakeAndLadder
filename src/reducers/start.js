import {Single_Player,Multi_Player} from  '../constant/index'

function start(state=[], action){
	switch(action.type){
		case  Single_Player: 
			state.concat(action.payload)
			return state;
		case Multi_Player:
			state.concat(action.payload)
			return state;
		default:
      		return state
	}
}

export default start;