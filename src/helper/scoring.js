export const userWins = (userChoice, computerChoice) => {
	return (
		(userChoice === "paper" && computerChoice === "rock") ||
		(userChoice === "scissor" && computerChoice === "paper") ||
		(userChoice === "rock" && computerChoice === "scissor")
	);
};

export const computerWins = (userChoice, computerChoice) => {
	return (
		(userChoice === "rock" && computerChoice === "paper") ||
		(userChoice === "paper" && computerChoice === "scissor") ||
		(userChoice === "scissor" && computerChoice === "rock")
	);
};

export const draw = (userChoice, computerChoice) => {
	return userChoice === computerChoice || computerChoice === userChoice;
};
