import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./CatCard.css";
import emptyHeartSVG from "../../../images/empty-heart.svg";
import filledHeartSVG from "../../../images/filled-heart.svg";

const CatCard = ({
	name,
	owner,
	image,
	backgroundColour,
	id,
	likeCat,
	dislikeCat,
	likedCats,
	selectCat
}) => {
	const [liked, setLiked] = useState(false);

	useEffect(() => {
		if (likedCats.find((cat) => cat.id === id)) {
			setLiked(true);
		} else {
			setLiked(false);
		}
	}, [likedCats, id]);

	const toggleCatLike = (e) => {
		e.stopPropagation();
		if (!liked) {
			likeCat(id);
		} else {
			dislikeCat(id);
		}
	};

	const showCatDetails = () => {
		selectCat(id);
	};

	return (
		<div
			id="cat__card"
			style={{ backgroundColor: backgroundColour }}
			onClick={showCatDetails}
		>
			<img id="cat__card-image" src={image} alt={`${name}, the cat`} />
			<h2 id="cat__card-name">{name}</h2>
			<p id="cat__card-owner">{`Owned by ${owner}`}</p>
			<div id="cat__card-like">
				<img
					onClick={toggleCatLike}
					src={liked ? filledHeartSVG : emptyHeartSVG}
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
		dislikeCat: (id) => dispatch({ type: "DISLIKE_CAT", payload: { id } }),
		selectCat: (id) => dispatch({ type: "SELECTED_CAT", payload: { id } })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CatCard);
