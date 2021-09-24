import React from "react";

const Scoreboard = ({ score }) => {
	return (
		<div className="pb-5 w-full h-full">
			<div className="flex justify-between items-center border-2 border-header-outline rounded-lg py-4 px-4">
				<div className="flex flex-col justify-center items-start text-2xl text-gray-200 leading-none">
					<h1>ROCK</h1>
					<h1>PAPER</h1>
					<h1>SCISSORS</h1>
				</div>
				<div className="flex flex-col justify-center items-center bg-gray-200 text-dark-text rounded-lg py-2 px-5">
					<h1 className="text-xs text-score-text tracking-widest">SCORE</h1>
					<h1 className="text-4xl">{score}</h1>
				</div>
			</div>
		</div>
	);
};

export default Scoreboard;
