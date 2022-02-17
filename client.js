
const connect = function (data) {
  const conn = net.createConnection({
    host: '8.tcp.ngrok.io',
    port: 10449,
  });
  conn.setEncoding("utf8");
  conn.on('Successfully connected to game server', (data) => {
    console.log(`Name: ${data}`);
  } );

  return conn;
}



module.exports = {
  connect,
}
/*
connect: function (data) {
  const conn = net.createConnection({
    host: // IP address here,
    port: // PORT number here,

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};*/
