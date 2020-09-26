import React from "react";
import "./App.css";
import Layout from "./app/layout";

/**
 * It's useful to have this layer incase you have multiple layouts that are
 * conditional for example a logged in and logged out view.
 * In this example we just have one page so it's all good.
 */
const App = () => <Layout />;

export default App;
