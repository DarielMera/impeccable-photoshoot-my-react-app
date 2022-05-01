import {useState} from 'react'

import BrideForm from "./BrideForm"
import FemaleForm from "./FemaleForm"
import GroomForm from "./GroomForm"
import MaleForm from "./MaleForm"
import GirlForm from "./GirlForm"
import BoyForm from "./BoyForm"
import Title from '../customHooks/useTitle.jsx';
import "./formavatarcreatorstyle.css"
import Fade from 'react-reveal/Fade';
import React from 'react'

export default function AvatarCreator() {	
	
	return (
		<>
			<Title 
			title="Avatar Creator"
			instructions={`Who are the priviledge ones to be in your portraits ?`}
			/>
			
			<div id="formcontainer">
			<Fade left>
				<div id="brideForm" ><BrideForm/></div>       
				<div id="groomForm" ><GroomForm/></div>       
				<div id="femaleForm" className="form-styles"><FemaleForm/></div>       
				<div id="maleForm"   className="form-styles"><MaleForm /></div>       
				<div id="girlForm"   className="form-styles" style={{marginLeft:"5px"}}> <GirlForm/> </div>       
				<div id="boyForm"    className="form-styles" style={{marginLeft:"5px"}}> <BoyForm /> </div>
			</Fade>
			</div>
		</>
	)
}
