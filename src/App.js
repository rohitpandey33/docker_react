import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React js with docker
					<br />
					<br />
				</a>
				<div>
					<h2>Holla!</h2>
					<h4 style={{ color: "blue", fontSize: "20px" }}>
						I am learning docker
					</h4>
				</div>
			</header>
		</div>
	);
}

export default App;
