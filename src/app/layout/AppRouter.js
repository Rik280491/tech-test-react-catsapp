import React from "react";
import { Switch, Route } from "react-router";
import LaunchPage from "../launch/LaunchPage";
import AllCats from "../feed/AllCats";

const AppRouter = () => (
	<Switch>
		<Route path="/launch" component={LaunchPage} />
		<Route path="/feed" component={AllCats} />
	</Switch>
);

export default AppRouter;
