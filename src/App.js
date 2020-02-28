import React from "react";

import NavbarMaterial from "./components/maincomponents/NavbarMaterial";
import Banner from "./components/maincomponents/Banner";
import Projects from "./components/maincomponents/Projects";
import Skills from "./components/maincomponents/Skills";
import Contact from "./components/maincomponents/Contact";
import Profile from "./components/maincomponents/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
	return (
		<React.Fragment>
			<NavbarMaterial />
			<Router>
				<Switch>
					<Route exact path="/" component={Banner} />
					<Route path="/projects" component={Projects} />
					<Route path="/skills" component={Skills} />
					<Route path="/contact" component={Contact} />
					<Route path="/contact" component={Profile} />
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
