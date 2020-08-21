const fs = require("fs")
const path = require("path")

const getAllFiles = function(dirPath, arrayOfFiles) {
    files = fs.readdirSync(dirPath)

    arrayOfFiles = arrayOfFiles || []

    files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            if (dirPath.includes(".git")) {

            } else {
                arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
            }
        } else {
            arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
        }
    })

    return arrayOfFiles
}

//Games
var frames = getAllFiles("./frame/");
var swfs = getAllFiles("./swf/");
var scratch = getAllFiles("./scratch/");

//Dependecies
var css = getAllFiles("./css/");
var js = getAllFiles("./js/");
var png = getAllFiles("./png/");
var svg = getAllFiles("./svg/");

var unprocessedGameArray = frames.concat(swfs, scratch);
var unprocessedResourceArray = css.concat(js, png, svg);

//var unprocessedArray = getAllFiles("./")
var processedGameArray = [];
var processedResourceArray = [];

unprocessedGameArray.forEach(function(file) {
    file = file.replace(__dirname + "\\", "").replace(/\\/g, "/");
    processedGameArray.push(file);
});

unprocessedResourceArray.forEach(function(file) {
    file = file.replace(__dirname + "\\", "").replace(/\\/g, "/");
    processedResourceArray.push(file);
});


console.log("\n\n\nGames:\n\n\n")
console.log(JSON.stringify(processedGameArray));
console.log("\n\n\nResources:\n\n\n")
console.log(JSON.stringify(processedResourceArray));
console.log("\n\n\n\n\n\n")

/*console.log(JSON.stringify(processedArray).replace(RegExp('"', 'g'), "'").replace('".git/COMMIT_EDITMSG",".git/config",".git/description",".git/FETCH_HEAD",".git/HEAD",".git/index",".gitignore",".vscode/launch.json",".vscode/settings.json",', "").replace('"404.md",', ''));*/