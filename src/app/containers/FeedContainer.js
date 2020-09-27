import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./FeedContainer.css";
import AllCatsContainer from "./AllCatsContainer";
import LikedCatsContainer from "./LikedCatsContainer";
import CatDetail from "../details/CatDetail";

const FeedContainer = ({ allCats, selectedCat }) => {
	const [likedCatsFeed, setLikedCatsFeed] = useState(false);

	const getData = () => {
		fetch("https://cdn.ivodigital.com/catsapp/felines.json")
			.then((response) => response.json())
			.then((cats) => {
				allCats(cats.data);
			})
			.catch((error) => {
				throw Error(error);
			});
	};

	useEffect(getData, []);

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
					{!likedCatsFeed ? <AllCatsContainer /> : <LikedCatsContainer />}
				</div>
			) : (
				<CatDetail selectedCat={selectedCat} />
			)}
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		selectedCat: state.catFeed.selectedCat
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		allCats: (catsData) => dispatch({ type: "ALL_CATS", payload: { catsData } })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
