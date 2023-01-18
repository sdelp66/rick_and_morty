var fav = []

const getFav = function (req, res) {
  res.status(200).end(JSON.stringify(fav))
};
const postFav = function (req, res) {
  fav.push(req.body)
  console.log("post fav -> ", fav)
  res.status(200).end(JSON.stringify(req.body))
};
const deleteFavId = function (req, res) {
  const { id } = req.params;
  const character = fav.find(c=> c.id ===Number(id))
  if(character){
    fav = fav.filter(e=> e.id !== Number(id))
    console.log("delete fav -> ", fav)
    res.status(200).end(JSON.stringify(character))
  } else {
    res.status(400).end("este character ya no se encuentra en fav")
  }
};

module.exports = {
    getFav,
    postFav,
    deleteFavId,
  };