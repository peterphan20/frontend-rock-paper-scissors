import { useState } from "react";
import Button from "../atoms/Button";
import Triangle from "../atoms/Triangle";

import paper from "../assets/icon-paper.svg";
import scissor from "../assets/icon-scissors.svg";
import rock from "../assets/icon-rock.svg";
import { easyModeChoices } from "../helper/computerChoice";
import { userWins, computerWins, draw } from "../helper/scoring";

const EasyModeButtons = ({ score, setScore }) => {
	const [usersChoice, setUsersChoice] = useState("");
	const [computerChoice, setComputerChoice] = useState("");
	const [userWinLose, setUserWinLose] = useState("");

	const computerPlay = () => {
		const idx = Math.floor(Math.random() * easyModeChoices.length);
		setComputerChoice(easyModeChoices[idx]);
		return easyModeChoices[idx];
	};

	const play = async (e) => {
		const userInput = e.target.dataset.value;
		setUsersChoice(userInput);
		scoring(userInput, computerPlay());
	};

	const scoring = (usersChoice, computerChoice) => {
		console.log(usersChoice, computerChoice);
		if (userWins(usersChoice, computerChoice)) {
			setScore(score + 1);
			setUserWinLose("WIN");
		} else if (computerWins(usersChoice, computerChoice)) {
			setScore(score - 1);
			setUserWinLose("LOSE");
		} else if (draw(usersChoice, computerChoice)) {
			setScore(score);
			setUserWinLose("DRAW");
		}
	};

	return (
		<div className="mt-16 mb-20">
			<Triangle />
			<Button
				src={paper}
				className="bg-gradient-to-b from-primary-paper to-secondary-paper shadow-outter-paper top-52 left-8"
				dataValue="paper"
				clickHandler={(e) => play(e)}
				label="easy mode paper icon"
			/>
			<Button
				src={scissor}
				className="bg-gradient-to-b from-primary-scissor to-secondary-scissor shadow-outter-scissor top-52 left-56"
				dataValue="paper"
				clickHandler={(e) => play(e)}
				label="easy mode scissor icon"
			/>
			<Button
				src={rock}
				className="bg-gradient-to-b from-primary-rock to-secondary-rock shadow-outter-rock top-96 left-32"
				dataValue="paper"
				clickHandler={(e) => play(e)}
				label="easy mode rock icon"
			/>
		</div>
	);
};

export default EasyModeButtons;
