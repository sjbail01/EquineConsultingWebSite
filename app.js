const MyModule = require("./Module.js");
//now get path 
//add content of file
MyModule.writeToFile(MyModule.getFilePath(), "Updated from App.js");
console.log(MyModule.readFromFile(MyModule.getFilePath()));