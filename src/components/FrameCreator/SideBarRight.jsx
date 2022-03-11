function SideBarRight() {
	return (
		<sidebar class="sidebarRight">
			<div id="rightbar" draggable="true" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
		</sidebar>
	)
}

export default SideBarRight
