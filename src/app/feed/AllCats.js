import React, { useEffect } from "react";
import "./AllCats.css";

const AllCats = () => {
	useEffect(() => {
		document.querySelector("html").style.backgroundColor = "white";
	}, []);

	return <div id="feed__container">TEST</div>;
};

export default AllCats;
