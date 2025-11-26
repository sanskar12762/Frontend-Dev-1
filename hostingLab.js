
var score = 50;
function announce() {
    console.log("Game started");
}

console.log(score);
announce();

let status = "ready";

function startGame() {
    console.log(status);
}
startGame();

const announceA = () => console.log("Game started");
const startGameA = () => console.log(status);

announceA();
startGameA();