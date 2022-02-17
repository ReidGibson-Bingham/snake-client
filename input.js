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

module.exports = {
  setupInput
}