import React from "react";

// Home page component
export default class Home extends React.Component {
	constructor(props){
		super(props);

		this.dataSource = function(){
				var arr=[];
				for(var i=0;i<10;i++){
					arr[i]=[];
					for(var j=1;j<=10;j++){
						if(i==9){
							arr[i][j]={
								index : j.toString()
							};	
						}else{
							if(i%2 === 0){
								if(j===1){
									arr[i][j]={
										index : (10-i).toString()+(0).toString()
									};	
								}else{
									arr[i][j]={
										index : (9-i).toString()+(11-j).toString()
									};	
								}
							}else{
								if(j===10){
									arr[i][j]={
										index : (10-i).toString()+(0).toString()
									};	
								}else{
									arr[i][j]={
										index : (9-i).toString()+(j).toString()
									};
								}
							}
						}
					}	
				}
				return arr;
		}

		var players = [{
					id : '56325362726',
					name : "A",
					position : 1
				},
				{	
					id : '5632343434',
					name : "B",
					position : 1
				}];

		this.state = {
			dataSource : this.dataSource(),
			players : players,
			currentPlayer : players[0],
			snakes : [
				{
					start : 13,
					end : 43
				},
				{
					start : 33,
					end : 78
				}
			],
			ladders : [
				{
					start : 7,
					end : 53
				},
				{
					start : 73,
					end : 96
				},
				{
					start : 41,
					end : 82
				}
			]
		}

		this.displayGameGrid = this.displayGameGrid.bind(this);
		this.getLadderStyle = this.getLadderStyle.bind(this);
		this.getSnakesStyle = this.getSnakesStyle.bind(this);
		this.playDice = this.playDice.bind(this);
	}

	displayGameGrid(){
		return (
			this.state.dataSource.map((item,i) => {
				return (<div key={i.toString()} className="game-row">
					{item.map((subitem,j) => {
						return (
								<div key={i.toString()+j.toString()} data-k={this.state.dataSource[i][j]["index"]} className="grid-cell">
									<span>{this.state.dataSource[i][j]["index"]}</span>
								</div>
							)
					})}
				
				</div>)
			})
		)
	}

	addTeamPlayer(teamName){
		const teams = JSON.parse(JSON.stringify(this.state.teams));
		teams.push({
			name : teamName,
			initialPos : 1
		});

		this.setState({
			teams : teams
		})
	}

	rotateDice(){
		return Math.floor(1+Math.random()*6)
	}

	playDice(){
		var players = JSON.parse(JSON.stringify(this.state.players));
		var number = this.rotateDice();
		var currentPlayer = JSON.parse(JSON.stringify(this.state.currentPlayer));

		var players = players.map((player,index) => {
			if(currentPlayer.id === player.id){
				if(player.position+number === 100){
					player.position = player.position+number;
					alert("Player "+player.name +"win this Game");
				}else if(player.position+number < 100){
					player.position = player.position+number;
				}
				
			}
			return player;
		});
		this.setNextPlayer();
		this.setState({
			players : players
		})
	}

	setNextPlayer(){
		var players = JSON.parse(JSON.stringify(this.state.players));

		var currentIndex =null;
		var currentPlayer;
		players.forEach((player,index) => {
			if(this.state.currentPlayer.id === player.id){
				currentIndex = index;
			}
		});

		if(currentIndex != null){
			if(players.length > currentIndex+1){
					currentPlayer = players[currentIndex+1]
			}else{
					currentPlayer =  players[0]
			}
		}else{
				currentPlayer =  players[0]
		}

		this.setState({
			currentPlayer : currentPlayer
		})

		return currentPlayer;
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

	render() {
		return (
		  <div className="game-wrapper">
		  	<div className="choose-players hide">
		  		<div className="title">Select Game Mode</div>
		  		<div className="single opt">Single Player</div>
		  		<div className="multiple opt">Multple Player</div>
		  	</div>
		  	<div className="players-detail">
		  		<div className="title">Enter Players Detail</div>
		  		<input type="text" placeholder="Player Name" />
		  		<div className="enter-game">Enter Game</div>
		  	</div>
		    <div className="snakeAndladder-wrapper">
		    	<div className="ladder-wrapper">
		    	{
		    		this.state.ladders.map(function(ladder,index){
		    			return(
		    					<div key={index} style={this.getLadderStyle(ladder)} className={"ladder "}></div>
		    			)
		    		}.bind(this))
		    	}
		    	</div>
		    	<div className="snake-wrapper">
		    	{
		    		this.state.snakes.map(function(snake,index){
		    			return(
		    					<div key={index} style={this.getSnakesStyle(snake)} className={"snake "}></div>
		    			)
		    		}.bind(this))
		    	}
		    	</div>
		    	<div className="players-wrapper">
		    	{
		    		this.state.players.map(function(player,index){
		    			return(
		    					<div key={index} style={{ bottom: (Math.floor(player.position/10)*10)+5+'%', left: ( (Math.floor(player.position/10)%2===0) ? (((player.position%10)-1)*10)+5 : ((10-(player.position%10))*10)+5)+'%' }} className={"player "+ player.name}>{player.name}</div>
		    			)
		    		})
		    	}
		    	</div>
		    	{this.displayGameGrid()}

		    	<div className="dice-wrapper">
		    		<div className="current-player">Current Player : {this.state.currentPlayer.name}</div>
		    		<div className="play-dice" onClick={this.playDice}>Roll Dice</div>
		    	</div>
		    </div>
		  </div>
		);
	}
}
