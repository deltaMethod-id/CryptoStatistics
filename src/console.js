const console = require("../public/index.html");

function consoles({
  consoleError, 
  consoleLogging, 
  consoleView
}) {
  return {
    consoleError: [ERROR], 
    consoleLogging: [LOG], 
    consoleView: [VIEW]
  }
}
// starting
const runConsole = true;
console.log(runConsole);
