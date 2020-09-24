import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./CatCard.css";
import emptyHeart from "../../../images/heart.png";
import filledHeart from "../../../images/filled-heart.png";

const CatCard = ({
	name,
	owner,
	image,
	backgroundColour,
	id,
	likeCat,
	dislikeCat,
	likedCats
}) => {
	const [liked, setLiked] = useState(false);

	useEffect(() => {
		if (likedCats.find((cat) => cat.id === id)) {
			setLiked(true);
		} else {
			setLiked(false);
		}
	}, [likedCats, id]);

	const toggleCatLike = () => {
		if (!liked) {
			likeCat(id);
		} else {
			dislikeCat(id);
		}
	};

	return (
		<div id="cat__card" style={{ backgroundColor: backgroundColour }}>
			<img id="cat__card-image" src={image} alt={`${name}, the cat`} />
			<h2 id="cat__card-name">{name}</h2>
			<p id="cat__card-owner">{`Owned by ${owner}`}</p>
			<div id="cat__card-like">
				<img
					onClick={toggleCatLike}
					src={liked ? filledHeart : emptyHeart}
					alt="heart this cat"
				/>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		likedCats: state.CatFeed.likedCats
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		likeCat: (id) => dispatch({ type: "LIKE_CAT", payload: { id } }),
		dislikeCat: (id) => dispatch({ type: "DISLIKE_CAT", payload: { id } })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CatCard);
