import "./Shop.css";

export default function Shop({ liveAgain }) {
	return (
		<div className="shopArea">
			<section className="respawnArea">
				<div className="deathButton" onClick={liveAgain}>
					Make New Attempt
				</div>
			</section>
			<section className="shopItemArea">
				<div className="shopItem"> Shoes</div>
				<div className="shopItem"> A Stick</div>
				<div className="shopItem">Pie</div>
				<div className="shopItem"></div>
				<div className="shopItem"></div>
				<div className="shopItem"></div>
			</section>
		</div>
	);
}
