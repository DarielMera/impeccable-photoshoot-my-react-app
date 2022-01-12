import bclogo from '../../svg/bc-logo.png'
import copyright from '../../svg/copyright.png'
import linkedin from '../../svg/linkedin.png'
import techublogo from '../../svg/techub-logo.png'
import github from '../../svg/github.png'
import './footer.css'

export default function Footer(){

    return (
        <footer className="footer-container">
        <p>Copyright<img src={copyright} alt="copyright logo" width="10px" height="10px" />2021 Dariel Mera</p>
         <div className="organizations-logos"> 
          <a href="https://www.linkedin.com/in/dariel-mera-b6454057/" >
            <img src={linkedin} alt="linkedin logo" width="22px" height="22px" />
          </a>
          <a href="https://bocacode.com/candidates/software-engineer/dariel-mera">
            <img src={bclogo}  alt="boca code logo" width="22px" height="22px" />
          </a>
          <a href="https://techhubsouthflorida.org/hack-for-inclusion-event/?utm_source=TECH+HUB+SOUTH+FLORIDA&utm_campaign=1a713feb7d-Newsletter_6_NEW9_4_2015_COPY_01&utm_medium=email&utm_term=0_b713bd7972-1a713feb7d-158993226&mc_cid=1a713feb7d&mc_eid=f81c203332" >
            <img src={techublogo} alt="south florida techub logo" width="24px" height="24px" />       
          </a>
          <a href="https://github.com/DarielMera">
            <img src={github} width="22px" height="22px"  alt="github logo" />
          </a>
          </div>
      </footer>

    )
}