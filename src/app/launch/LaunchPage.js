import React, { useState, useEffect } from "react";
import "./LaunchPage.css";
import CatsatLogoSVG from "../../images/paw-icon.svg";
import FeedContainer from "../containers/FeedContainer";
import { useHistory } from "react-router-dom";

const LaunchPage = () => {
	const history = useHistory();
	const [load, setLoad] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoad(true);
			history.push("/feed");
		}, 2000);
	}, [history]);

	return (
		<>
			{load ? (
				<FeedContainer />
			) : (
				<div id="launch__container">
					<img id="catsat__logo" src={CatsatLogoSVG} alt="Catsat Logo" />
					<h1 id="launch__title">Catsat</h1>
				</div>
			)}
		</>
	);
};

export default LaunchPage;
