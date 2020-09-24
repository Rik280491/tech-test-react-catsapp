import React from "react";
import CatCard from "../cards/CatCard";
import "./CatsContainer.css";

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

export default CatsContainer;
