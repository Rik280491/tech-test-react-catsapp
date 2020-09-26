import React from "react";
import CatCard from "../cards/CatCard";
import "./CatsContainer.css";
import { connect } from "react-redux";

const CatsContainer = ({ catsData }) => {
	const renderCats = () => {
		return catsData.map((cat, index) => {
			return (
				<CatCard
					key={index}
					name={cat.name}
					owner={cat.owner.name}
					id={cat.id}
					image={cat.image_url}
					backgroundColour={cat.background_color}
				/>
			);
		});
	};
	return <div className="cats__container">{renderCats()}</div>;
};

const mapStateToProps = (state) => {
	return {
		catsData: state.CatFeed.allCats
	};
};

export default connect(mapStateToProps, null)(CatsContainer);
