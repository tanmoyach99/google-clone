import React from "react";
import "./home.css";
import { Avatar } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import Search from "../../Components/Search/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <p>About</p>
          <p>Store</p>
        </div>
        <div className="home__headerRight">
          <p>Gmail</p>
          <p>Images</p>
          <AppsIcon className="app__icon" />
          <Avatar className="avatar__icon" />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          alt=""
        />
        <Search />
      </div>
    </div>
  );
};

export default Home;
