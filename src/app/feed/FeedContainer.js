import React, { useEffect, useState } from "react";
import "./FeedContainer.css";
import CatsContainer from "../cats/CatsContainer";
import LikedCatsContainer from "../cats/LikedCatsContainer";

const FeedContainer = () => {
	const [catsData, setCatsData] = useState([]);
	const [likedCatsFeed, setLikedCatsFeed] = useState(false);

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

	const renderCats = () => {
		setLikedCatsFeed(false);
	};

	const renderLikedCats = () => {
		setLikedCatsFeed(true);
	};

	return (
		<div id="feed">
			<h1 id="feed__title">Catsat</h1>
			<p id="feed__intro">Look after cute cats for strangers for free.</p>
			<button onClick={renderCats} id="feed__tab-cats">
				All cats
			</button>
			<button onClick={renderLikedCats} id="feed__tab-liked">
				Liked
			</button>
			{!likedCatsFeed ? (
				<CatsContainer catsData={catsData} />
			) : (
				<LikedCatsContainer />
			)}
		</div>
	);
};

// send catsData to redux store

export default FeedContainer;
