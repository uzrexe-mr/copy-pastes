const fs = require("fs");
const readline = require("readline");
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("");
console.log("....................................................");
console.log("       This Tool Present by Learning Journey        ");
console.log("````````````````````````````````````````````````````");
console.log(" Subscribe My Youtube Channel For Link Update       ");
console.log(" Youtube:https://www.youtube.com/@learningjourneybd ");
console.log("____________________________________________________");
console.log("");
userInput.question("Enter your link:~$ ", (value) => {
  console.log(value);
  fs.writeFile("link.js", `const offerLink = "${value}";`, function (err) {
    console.log("Link set seccussful.");
    console.log("Now you ready to upload this file...");
    process.exit();
  });
});
