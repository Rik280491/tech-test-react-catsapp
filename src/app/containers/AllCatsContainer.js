import React from "react";
import CatCard from "../cards/CatCard";
import "./AllCatsContainer.css";
import { connect } from "react-redux";

const AllCatsContainer = ({ allCatsArr }) => {
	const renderCats = () => {
		return allCatsArr.map((cat, index) => {
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
		allCatsArr: state.catFeed.allCats
	};
};

export default connect(mapStateToProps, null)(AllCatsContainer);
