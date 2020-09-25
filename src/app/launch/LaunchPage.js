import React, { useState } from "react";
import "./LaunchPage.css";
import CatsatLogoSVG from "../../images/paw-icon.svg";
import FeedContainer from "../feed/FeedContainer";

const LaunchPage = () => {
	const [load, setLoad] = useState(false);

	const loadFeed = () => {
		setLoad(true);
		document.querySelector("html").style.backgroundColor = "white";
	};

	return (
		<>
			{load ? (
				<FeedContainer />
			) : (
				<div id="launch__container" onClick={loadFeed}>
					<img id="catsat__logo" src={CatsatLogoSVG} alt="Catsat Logo" />
					<h1 id="launch__title">Catsat</h1>
				</div>
			)}
		</>
	);
};

export default LaunchPage;
