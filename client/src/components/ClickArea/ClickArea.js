import "./ClickArea.css";
import Counter from "./Counter/Counter.js";
import { useState, useEffect } from "react";
export default function ClickArea({ aliveState, setAliveState }) {
	const [counterMax, setCounterMax] = useState(10);
	let [counter, setCounter] = useState(counterMax);

	const addTime = () => {
		if (counter > 0) {
			setCounter((counter = counter + 1));
			console.log("we hit the add time function" + " " + counter);
			if (counter > counterMax) {
				setCounter((counter = counterMax));
			}
		}
	};

	let timer;
	useEffect(() => {
		function timeDown() {
			setCounter((counter = counter - 1));
		}

		timer = setInterval(timeDown, 1000);

		if (counter <= 0) {
			return clearInterval(timer), setAliveState(!aliveState);
		}
	});
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
