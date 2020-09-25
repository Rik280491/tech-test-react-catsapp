import React from "react";
import "./CatDetail.css";
import emptyHeartSVG from "../../../images/empty-heart.svg";
import closeButtonSVG from "../../../images/x-close-button.svg";
import { connect } from "react-redux";

const CatDetail = ({ selectedCat, deselectCat }) => {
	const closeCatDetail = () => {
		deselectCat();
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
			{/* years to year if 1 */}
			<p id="cat__detail-age">{`${selectedCat.age} years old`}</p>
			<div id="cat__detail-like">
				<img src={emptyHeartSVG} alt="" />
				<p>Like</p>
			</div>
			<p id="cat__detail-description">{selectedCat.description}</p>

			<div id="owner__details">
				<h2 id="owner__details-name">{`Owned by ${selectedCat.owner.name}`}</h2>

				{/* grid or flexbox? */}
				<ul>
					<li>
						Phone
						<p>{selectedCat.owner.phone}</p>
					</li>
					<li>
						Email
						<p>{selectedCat.owner.email}</p>
					</li>
					<li>
						Location
						<p>{selectedCat.owner.address}</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		deselectCat: () => dispatch({ type: "DESELECT_CAT" })
	};
};

export default connect(null, mapDispatchToProps)(CatDetail);
