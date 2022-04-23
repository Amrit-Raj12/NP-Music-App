import React from 'react';
import { faBackward, faPause, faForward, faPlay, faRandom} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RepeatIcon from '@material-ui/icons/Repeat';



const Controls = (props) => {
    return (
        <div className="control">
            <button className="control_shufButton">
                <FontAwesomeIcon icon ={faRandom} />
            </button>
            <button className="control_skipButton" onClick={()=>props.skipSong(false)}>
                <FontAwesomeIcon icon ={faBackward} />
            </button>
            <button className="control_PlayButton" onClick={()=> props.setIsPlaying(!props.isPlaying)}>
            <FontAwesomeIcon icon ={props.isPlaying?faPause:faPlay} />
            </button>
            <button className="control_skipButton" onClick={()=>props.skipSong()}>
            <FontAwesomeIcon icon ={faForward} />
            </button>
            <button className="control_repeatButton">
                <RepeatIcon className="repeatIcon" />
            </button>
        </div>
    )
}

export default Controls
