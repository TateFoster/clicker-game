import "./Counter.css";

export default function Counter({ counter, setCounter, counterMax }) {
	const timer = setInterval(() => {
		if (counter <= 0) {
			clearInterval(timer);
		} else {
			setCounter(Math.round((counter - 1) * 100) / 100);
		}
	}, 1000);

	return <div className="counterArea">{counter}</div>;
}
