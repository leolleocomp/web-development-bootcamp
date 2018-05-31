var game = {
	maxScore: 5,
	over: false,
	maxScoreRef: document.getElementById("max-input"),
	scoreInfoRef: document.getElementById("max-score"),
	resetRef: document.getElementById("reset"),
	players: [
		{
			score: 0,
			scoreRef: document.getElementById("score-p1"),
			buttonRef: document.getElementById("button-p1"),
		},
		{
			score: 0,
			scoreRef: document.getElementById("score-p2"),
			buttonRef: document.getElementById("button-p2"),
		}
	]
};

function updateScore(player, newScore) {
	player.score = newScore;
	player.scoreRef.textContent = player.score;
}

function reset() {
	game.players.forEach(player => updateScore(player, 0));
	game.players.forEach(player => player.scoreRef.style.color = "black");
	game.over = false;
}

game.players.forEach(player => player.buttonRef.addEventListener("click", function() {
	if (!game.over) {
		updateScore(player, player.score + 1);

		if (player.score === game.maxScore) {
			game.over = true;
			player.scoreRef.style.color = "green";
		}
	}
}));

game.maxScoreRef.addEventListener("change", function() {
	game.maxScore = this.valueAsNumber;
	game.scoreInfoRef.textContent = game.maxScore;
	reset();
});

game.resetRef.addEventListener("click", reset);
