import React, {useState} from "react";

//create your first component
const Home = () => {
	const [activeLight, setActiveLight] = useState("red");
	return (
		<div id="whole-wheat" className="text-center mx-auto">
			<div className="stick">
			</div>
			<div className="lights">
			<div className={activeLight === "red" ? "red light glow" : "red light"} onClick={()=>setActiveLight("red")}></div>
			<div className={activeLight === "yellow" ? "yellow light glow" : "yellow light"} onClick={()=>setActiveLight("yellow")}></div>
			<div className={activeLight === "green" ? "green light glow" : "green light"} onClick={()=>setActiveLight("green")}></div>
			</div>
		</div>
	);
};

export default Home;
