import "./ClickArea.css";
import Quotes from "./Quotes/Quotes.js";
import Counter from "./Counter/Counter.js";
import { useState } from "react";

export default function ClickArea() {
	const [counterMax, setCounterMax] = useState(10);
	const [counter, setCounter] = useState(counterMax);

	const addTime = () => {
		if (counter > 0) {
			setCounter(Math.round((counter + counterMax / 1000) * 100) / 100);
			if (counter > counterMax) {
				setCounter((counter = counterMax));
			}
		}
	};

	return (
		<div className="clickArea" onClick={addTime}>
			<Counter
				counter={counter}
				setCounter={setCounter}
				counterMax={counterMax}
			/>
			{/* <Quotes /> */}
		</div>
	);
}
