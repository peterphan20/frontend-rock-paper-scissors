import { useState, useEffect } from "react";
import MobileResultScreen from "../molecules/MobileResultScreen";
import DesktopResultScreen from "../molecules/DesktopResultScreen";
import Button from "../atoms/Button";
import Triangle from "../atoms/Triangle";

import paper from "../assets/icon-paper.svg";
import scissor from "../assets/icon-scissors.svg";
import rock from "../assets/icon-rock.svg";

import { easyModeChoices } from "../helper/computerChoice";
import { userWins, draw } from "../helper/scoring";

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
				<div className="relative mb-14 lg:mb-24">
					<Triangle />
					<Button
						src={paper}
						className="-top-10 -left-7 lg:-top-16 lg:-left-14"
						dataValue="paper"
						clickHandler={(e) => play(e)}
						label="paper"
					/>
					<Button
						src={scissor}
						className="-top-10 left-40 lg:-top-16 lg:left-48"
						dataValue="scissor"
						clickHandler={(e) => play(e)}
						label="scissor"
					/>
					<Button
						src={rock}
						className="top-32 left-16 lg:top-44 lg:left-20"
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
