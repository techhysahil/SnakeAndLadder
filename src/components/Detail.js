import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import { connect } from 'react-redux';
import { history, store } from "../store.js";
import * as Action from "../actions/index.js";
import reducer from '../reducers/index'

const mapStateToProps = ( state, ownProps ) => {
	return {
		players: state.players
	};
}

const mapDispatchToProps = dispatch => ({
    changePlayerName: (id,value) => dispatch( Action.changePlayerName(id,value) ),
    addPlayer: () => dispatch( Action.addPlayer() )
});

class Detail extends Component {
  enterGame(){
    store.dispatch(push('/play'))
  }

  render(){
    return (
      <div className="players-detail">
        <div className="title">Enter Players Detail</div>
        {
          this.props.players.map((player,index) => {
            return (
              <input key={player.id} value={player.name} onChange={(e) => this.props.changePlayerName(player.id,e.target.value)} type="text" placeholder="Player Name" />
            )
          })
        }
        <div className="add-player" onClick={() => this.props.addPlayer()}>Add Player</div>
        <div className="enter-game" onClick={() => this.enterGame()}>Enter Game</div>
      </div>
    )
  }
}


const ConnectDetail = connect(
	mapStateToProps,mapDispatchToProps
)(Detail)

export default ConnectDetail;
