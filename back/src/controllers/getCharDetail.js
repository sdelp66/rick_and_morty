const axios = require('axios');

const getCharDetails = (res,id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((data) => data.data)
    .then((data) => {
       const caracter = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
        status: data.status
       }
       res.writeHead(200, { 'Content-Type':'application/json' });
       res.end(JSON.stringify(caracter))
    })
    .catch((err) => {
        res.writeHead(500,{ 'Content-Type':'text/plain' })
        res.end(err.message)
    })

}

module.exports = getCharDetails;