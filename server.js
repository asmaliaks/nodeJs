/**
 * Created by asmalouski on 12.5.15.
 */
var http = require('http');
var url = require('url');

var server = new http.Server(function(req, res){

    console.log(req.headers)

        console.log(req.method, req.url);

     var urlParsed = url.parse(req.url, true);
     // console.log(urlParsed);

     if(urlParsed.pathname == '/echo' && urlParsed.query.message){
        res.  
         res.setHeader("Cach-control", "no-cache");
        res.end(urlParsed.query.message)
     }else{
        res.statusCode = 404;
        res.end("Page not found");
     }
});



server.listen(1337, '127.0.0.1');

