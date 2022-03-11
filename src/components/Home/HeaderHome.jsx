import iplogo from "../../svg/ip-logo.png"

function HeaderHome() {
	return (
		<>
			<section>
				<header>
					<section className="home--header-container">
						<div className="nameLogoSection">
							<img
								id="logo"
								src={iplogo}
								width="20%"
								height="100%"
								alt="impeccable photoshoot logo"
							/>
							<div className="txtShadowFx">
								<h2 className="txtIP">Impeccable Photoshoot</h2>
								<div className="txtIP-slogan">One frame at the time</div>
							</div>
						</div>
						{/*<UserLoginSignin />*/}
					</section>
				</header>
			</section>
		</>
	)
}

export default HeaderHome
