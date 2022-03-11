export default function BenefitsOfApp() {
    const benefitsOfApp = [
        "Create your Frames",
        "Position your Guests",
        "Pre-Define Who Stands Next to you",
        "Identify Who is not Present",
        "Smoother Photoshoot Flow",
        "No More Yelling!!!!!"
    ]

	return (
		<section>
			<div className="marketing center-elements">
				<div className="marketing-container marketing-container-left"></div>
				<div className="marketing-container marketing-container-right"></div>
				<ul>
					{benefitsOfApp.map((blist, i)=>(
                        <> 
                        <li key={i}>{blist}</li><br/>
                        </>
                    ))}
				</ul>
			</div>
		</section>
	)
}
