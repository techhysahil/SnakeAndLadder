import React from "react";
import { history } from "../store.js";

export default class Detail extends React.Component {  	
  	constructor(props){
		super(props);
		this.state = {
			players : [
				{
					name : "",
					id : Date.now(),
					position : 1
				}
			],
			currentPlayer : {}
		}
		this.enterGame = this.enterGame.bind(this);
	}

	enterGame(){
		var players = JSON.parse(JSON.stringify(this.state.players));
		this.setState({
			currentPlayer : players[0]
		},() => {
			history.push("/play")
		})
	}

	// render
	render() {
		return (
			<div className="players-detail">
		  		<div className="title">Enter Players Detail</div>
		  		{
		  			this.state.players.map((player) => {
		  				return (
		  					<input key="player.id" value={player.name} type="text" placeholder="Player Name" />
		  				)
		  			})
		  		}
		  		<div className="enter-game" onClick={this.enterGame}>Enter Game</div>
		  	</div>
		);
	}
}
