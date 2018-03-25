import React from "react";
import { connect } from 'react-redux';
import { history } from "../store.js";

import reducer from '../reducers/index'


// Not found page component
export default class Start extends React.Component {
  	
  	constructor(props){
		super(props);
		this.state = {
			players : []
		}

		this.selectGameMode = this.selectGameMode.bind(this);
	}

	selectGameMode(gameMode){
		var players = [];
		if(gameMode === "single"){
			players.push({
				name : "",
				id : Date.now(),
				position : 1
			})
		}else if(gameMode === "multiple"){
			players.push({
				name : "",
				id : Date.now(),
				position : 1
			})
			players.push({
				name : "",
				id : Date.now()+5776,
				position : 1
			})
		}
		this.setState({
			players : players
		},() => {
			history.push("/detail")
		})
	}


	// render
	render() {
		return (
			<div className="choose-players">
		  		<div className="title">Select Game Mode</div>
		  		<div className="single opt" onClick={() => this.selectGameMode("single")}>Single Player</div>
		  		<div className="multiple opt" onClick={() => this.selectGameMode("multiple")}>Multple Player</div>
		  	</div>
		);
	}
}

// function selectGameMode() {
//   return {
//     type: 'Single_Player',
//     payload: []
//   }
// }

// const mapStateToProps = ( state, ownProps ) => {
// 	return {
// 		start: state.start
// 	};
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     selectGameMode: selectGameMode
//   }, dispatch);
// }

// const ConnectStart = connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(Start)


// export default ConnectStart;
