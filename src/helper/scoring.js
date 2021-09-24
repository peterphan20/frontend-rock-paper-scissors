export const userWins = (userChoice, computerChoice) => {
	return (
		(userChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
		(userChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
		(userChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
		(userChoice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")) ||
		(userChoice === "spock" && (computerChoice === "scissors" || computerChoice === "rock"))
	);
};

export const draw = (userChoice, computerChoice) => {
	return userChoice === computerChoice || computerChoice === userChoice;
};
