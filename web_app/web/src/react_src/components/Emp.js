import React from "react";
import {Link} from "react-router";
class Employee extends React.Component
{
	constructor()
	{
		super();
		this.state = {valid: 1, invalid: 0, erro: ""};
		this.check = this.check.bind(this);
		this.foc = this.foc.bind(this);
	}

	check()
	{
		//Check function
	}

	foc(e)
	{



		this.props.check("hello");
		if(e.target.value.trim().length==0)
		{
		var x=e.target.value;
      var y = "Enter the " + this.props.name;
		this.setState({erro: y});
		}
		else
			this.setState({erro: ""});


  }

	render()
	{


    return (<div className={this.props.size}>
              <div className="form-group">
                <label htmlFor="employeeid">{this.props.name}</label>
                <input   onBlur={this.foc} type={this.props.type} className="form-control" id={this.props.id} placeholder={this.props.placeholder} name={this.props.name} />
                {this.state.erro} <Link to="/forgot" activeClassName="active">{this.props.href}</Link>
                <p>{this.props.er} </p>

              </div>
            </div>
			);

	}


}

Employee.propTypes = {
	size: React.PropTypes.string,
	placeholder: React.PropTypes.string,
	type: React.PropTypes.string,
	id: React.PropTypes.string,
	er: React.PropTypes.string,
	name: React.PropTypes.string,
	label: React.PropTypes.string,
	href: React.PropTypes.string

};

Employee.defaultProps = {
	size: "col-sm-4 col-md-5",
	placeholder: "Employee's Id",
	type: "text",
	id: "employeeid",
	er: "",
	name: "Employee Id",
	href: ""
};
export default Employee;
