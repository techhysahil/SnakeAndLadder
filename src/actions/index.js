import {Single_Player,Multi_Player,Add_Player_Name,Add_New_Player,Update_Player_Position,Update_CurrentPlayer_Id} from  '../constant/index';

// Start Component
export function singlePlayer() {
  return { 
    type: Single_Player, 
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
    type: Multi_Player,
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
    type: Add_Player_Name, 
    payload: {
      id : id,
      name : name
    }
  }
}

export function addPlayer() {
  return {
    type: Add_New_Player, 
    payload: [{
        name : "",
        id : Date.now(),
        position : 1
    }]
  }
}


// Home Component
export function updatePlayerPosition(id,position){
  return {
    type: Update_Player_Position, 
    payload: {
      id : id,
      position : position
    }
  }
}

export function updateCurrentPlayerId(id){
  return {
    type: Update_CurrentPlayer_Id, 
    id : id
  }
}