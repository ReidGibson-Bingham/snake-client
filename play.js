const net = require("net");
const { connect } = require("./client");
const { setupInput } = require("./input");


console.log("Connecting ...");
connect();

let moves = ['Move: up', 'Move: down', 'Move: left', 'Move: right'];

connect(moves[Math.floor(Math.random() * 4)]);

for (let i = 0, milS = 0; i < 10; i++, milS += 100) {
  setTimeout( () => {
    connect(moves[Math.floor(Math.random() * 4)]);
  }, milS)
}


const handleUserInput = function (input) {
  if (input.keyCode === 67) {
    process.exit();
  }
};
// ^ this function checks for ctrl+c with input.keyCode === 67

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

console.log("Connecting ...");
connect();

setupInput();