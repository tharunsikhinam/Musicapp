/**
 * Created by quikr on 7/12/16.
 */
import React, {PropTypes} from "react";


class App extends React.Component{
  render()
  {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}


App.propTypes={
  children: PropTypes.object.isRequired
};
export default App;
