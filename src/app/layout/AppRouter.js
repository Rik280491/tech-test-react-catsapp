import React from "react";
import { Switch, Route } from "react-router";
import LaunchPage from "../launch/LaunchPage";

const AppRouter = () => (
	<Switch>
		<Route component={LaunchPage} />
	</Switch>
);

export default AppRouter;
