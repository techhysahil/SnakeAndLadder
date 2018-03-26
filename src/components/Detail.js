import React from "react";
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import { connect } from 'react-redux';
import { history } from "../store.js";
import * as Action from "../actions/index.js";
import reducer from '../reducers/index'

const mapStateToProps = ( state, ownProps ) => {
	return {
		detail: state.detail
	};
}

const mapDispatchToProps = dispatch => ({
    changePlayerName: (id,value) => dispatch( Action.changePlayerName(id,value) )
});


const Detail = props => (
	<div className="players-detail">
  		<div className="title">Enter Players Detail</div>
  		{
  			props.detail.map((player,index) => {
  				return (
  					<input key={player.id} value={player.name} onChange={(e) => props.changePlayerName(player.id,e.target.value)} type="text" placeholder="Player Name" />
  				)
  			})
  		}
  		<div className="enter-game">Enter Game</div>
  	</div>
)


const ConnectDetail = connect(
	mapStateToProps,mapDispatchToProps
)(Detail)

export default ConnectDetail;





// export default class Detail extends React.Component {  	
//   	constructor(props){
// 		super(props);
// 		this.state = {
// 			players : [
// 				{
// 					name : "",
// 					id : Date.now(),
// 					position : 1
// 				},
// 				{
// 					name : "",
// 					id : Date.now()+7767,
// 					position : 1
// 				}
// 			],
// 			currentPlayer : {}
// 		}
// 		this.enterGame = this.enterGame.bind(this);
// 		this.handleChange = this.handleChange.bind(this);
// 	}

// 	enterGame(){
// 		var players = JSON.parse(JSON.stringify(this.state.players));
// 		this.setState({
// 			currentPlayer : players[0]
// 		},() => {
// 			history.push("/play")
// 		})
// 	}

// 	handleChange(e,index){
// 		var players = JSON.parse(JSON.stringify(this.state.players));
// 		players[index].name = e.target.value;

// 		this.setState({
// 			players : players
// 		})
// 	}

// 	// render
// 	render() {
// 		return (
// 			<div className="players-detail">
// 		  		<div className="title">Enter Players Detail</div>
// 		  		{
// 		  			this.state.players.map((player,index) => {
// 		  				return (
// 		  					<input key={player.id} value={player.name} onChange={(e) => this.handleChange(e,index)} type="text" placeholder="Player Name" />
// 		  				)
// 		  			})
// 		  		}
// 		  		<div className="enter-game" onClick={this.enterGame}>Enter Game</div>
// 		  	</div>
// 		);
// 	}
// }
