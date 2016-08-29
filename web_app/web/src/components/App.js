/**
 * Created by quikr on 7/12/16.
 */
import React, {PropTypes} from "react";

let song;
class App extends React.Component{

  constructor()
  {
      super();


  }
  render()
  {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
  componentWillUnmount()
  {
    song.pause();
  }
}


App.propTypes={
  children: PropTypes.object.isRequired
};
export default App;
