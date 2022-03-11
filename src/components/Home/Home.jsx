import HeaderHome from "./HeaderHome"
import AppPurpose from "./AppPurpose"
import BenefitsOfApp from "./BenefitsOfApp"
import TryAppButton from "./TryAppButton"
import Footer from "../Footer/Footer"
import "./home.css"
export default function Home() {
	return (
		<>
			<HeaderHome />
      <AppPurpose />
      <TryAppButton />
      <BenefitsOfApp />
			<Footer />
		</>
	)
}
