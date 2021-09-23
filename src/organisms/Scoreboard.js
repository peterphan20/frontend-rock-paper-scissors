import React from "react";
import Score from "../molecules/Score";

const Scoreboard = () => {
	return (
		<div className="mb-28 w-full h-full">
			<div className="flex justify-between items-center border-2 border-header-outline rounded-lg py-4 px-4">
				<div className="flex flex-col justify-center items-start text-2xl text-gray-100 leading-none">
					<h1>ROCK</h1>
					<h1>PAPER</h1>
					<h1>SCISSORS</h1>
				</div>
				<div className="flex flex-col justify-center items-center bg-gray-100 text-dark-text rounded-lg py-2 px-6">
					<h1 className="text-xs text-score-text tracking-widest">SCORE</h1>
					<Score />
				</div>
			</div>
		</div>
	);
};

export default Scoreboard;
