const axios = require('axios');


    const getCharById = async function (req, res){
        const {id} = req.params

        try {
        const resultado = await axios(`https://rickandmortyapi.com/api/character/${id}`)
        const charId= resultado.data;
           
        const caracter = {
            id: charId.id,
            image: charId.image,
            name: charId.name,
            gender: charId.gender,
            species: charId.species
           }

           res.end(JSON.stringify(caracter))
    
  
        } catch (error) {
            res.end(error.message)
        }
}


module.exports = getCharById;