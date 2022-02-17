const net = require("net");
const connect = require('../snek-multiplayer/client.js')

// establishes a connection with the game server
const connect = function (data) {
  const conn = net.createConnection({
    host: // IP address here,
    port: // PORT number here,
  
  });

  console.log(data);
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();