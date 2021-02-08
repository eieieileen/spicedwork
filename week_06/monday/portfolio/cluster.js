const os = require("os");
//console.log("os.cpus():", os.cpus());
console.log("os.cpus()", os.cpus().length);

const cluster = require("cluster");


cluster.setupMaster({ // how to set up cluster
    exec: "index.js" // telling what file to run
});

for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
}

cluster.on("exit", (worker) => {
    console.log(`WORKER ${worker.process.pid} DIED!`);
    cluster.fork();
});