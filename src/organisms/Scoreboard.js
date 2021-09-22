import React from "react";

const Scoreboard = () => {
	return (
		<div className="pt-8 px-7 w-full h-full">
			<div className="flex justify-between items-center border-2 border-header-outline rounded-lg py-2 px-3">
				<div className="flex flex-col justify-center items-start text-xl text-gray-50 leading-none">
					<h1>ROCK</h1>
					<h1>PAPER</h1>
					<h1>SCISSORS</h1>
				</div>
				<div className="flex flex-col justify-center items-center bg-gray-50 text-dark-text rounded-lg py-2 px-6">
					<h1 className="text-xs">SCORE</h1>
					<h1 className="text-5xl">12</h1>
				</div>
			</div>
		</div>
	);
};

export default Scoreboard;
