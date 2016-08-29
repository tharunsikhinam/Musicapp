import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/Emp';
import Href from '../components/href';
import Butt from '../components/Button';
//import axios from 'axios';

class Logincont extends React.Component
{
	constructor()
	{
		super();
		this.state = {error: ""}

		//this.update =  this.update.bind(this);
	}

	render()
	{
		return(<div style={{display: this.props.disp}}> <App type="text" er={this.props.er} check={this.props.check} />
		<App type="password" name="Password" id="password" placeholder="Password" size="col-sm-5 col-md-5" href="Forgot your password?" check={this.props.check}/>
		<div className="col-sm-3 col-md-2">
        <div className="form-btn">
		<Butt name="Login"  clas="btn btn-default" link_text="Need help?" link_clas="login-link help-link" clik={this.props.update}/>
		</div></div>
		</div> );
	}
}
Logincont.propTypes = {
	error: React.PropTypes.string,
}
Logincont.defaultProps = {
	error: "blah"

}
export default Logincont;
