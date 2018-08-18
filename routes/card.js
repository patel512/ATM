var mongoose = require('mongoose');
var cardsch = require('../models/cardSchema');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var uniqid = require('uniqid');


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.post('/createNewCard', (req, res) =>{
    var userid = req.body.userid;
    var pin = Math.floor(1000 + Math.random() * 9000);    if(!userid ){
    return res.status(422).json({ success: false, msg: 'userID not Provided' });
    }else{
         let newCard = new cardsch({
         userid : userid,
         card_number:uniqid(),
         pin:pin,
         })
         newCard.save((err,card) =>{
         if(err){
             return res.status(422).json({ success: false, msg: 'error in dcreating new card!' });
            }else{
            return res.status(200).json({ success: true, msg: 'Card Created successfully',data: card });
                }
            })
           }
});
module.exports = router;