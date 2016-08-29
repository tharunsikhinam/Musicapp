import React, {PropTypes} from 'react';


let song; let path;

class MusicPage extends React.Component {

    constructor() {
        super();
        song = new Audio("/public/killing.mp3");
        song.play();

    }

    render() {
        return (<div>
            <div>music page</div>
            <button type="button"  onClick={()=>{song.pause();}}> Pause</button>
                <button type="button"  onClick={()=>{


                    song.play();}}> Play</button>

            </div>
        );
    }

    componentDidMount()
    {}
    componentWillMount()
    {

        setInterval(()=>{
            console.log(song.currentTime);
        },500);
    }
    componentWillUnmount()
    {
         song.pause();

    }

}

MusicPage.propTypes = {};

export default MusicPage;


