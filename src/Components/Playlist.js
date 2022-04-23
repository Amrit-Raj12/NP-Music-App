import React from 'react';
import './Playlist.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const Playlist = (props) => {
    return (
        <div class="main_container">
<div class="main">
  <h1>All Musics</h1>
  <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="./images/titliaan_1.jpg" alt='song' /></div>
        <div class="card_content">
          <h2 class="card_title">Song Name:<span className="playlist_span">Titliyaan</span></h2>
          <p class="card_text">Artist:<span className="playlist_span">Hardy Sandhu</span></p>
          <button class="btn card_btn"><PlayArrowIcon /></button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="./images/LUT-GAYE_1.jpg" alt='song' /></div>
        <div class="card_content">
          <h2 class="card_title">Song Name<span className="playlist_span">Lut Gaye</span></h2>
          <p class="card_text">Artist<span className="playlist_span">Jubin Nautiyal</span></p>
          <button class="btn card_btn"><PlayArrowIcon /></button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
      <div class="card_image"><img src="./images/titliaan_1.jpg" alt='song' /></div>
        <div class="card_content">
          <h2 class="card_title">Song Name:<span className="playlist_span">Titliyaan</span></h2>
          <p class="card_text">Artist:<span className="playlist_span">Hardy Sandhu</span></p>
          <button class="btn card_btn"><PlayArrowIcon /></button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="./images/LUT-GAYE_1.jpg" alt='song' /></div>
        <div class="card_content">
          <h2 class="card_title">Song Name<span className="playlist_span">Lut Gaye</span></h2>
          <p class="card_text">Artist<span className="playlist_span">Jubin Nautiyal</span></p>
          <button class="btn card_btn"><PlayArrowIcon /></button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
      <div class="card_image"><img src="./images/titliaan_1.jpg" alt='song' /></div>
        <div class="card_content">
          <h2 class="card_title">Song Name:<span className="playlist_span">Titliyaan</span></h2>
          <p class="card_text">Artist:<span className="playlist_span">Hardy Sandhu</span></p>
          <button class="btn card_btn"><PlayArrowIcon /></button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="./images/LUT-GAYE_1.jpg" alt='song' /></div>
        <div class="card_content">
          <h2 class="card_title">Song Name<span className="playlist_span">Lut Gaye</span></h2>
          <p class="card_text">Artist<span className="playlist_span">Jubin Nautiyal</span></p>
          <button class="btn card_btn"><PlayArrowIcon /></button>
        </div>
      </div>
    </li>
  </ul>
</div>

<h3 class="made_by">Made with ♡</h3>
</div>
    )
}

export default Playlist
