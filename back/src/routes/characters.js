const express = require("express");
const router = express.Router();
const {
  getFav,
  postFav,
  deleteFavId,
} = require("../controllers/getPostDelFav");
const getCharacterId = require("../controllers/getCharById");
const getDetailId = require("../controllers/getCharDetail");

router.get("/character/:id", getCharacterId);
router.get("/detail/:detailId", getDetailId);
router.get("/fav", getFav);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFavId);

module.exports = router;