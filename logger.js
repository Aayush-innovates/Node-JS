const EventEmmiter = require('events');

var url = 'http://mylogger.io/log';
console.log(__filename);
console.log(__dirname);

class Logger extends EventEmmiter{
    log(message){
    //Send an http request
    console.log(message);
     // making a noise that an event occured
this.emit('messageLogged', {id:1, url:'http://'});
    }
} 

module.exports = Logger;

