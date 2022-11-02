import ClickArea from "./components/ClickArea/ClickArea.js";
import Items from "./components/Items/Items.js";
import DeathArea from "./components/DeathArea/DeathArea.js";
import { useState } from "react";
import "./App.css";

function App() {
	let [aliveState, setAliveState] = useState(true);

	if (aliveState) {
		return (
			<div className="App">
				<ClickArea aliveState={aliveState} setAliveState={setAliveState} />
				<Items />
			</div>
		);
	} else {
		return (
			<div className="App">
				<DeathArea aliveState={aliveState} setAliveState={setAliveState} />
			</div>
		);
	}
}

export default App;
