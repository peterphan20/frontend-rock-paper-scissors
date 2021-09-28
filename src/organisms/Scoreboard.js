import { useContext } from "react";
import { toggleHardModeContext } from "../context/GameModeProvider";

const Scoreboard = ({ score }) => {
	const [hardMode] = useContext(toggleHardModeContext);

	return (
		<div className="pb-5 w-full h-full lg:px-96">
			<div className="flex justify-between items-center border-2 border-header-outline rounded-lg py-4 px-4 lg:px-6">
				{!hardMode ? (
					<div className="flex flex-col justify-center items-start text-2xl text-gray-200 leading-none lg:text-3xl lg:leading-7">
						<h1>ROCK</h1>
						<h1>PAPER</h1>
						<h1>SCISSORS</h1>
					</div>
				) : (
					<div className="flex flex-col justify-center items-start text-xl text-gray-200 leading-none lg:text-2xl lg:leading-6">
						<h1>ROCK</h1>
						<h1>PAPER</h1>
						<h1>SCISSORS</h1>
						<h1>LIZARD</h1>
						<h1>SPOCK</h1>
					</div>
				)}

				<div className="flex flex-col justify-center items-center bg-gray-200 text-dark-text rounded-lg py-2 px-5 lg:py-3 lg:px-10">
					<h1 className="text-xs text-score-text tracking-widest lg:text-base">SCORE</h1>
					<h1 className="text-4xl">{score}</h1>
				</div>
			</div>
		</div>
	);
};

export default Scoreboard;
