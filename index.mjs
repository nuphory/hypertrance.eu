import express from "express";
const app = express();

const env = { port: 8000 };

// cli args
process.argv.slice(2).forEach((val, key) => {
    switch (key) {
        case 0:
            env.port = val;
            break;
        default:
            env[key] = val;
    }
});

app.use(express.static("public"));

app.listen(env.port, () => {
    console.log("Server has started, reach it at http://127.0.0.1:" + env.port);
});

// readline
import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

process.on("SIGINT", () => {
    // console.debug("received SIGINT, closing server.");
    stop("SIGINT");
});

rl.on("line", (input) => {
    switch (true) {
        case input.startsWith("kill"):
        case input.startsWith("stop"):
        case input.startsWith("quit"):
        case input.startsWith("q"):
            stop("stop command");
            break;
    }
});

rl.on("SIGINT", () => {
    process.emit("SIGINT");
});

/**
 * closes the server and exits the process (semi-gracefully)
 * @param {string} reason provided reason for the close/exit
 */
function stop(reason) {
    console.log("stopping server!");
    if (reason) console.log("reason: " + reason);
    // TODO killOsc()
    process.exit(0);
}
