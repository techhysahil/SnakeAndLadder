import React from "react";
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import { connect } from 'react-redux';
import { history } from "../store.js";
import * as Action from "../actions/index.js";

import reducer from '../reducers/index'

const mapStateToProps = ( state, ownProps ) => {
	return {
		start: state.start
	};
}

const mapDispatchToProps = dispatch => ({
    singlePlayer: () => dispatch( Action.singlePlayer() ),
    multiPlayer: () => dispatch( Action.multiPlayer() ),
});

const Start = props => (
	<div className="choose-players">
		<div className="title">Select Game Mode</div>
		<div className="single opt" onClick={() => props.singlePlayer()}>Single Player</div>
		<div className="multiple opt" onClick={() => props.multiPlayer()}>Multple Player</div>
	</div>
)


const ConnectStart = connect(
	mapStateToProps,mapDispatchToProps
)(Start)

export default ConnectStart;
