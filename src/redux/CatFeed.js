const initialState = {
	allCats: [],
	likedCats: [],
	selectedCat: null
};

const CatFeed = (state = initialState, action) => {
	switch (action.type) {
		case "ALL_CATS":
			return {
				...state,
				allCats: action.payload.catsData
			};
		case "LIKE_CAT":
			return {
				...state,
				likedCats: [
					...state.likedCats,
					state.allCats.find((cat) => cat.id === action.payload.id)
				]
			};
		case "DISLIKE_CAT":
			return {
				...state,
				likedCats: state.likedCats.filter((cat) => cat.id !== action.payload.id)
			};
		case "SELECTED_CAT":
			return {
				...state,
				selectedCat: state.allCats.find((cat) => cat.id === action.payload.id)
			};
		default:
			return state;
	}
};

export default CatFeed;
