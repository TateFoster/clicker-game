import "./DeathArea.css";
import Quotes from "./Quotes/Quotes.js";
import Shop from "./Shop/Shop.js";
import skull from "../Backgrounds/skull.png";
import { useState } from "react";

export default function DeathArea({ aliveState, setAliveState }) {
	let [shop, setShop] = useState(false);

	const openShop = () => {
		setShop(!shop);
	};

	const liveAgain = () => {
		setShop((shop = false));
		setAliveState(!aliveState);
	};
	if (shop) {
		return (
			<div className="deathArea">
				<Shop liveAgain={liveAgain} />
			</div>
		);
	} else {
		return (
			<div className="deathArea">
				<img
					src={skull}
					alt="Black demonic skull with wings"
					className="deathIcon"
				></img>
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
}
