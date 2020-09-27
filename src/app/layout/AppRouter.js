import React from "react";
import { Switch, Route } from "react-router";
import LaunchPage from "../launch/LaunchPage";
import FeedContainer from "../feed/FeedContainer";
import CatDetail from "../cats/details/CatDetail";

const AppRouter = () => (
	<Switch>
		<Route path="/" component={LaunchPage} />
		<Route path="/feed" component={FeedContainer} />
		<Route path="/cat-details/:id" component={CatDetail} />
	</Switch>
);

export default AppRouter;
