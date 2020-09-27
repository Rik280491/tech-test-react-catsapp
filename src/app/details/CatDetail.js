import React, { useEffect, useState } from "react";
import "./CatDetail.css";
import emptyHeartSVG from "../../images/empty-heart.svg";
import whiteHeartSVG from "../../images/white-heart.svg";
import closeButtonSVG from "../../images/x-close-button.svg";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const CatDetail = ({
	likedCatsArr,
	selectedCat,
	deselectCatDetails,
	likeCat,
	dislikeCat
}) => {
	const history = useHistory();
	const [likedCat, setLikedCat] = useState(false);

	useEffect(() => {
		if (likedCatsArr.find((cat) => cat.id === selectedCat.id)) {
			setLikedCat(true);
		}
	}, [likedCatsArr, selectedCat.id]);

	const closeCatDetail = () => {
		deselectCatDetails();
		history.goBack();
	};

	const toggleCatLike = () => {
		if (likedCat) {
			dislikeCat(selectedCat.id);
			setLikedCat(false);
		} else {
			likeCat(selectedCat.id);
		}
	};

	return (
		<div
			id="cat__detail-container"
			style={{ backgroundColor: selectedCat.background_color }}
		>
			<button id="cat_details-close-btn" onClick={closeCatDetail}>
				<img src={closeButtonSVG} alt="return to catfeed" />
			</button>
			<img id="cat__detail-image" src={selectedCat.image_url} alt="" />
			<h1 id="cat__detail-name">{selectedCat.name}</h1>
			<p id="cat__detail-age">
				{selectedCat.age <= 1
					? `${selectedCat.age} year old`
					: `${selectedCat.age} years old`}
			</p>

			{likedCat ? (
				<div id="cat__detail-liked" onClick={toggleCatLike}>
					<img
						src={whiteHeartSVG}
						alt={`a heart to unlike ${selectedCat.name}, the cat`}
					/>
					<p>Liked</p>
				</div>
			) : (
				<div id="cat__detail-like" onClick={toggleCatLike}>
					<img
						src={emptyHeartSVG}
						alt={`a heart to like ${selectedCat.name}, the cat`}
					/>
					<p>Like</p>
				</div>
			)}
			<p id="cat__detail-description">{selectedCat.description}</p>

			<div id="owner__details">
				<h2 id="owner__details-name">{`Owned by ${selectedCat.owner.name}`}</h2>
				<ul id="owner__details-list">
					<li className="owner__details-list-contact">Phone</li>
					<li className="owner__details-list-contact-info">
						{selectedCat.owner.phone}
					</li>
					<li className="owner__details-list-contact"> Email</li>
					<li className="owner__details-list-contact-info">
						{selectedCat.owner.email}
					</li>
					<li className="owner__details-list-contact">Location</li>
					<li className="owner__details-list-contact-info">
						{selectedCat.owner.address}
					</li>
				</ul>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		likedCatsArr: state.catFeed.likedCats
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deselectCatDetails: () => dispatch({ type: "DESELECT_CAT_DETAILS" }),
		likeCat: (id) => dispatch({ type: "LIKE_CAT", payload: { id } }),
		dislikeCat: (id) => dispatch({ type: "DISLIKE_CAT", payload: { id } })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CatDetail);
