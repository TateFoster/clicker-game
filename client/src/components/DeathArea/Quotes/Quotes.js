import "./Quotes.css";

const quotes = [
	"Did you think that you could escape?",
	"Not even death shall grant you rest.",
	"Why not try again? Maybe you will be luckier.",
	"I always see you",
	"There is no escape.",
	"You deserve this.",
	"You know what you did.",
	"We can smell your fear.",
];

export default function Quotes() {
	return (
		<div className="quoteArea">
			{quotes[Math.floor(Math.random() * quotes.length)]}
		</div>
	);
}
