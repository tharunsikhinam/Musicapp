import React from "react";
import Butt from "../components/Button";
class Todolist extends React.Component
{
	render()
	{
		var todos=this.props.data.map(function(tod) {return (<li key={tod.id}>{tod.text}</li>)});
		return(<div className="todolist">{todos}</div> );
	}
}
class Todo extends React.Component
{
	constructor()
	{
		super();
		this.state = {data: []};
		this.loadtodos =  this.loadtodos.bind(this);

	}
	loadtodos()
	{
		/*console.log('hi');
		var xhttp = new XMLHttpRequest();
  		
  		xhttp.onreadystatechange = function() {
  		

  		//console.log(xhttp.readyState);
    	

    	if (xhttp.readyState == 4 && xhttp.status == 200) {
    		
    		  this.setState ({data:JSON.parse(xhttp.responseText)});

    		  console.log(this.state.data);
    		}
  		}.bind(this);
  		
  		var url=this.props.url + ".json";
  		console.log(url);
  		xhttp.open("GET", url, true);
  		xhttp.send();*/
		var url = process.request_url + this.props.url;
  		



  		/*
  		$.get( url, function( data ) {
  			console.log(data);
  			
  			 this.setState({data: data});
  				 
  			console.log( "Load was performed." );
		}.bind(this));*/

		$.ajax({
			type: "GET",
			url: url,
			dataType: 'json',
			headers: {"X-AUTH-TOKEN": this.props.url},
			success: function(data){
				console.log(data);
				this.setState({data: data});

			}.bind(this),

		})
		
	
	}
	 
	componentDidMount()
	{
		this.loadtodos();
		setInterval(this.loadtodos,500);
		
  	
	}
	render()
	{
		return(<div className="Todo Box" style={{display: this.props.disp}}> <h1>To Dos {this.props.url}</h1>
				<Todolist data={this.state.data} />
				<Butt name="Logout" clas="btn btn-default"  clik={this.props.clik}/>
				</div>);
	}
}
export default Todo;