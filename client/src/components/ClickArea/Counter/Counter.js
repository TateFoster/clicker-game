import "./Counter.css";

export default function Counter({ counter, setCounter, counterMax }) {
	function timeDown() {
		setCounter(counter - 1);
	}

	const timer = setInterval(timeDown, 1000);

	if (counter <= 0) {
		clearInterval(timer);
	}

	return <div className="counterArea">{counter}</div>;
}
