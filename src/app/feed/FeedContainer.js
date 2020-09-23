import React, { useEffect, useState } from "react";
import "./FeedContainer.css";
import CatsContainer from "../cats/CatsContainer";

const FeedContainer = () => {
	const [catsData, setCatsData] = useState([]);

	useEffect(() => {
		document.querySelector("html").style.backgroundColor = "#FFFFFF";
	}, []);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		fetch("https://cdn.ivodigital.com/catsapp/felines.json")
			.then((response) => response.json())
			.then((cats) => {
				setCatsData(cats.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div id="feed">
			<h1 id="feed__title">Catsat</h1>
			<p id="feed__intro">Look after cute cats for strangers for free.</p>
			<button id="feed__tab-cats">All cats</button>
			<button id="feed__tab-liked">Liked</button>
			<CatsContainer catsData={catsData} />
		</div>
	);
};

export default FeedContainer;
