import useFetch from "../customHooks/useFetch"
import Title from "../customHooks/useTitle.jsx"
import Frame from "./Frame"
import "./framecreator.css"
import SideBarLeft from "./SideBarLeft"
import SideBarRight from "./SideBarRight"
export default function FrameCreator() {
	return (
		<>
			<Title
				title="Frame Creator"
				instructions="It's time to compose your shots, drag and drop your guests, when done press the smile button"
			/>
            <div id="frame-container-layout">
                <div id="sidebarleft">   <SideBarLeft/> </div>       
                <div id="framer">        <Frame/>        </div>       
                <div id="sidebarright"><SideBarRight/> </div>       
            </div>

		</>
	)
}


