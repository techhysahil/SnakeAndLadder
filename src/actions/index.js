export const singlePlayer = text => ({
  return {
    type: 'Single_Player',
    payload: [{
    	name : "",
  		id : Date.now(),
  		position : 1
      }
    ]
  }
})

export const multiPlayer = text => ({
  return {
    type: 'Multi_Player',
    payload: [
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
    ]
  }
})