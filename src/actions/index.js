// Start Component
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

// Detail component
export function changePlayerName(id,name) {
  return {
    type: 'Add_Player_Name', 
    payload: {
      id : id,
      name : name
    }
  }
}

export function addPlayer() {
  return {
    type: 'Add_New_Player', 
    payload: [{
        name : "",
        id : Date.now(),
        position : 1
    }]
  }
}


// Home Component
export function changePlayerPosition(id,position){
  return {
    type: 'Change_Player_Position', 
    payload: {
      id : id,
      position : position
    }
  }
}

export function changeCurrentPlayerId(id){
  return {
    type: 'Change_CurrentPlayer_Id', 
    id : id,
    position : position
  }
}