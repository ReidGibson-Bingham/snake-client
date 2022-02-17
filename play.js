const net = require("net");
const connect = require('../snek-multiplayer/client.js')


console.log("Connecting ...");
connect();

let moves = ['Move: up', 'Move: down', 'Move: left', 'Move: right'];

connect(moves[Math.floor(Math.random() * 4)]);

for (let i = 0, milS = 0; i < 10; i++, milS += 100) {
  setTimeout( () => {
    connect(moves[Math.floor(Math.random() * 4)]);
  }, milS)
}