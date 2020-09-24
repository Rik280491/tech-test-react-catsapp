import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./LikedCatsContainer.css";
import "./CatsContainer.css";
import CatCard from "./CatCard";

const LikedCatsContainer = ({ likedCats }) => {
	const [displayMessage, setDisplayMessage] = useState(true);

	useEffect(() => {
		if (likedCats.length > 0) {
			setDisplayMessage(false);
		} else {
			setDisplayMessage(true);
		}
	}, [likedCats.length]);

	const renderLikedCats = () => {
		return likedCats.map((cat, index) => {
			return (
				<CatCard
					key={index}
					name={cat.name}
					owner={cat.owner.name}
					id={cat.id}
					image={cat.image_url}
				/>
			);
		});
	};

	return (
		<div className="cats__container">
			{displayMessage ? (
				<p id="no-like-message">You haven't liked any cats, you monster.</p>
			) : (
				renderLikedCats()
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		likedCats: state.CatFeed.likedCats
	};
};

export default connect(mapStateToProps, null)(LikedCatsContainer);
