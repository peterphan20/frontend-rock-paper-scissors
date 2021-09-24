import { useState, useEffect } from "react";
import MobileResultScreen from "../molecules/MobileResultScreen";
import DesktopResultScreen from "../molecules/DesktopResultScreen";
import Button from "../atoms/Button";
import Triangle from "../atoms/Triangle";

import paper from "../assets/icon-paper.svg";
import scissor from "../assets/icon-scissors.svg";
import rock from "../assets/icon-rock.svg";

import { easyModeChoices } from "../helper/computerChoice";
import { userWins, computerWins, draw } from "../helper/scoring";

const EasyModeButtons = ({ score, setScore }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [usersChoice, setUsersChoice] = useState("");
	const [computerChoice, setComputerChoice] = useState("");
	const [userWinLose, setUserWinLose] = useState("");
	const [gamePlayed, setGamePlayed] = useState(false);

	const trackWindowChanges = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", trackWindowChanges);

		return () => {
			window.removeEventListener("resize", trackWindowChanges);
		};
	}, [windowWidth]);

	const showMenu = () => {
		return windowWidth > 864 ? (
			<DesktopResultScreen
				usersChoice={usersChoice}
				computerChoice={computerChoice}
				userWinLose={userWinLose}
				gameReset={gameReset}
			/>
		) : (
			<MobileResultScreen
				usersChoice={usersChoice}
				computerChoice={computerChoice}
				userWinLose={userWinLose}
				gameReset={gameReset}
			/>
		);
	};

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
		if (userWins(usersChoice, computerChoice)) {
			setScore(score + 1);
			setUserWinLose("WIN");
			setGamePlayed(true);
		} else if (computerWins(usersChoice, computerChoice)) {
			setScore(score - 1);
			setUserWinLose("LOSE");
			setGamePlayed(true);
		} else if (draw(usersChoice, computerChoice)) {
			setScore(score);
			setUserWinLose("DRAW");
			setGamePlayed(true);
		}
	};

	const gameReset = () => {
		setUsersChoice("");
		setComputerChoice("");
		setGamePlayed(false);
	};

	return (
		<div>
			{!gamePlayed ? (
				<div className="mt-16 mb-20">
					<Triangle />
					<Button
						src={paper}
						className="absolute top-52 left-8"
						dataValue="paper"
						clickHandler={(e) => play(e)}
						label="paper"
					/>
					<Button
						src={scissor}
						className="absolute top-52 left-56"
						dataValue="scissor"
						clickHandler={(e) => play(e)}
						label="scissor"
					/>
					<Button
						src={rock}
						className="absolute top-96 left-32"
						dataValue="rock"
						clickHandler={(e) => play(e)}
						label="rock"
					/>
				</div>
			) : (
				showMenu()
			)}
		</div>
	);
};

export default EasyModeButtons;
