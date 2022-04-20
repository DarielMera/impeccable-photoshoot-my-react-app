import {Navigate} from 'react-router-dom'

function TryAppButton() {

    return ( 
        <h1 
        className="tryitnow"
        onClick={<Navigate to='/avatarCreator' />}
        >
            Try it Now
        </h1>

        
     );
}

export default TryAppButton;
