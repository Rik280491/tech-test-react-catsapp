import React from "react";
import { connect } from "react-redux";
import "./LikedCatsContainer.css";

const LikedCatsContainer = () => {
	return (
		<div id="liked-cats__container">
			<p id="no-like-message">You haven't liked any cats, you monster.</p>
		</div>
	);
};

// state to props likedCats

export default connect(null, null)(LikedCatsContainer);
