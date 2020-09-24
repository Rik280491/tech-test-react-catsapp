import React, { useState } from "react";
import "./CatCard.css";
import emptyHeart from "../../images/heart.png";
import filledHeart from "../../images/filled-heart.png";
import { connect } from "react-redux";

const CatCard = ({ name, owner, image, id, likedCats, dislikeCat }) => {
	const [likedCat, setLikedCat] = useState(false);

	const toggleCatLike = () => {
		if (!likedCat) {
			setLikedCat(true);
			likedCats(id);
		} else {
			setLikedCat(false);
			dislikeCat(id);
		}
	};

	return (
		<div id="cat__card">
			<img id="cat__card-image" src={image} alt={`${name}, the cat`} />
			<h2 id="cat__card-name">{name}</h2>
			<p id="cat__card-owner">{`Owned by ${owner}`}</p>
			<div id="cat__card-like">
				<img
					onClick={toggleCatLike}
					src={likedCat ? filledHeart : emptyHeart}
					alt="heart this cat"
				/>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		likedCats: (id) => dispatch({ type: "LIKE_CAT", payload: { id } }),
		dislikeCat: (id) => dispatch({ type: "DISLIKE_CAT", payload: { id } })
	};
};

export default connect(null, mapDispatchToProps)(CatCard);
