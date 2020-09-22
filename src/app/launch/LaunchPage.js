import React, { useState } from "react";
import "./LaunchPage.css";
import logo from "../../images/paw-icon.png";
import AllCats from "../feed/AllCats";

const LaunchPage = () => {
	const [load, setLoad] = useState(false);

	const loadFeed = () => {
		setLoad(true);
		document.querySelector("html").style.backgroundColor = "white";
	};

	return (
		<>
			{load ? (
				<AllCats />
			) : (
				<div id="launch__container" onClick={loadFeed}>
					<img id="catsat__logo" src={logo} alt="Catsat Logo" />
					<h1 id="launch__title">Catsat</h1>
				</div>
			)}
		</>
	);
};

export default LaunchPage;
