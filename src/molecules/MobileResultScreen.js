import React from "react";
import Button from "../atoms/Button";
import paper from "../assets/icon-paper.svg";
import scissor from "../assets/icon-scissors.svg";
import rock from "../assets/icon-rock.svg";
import lizard from "../assets/icon-lizard.svg";
import spock from "../assets/icon-spock.svg";

const MobileResultScreen = ({ usersChoice, computerChoice, userWinLose, gameReset }) => {
	const result = userWinLose === "DRAW" ? <>{userWinLose}</> : <>{`YOU ${userWinLose}`}</>;

	const userIcon =
		usersChoice === "paper"
			? paper
			: usersChoice === "scissor"
			? scissor
			: usersChoice === "rock"
			? rock
			: usersChoice === "lizard"
			? lizard
			: spock;

	const computerIcon =
		computerChoice === "paper"
			? paper
			: computerChoice === "scissor"
			? scissor
			: computerChoice === "rock"
			? rock
			: usersChoice === "lizard"
			? lizard
			: spock;

	return (
		<div className="flex flex-col justify-center items-center mt-10 mb-14 w-full h-full">
			<div className="flex justify-center items-center gap-14 pb-8">
				<Button src={userIcon} dataValue={usersChoice} />
				<Button src={computerIcon} dataValue={computerChoice} />
			</div>
			<div className="flex justify-center items-center gap-14 text-base text-gray-200 pb-14">
				<h1>YOU PICKED</h1>
				<h1>THE HOUSE PICKED</h1>
			</div>
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-4xl text-gray-200 pb-5">{result}</h1>
				<button
					className={`bg-gray-200 text-lg rounded-xl py-2 px-14 ${
						userWinLose === "LOSE" ? "text-red-600" : "text-dark-text"
					}`}
					onClick={gameReset}
				>
					PLAY AGAIN
				</button>
			</div>
		</div>
	);
};

export default MobileResultScreen;
