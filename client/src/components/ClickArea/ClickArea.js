import "./ClickArea.css";
import Counter from "./Counter/Counter.js";
import { useState } from "react";
export default function ClickArea({ aliveState, setAliveState }) {
	const [counterMax, setCounterMax] = useState(10);

	let counter = counterMax;

	const addTime = () => {
		if (counter > 0) {
			counter = +Math.round((counter + counterMax / 1000) * 100) / 100;
			console.log("we hit the add time function" + " " + counter);
			if (counter > counterMax) {
				counter = counterMax;
			}
		}
	};

	return (
		<div className="clickArea" onClick={addTime}>
			<div>{counter}</div>
			<Counter
				counter={counter}
				counterMax={counterMax}
				aliveState={aliveState}
				setAliveState={setAliveState}
			/>
		</div>
	);
}
