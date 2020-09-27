import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./shared/ScrollToTop";

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Helmet>
				{/* <title>Ivo Digital Starter Project</title>
				<meta property="og:title" content="Ivo Digital Starter Project" />
				<meta property="og:site_name" content="Ivo Digital Starter Project" /> */}
				<title>Catsat - The Catsitting App</title>
				<meta property="og:title" content="Catsat - The Catsitting App" />
				<meta property="og:site_name" content="Catsat - The Catsitting App" />
			</Helmet>
			<ScrollToTop>
				<App />
			</ScrollToTop>
		</Router>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
