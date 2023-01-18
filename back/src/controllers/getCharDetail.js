const axios = require('axios');


 const getCharDetails = async (req, res) => {
    const { detailId } = req.params;

    try {
    const resultado = await axios(`https://rickandmortyapi.com/api/character/${detailId}`)
    const charAPI = resultado.data;

       const caracter = {
        id: charAPI.id,
        image: charAPI.image,
        name: charAPI.name,
        gender: charAPI.gender,
        species: charAPI.species,
        origin: charAPI.origin,
        status: charAPI.status
       }
       
       res.end(JSON.stringify(caracter))
    
    } catch(err)  {
        res.writeHead(500,{ 'Content-Type':'text/plain' })
        res.end(err.message)
    }
 }

module.exports = getCharDetails;