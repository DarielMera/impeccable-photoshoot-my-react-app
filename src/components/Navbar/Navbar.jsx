import {Link} from "react-router-dom"
import './navbar.css'

export default function Navbar(){

    return(
    <nav className="main-nav">
          <Link className="linkColor" to="/" >  Home </Link>
          <Link className="linkColor" to="suggestionsList" >  Shot Suggestion List </Link>
          <Link className="linkColor" to="avatarCreator">    Avatar Creator       </Link>
          <Link className="linkColor" to="frameCreator">     Frame Creator        </Link>
          <Link className="linkColor" to="photographerview"> Photographer View    </Link>
          <Link className="linkColor" to="Help">             Help?              </Link>
      </nav>
    )
}

