import postData from "./postData"
import smileyFace from "./smile.png"

const frameComposition = () => {
	const arrayOfAvatarsIdsInPresentFrame = []
	const framer = document.getElementById("frame")
	for (let i = 0; i < framer.children.length; i++) {
		arrayOfAvatarsIdsInPresentFrame.push(framer.children[i].getAttributeNode("id").value)
	}
	// console.log(arrayOfAvatarsIdsInPresentFrame);
	return arrayOfAvatarsIdsInPresentFrame
}

function flashing() {
	let frame = document.getElementById("frame")
	if (frame.childElementCount > 0) {
		frame.style.backgroundColor = "black"

		setTimeout(() => {
			frame.style.display = "flex"
			frame.style.flexDirection = "column"
			frame.style.justifyContent = "center"
			frame.style.alignItems = "center"
			frame.style.textAlign = "center"
			frame.style.backgroundColor = "white"
			frame.style.fontSize = "40px"
            
			const img = document.createElement("img")
			img.src = `${smileyFace}`
			img.style.width = "400px"
			img.style.height = "400px"
			frame.innerHTML = "saving..."
			frame.appendChild(img)
			img.style.opacity = 0.7
			setTimeout(() => {
				img.style.display = "none"
				frame.innerHTML = " "
			}, 1000)
		}, 1000)
	}
}

function refreshAll() {
	setTimeout(() => {
		document.location.reload()
	}, 1000)
}

function Shutter() {
	//   postData(frameComposition())
	flashing()
	refreshAll()
}

export default function SmileButton() {
	// let avatarsNodeList = ;

	return (
		<button
			className="smileButton"
			// onClick={refreshAll}
			onClick={Shutter}>
			smile
		</button>
	)
}
