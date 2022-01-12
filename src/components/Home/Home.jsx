import iplogo from '../../svg/ip-logo.png'
import Footer from '../Footer/Footer'
import './home.css'

function HeaderHome(){

    return (
        <> 
        <section className='container'>

              <header className="header">

        <div className="header-container">
        <div className="nameLogoSection">
          <img id="logo" src={iplogo} width="20%" height="100%" alt="impeccable photoshoot logo"/>
          <div className="txtIPslogan">
            <h2 className="txtIP">Impeccable Photoshoot</h2>
            <div className="txtIP-slogan">One frame at the time</div>
          </div>
        </div>
        <div className="logUserIcon center-elements-column">
            <i className="fas fa-user"></i>
            <div>Login</div>
            <div className="signin">Signin</div>
          </div>
      </div>
      </header>

      <main className="main">

        <div className="marketing center-elements">

          <div className="marketing-container marketing-container-left">        
          </div>

          <div className="marketing-container marketing-container-right">        
          </div>
          

          <ul> 
            <li>Control your Frames</li><br/>            
            <li>Position your Guests</li><br/>
            <li>Pre-Define Who Stands Next to you</li><br/>
            <li>Identify Who is not Present</li><br/>
            <li>Smoother Photoshoot Flow</li><br/>
            <li>No More Yelling!!!!!!</li><br/>
          </ul>


            </div>
      </main>


      </section>

</>

     )
    }


export default function Home(){
    return(
        <> 
        <HeaderHome />
        <div className='homeBody'></div>
         <Footer/>
         </>

    )
}