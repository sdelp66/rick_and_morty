var http = require('http');
var fs = require("fs");
const characters = require('../utils/data')

http.createServer( function(req, res){
    console.log(`Server raised in port 3001`);
    if (req.url.includes('rickandmorty/character')) {
                const urlPartes=req.url.split('/')
                const id = urlPartes[urlPartes.length-1]

                const caracter = characters.find(c => c.id==id)

                // console.log('id>>> ',id)
                // console.log('characters >>',characters);
                // console.log('caracter >>',caracter);
                if (caracter) {
                    res.writeHead(200, { 'Content-Type':'application/json' });
                    res.end(JSON.stringify(caracter));
                } else {
                    res.writeHead(404, { 'Content-Type':'text/plain' });
                    res.end(`Caracter ${id} not found`);
                }
            return ;
            };
        res.writeHead(404, { 'Content-Type':'text/plain' });
        res.end('Route not found');

        }).listen(3001, 'localhost');
