// import useFetch from "../customHooks/useFetch"
import Title from "../customHooks/useTitle.jsx"
import Frame from "./Frame"
import "./framecreator.css"
import SideBarLeft from "./SideBarLeft"
import SideBarRight from "./SideBarRight"
import data from './data.json'

export default function FrameCreator() {
	// const data = useFetch("https://feipshoot.uk.r.appspot.com/avatars")

	return (
		<>
			<Title
				title="Frame Creator"
				instructions={`It's time to compose your shots, drag and drop your guests by their name, press the smile button to save, go to Photographer View`}  
			/>
		
            <div id="frame-container-layout">
                <div id="sidebarleft">   <SideBarLeft data={data} /> </div>       
                <div id="framer">        <Frame />        </div>       
                <div id="sidebarright"><SideBarRight data={data } /> </div>       
            </div>

		</>
	)
}


