import "./Counter.css";

export default function Counter({ counter, setCounter }) {
	setInterval(() => {
		if (counter <= 0) {
			clearInterval();
		} else {
			setCounter(counter--);
		}
	}, 1000);

	return <div className="counterArea">{counter}</div>;
}
