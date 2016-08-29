import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import * as actions from "../actions/courseActions";
import {Logincont, Forgotcont} from "./pages/loginpage";


class Appcontainer extends React.Component
{
  constructor()
  {
    super();

    this.state = {login: 0, tok: "",disp: "",disptodos: "none"};
    this.disp =  this.disp.bind(this);
    this.change = this.change.bind(this);
    this.change2 = this.change2.bind(this);
    this.storeNewLogin = this.storeNewLogin.bind(this);

  }
  disp()
  {
    //e.preventDefault();
    if(this.state.login==1)
    {
      console.log(this.state.login);
      ReactDOM.render(<Logincont />,document.getElementById('employ'));
      ReactDOM.render(<Forgotcont   />,document.getElementById('links'));
    }
    if(this.state.login==0)
    {
      //ReactDOM.unmountComponentAtNode(document.getElementById('employ'));
    }
  }
  change2(e)
  {
    if(e=="hello")
    {
    this.setState({disptodos: ""});
    this.setState({disp: "none"});
  }
  else
  {
    this.setState({disptodos: "none"});
    this.setState({disp: ""});

  }

  }
  change(e)
  {
    e.preventDefault();
    console.log(this.state.login);
    if (this.state.login==0)
      this.setState({login: 1});
    else
      this.setState({login: 0});

  }

  loadId(course, index)
  {
    return <p key = {index} >{course.id} </p>;
  }

  storeNewLogin(login)
  {
    debugger;
    this.props.dispatch(actions.storeLoginId(login));
  }

  componentDidMount() {
    debugger;
    ReactDOM.render(<Forgotcont   />, document.getElementById('links'));
  }

  render() {
    debugger;
    return ( <div id="login-wrapper">
      <nav className="navbar navbar-default">


        <div className="navbar-header">
          <a className="navbar-brand" href="#"><img src="/public/images/logo.png" alt="Quikr - Asaan hai Badalna"
                                                    width={94}
                                                    height={43}/></a>
        </div>

      </nav>

      <section className="home-login-banner">
        <div id="login" className="login-inner-wrap">

          <Logincont disptodo={this.state.disptodos} disps={this.state.disp} change={this.change2}
                     store={this.storeNewLogin}/>
        </div>
      </section>


      <footer className="text-center home-footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <p>2015 © Quikr India Private Limited.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>);
  }

}

function mapStateToProps(state,ownState)
{
  debugger;
  return {courses: state.courses} ;


}


export default connect(mapStateToProps )(Appcontainer);


