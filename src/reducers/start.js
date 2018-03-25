const Single_Player = 'Single_Player';
const Multi_Player = 'Multi_Player';


function start(action, state=[]){
	switch(action.type){
		case  Single_Player: 
			state.push({
				name : "",
				id : Date.now(),
				position : 1
			});
			return state;
		case Multi_Player:
			state.push({
				name : "",
				id : Date.now(),
				position : 1
			})
			state.push({
				name : "",
				id : Date.now()+5776,
				position : 1
			})
			return state;
		default:
      		return state
	}
}

export default start;