import { useState, useEffect } from "react";
import MobileResultScreen from "../molecules/MobileResultScreen";
import DesktopResultScreen from "../molecules/DesktopResultScreen";
import Button from "../atoms/Button";
import Pentagon from "../atoms/Pentagon";

import paper from "../assets/icon-paper.svg";
import scissor from "../assets/icon-scissors.svg";
import rock from "../assets/icon-rock.svg";
import lizard from "../assets/icon-lizard.svg";
import spock from "../assets/icon-spock.svg";

import { advanceModeChoices } from "../helper/computerChoice";
import { userWins, draw } from "../helper/scoring";

const AdvanceModeButtons = ({ score, setScore }) => {
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
		const idx = Math.floor(Math.random() * advanceModeChoices.length);
		setComputerChoice(advanceModeChoices[idx]);
		return advanceModeChoices[idx];
	};

	const play = async (e) => {
		const userInput = e.target.dataset.value;
		setUsersChoice(userInput);
		scoring(userInput, computerPlay());
	};

	const scoring = (usersChoice, computerChoice) => {
		console.log(usersChoice, computerChoice);
		if (draw(usersChoice, computerChoice)) {
			setScore(score);
			setUserWinLose("DRAW");
			setGamePlayed(true);
		} else if (userWins(usersChoice, computerChoice)) {
			setScore(score + 1);
			setUserWinLose("WIN");
			setGamePlayed(true);
		} else {
			setScore(score - 1);
			setUserWinLose("LOSE");
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
				<div className="mt-20 mb-20">
					<Pentagon />
					<Button
						src={scissor}
						className="absolute top-60 left-36"
						dataValue="scissor"
						clickHandler={(e) => play(e)}
						label="scissor"
					/>
					<Button
						src={paper}
						className="absolute top-80 left-64"
						dataValue="paper"
						clickHandler={(e) => play(e)}
						label="paper"
					/>
					<Button
						src={rock}
						className="absolute bottom-20 left-56"
						dataValue="rock"
						clickHandler={(e) => play(e)}
						label="rock"
					/>
					<Button
						src={lizard}
						className="absolute bottom-20 left-16"
						dataValue="lizard"
						clickHandler={(e) => play(e)}
						label="lizard"
					/>
					<Button
						src={spock}
						className="absolute top-80 left-8"
						dataValue="spock"
						clickHandler={(e) => play(e)}
						label="spock"
					/>
				</div>
			) : (
				showMenu()
			)}
		</div>
	);
};

export default AdvanceModeButtons;
