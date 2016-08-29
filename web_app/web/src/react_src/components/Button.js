import React from "react";

class Butt extends React.Component
{
	render()
	{
		return (<div><button id="login" type={this.props.type} className={this.props.clas} onClick={this.props.clik}>
			{this.props.name}
			</button>
    </div>);
	}
}
Butt.propTypes = {
	type: React.PropTypes.string,
	clas: React.PropTypes.string,
	clik: React.PropTypes.func,
	name: React.PropTypes.string
};
Butt.defaultProps = {
	type: "button",
	clas: "",
	name: "button",
	link_text: "",
	link_clas: ""


};

export default Butt;
