/**
 * Created by quikr on 7/12/16.
 */
import React from 'react';
import { Link } from 'react-router';

var socket=io();
 let song;
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
              socket.emit('chat message',"sdafs");
              return false;


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

