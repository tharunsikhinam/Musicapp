import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import CheckBox from 'material-ui/Checkbox';
import toastr from 'toastr';
import Charts from './charts';

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}
var socket=io();
var listen_to_dj=false;
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


let autoflay=1;

let song=new Audio();let path="/public/file1/1.m4a";
class MusicPage extends React.Component {

    constructor() {
        super();
        this.state={flag: true,indexx: 0,songName: "Next Girl",autoplay: false,style: {display: 'none'},background:{textAlign: 'center',background: 'url("/public/back2.jpg")',backgroundSize: '100% 100%'}};
        song.src="/public/3.m4a";


    }

    render() {
        const stylePaper = {
            height: "50%",
            width: "50%",
            background: 'url("/public/back2.jpg)',


            margin: '10%',
            textAlign: 'left',
            display: 'inline-block',
           };
        const stylePaper2 = {
            maxHeight: "50%",
            maxWidth: "90%",
            background: 'url("/public/back2.jpg)',

            backgroundSize: "691px 182px",
            margin: '5%',
            marginLeft: '10%',
            textAlign: 'left',
            display: 'inline-block'
        }; const audioPaper2 = {
            maxHeight: "50%",
            maxWidth: "90%",

            backgroundSize: "691px 182px",
            margin: '5%',
            marginLeft: '10%',
            textAlign: 'left',
            display: 'inline-block'
        };
        let songList=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];
        let peaceList=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
        song.src=path;


