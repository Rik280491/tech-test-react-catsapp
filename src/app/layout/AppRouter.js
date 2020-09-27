import React from "react";
import { Switch, Route } from "react-router";
import LaunchPage from "../launch/LaunchPage";
import FeedContainer from "../containers/FeedContainer";

const AppRouter = () => (
	<Switch>
		<Route path="/" component={LaunchPage} />
		<Route path="/feed" component={FeedContainer} />
	</Switch>
);

export default AppRouter;
