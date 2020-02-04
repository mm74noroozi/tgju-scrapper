var request = require('request');
var DomParser = require('dom-parser');
var dateTime = require('node-datetime');
var parser = new DomParser();



givePrices()



function givePrices(){
    var dt = dateTime.create();
    var data_revision = dt.format('YmdH');
    var t = dt.format('YmdHMS');
    request("https://call2.tgju.org/ajax.json?" + data_revision + "-" + t + "-" + make_random_str(20),function(err,res,body){
        console.log(JSON.stringify(JSON.parse(body),null,2));
    })
}

function make_random_str(rand_limit) {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < rand_limit; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}