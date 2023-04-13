import React from "react";
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img className="logo" src={logo} alt="logo image" />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search"/>
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="medium"  />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="medium" />
        </div>
        <div className="header__option">
          <VideoLibraryIcon fontSize="medium" />
        </div>
        <div className="header__option">
          <StorefrontIcon fontSize="medium" />
        </div>
        <div className="header__option">
          <PeopleAltIcon fontSize="medium" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <AccountCircleIcon style={{color:"gray"}} />
          <strong>Guest</strong>
        </div>
        <div className="header__elements">
          <AddIcon />
          <ForumIcon />
          <NotificationsActiveIcon />
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
