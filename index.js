const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const firstNumber = core.getInput("number1");
    const secondNumber = core.getInput("number2");

    const result = parseInt(firstNumber) + parseInt(secondNumber);
    core.setOutput("result", result);

  } catch (error) {
    core.setFailed(error.message);
  }
}
