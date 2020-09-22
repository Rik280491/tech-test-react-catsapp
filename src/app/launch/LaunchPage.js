import React from "react";
import "./LaunchPage.css";
import logo from "../../images/paw-icon.png";

const LaunchPage = () => {
	return (
		<div>
			<img id="catsat__logo" src={logo} alt="Catsat Logo" />
			<h1 id="launch__title">Catsat</h1>
		</div>
	);
};

export default LaunchPage;
