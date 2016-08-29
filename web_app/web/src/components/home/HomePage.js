/**
 * Created by quikr on 7/12/16.
 */
import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component
{
  render()
  {
    return (
      <div className="jumbotron">
        <font size="20" display="block" color="black">Quikr HRMS      </font>

        <Link to="login" className="btn btn-primary btn-lg">Login</Link>
      </div>
    );
  }
}
export default HomePage;

