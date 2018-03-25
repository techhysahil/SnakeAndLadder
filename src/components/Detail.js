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
				},
				{
					name : "",
					id : Date.now()+7767,
					position : 1
				}
			],
			currentPlayer : {}
		}
		this.enterGame = this.enterGame.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	enterGame(){
		var players = JSON.parse(JSON.stringify(this.state.players));
		this.setState({
			currentPlayer : players[0]
		},() => {
			history.push("/play")
		})
	}

	handleChange(e,index){
		var players = JSON.parse(JSON.stringify(this.state.players));
		players[index].name = e.target.value;

		this.setState({
			players : players
		})
	}

	// render
	render() {
		return (
			<div className="players-detail">
		  		<div className="title">Enter Players Detail</div>
		  		{
		  			this.state.players.map((player,index) => {
		  				return (
		  					<input key={player.id} value={player.name} onChange={(e) => this.handleChange(e,index)} type="text" placeholder="Player Name" />
		  				)
		  			})
		  		}
		  		<div className="enter-game" onClick={this.enterGame}>Enter Game</div>
		  	</div>
		);
	}
}
