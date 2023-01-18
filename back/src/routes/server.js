// var http = require('http');
// var getCharById = require("../controllers/getCharById");
// var getCharDetail = require("../controllers/getCharDetail");
// const characters = require('../utils/data')

// http.createServer( function(req, res){
//     console.log(`Server raised in port 3000`);
//     if (req.url.includes('onsearch')) {
//                 const urlPartes=req.url.split('/');
//                 const id = urlPartes[urlPartes.length-1];
//                 return getCharById(res, id);
//             };
//     if (req.url.includes('detail')) {
//                 const urlPartes=req.url.split('/');
//                 const id = urlPartes[urlPartes.length-1];
//                 return getCharDetail(res, id);
//             };
//         res.writeHead(404, { 'Content-Type':'text/plain' });
//         res.end('Route not found');

//         }).listen(3000, 'localhost');
