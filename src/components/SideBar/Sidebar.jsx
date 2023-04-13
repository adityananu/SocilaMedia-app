import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MessageIcon from '@mui/icons-material/Message';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Sidebar = () => {
  return (
    <div className="sidebar">
        Guest <br /><br />
        <SidebarRow Icon = {CoronavirusIcon} title = "Get covid vacination" />
        <SidebarRow Icon = {EmojiFlagsIcon} title = "Flags" />
        <SidebarRow Icon = {PeopleAltIcon} title = "People" />
        <SidebarRow Icon = {MessageIcon} title = "message" />
        <SidebarRow Icon = {StorefrontIcon} title = "Store" />
        <SidebarRow Icon = {VideoSettingsIcon} title = "videos" />
        <SidebarRow Icon = {KeyboardArrowDownIcon} title = "More" />
    </div>
  )
}

export default Sidebar