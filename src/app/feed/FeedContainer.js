import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./FeedContainer.css";
import CatsContainer from "../cats/containers/CatsContainer";
import LikedCatsContainer from "../cats/containers/LikedCatsContainer";
import CatDetail from "../cats/details/CatDetail";

const FeedContainer = ({ allCats, selectedCat }) => {
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
				allCats(cats.data);
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
		<>
			{!selectedCat ? (
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
			) : (
				<CatDetail selectedCat={selectedCat} />
			)}
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		selectedCat: state.CatFeed.selectedCat
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		allCats: (catsData) => dispatch({ type: "ALL_CATS", payload: { catsData } })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
