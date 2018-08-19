var mongoose = require("mongoose");
var atmsch = require("../models/atmSchema");
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.post("/depositCash", (req, res) => {
  var atm_id = req.body.atm_id;
  var denomination = req.body.denomination;
  var count = req.body.count;
  if (!denomination || !count) {
    console.log("Are You Kidding Me");
    return res
      .status(422)
      .json({ success: false, msg: "denomination or count is empty!" });
  }
  if (denomination % 100 === 0) {
    atmsch.find({ atm_id: atm_id }, function (err, results) {
      if (err) {
        return res.status(422).json({ success: false, msg: err });
      }
      if (results) {
        currencyDenomination = { denomination: req.body.denomination, count: req.body.count }
        var currDenom = results[0].currencyDenomination;

        for (i = 0; i < currDenom.length; i++) {
          if (currDenom[i].denomination === denomination)
            return (currDenom[i].count);

          console.log(currDenom[i].count)
          console.log('\n\n\n');
        }
        return res.status(200).json({ success: true, msg: results });
      }
    })
    currencyDenomination = { denomination: req.body.denomination, count: req.body.count }
    // atmsch.findOneAndUpdate(
    //   { atm_id: atm_id}, 
    //   { $push: { currencyDenomination: currencyDenomination } },
    //   function (error, success) {
    //     if (error) {
    //         console.log("This is error",error);
    //     } else {
    //         console.log("Success is there",success);
    //         return res.status(200).json({ success: true, msg: success });

    //     }
    // });
    // newDeposit.save(err => {
    //   if (err) {
    //     return res
    //       .status(422)
    //       .json({ success: false, msg: "error in depositing cash to atm!" });
    //   } else {
    //     return res
    //       .status(200)
    //       .json({ success: true, msg: "Amount Deposited successfully" });
    //   }
    // });
    // });
  } else {
    return res
      .status(422)
      .json({ success: false, msg: "denomination is not in multiple of 100" });
  }
});
module.exports = router;
