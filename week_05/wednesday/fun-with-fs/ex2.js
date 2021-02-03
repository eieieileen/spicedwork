const fs = require("fs");

function mapSizes(path) {
    let obj = {};
    const items = fs.readdirSync(path, { withFileTypes: true });
    items.forEach((item) => {
        if (item.isFile()) {
            let statSync = fs.statSync(path + "/" + item.name);
            obj[item.name] = statSync.size;

            // console.log("item is a file balsbflajbf", item);
        } else if (item.isDirectory()) {
            console.log("item is a directory", item);
            obj[item.name] = mapSizes(path + "/" + item.name);
        }
    });

    console.log("returning th very best", obj);
    return obj;
}

const sizeMap = mapSizes(__dirname + "/files");
fs.writeFileSync("file.json", JSON.stringify(sizeMap, null, 4));
