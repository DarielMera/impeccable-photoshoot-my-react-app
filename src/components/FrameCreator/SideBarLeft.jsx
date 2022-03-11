function SideBarLeft() {
	return (
		<sidebar class="sidebarLeft">
			<div id="leftbar" draggable="true" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
		</sidebar>
	)
}

export default SideBarLeft
