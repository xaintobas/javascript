// LOADING a module
// const loggger = require("./logger");
// loggger("Stephen");

// Working with the PATH module
// const path = require("path");
// var pathObject = path.parse(__filename);
// console.log(pathObject);

// WORKING WITH OS MODULE
// const os = require("os");
// const freeMem = os.freemem();
// const totalMem = os.totalmem();
// console.log(`Total Memory: ${totalMem}`);
// console.log(`Free Memory: ${freeMem}`);

// WORKING WITH FILES
// const fs = require("fs");
// const files = fs.readdirSync("./");
// console.log(files);

// WORKING WITH EVENTS
// const eventEmitter = require("events");
// const emitter = new eventEmitter();

// // Register a listener
// emitter.on("messageLogged", (args) => {
//   console.log("Listener Called", args);
// });

// // Raised and event
// emitter.emit("messageLogged", { id: 1, url: "http://" });

// const Logger = require("./logger");
// const logger = new Logger();
// logger.log("message");

// // HTTP MODULE
// const http = require("http");
// const server = http.createServer((request, response) => {
//   if (request.url === "/") {
//     response.write("Hello World");
//     response.end();
//   }
//   if (request.url === "/api/users") {
//     response.write(JSON.stringify(["Stephen", "John", "Joseph"]));
//     response.end();
//   }
// });

// server.listen(3000);
// console.log("Listening on Port 3000");
