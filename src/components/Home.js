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

		this.state = {
			dataSource : this.dataSource(),
			players : [
				{
					name : "A",
					position : 1
				},
				{
					name : "B",
					position : 1
				}
			],
			snakes : [
				{
					start : 3,
					end : 20
				},
				{
					start : 33,
					end : 78
				}
			],
			ladders : [
				{
					start : 9,
					end : 34
				},
				{
					start : 65,
					end : 98
				}
			]
		}

		this.displayGameGrid = this.displayGameGrid.bind(this);
		this.getLadderStyle = this.getLadderStyle.bind(this);
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

	throwStriker(){
		return Math.floor(1+Math.random()*6)
	}

	getLadderStyle(ladder){
		var posBottom1 = (Math.floor(ladder.start/10)*10)+5;
		var posLeft1 = ((Math.floor(ladder.start/10)%2===0) ? (((ladder.start%10)-1)*10) : ((10-(ladder.start%10))*10));
		var posBottom2 = (Math.floor(ladder.end/10)*10)+5;
		var posLeft2 = ((Math.floor(ladder.end/10)%2===0) ? (((ladder.end%10)-1)*10) : ((10-(ladder.end%10))*10));

		var Opposite = Math.sqrt(Math.pow(Math.abs(posBottom2-posBottom1),2)+Math.pow(Math.abs(posLeft2-posLeft1),2));
		var angle = (Math.asin(Math.abs(posLeft2-posLeft1)/Opposite))*(180 / Math.PI);

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
		  <div className="page -home">
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
		    					<div key={index} style={{ bottom: 5+'%', left: 5+'%', backgroundImage: "url(snake.png)"}} className={"snake "}></div>
		    			)
		    		})
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
		    </div>
		  </div>
		);
	}
}
