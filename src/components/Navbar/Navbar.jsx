import {Link} from "react-router-dom"


import './navbar.css'

export default function Navbar(){

    return(
    <nav className="main-nav">
          <Link to="suggestionsList">  Shot Suggestion List </Link>
          <Link to="avatarCreator">    Avatar Creator       </Link>
          <Link to="frameCreator">     Frame Creator        </Link>
          <Link to="photographerview"> Photographer View    </Link>
      </nav>
    )
}

