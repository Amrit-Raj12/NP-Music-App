import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Player from "./Components/Player";
import TopNav from './Components/TopNav';
import Playlist from './Components/Playlist';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  const [songs] = useState([
    {
      title:"Titliyaan",
      artist:"Hardy Sandhu",
      img_src:"./images/titliaan_1.jpg",
      src:"./songs/Yaar Mera Titliyan Warga(PaglaSongs).mp3",
    },
    {
      title:"Lut Gaye",
      artist:"Jubin Nautiyal",
      img_src:"./images/LUT-GAYE_1.jpg",
      src:"./songs/Lut Gaye(PaglaSongs).mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(()=>{
    setNextSongIndex(()=>{
      if(currentSongIndex+1>songs.length-1){
        return 0
      } 
      else {
        return currentSongIndex + 1;
      }
    })
  },[currentSongIndex, songs.length])

  return (
    <>
    <Router>
    <TopNav />
    <div className="App">
    <Sidebar />
      <Switch>
        <Route exact path="/" render={()=>{
          return (
            <>
      <Player
      currentSongIndex={currentSongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs}
      
      />
      </>)
      }}>  
      </Route>
      <Route exact path="/all_playlist">
     <Playlist />
     </Route>
     </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
