import "./Counter.css";

export default function Counter({ counter, aliveState, setAliveState }) {
	function timeDown() {
		counter = counter--;
		console.log("timer is being hit" + " " + counter);
	}

	const timer = setInterval(timeDown, 1000);

	if (counter <= 0) {
		setAliveState(!aliveState);
		clearInterval(timer);
	}

	return <div className="counterArea">{counter}</div>;
}