        return (<div style= { {textAlign: 'center',background: 'url("/public/back2.jpg")',backgroundSize: '100% 100%'}}>
                <div style={{width: '100%',height: '50vh', background: 'url("/public/piano.jpg")'
                }} >
                    <Paper zDepth={5} style={audioPaper2}>

                        <div style={{textAlign: 'center',margin: '0' }}>
                            <label style={{"font-family": '"Roboto", "sans-serif"',fontSize: '40'  ,"cursor":"pointer"
                            }}> </label>
                            <br/>
                            <font style= {{"font-family": '"Shadows Into Light", "cursive"',fontSize: '30',color: '#000000'}}>{this.state.songName}</font>
                            <br/>
                            <audio style={{width: '400px'}} id="sound"   controls autoPlay={autoflay?this.state.autoplay:true}></audio>
                            <br/>
                            <div className="col-sm-4" style={{marginLeft: '10'}}>
                                <CheckBox label="Autoplay"
                                          iconStyle= {{boxColor: '#FADFFF'}} onCheck={()=> {
                                    autoflay=1;
                                    this.setState({autoplay: !this.state.autoplay});
                                }
                                }/></div>
                            <div style={{'textAlign': 'right',display: 'inline',marginLeft:'50px'}}>
                                <div className="col-sm-4" style={{'textAlign': 'right',display: 'inline',marginLeft:'10px'}}>
                                    <CheckBox label="DjShuffle"
                                              labelStyle={{color:'#000000'}}
                                              style={{textAlign: 'center'}}
                                              onCheck={()=> {
                                                  listen_to_dj=!listen_to_dj;

                                              }
                                              }/></div>

                            </div>

                            <br/><br/>
                            <RaisedButton  style={{width: '10px'}}
                                           primary={true}
                                           onClick={()=>{


                                               document.getElementById('sound').play();
                                           }}>
                                <label style= {{"font-family": '"Shadows Into Light", "sans-serif"',fontSize: '20',marginLeft: '',color: '#FFFFFF' }}>play</label>
                            </RaisedButton>
                            <RaisedButton secondary={true}   onClick={()=>{document.getElementById('sound').pause();}}><label style= {{"font-family": '"Shadows Into Light", "sans-serif"',fontSize: '20',marginLeft: '',color: '#FFFFFF' }}>pause</label>
                            </RaisedButton>
                            <br/><br/>
                            <input id='naam'type="text" onChange={(e)=>{sessionStorage.setItem('id',e.target.value);}} />

                            {
                                1
                                    ?<RaisedButton disabled={false} primary={true} onClick={()=>{
                                        this.setState({flag: !this.state.flag});
                                        sessionStorage.setItem('id',document.getElementById('naam').value);}}>{sessionStorage.getItem('id')}</RaisedButton>:
                                    <div style={{marginBottom: '-150px'}}></div>}

                        </div>
                    </Paper>

                </div>





                <br/>

                <Paper  zDepth={5} style={stylePaper }>

                    <div className="col-sm-4" style={{margin: 20,marginLeft: '5%'}}>
                        <label style= {{"font-family": '"Shadows Into Light", "sans-serif"',fontSize: '20',marginLeft: '',color: '#21759b' }}>Side A</label>
                        {songList.map((songs,index)=>{

                            return(<div  style={{textAlign: 'left',backgroundColor: '#FFFFF' }}>

                                     <a  id={index}   style={{"font-family": '"Coming Soon", "cursive"',color: '#FFFFFF',fontSize: '15'  ,"cursor":"pointer"
                                     }} onClick={()=>{



                                        path="/public/file1/" + songs + ".m4a";
                                        console.log(path);
                                        document.getElementById('sound').src=path;
                                        this.setState({songName: brothersList[index]});
                                         if(sessionStorage.getItem('id')) {
                                             socket.emit('user', sessionStorage.getItem('id') + " is listening to" + brothersList[index]);
                                         }
                                         else
                                             socket.emit('user',  "Guest is listening to" + brothersList[index]);




                                         this.setState({login: !this.state.flag,indexx: index});
                                    }
                                    } key={index}>{brothersList[index] ? <div>{index+1}.&nbsp;{brothersList[index]}</div>:<div></div>}</a>

                                </div>

                            );
                        },)}
                    </div>


                    <div className="col-sm-6" style={{margin: 20 }}>
                        <label  style= {{"font-family": '"Shadows Into Light", "sans-serif"',fontSize: '20',marginLeft: '',color: '#21759b' }}>Side B</label>


                        {peaceList.map((songs,index)=>{
                            return(<div  style={{textAlign: 'left'}}>
                                    <a   style={{"font-family": '"Coming Soon", "cursive"',color: '#FFFFFF',fontSize: '15'  ,"cursor":"pointer"
                                    }} onClick={()=>{

                                        path="/public/file2/" + songs + ".mp3";
                                        console.log(path);
                                        document.getElementById('sound').src=path;
                                        if(sessionStorage.getItem('id')) {
                                            socket.emit('user', sessionStorage.getItem('id') + " is listening to" + peacedList[index]);
                                        }
                                        else
                                            socket.emit('user',  "Guest is listening to" + peacedList[index]);

                                        this.setState({background: {textAlign: 'center',background:  "url('/public/file2/doors.jpg')",backgroundSize: '100% 100%'}});
                                        this.setState({songName: peacedList[index]});

                                        this.setState({login: !this.state.flag,indexx: index});
                                    }
                                    } key={index}>{peacedList[index] ? <div>{index+1}.&nbsp;{peacedList[index]}</div>:<div></div>}
                                    </a>

                                </div>


                            );
                        })}}
                    </div>

                    <div style={{textAlign: 'center',margin: '50'}}>
                        <input style={{display: 'none'}} id="namess" type="text"/>

                    </div>
                </Paper>
                 <img style={{width: '100%',height:'30vh'}} src="/public/piano2.jpg"/>

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
        socket.on('user', function(msg) {
            toastr.info(msg);
        });
            socket.on('chat message', function(msg){
            console.log(msg);
            console.log("reached here");

            document.getElementById('namess').value=msg;
            console.log(listen_to_dj);
            if(listen_to_dj)
            {
                if(sessionStorage.getItem('id')!=null)
                socket.emit('user',sessionStorage.getItem('id') + " is listening to" + msg );

                toastr.info("Listening to " + msg);
                foo();recv_data=true;
            }
        });


    }
    componentWillUnmount()
    {
        song.pause();

    }

}

MusicPage.propTypes = {};

export default MusicPage;


