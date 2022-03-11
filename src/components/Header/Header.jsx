import iplogo from "../../svg/ip-logo.png"
import "./header.css"

export default function Header() {
	return (
		<header className="header-container">
			<section className="nameLogoSection">
				<img id="logo" src={iplogo} width="20%" height="100%" alt="impeccable photoshoot logo" />
				<div className="txtIPslogan">
					<h2 className="txtIP">Impeccable Photoshoot</h2>
					<div className="txtIP-slogan">One frame at the time</div>
				</div>
			</section>
		</header>
	)
}
