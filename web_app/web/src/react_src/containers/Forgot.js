import React from "react";
import Frm from "../components/Emp";
import Butt from "../components/Button";
import {Link} from "react-router";

class Butts extends React.Component
{
	render()
	{
		return (<div className="col-md-2">
           <div className="form-btn">
             <Butt clas="btn btn-default" name="Submit" clik={this.props.clik}/>
             <Link to="/login">Back to login</Link>
              </div>
          </div>);
	}
}
class Forgot extends React.Component
{
	constructor()
	{
		super();
		this.state = {error: ""}

	}

	render()
	{
    return (<div id="login-wrapper">
        <nav className="navbar navbar-default">


          <div className="navbar-header">
              <a className="navbar-brand" href="#"><img src="/public/images/logo.png" alt="Quikr - Asaan hai Badalna"
                                                        width={94}
                                                        height={43}/></a>
          </div>

        </nav>

        <section className="home-login-banner">
          <div id="forgot-password" className="login-inner-wrap">
            <div>
              <Frm type="text" er={this.state.error} size="col-md-10"/>
            </div>
            <Butts clik={this.props.remov}/>
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
      </div>



    );
	}
}

export default Forgot;
