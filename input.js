//const { connect } = require("./client");
let connection;

const handleUserInput = function (input) {
  if (input.keyCode === 67) {
    process.exit();
  }
};
// ^ this function checks for ctrl+c with input.keyCode === 67

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};


module.exports = {
  setupInput
}

const { connect } = require('http2');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let moves = ['Move: up', 'Move: down', 'Move: left', 'Move: right'];

rl.question('Enter directional input ', (dir) => {
  if (dir === 'w') {
    connect(moves[0]);
  }
  if (dir === 'a') {
    connect(moves[1]);
  }
  if (dir === 's') {
    connect(moves[2])
  }
  if (dir === 'd') {
    connect(moves[3])
  }
  
  
  rl.close();
});
  
