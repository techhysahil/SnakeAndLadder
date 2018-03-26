export function singlePlayer() {
  return { 
    type: 'Single_Player', 
    payload: [{
      name : "",
      id : Date.now(),
      position : 1
      }
    ]
  }
}


export function multiPlayer() {
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
}

export function changePlayerName(id,name) {
  return {
    type: 'Add_Player_Name', 
    payload: {
      id : id,
      name : name
    }
  }
}