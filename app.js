// function hello(name){
//     console.log("Hello " + name);
// }
// hello("Aayush");
// // console.log(window)
// var message = "Aaysh";
// console.log(message)

// console.log(module)
// const log = require('./logger.js')
// console.log(log);
// log("Hii !!")
                
// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// const os = require('os');
// var totalMem = os.totalmem();
// var freeMem = os.freemem();
// console.log(`Total Memory : ${totalMem}`);
// console.log(`Free Memory : ${freeMem}`);

//  const fs = require('fs');
// console.log(fs.readdirSync("./"));
// console.log(fs.readdir("./",(err, files)=>{
//     if(err) console.log("Error", err);
//     else console.log("Result", files);
// }));

// const EventEmmiter = require('events');

// // register a listener 
// const Logger = require("./logger.js");
// const logger = new Logger();

// logger.on('messageLogged', (arg)=>{
//     console.log("Listener called", arg.id);
// })

// logger.log("HIi");

// const http = require('http');
// const server = http.createServer((req, res)=>{
//     if(req.url === '/'){
//         res.write("Hello World");
//         res.end();
//     }
//     if(req.url === '/api/courses'){
//         res.write(JSON.stringify([1, 2, 3]));
//         res.end();
//     }
// });
// //all the capabilites of eventEmitteer is there in http 
// server.listen(5000);
// console.log('Listening on port 3000...');
// server.on('connection', (socket)=>{
//     console.log("New Connection");
// })

// //////   Practice ///////
 const fs = require('fs');
// fs.writeFile('note.txt', "Hi Aayush here", (err)=>{
//     if(err) console.error(err);
//     else console.log("Data stored in the file");
// })
// const userInput = "Username : Aayush Age : 18";
// fs.appendFile('note.txt',userInput, (err)=>{
//     if(err) console.log(err);
//     else console.log("Data stored");
// })
// const user = {name : "Aayush", age : 22};
// fs.writeFile('user.json', JSON.stringify(user), (err)=>{
//     if(err) console.log(err);
//     else console.log("JSON updated !!")
// })
// fs.readFile('note.txt', 'utf-8', (err, data)=>{
//     if(err) console.log(err);
//     else {
//         const lines = data.split('\n');
//         console.log(lines);
//     }
// })
// fs.readFile('user.json', 'utf-8', (err, data)=>{
//     if(err) console.log(err);
//     if(!data){
//         console.log("Invalid")
//     }else{
//          const obj = JSON.parse(data);
//     console.log(obj.name);
//     console.log("1111")
//     }
// })
// fs.readFile('counter.txt', 'utf-8', (err, data)=>{
//     if(err) console.error(err);
//     let count = parseInt(data) + 1;
//     fs.writeFile('counter.txt', count.toString(), (err)=>{
//         if(err) console.log(err);
//         else console.log("Counter updated");
//     })
// })
// const items = ['Apple', 'Banana', 'Cherrry'];
// fs.writeFile('fruits.txt', items.join('\n'), err=>console.error(err));
// fs.readFile('fruits.txt', 'utf-8', (err, data)=>{
//     if(err) console.error(err);
//     else {
//         const fruits = data.split("\n");
//         console.log(fruits);
//     }
// })
fs.readFile('logger.js', 'utf-8', (err, data)=>{
    if(err) console.log(err);
    else console.log(data);
})