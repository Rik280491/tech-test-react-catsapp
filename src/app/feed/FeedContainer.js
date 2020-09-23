import React, { useEffect } from "react";
import "./FeedContainer.css";

const FeedContainer = () => {
	useEffect(() => {
		document.querySelector("html").style.backgroundColor = "#FFFFFF";
	}, []);

	return (
		<div id="feed">
			<h1 id="feed__title">Catsat</h1>
			<p id="feed__intro">Look after cute cats for strangers for free.</p>
			<button id="feed__tab-cats">All cats</button>
			<button id="feed__tab-liked">Liked</button>
		</div>
	);
};

export default FeedContainer;
