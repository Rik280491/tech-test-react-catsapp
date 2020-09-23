import React, { useState } from "react";
import "./CatCard.css";
import emptyHeart from "../../images/heart.png";
import filledHeart from "../../images/filled-heart.png";

const CatCard = ({ name, owner, image }) => {
	const [likedCat, setLikedCat] = useState(false);

	const likeCat = () => {
		if (!likedCat) {
			setLikedCat(true);
		} else {
			setLikedCat(false);
		}
	};

	return (
		<div id="cat__card">
			<img id="cat__card-image" src={image} alt={`${name}, the cat`} />
			<h2 id="cat__card-name">{name}</h2>
			<p id="cat__card-owner">{`Owned by ${owner}`}</p>
			<div id="cat__card-like">
				<img
					onClick={likeCat}
					src={likedCat ? filledHeart : emptyHeart}
					alt="heart this cat"
				/>
			</div>
		</div>
	);
};

export default CatCard;
