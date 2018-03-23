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
					position : 67
				},
				{
					name : "B",
					position : 32
				}
			]
		}

		this.displayGameGrid = this.displayGameGrid.bind(this);
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

	render() {
		return (
		  <div className="page -home">
		    <div className="snakeAndladder-wrapper">
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
