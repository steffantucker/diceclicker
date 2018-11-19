import PlayerClass from "../classes/Player";
import React, { Component } from "react";

export default class Player extends Component {
	constructor(props) {
		super(props);
		// TODO: convert to player class, player class would interface with DiceInterface
		// TODO: move clicks to stats class
		this.state = { player: new PlayerClass() };
	}

	style = {
		border: "1px solid purple",
	};

	click = () => {
		this.state.player.click();
		this.forceUpdate();
	};

	render() {
		return (
			<div onClick={this.click} onDoubleClick={() => {}} style={this.style}>
				<div>
					last roll: <span>{this.state.player.playerDie.lastRoll}</span>
				</div>
				<div>
					pip count: <span>{this.state.player.pips}</span>
				</div>
				<div>
					click count: <span>{this.state.player.clicks}</span>
				</div>
			</div>
		);
	}
}
