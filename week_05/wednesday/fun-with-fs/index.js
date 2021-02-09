const fs = require("fs");

function logSizes(path) {
    fs.readdir(path, { withFileTypes: true }, function (err, items) {
        if (err) {
            console.log(err);
            return;
        }
        //console.log(items);
        items.forEach(
            (item) => {
                if (item.isFile()) {
                    //  console.log("item is a file:", item);
                    fs.stat(path + "/" + item.name, function (err, stats) {
                        if (err) {
                            console.log("oopsie", err);
                        } else {
                            console.log(
                                path + "/" + item.name + ":" + stats.size
                            );
                        }
                    });
                } else if (item.isDirectory()) {
                    //console.log("item is a directory:", item);
                    logSizes(path + "/" + item.name);
                }
            } //console.log(item.name, item.isDirectory(), item.isFile()) // looping through the array
        );
    });
}

logSizes(__dirname + "/files");
