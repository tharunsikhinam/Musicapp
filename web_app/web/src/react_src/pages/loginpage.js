import React from "react";
import Login from "../containers/Login";
import Forgot from "../containers/Forgot";
import Todo from "../containers/Todo";
import {Link} from "react-router";

class Logincont extends React.Component
{
	constructor()
	{
		super();
    this.state = {disp: "", disptodo: "none", er: "", tok: "", url: "/auth.json"};
		this.update = this.update.bind(this);
		//this.gettodos = this.gettodos.bind(this);
		this.logout = this.logout.bind(this);
    this.check = this.check.bind(this);

	}
	logout(e)
	{
    this.props.change("hey");
		this.setState({disp:"",disptodo:"none",tok: ""});
	}
  check(e)
  {
    console.log(e);
    console.log("onlblur");
    var pass1=(document.getElementById('password').value);
      var user1=(document.getElementById('employeeid').value.trim());


    if(user1.length!=0 ||pass1.length!=0)
        this.setState({er: ""});
  }
	update(e)
	{
    e.preventDefault();
    var pass1 = (document.getElementById('password').value);
  		var user1=(document.getElementById('employeeid').value.trim());
    if (user1.length == 0 && pass1.length == 0) {
        this.setState({er: "No username or password entered"});
      return;
    }


      var login={name:user1,pass1:pass1};
      console.log('login data to be sent');
      console.log(login);
      console.log(JSON.stringify({emailAddress: user1,password: pass1}));
    /*login.valid = "V";
     this.props.store(login);*/
    var url;
    //browserHistory.push("/images/logo.png");
    if(process.request_url != undefined)
         url = "http://localhost:2323/public/";
    //else
        url = process.request_url + "auth.json";
    console.log(url);
    $.ajax({

  			type: "GET",
      url: url,
  			datatype: 'json',
        headers: {"X-AUTH-TOKEN": "booyea"},
  			//contentType: 'application/json',

  			data: JSON.stringify({emailAddress: user1,password: pass1}),
  			success: function(data){
  				console.log(data);
  				//data = JSON.parse(data);
  				console.log(data.authToken);
  				console.log(data[user1]);

          if(data[user1]!=undefined)
  				{this.setState({tok: data[user1]});
      //      this.props.store
            login.valid = "V";
            const cookie = document.cookie;
            console.log("cookie");
            console.log(cookie);
            this.props.store(login);
            this.props.change("hello");
          }
          else {
            login.valid = "NV";
            this.props.store(login);
            const cookie = document.cookie;
            console.log("cookie");
            console.log(cookie);
            this.setState({er: "Invalid Username or password entered"});
          }
  				console.log(this.state.disp);
  				 }.bind(this),

  			error: function(){ console.log("login failed");}

  		})



	}



	render()
	{
		return(<div>
			<Login disp={this.props.disps}  update={this.update} er={this.state.er} check={this.check}/>
      <Link to="/users" activeClassName="users">Users</Link>
			<Todo disp={this.props.disptodo} url={this.state.tok} clik={this.logout}/>

			</div>);
	}
  componentDidMount()
  {
    //this.setState({disptodo: this.props.disptodo});
    //this.setState({disp: this.props.disps});
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
export {Logincont, Forgotcont};

