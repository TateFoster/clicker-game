import "./DeathArea.css";
import Quotes from "../DeathArea/Quotes/Quotes.js";
import skull from "../Backgrounds/skull.png";
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
			<img src={skull} className="deathIcon"></img>
			<div className="deathButtonArea">
				<div className="deathButton" onClick={openShop}>
					Shop
				</div>
				<div className="deathButton" onClick={liveAgain}>
					Make New Attempt
				</div>
			</div>
			<Quotes />
		</div>
	);
}
