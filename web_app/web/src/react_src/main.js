import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import * as actions from "../actions/courseActions";
import {Logincont, Forgotcont} from "./pages/loginpage";

let song;
let list = [];
let index=0;
class Appcontainer extends React.Component
{
  constructor()
  {
    super();
    song = new Audio("/public/Narita.mp3");
     this.state = {songNames: [],songs: ['1','2','2'],login: false, tok: "",disp: "",disptodos: "none"};
    this.disp =  this.disp.bind(this);
    this.change = this.change.bind(this);
    this.change2 = this.change2.bind(this);
    this.storeNewLogin = this.storeNewLogin.bind(this);
      this.showSongs = this.showSongs.bind(this);

  }
  disp()
  {
    //e.preventDefault();
    if(this.state.login==1)
    {
      console.log(this.state.login);
      ReactDOM.render(<Logincont />,document.getElementById('employ'));
      ReactDOM.render(<Forgotcont   />,document.getElementById('links'));
    }
    if(this.state.login==0)
    {
      //ReactDOM.unmountComponentAtNode(document.getElementById('employ'));
    }
  }
  change2(e)
  {
    if(e=="hello")
    {
    this.setState({disptodos: ""});
    this.setState({disp: "none"});
  }
  else
  {
    this.setState({disptodos: "none"});
    this.setState({disp: ""});

  }

  }
  change(e)
  {
    e.preventDefault();
    console.log(this.state.login);
    if (this.state.login==0)
      this.setState({login: 1});
    else
      this.setState({login: 0});

  }

  loadId(course, index)
  {
    return <p key = {index} >{course.id} </p>;
  }

  storeNewLogin(login)
  {
    debugger;
    this.props.dispatch(actions.storeLoginId(login));
  }
  showSongs(son,length)
  {
        let songName= new Array();
    }

  componentDidMount() {
    debugger;
    ReactDOM.render(<Forgotcont   />, document.getElementById('links'));
  }


  render() {
      console.log("rerender");
     return ( <div><br/><br/><br/> <form>  <input size="400" style={{width: '600px'}}  id="audio" onChange={(event) =>
    {
        this.setState({songs: event.target.files});
        this.setState({login: 1})
        console.log(this.state.songs);
         list = event.target.files;
        console.log(event.target.files);
        console.log(list.length);
        index=0;
        var  path = URL.createObjectURL(event.target.files[0]);
        let song= new Audio(path);
       document.getElementById('sound').src=path;
        var songName= new Array();
        for(var i=0;i<list.length;i++)
        {
            songName[i] =  list[i].name;
        }
        this.setState({songNames: songName})



        console.log(path);
    }

    } type="file" multiple/>
    <audio id="sound"   controls autoPlay={true}></audio></form>

         <input    type="file" id="file-select" name="photos" multiple={true}  />
    <button type="submit" id="upload-button">Upload</button>
        {this.showSongs(this.state.songs,this.state.songs.length)}
         {this.state.songNames.map((song,indexx)=>{
             if(indexx == index)
                 return(<div><font>Current Song</font>&nbsp;&nbsp;&nbsp;<a key={indexx}>{song}</a><br/></div>);
             else
             return(<div><a key={indexx}>{song}</a><br/></div>);
         })}
         <button type="button" onClick={()=>{
             this.setState({login: !this.state.login})
             if(index==0)
             {
                 index=list.length-1;
             }
             else if(index<(list.length-1)) {
                 index = index - 1;
             }

             else
                 index=0;

             var  path = URL.createObjectURL(list[index]);
             console.log(list);
              document.getElementById('sound').src=path;


         }
             } >PREV SONG</button>
        <button type="button" onClick={()=>{
            this.setState({login: !this.state.login})
            if(index<(list.length-1)) {
                index = index + 1
            }
            else
                index=0;

            var  path = URL.createObjectURL(list[index]);
            console.log(list);
            let song= new Audio(path);
            document.getElementById('sound').src=path;
              }} >NEXT SONG</button>
        </div>);
  }

  componentDidMount()
  {

      setInterval(()=>{
          console.log(document.getElementById('sound').currentTime);

      },500);
  }

  componentWillUnmount()
  {
    song.pause();
  }

}

function mapStateToProps(state,ownState)
{
  debugger;
  return {courses: state.courses} ;


}


export default connect(mapStateToProps )(Appcontainer);


