import chalk from "chalk";
import dedent from "dedent-js";
const printError = (error) => {
  console.log(`${chalk.bgRed("ERROR")} ${error}`);
};
const printSuccess = (message) => {
  console.log(`${chalk.bgGreen("SUCCESS")} ${message}`);
};
const printHelp = () => {
  console.log(dedent`${chalk.bgCyan("HELP")}
   Without params - show weather
   -s [CITY] for setup city
   -h show help
   -t [API_KEY] for setup token
   `);
};

export { printError, printSuccess, printHelp };
