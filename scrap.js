var request = require('request');
var DomParser = require('dom-parser');
var dateTime = require('node-datetime');
var parser = new DomParser();

var dt = dateTime.create();
var formatted = dt.format('Y-m-d H:M:S');
console.log(formatted);

// request('https://www.tgju.org/',function(err,res,body){
//     var document = parser.parseFromString(body);
//     console.log(document.getElementById('server-time').getAttribute('data-value'));
//     // console.log(body)
// })
// request("https://call2.tgju.org/ajax.json?" + data_revision + "-" + t + "-" + make_random_str(20))

// function make_random_str(rand_limit) {
//     var text = "";
//     var possible =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     for (var i = 0; i < rand_limit; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));
//     return text;
// }