var mongoose = require("mongoose");
var atmsch = require("../models/atmSchema"); txsch
var cardsch = require("../models/cardSchema");
var txsch = require("../models/transactionSchema");
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var uniqid = require("uniqid");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.post("/createNewTx", (req, res) => {
  var atm_id = req.body.atm_id;
  var card_number = req.body.card_number
  if (!atm_id || !card_number) {
    return res.status(422).json({ success: false, msg: 'atmID  or cardnumber Missing' });
  } else {
    atmsch.find({ atm_id: atm_id })
  }
  atmsch.findOne({ atm_id: atm_id })
});
module.exports = router;
