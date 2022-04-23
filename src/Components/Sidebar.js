import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CopyrightIcon from '@material-ui/icons/Copyright';
// import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar"
      style={{ display: 'flex',position:'relative',top:'80px',left:'0', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#FFCE00" backgroundColor="#C01646">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: '#FFCE00' }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked" style={{color:'#C01646'}}>
              <CDBSidebarMenuItem icon="music" style={{background:'#ffce00'}}>All Songs<ArrowDropDownIcon style={{position:'relative',left:'70px'}} /></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="" activeClassName="activeClicked" style={{color:'#C01646'}}>
              <CDBSidebarMenuItem icon="chart-bar" style={{background:'#ffce00'}}>Top Musics<ArrowDropDownIcon style={{position:'relative',left:'60px'}} /></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="" activeClassName="activeClicked" style={{color:'#C01646'}}>
              <CDBSidebarMenuItem icon="user" style={{background:'#ffce00'}}>By Artist<ArrowDropDownIcon style={{position:'relative',left:'80px'}} /></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="" activeClassName="activeClicked" style={{color:'#C01646'}}>
              <CDBSidebarMenuItem icon="language" style={{background:'#ffce00'}}>
                English
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to=""
              target="_blank"
              activeClassName="activeClicked" style={{color:'#C01646'}}
            >
              <CDBSidebarMenuItem icon="language" style={{background:'#ffce00'}}>
               Hindi
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
              color:'#FFCE00',
              marginTop:'-130px',
            }}
          >
           <CopyrightIcon  /> copyright
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;