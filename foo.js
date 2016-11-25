var moment = require('moment');
var isValid = moment('01/01/1990 17:40:30', 'DD/MM/YYYY HH:mm:ss', true).isValid();

console.log(isValid);