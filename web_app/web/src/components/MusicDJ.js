import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CheckBox from 'material-ui/Checkbox';
import toastr from 'toastr';

var socket=io();
var recv_data=false;
let foo = function () {
    recv_data=true;
    console.log("blast now atleast");

}
var brothersList=[ "Everlasting Light",
    "Next Girl",
    "Tighten Up",
    "Howlin' for You",
    "She's Long Gone" ,
    "Black Mud",
    "The Only One",
    "Too Afraid to Love You",
    "Ten Cent Pistol",
    "Sinister Kid",
    "The Go Getter",
    "I'm Not the One",
    "Unknown Brother",
    "Never Give You Up",
    "These Days" ,
];
var peacedList=["Led Zeppelin - Stairway to heaven",
    "The Rolling Stones - Satisfaction",
    "Derek & The Dominos - Layla",
    "The Beatles - A day in the life",
    "The Who - Won't get fooled again",
    "The Doors - Light my fire",
    "Pink Floyd - Comfortably numb",
    "The Eagles - Hotel California",
    "Bruce Springsteen - Born to run",
    "John Lennon - Imagine",
    "Led Zeppelin - Rock and roll",
    "The Who - Baba O'Riley",
    "The Rolling Stones - It's only rock 'n roll",
    "Cream - White room",
    "The Beatles - Yesterday",
    "Jimi Hendrix - Purple haze",
    "Queen - Bohemian rhapsody",
    "Grateful Dead - Truckin'",
    "Pink Floyd - Money",
    "Bob Dylan - Like a rolling stone",
    "Moody Blues - Nights in white satin"];





let song=new Audio();let path="/public/file1/1.m4a";
class MusicPage extends React.Component {

    constructor() {
        super();
        this.state={flag: true,indexx: 0,songName: "Next Girl",autoplay: false};
        song.src="/public/3.m4a";


    }

    render() {
        const stylePaper = {
            height: "50%",
            width: "50%",
            margin: "25%",
            marginTop: 20,
            textAlign: 'left',
            display: 'inline-block'
        };
        let songList=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];
        let peaceList=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
        song.src=path;

        return (<div style={{textAlign: 'center'}}>
                <img style={{width: '100%',height:'30vh'}} src="/public/piano.jpg"/>

                <TextField type="text" />
                <RaisedButton>Save</RaisedButton>
                <Paper zDepth={5} style={stylePaper}>


            <div style={{textAlign: 'center',margin: '50'  }}>
                <label style={{"font-family": '"Roboto", "sans-serif"',fontSize: '40'  ,"cursor":"pointer"
                }}>Black Keys</label>
                <br/>
                <font style={{'textAlign': 'center'}} >{this.state.songName}</font>
                <br/>
                <audio id="sound"   controls autoPlay={this.state.autoplay}></audio>
                <CheckBox label="Autoplay" style={{textAlign: 'left'}}
                          onCheck={()=> {
                              this.setState({autoplay: !this.state.autoplay});
                }
                }/>
                <br/>
                <RaisedButton  style={{width: '10px'}}primary={true}
                               onClick={()=>{


                    document.getElementById('sound').play();
                               this.setState({autoplay: true})}}>
                    >></RaisedButton>
                <RaisedButton secondary={true}   onClick={()=>{document.getElementById('sound').pause();}}>||</RaisedButton>

            </div>
                    <div className="col-md-6" style={{margin: 20}}>
                        <label style= {{"font-family": '"Roboto", "sans-serif"',fontSize: '30',marginLeft: '100' }}>The Brothers</label>
                     {songList.map((songs,index)=>{
                    return(<div  style={{textAlign: 'left'}}>
                        <a   onClick={()=>{



                            path="/public/file1/" + songs + ".m4a";
                            console.log(path);
                            document.getElementById('sound').src=path;
                            socket.emit('chat message',brothersList[index]);


                            this.setState({login: !this.state.flag,indexx: index});
                        }
                        } key={index}>{brothersList[index]}</a>

                            </div>

                     );
                })}
                </div>


                    <div className="col-md-4" style={{margin: 20}}>
                        <label style= {{"font-family": '"Roboto", "sans-serif"',fontSize: '30',marginLeft: '40' }}>
                            Peace</label>


                        {peaceList.map((songs,index)=>{
                            return(<div  style={{textAlign: 'left'}}>
                                    <a   onClick={()=>{

                                        path="/public/file2/" + songs + ".mp3";
                                        console.log(path);
                                        document.getElementById('sound').src=path;
                                        socket.emit('chat message',peacedList[index]);

                                        this.setState({songName: peacedList[index]});

                                        this.setState({login: !this.state.flag,indexx: index});
                                    }
                                    } key={index}>{peacedList[index]}</a>

                                </div>


                            );
                        })}
                    </div>

                <div style={{textAlign: 'center',margin: '50'}}>
                    <input type="text" id="namess" onChange={()=>{
                        console.log("blast me");
                    }}/>

          </div>
</Paper>

            </div>
        );
    }
    componentDidMount()
    {
        document.getElementById('sound').src=path;
        setInterval(()=>{

            if(recv_data==true)
            {
                console.log("i reached here too");
                var value=document.getElementById('namess').value;

                var find_index=function(value)
                {
                    let id=-1;
                  for(var i=0;i<peacedList.length;i++)
                  {
                      if(value==peacedList[i])
                      {
                          id=(i+1).toString();
                      }
                  }
                  return id;
                };
                var find_index2=function(value)
                {
                    let id=-1;
                    for(var i=0;i<brothersList.length;i++)
                    {
                        if(value==brothersList[i])
                        {

                            id=(i+1).toString();
                        }
                    }
                    return id;
                };

                let d=find_index(value);
                if(d!=-1)
                {
                  let x=find_index(value);
                    console.log("/public/file2/"+x+".mp3");
                    document.getElementById('sound').src="/public/file2/"+x+".mp3";
                    recv_data=false;
                    this.setState({songName: value});
                    this.setState({flag: !this.state.flag});

                }
                else
                {
                    let x=find_index2(value);
                    document.getElementById('sound').src="/public/file1/"+x+".m4a";
                    recv_data=false;
                    this.setState({songName: value});
                    this.setState({flag: !this.state.flag});

                }


            }
             },100);

       }
    change_name(msg){
        this.setState({songName: msg})
    }
    componentWillMount()
    {

         socket.on('chat message', function(msg){
            console.log(msg);
            console.log("reached here");
            document.getElementById('namess').value=msg;
             foo();
               });
        socket.on('user', function(msg){
        toastr.info(msg);
        });




    }
    componentWillUnmount()
    {
         song.pause();

    }

}

MusicPage.propTypes = {};

export default MusicPage;


