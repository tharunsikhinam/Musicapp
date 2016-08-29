/**
 * Created by quikr on 7/12/16.
 */
import React, {PropTypes} from "react";
import {connect} from "react-redux";
import * as courseActions from "../../actions/courseActions";
import {bindActionCreators} from "redux";


class CoursePage extends React.Component{

  //constructor
  constructor(props, context)
  {
    super();
    this.state = { course : { title: ""}};


  }
  //functions relevant, called by render

  courseRow(course, index)
  {
    var user;
    if (course.valid == 'V')
      user = "Valid";
    else
      user = "Invalid";
    user = user + " " + course.name;
    console.log(user);
    return <div key={index}>{course.title != undefined ? course.title : user}</div>;
  }
  //render function . container usually calls a child component , do not put lots of markup here
  render()
  {


    return (<div>
      <div id="login" className="login-inner-wrap">
            <h1>Users</h1>

        {this.props.users.map(this.courseRow)}
      </div>
    </div>);
  }
}
//define proprtypes
CoursePage.PropTypes = {
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  createCourse: PropTypes.func.isRequired


};

//react redux relevant code.. which state does the container want to be props, and which actions need to be dispatched
// to the store
function mapStateToProps(state,ownProps)
{
  debugger;
  return {users: state.courses};
}

function mapDispatchToProps(dispatch)
{
  //Three ways to dispatch actions to the store
  // 1. remove mapDispatchtoprops and call it directly in the component using this.props.dispatch(<actionsfilename>.<nameof action>(params))
  // 2. put mdtp func and map an action to dispatch(<>.<>(params)
  // 3. use bind action creators
  return {
    actions: bindActionCreators(courseActions,dispatch)
    //createCourse: (course) => dispatch(courseActions.createCourse(course))
};
}
export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);
