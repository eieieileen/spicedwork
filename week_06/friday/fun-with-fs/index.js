// const fs = require("fs");
let { readdir, stat } = require("fs");
const { promisify } = require("util");

readdir = promisify(readdir);
stat = promisify(stat);

function logSizes(path) {
    readdir(path, { withFileTypes: true })
        .then((items) => {
            items.forEach((item) => {
                if (item.isFile()) {
                    stat(path + "/" + item.name)
                        .then((stats) => {
                            console.log(
                                path + "/" + item.name + ":" + stats.size
                            );
                        })
                        .catch((err) => console.log("oopsie", err));
                }else if (item.isDirectory()) {
                    //console.log("item is a directory:", item);
                    logSizes(path + "/" + item.name);
                }
            });
        })
        .catch((err) => console.log(err));

    // readdir(path, { withFileTypes: true }, function (err, items) {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     //console.log(items);
    //     items.forEach(
    //         (item) => {
    //             if (item.isFile()) {
    //                 //  console.log("item is a file:", item);
    //                 stat(path + "/" + item.name, function (err, stats) {
    //                     if (err) {
    //                         console.log("oopsie", err);
    //                     } else {
    //                         console.log(
    //                             path + "/" + item.name + ":" + stats.size
    //                         );
    //                     }
    //                 });
    //             } else if (item.isDirectory()) {
    //                 //console.log("item is a directory:", item);
    //                 logSizes(path + "/" + item.name);
    //             }
    //         } //console.log(item.name, item.isDirectory(), item.isFile()) // looping through the array
    //     );
    // });
}

logSizes(__dirname + "/files");
