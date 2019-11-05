(() => {
	console.log('fired!');

	let player_lives = 5,
		player = document.querySelector("#weapon"),
		computer,
		trigger = document.querySelector("#play"), 
		status = document.querySelector(".winlose"),
		computer_live = 5;
	const choices = ["rock", "paper", "scissors"];

	function playGame() {
		console.log('clicked the button');

		computer = choices[Math.floor(Math.random() * choices.length)];
		let player_choice = player.value;

		//check for tie
		if (computer.toLowerCase() == player_choice.toLowerCase()) {
			status.textContent = "Tie! You live to play again";
		}
	}

	trigger.addEventListener("click", playGame);
})();