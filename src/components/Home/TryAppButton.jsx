import {useNavigate, Link} from 'react-router-dom'

function TryAppButton() {
const navigate = useNavigate()
    return ( 
        <> 
        <h1 
        className="tryitnow"
        onClick={() => navigate ("avatarCreator")}
        
        >
            Try it Now
        </h1>
        <button onClick={() => navigate("avatarCreator")}>See our products</button>
        <Link to='/avatarcreator'>Enter</Link>
        </>
        
     );
}

export default TryAppButton;
