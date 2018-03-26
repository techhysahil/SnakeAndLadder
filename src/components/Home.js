import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import { connect } from 'react-redux';
import { history, store } from "../store.js";
import * as Action from "../actions/index.js";
import reducer from '../reducers/index'


const mapStateToProps = ( state, ownProps ) => {
	return {
		players: state.players,
		ladders : state.ladders,
		stairs : state.stairs,
		currentPlayerId : state.currentPlayerId
	};
}

const mapDispatchToProps = dispatch => ({
    updatePlayerPosition: (id,position) => dispatch( Action.updatePlayerPosition(id,position) ),
    updateCurrentPlayerId: (id) => dispatch( Action.updatePlayerPosition(id) )
});


class Home extends React.Component {


	displayGameGrid(){
		return (
			this.props.dataSource.map((item,i) => {
				return (<div key={i.toString()} className="game-row">
					{item.map((subitem,j) => {
						return (
								<div key={i.toString()+j.toString()} data-k={this.state.dataSource[i][j]["index"]} className="grid-cell">
									<span>{this.props.dataSource[i][j]["index"]}</span>
								</div>
							)
					})}
				
				</div>)
			})
		)
	}

	rotateDice(){
		return Math.floor(1+Math.random()*6)
	}

	playDice(){
		var players = JSON.parse(JSON.stringify(this.props.players));
		var number = this.rotateDice();
		var newPosition ;
		var players = players.forEach((player,index) => {
			if(this.props.currentPlayerId === player.id){
				newPosition = player.position+number;
				if(newPosition === 100){
					player.position = player.position+number;
					alert("Player "+player.name +"win this Game");
				}else if(newPosition < 100){
					player.position = player.position+number;
				}
			}
			return player;
		});

		this.props.updatePlayerPosition(this.props.currentPlayerId,newPosition);

		this.setNextPlayer();
	}

	setNextPlayer(){
		var players = JSON.parse(JSON.stringify(this.props.players));

		var currentIndex =null;
		var currentPlayerId;
		players.forEach((player,index) => {
			if(this.props.currentPlayerId === player.id){
				currentIndex = index;
			}
		});

		if(currentIndex != null){
			if(players.length > currentIndex+1){
					currentPlayerId = players[currentIndex+1].id
			}else{
					currentPlayerId =  players[0].id
			}
		}else{
				currentPlayerId =  players[0].id
		}

		this.props.updateCurrentPlayerId(currentPlayerId);
	}

	getSnakesStyle(snakes){
		var posBottom1 = (Math.floor(snakes.start/10)*10)+5;
		var posLeft1 = ((Math.floor(snakes.start/10)%2===0) ? (((snakes.start%10)-1)*10)+5 : ((10-(snakes.start%10))*10)+5);
		var posBottom2 = (Math.floor(snakes.end/10)*10)+5;
		var posLeft2 = ((Math.floor(snakes.end/10)%2===0) ? (((snakes.end%10)-1)*10)+5 : ((10-(snakes.end%10))*10)+5);

		var Opposite = Math.sqrt(Math.pow(Math.abs(posBottom2-posBottom1),2)+Math.pow(Math.abs(posLeft2-posLeft1),2));
		var angle = (Math.asin((posLeft2-posLeft1)/Opposite))*(180 / Math.PI);
		var angleInRadian = (Math.atan(492/444));

		// 444 × 492
		var newwidth = Math.sin(angleInRadian)*Opposite;
		var newHeight = Math.sqrt(Math.pow(Opposite,2)-Math.pow(newwidth,2));

		var obj = {
				bottom: posBottom1+'%', 
				left: (posLeft1-Math.abs(posLeft2-posLeft1))+'%', 
				height : newHeight+'%',
				width : newwidth+'%',
				backgroundImage: "url(snake.png)"
			}
		return obj;
	}

	getLadderStyle(ladder){
		var posBottom1 = (Math.floor(ladder.start/10)*10)+5;
		var posLeft1 = ((Math.floor(ladder.start/10)%2===0) ? (((ladder.start%10)-1)*10) : ((10-(ladder.start%10))*10));
		var posBottom2 = (Math.floor(ladder.end/10)*10)+5;
		var posLeft2 = ((Math.floor(ladder.end/10)%2===0) ? (((ladder.end%10)-1)*10) : ((10-(ladder.end%10))*10));

		var Opposite = Math.sqrt(Math.pow(Math.abs(posBottom2-posBottom1),2)+Math.pow(Math.abs(posLeft2-posLeft1),2));
		var angle = (Math.asin((posLeft2-posLeft1)/Opposite))*(180 / Math.PI);

		var obj = { 
				bottom: posBottom1+'%', 
				left: posLeft1+'%', 
				height : Opposite+'%',
				width : 10+'%',
				transform: "rotate("+angle+"deg)",
				backgroundImage: "url(ladder.png)"
			}
		return obj;
	}

	getcurrentPlayerName(){
		var players = JSON.parse(JSON.stringify(this.props.players)),
		currentPlayerName;

		players.forEach((player,index) => {
			if(player.id === this.props.currentPlayerId){
				currentPlayerName = player.name;
			}
		})
		return currentPlayerName;
	}

	render() {
		return (
		  <div className="game-wrapper">
		    <div className="snakeAndladder-wrapper">
		    	<div className="ladder-wrapper">
		    	{
		    		this.props.ladders.map(function(ladder,index){
		    			return(
		    					<div key={index} style={this.getLadderStyle(ladder)} className={"ladder "}></div>
		    			)
		    		}.bind(this))
		    	}
		    	</div>
		    	<div className="snake-wrapper">
		    	{
		    		this.props.snakes.map(function(snake,index){
		    			return(
		    					<div key={index} style={this.getSnakesStyle(snake)} className={"snake "}></div>
		    			)
		    		}.bind(this))
		    	}
		    	</div>
		    	<div className="players-wrapper">
		    	{
		    		this.props.players.map(function(player,index){
		    			return(
		    					<div key={index} style={{ bottom: (Math.floor(player.position/10)*10)+5+'%', left: ( (Math.floor(player.position/10)%2===0) ? (((player.position%10)-1)*10)+5 : ((10-(player.position%10))*10)+5)+'%' }} className={"player "+ player.name}>{player.name}</div>
		    			)
		    		})
		    	}
		    	</div>
		    	{this.displayGameGrid()}

		    	<div className="dice-wrapper">
		    		<div className="current-player">Current Player : {this.getcurrentPlayerName()}</div>
		    		<div className="play-dice" onClick={this.playDice}>Roll Dice</div>
		    	</div>
		    </div>
		  </div>
		);
	}
}

const ConnectHome = connect(
	mapStateToProps,mapDispatchToProps
)(Home)

export default ConnectHome;
