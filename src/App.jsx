import React, { Component } from "react";
import Player from "./components/Player";

class App extends Component {
	style = {
		userSelect: "none",
		MozUserSelect: "none",
		WebkitUserSelect: "none",
		msUserSelect: "none"
	};

	render() {
		return (
			<div style={this.style}>
				<Player />
			</div>
		);
	}
}

export default App;
