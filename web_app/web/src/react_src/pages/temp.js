class Logincont extends React.Component
{
	constructor()
	{
		super();
		this.state = {disp: "",disptodo: "none" , er: "",tok: "",url: "/auth.json"}
		this.update = this.update.bind(this);
		//this.gettodos = this.gettodos.bind(this);
		this.logout = this.logout.bind(this);

	}
	logout(e)
	{ 
		this.setState({disp:"",disptodo:"none",tok: ""});
	}
	update(e)
	{
	//	window.location.href="http://localhost:3666/main.html";

		//Ajax call using javascript

		/*var xhttp = new XMLHttpRequest();
  		
  		xhttp.onreadystatechange = function() {
  		

  		console.log(xhttp.readyState);
		//this.setState({er: "Invalid Username or password entered"});    	

    	if (xhttp.readyState == 4 && xhttp.status == 200) {
    		
    		//console.log(xhttp.responseText);
    		
    		var x=xhttp.responseText;
    		
    		x=JSON.parse(x);
    		
    		//console.log(x.length);
    		
    		var z=(document.getElementById('employeeid').value);
    		
    		//console.log(this.state.tok);
    		var i;
    		//this.setState({er:"hey"});
    		for( i=0;i<x.length;i++)
    		{	
    			if(x[i][z]!=undefined)	
    			{
      			//document.getElementById("demo").innerHTML = x[i][z];
      			this.setState({er: ""});
      			this.setState({disp:"none",disptodo:"",tok: z});
      			console.log("url is");
      			console.log(this.state.tok);
      			break;
      			}
      		}
      		if(i==x.length)
      		{	
      			this.setState({er: "Invalid username or password entered"}); }

    		}
  		}.bind(this);
  		xhttp.open("GET", "/text.json", true);
  		xhttp.send();*/

  		var user1=(document.getElementById('employeeid').value);
  		var pass1=(document.getElementById('password').value);
  		console.log(JSON.stringify({emailAddress: user1,password: pass1}));
  		//console.log(z);
  		$.ajax({
  			 
  			type: "POST",
  			url: "http://localhost:8888/hrmslogin/login.php",
  			datatype: 'json',
  			//contentType: 'application/json',

  			data: JSON.stringify({emailAddress: user1,password: pass1}),
  			
  			success: function(data){
  				console.log(data);
  				data = JSON.parse(data);
  				console.log(data.authToken);
  				console.log(data[user1]);
  				this.setState({disp: "none",disptodo:"",tok: data[user1]});
  				console.log(this.state.disp);
  				 }.bind(this),
  			
  			error: function(){ console.log("login failed");}
  			
  		})


  		//Ajax call using jquery
  		/*
  		$.ajax({url: "text.json?hello", success: function(result,status){
        	document.getElementById("demo").innerHTML = status;
    }});*/

		//Ajax call using axios
	/*	axios.get('text.json')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (response) {
        console.log(response);
    });*/
		
		//e.preventDefault();		
	 
/*

		var y=document.getElementById('employeeid').value;
		var z=document.getElementById('password').value;


		if(!(this.check(y,z)))
		this.setState ({error: "Invalid Username and password entered"});
		else
		this.setState({error: ""});*/
	}

	 

	render()
	{
		return(<div>
			<Login disp={this.state.disp}  update={this.update} er={this.state.er}/>
			<Todo disp={this.state.disptodo} url={this.state.tok} clik={this.logout}/>

			</div>);
	}




}
class Forgotcont extends React.Component
{
	constructor()
	{
		super();
		this.remov=this.remov.bind(this);
	}
	remov(e)
	{
		/*e.preventDefault();
		ReactDOM.unmountComponentAtNode(document.getElementById('links'));
		ReactDOM.render(<Forgot remov={this.remov} />,document.getElementById('links'));*/

	}
	render()
	{
		return(<Forgot remov={this.remov}/>);
	}
}
ReactDOM.render(<Logincont />,document.getElementById('employ'));
ReactDOM.render(<Forgotcont   />,document.getElementById('links'));

