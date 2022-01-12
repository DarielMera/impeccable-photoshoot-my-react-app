// import { useState } from "react"
import {Link} from "react-router-dom"
import './responsivemenu.css'


export default function ResponsiveMenu(){

    return (
      <>
        <div className="dropdown">
          <button
            className="dropbtn"
            style={{
              display: "flex",
              direction: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Menu
            <div className="burgerContainer">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </button>

          <nav className="dropdown-content">
            <Link to="home"> Home </Link>
            <Link to="suggestionsList"> Shot Suggestion List </Link>
            <Link to="avatarCreator"> Avatar Creator </Link>
            <Link to="frameCreator"> Frame Creator </Link>
            <Link to="photographerview"> Photographer View </Link>
          </nav>
        </div>
      </>
    );
}



