import React from "react";

const Scoreboard = () => {
	return (
		<div className="flex justify-between items-center border border-header-outline w-full h-full">
			<div className="text-gray-50">
				<h1>ROCK</h1>
				<h1>PAPER</h1>
				<h1>SCISSORS</h1>
			</div>
			<div className="bg-gray-50 text-dark-text">
				<h1>SCORE</h1>
				<h1>12</h1>
			</div>
		</div>
	);
};

export default Scoreboard;
