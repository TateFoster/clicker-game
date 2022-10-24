import "./ClickArea.css";
import Trees from "./Backgrounds/trees.jpg";
import Quotes from "./Quotes/Quotes.js";
import Counter from "./Counter/Counter.js";
import { useState } from "react";

export default function ClickArea() {
	const [counterMax, setCounterMax] = useState(10);
	const [counter, setCounter] = useState(counterMax);

	const addTime = () => {
		if (counter > 0) {
			setCounter(counter + counterMax / 1000);
			console.log(counter);
		}
	};

	return (
		<div className="clickArea" onClick={addTime}>
			<Counter counter={counter} setCounter={setCounter} />
			<Quotes />
		</div>
	);
}
