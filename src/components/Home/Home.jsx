import {Route, Routes} from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import HeaderHome from "./HeaderHome"
import AppPurpose from "./AppPurpose"
import BenefitsOfApp from "./BenefitsOfApp"
import TryAppButton from "./TryAppButton"
import Footer from "../Footer/Footer"

import DisplayApp from "../../App"
import "./home.css"
export default function Home() {
	return (
		<>
		<Fade duration={2000}> 
			<HeaderHome />
			</Fade>
      <AppPurpose />
      <TryAppButton />
      <BenefitsOfApp />
			<Footer />
			<Routes>
				<Route path="/app/*" element={<DisplayApp />} />
			</Routes>
		</>
	)
}
