import "./ClickArea.css";
import Trees from "./Backgrounds/trees.jpg";
import Quotes from "./Quotes/Quotes.js";
import Counter from "./Counter/Counter.js";
import { useState } from "react";

export default function ClickArea() {
	const [counterMax, setCounterMax] = useState(10);
	const [counter, setCounter] = useState(counterMax);

	const addTime = () => {
		setCounter(counter + counterMax / 1000);
	};

	return (
		<div className="clickArea">
			<Counter />
			{/* <img className="background" src={Trees} onClick={addTime}></img> */}
			<Quotes />
		</div>
	);
}
