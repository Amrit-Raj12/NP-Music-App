import React, { useEffect, useRef, useState } from 'react';
import Controls from './Controls';
import Details from "./Details";

const Player = (props) => {

    const audioEl = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(()=>{
        if(isPlaying){
            audioEl.current.play()
        }
        else{
            audioEl.current.pause()
        }
    })

    const skipSong=(forwards=true)=>{
        if(forwards){
            props.setCurrentSongIndex(()=>{
                let temp = props.currentSongIndex;
                temp++;

                if(temp>props.songs.length-1){
                    temp=0;
                }
                return temp;
            });
        }else{
            props.setCurrentSongIndex(() =>{
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                  }
                  return temp;
            });
        }
    };

    return (
        <>

        <div className="player">
           
            
            <h3>Playing Now</h3>
            <Details
            song={props.songs[props.currentSongIndex]}
            
            />
            <Controls
            
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            skipSong={skipSong}

            />
            <audio 
            
            className="player_audio"
            src = {props.songs[props.currentSongIndex].src}
            ref = {audioEl}
            controls loop
            >
            </audio>
            <p>
                Next UP: 
            <span>
            {" "}{props.songs[props.nextSongIndex].title} by{" "}
               {props.songs[props.nextSongIndex].artist}  
            </span>    
            </p>
      
        </div>
        </>
    )
}

export default Player
