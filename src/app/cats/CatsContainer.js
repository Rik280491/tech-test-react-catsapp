import React from "react";
import CatCard from "./CatCard";
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
				/>
			);
		});
	};
	return <div className="cats__container">{renderCats()}</div>;
};

export default CatsContainer;
