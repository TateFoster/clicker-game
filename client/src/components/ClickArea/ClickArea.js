import "./ClickArea.css";
import Trees from "./Backgrounds/trees.jpg";
import Quotes from "./Quotes/Quotes.js";
import Counter from "./Counter/Counter.js";

export default function ClickArea() {
	return (
		<div className="clickArea">
			<Counter />
			<img className="background" src={Trees}></img>
			<Quotes />
		</div>
	);
}
