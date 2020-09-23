import React from "react";
import { Switch, Route } from "react-router";
import LaunchPage from "../launch/LaunchPage";
import FeedContainer from "../feed/FeedContainer";

const AppRouter = () => (
	<Switch>
		<Route path="/launch" component={LaunchPage} />
		<Route path="/feed" component={FeedContainer} />
	</Switch>
);

export default AppRouter;
