/**
 * Created by quikr on 7/12/16.
 */
import React from 'react';
import { Link } from 'react-router';



  let song;

const port = 2323;

class HomePage extends React.Component
{
    constructor()
    {
        super();
        song = new Audio("/public/Narita.mp3");
        song.play();

    }
  render()
  {
    return (
      <div className="jumbotron">
        <font size="20" display="block" color="black">Random shizz in progress</font>
          <button onClick={()=>{


          }}>click</button>

        <Link to="login" className="btn btn-primary btn-lg">Music Home</Link>
      </div>
    );
  }
  componentDidMount()
  {

  }
  componentWillUnmount()
  {
      song.pause();
  }
}
export default HomePage;




