import { useState, useEffect } from "react"
import Flip from 'react-reveal/Flip'

import {Link} from 'react-router-dom'
import Title from "../customHooks/useTitle.jsx"
import Frame from "./Frame"
import SideBarLeft from "./SideBarLeft"
import SideBarRight from "./SideBarRight"
import "./framecreator.css"

const center = {
	textAlign: "left",
	backgroundColor: "gray",
	color: "white",
	padding: "14px 14px 24px 24px",
	width: "fit-content",
	border: "solid 3px rgb(0, 0, 0, 1)",
	borderRadius: "14px 0 14px 0",
	margin: "5px auto",
	textShadow: "3px 0px 10px rgb(0, 0, 0)",
}


export default function FrameCreator() {
	
const [data, setData] = useState([])

useEffect(()=>{
	fetch("https://feipshoot.uk.r.appspot.com/avatars")
	.then((res)=> res.json())
	.then((data)=> setData(data))

},[])
	return (
		<>
				<Flip bottom> 
			<article style={center}>
			<h2 style={{ marginBottom: "5px", textAlign: 'center' }}>Frame Creator</h2>
			<ol>
				<li>It's time to compose your shots</li>
				<li>Visit <Link to='/app/suggestionsList'><span style={{color: 'yellow'}}>Shot Suggestion List</span></Link> for tips</li>
				<li>Drag and Drop your guests by their name</li>
				<li>Press the smile button to save</li>
				<li>Visit <Link to='/app/photographerview'><span style={{color: 'yellow'}}>Photographer View</span></Link> for saved shots</li>
			</ol>
			</article>
			</Flip>
		
            <div id="frame-container-layout">
                <div id="sidebarleft">   <SideBarLeft data={data} /> </div>       
                <div id="framer">        <Frame />        </div>       
                <div id="sidebarright"><SideBarRight data={data } /> </div>       
            </div>

		</>
	)
}


