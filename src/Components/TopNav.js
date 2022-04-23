import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GetAppIcon from '@material-ui/icons/GetApp';
import logo from './logo.png'

const TopNav = () => {
  return (
    <div className="App_nav">
      <ul className="App_logo">
        <li><img src={logo} style={{width:'100px',height:'50px',position:'relative',top:'-10px'}} alt='logo'/></li>

       
        <div class="top_btn">
          <span>Profile<ExpandMoreIcon  className="btn_icon" /></span>
          <div class="dot"></div>
        </div>
        <div class="top_btn">
          <span>Download<GetAppIcon className="btn_icon" /></span>
          <div class="dot"></div>
        </div>
        {/* <span className="App_profile">
                    <li className="profile_list">Profile <span><ExpandMoreIcon className="profile_downIcon" /></span> </li>
                </span>
                <span className="App_download">
                <li className="download_list">Download <span><ExpandMoreIcon className="download_downIcon" /></span> </li>
                </span> */}
      </ul>
    </div>
  );
};

export default TopNav;
