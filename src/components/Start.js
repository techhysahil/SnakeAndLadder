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
    singlePlayer: () => dispatch(Action.singlePlayer()),
    multiPlayer: () => dispatch( Action.multiPlayer() ),
    initlizeState: () => dispatch( Action.initlizeState() ),
});

class Start extends Component {
	componentDidMount(){
		this.props.initlizeState();
	}
	selectGameMode(str){ 
		if(str === "single"){
			this.props.singlePlayer()
		}else if(str === "multiple"){
			this.props.multiPlayer()
		}
		store.dispatch(push('/detail'))
	}

	render(){
		return (
			<div className="choose-players">
				<div className="title">Select Game Mode</div>
				<div className="single opt" onClick={() => this.selectGameMode("single")}>Single Player</div>
				<div className="multiple opt" onClick={() => this.selectGameMode("multiple")}>Multple Player</div>
			</div>
		)
	}
}


const ConnectStart = connect(
	mapStateToProps,mapDispatchToProps
)(Start)

export default ConnectStart;
