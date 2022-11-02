import "./DeathArea.css";
import Quotes from "../DeathArea/Quotes/Quotes.js";
import { useState } from "react";

export default function DeathArea({ aliveState, setAliveState }) {
	let [shop, setShop] = useState(false);

	const openShop = () => {
		setShop(!shop);
		console.log("testing shop" + " " + shop);
	};

	const liveAgain = () => {
		setShop((shop = false));
		setAliveState(!aliveState);
	};

	return (
		<div className="deathArea">
			<div className="deathButton" onClick={openShop}>
				Shop
			</div>
			<div className="deathButton" onClick={liveAgain}>
				Make New Attempt
			</div>
			<Quotes />
		</div>
	);
}
