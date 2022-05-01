import Title from "../customHooks/useTitle"
import "./help.css"
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
export default function Help() {
	return (
		<>
			<Title title="Overview & Guide" instructions={`App Purpose and How to use it`} />
      <Bounce left duration={2000}>
			<article className="help-container ">
				<p>
					SPA built with the MERN STACK, deployed with FIREBASE. It's purpose is to assist
					photographers by easing their workflow at wedding photoshoots
				</p>
				<br />
				<div className="logos">
					<img
						alt="html logo"
						src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-shadow-tal-revivo.png"
					/>
					<img alt="css logo" src="https://img.icons8.com/color/48/000000/css3.png" />
					<img alt="reac logo" src="https://img.icons8.com/ultraviolet/48/react--v1.png" />
					<img
						alt="javascript logo"
						src="https://img.icons8.com/color/48/000000/javascript--v1.png"
					/>
					<img alt="mongodb logo" src="https://img.icons8.com/color/48/000000/mongodb.png" />
					<img alt="nodejs logo" src="https://img.icons8.com/color/48/000000/nodejs.png" />
					<span>Express</span>
					<img alt="firebase logo" src="https://img.icons8.com/color/48/000000/firebase.png" />
				</div>
				<hr />
				<br />
        <Fade> 
				<h2> How to use the Impeccable Photoshoot app sections?</h2>
				<br />

				<ul>
					<h4>Shot Suggestion List</h4>
					<br />
					<li>This practical list shows how photographers tipically position the wedding guests</li>
					<li>Use it as a guide to start positioning your guests</li>

					<br />
					<h4>Avatar Creator</h4>
					<br />

					<li> Enter your guest info</li>
					<li> Press the create avatar button</li>
					<li> Repeat this process for every guest</li>
					<li> Your avatar info will be saved in the database</li>

					<br />
					<h4>Frame Creator </h4>
					<br />
					<li> Saved avatars will appear on both columns</li>
					<li> Drag n Drop your guest into the middle frame</li>
					<li> Position your guests where you wish</li>
					<li> You can always return the guest back to the columns if you change your mind</li>
					<li> You can also re-order the avatars. Note: drop n drag towards the right direction</li>
					<li>
						{" "}
						It is also important to drag the avatars by their names as action will assure that the
						information is moved along with the image
					</li>
					<li>
						{" "}
						you can always press the refresh button in the browser to clear the frame and start over
					</li>
					<li> Press the smile button and the frames will be saved to the database </li>
					<li> To see a list of your frames click on the photographer view</li>

					<br />
					<h4>Photographer View</h4>
					<br />

					<li>Shows a list of all the frames created by the user so far</li>
					<li>
						This list can now be used by the photographer the day of the wedding at the wedding
						photoshoot
					</li>
					<li>
						The photographer or the assistant can now call every guests by their name and knows
						exactly where to position them
					</li>
					<li>
						After every shot the frame can be marked as take by pressing their respective check box
					</li>
				</ul>
				<br />

				<h2> Targeted problem to be solved: Wedding Photoshoot Chaos! </h2>
				<br />

				<ol>
					<li>Difficulty managing large groups</li>
					<li>Disorientation and confusion </li>
					<li>Guest Interference </li>
					<li>Missing guest in portraits</li>
					<li>Time management</li>
				</ol>
				<br />

				<h2>Solutions the Impeccable Photoshoot App provides and Who benefits?</h2>
				<br />
				<ol>
					<li>
						Bride and Groom can now Pre-plan desired portraits, exactly how they would like the
						photographer to take them. The client is able to assure specific portraits with specific
						guests are not missed. They also decide who stands next to them.
					</li>
					<li>
						The Photographer is now able to Personalize the photoshoot section. He now has a clear
						understanding of who should be on each frame, and their positions. Now the photographer
						(or the assistant) can easily call the guests by their names but must importantly is
						able to notify the client (inmediately) if a guest is missing. (no more yelling!!!!) and
						now the photographer is exempt from being blamed if the guests are not present and don't
						appear in the portraits).
					</li>
					<li>
						Now that the photogreaphers are able to Improve their workflow and time management. The
						wedding planner does not have to worry about this section interrupting the already stablished
						schedule and the event can keep on running on time and smoothly.
					</li>
					<li>
						All the guests can now relax, refresh and have a drink before proceeding to the
						reception (or next section). Protectig the Bride and Groom (and the wedding party) from
						long sun exposures and finishing as quickly as possible increases the chances of the
						subject to provide a more natural look and smile. Now the photographer can concentrate
						their tension into their main focus which to take stunning images and assure an
						impeccable photoshoot.
					</li>
				</ol>
				<br />
				<div className="underconstruction">
					<img
						alt="under construction logo"
						src="https://img.icons8.com/flat-round/30/000000/under-construction--v1.png"
					/>
					<br />
					<span>Under Construction - what's next?</span>
				</div>
				<br />

				<ul>
					<li>
						<input type="checkbox" disabled /> User Authentication/Authorization
					</li>
					<li>
						<input type="checkbox" disabled /> Implement TypeScript
					</li>
				</ul>
          </Fade>
			</article>
      </Bounce>
		</>
	)
}
