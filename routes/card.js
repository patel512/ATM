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

router.post('/getcard', (req, res) =>{
    var card_number = req.body.card_number;
    var pin = req.body.pin;
   
    if(!card_number || ! pin ){
    return res.status(422).json({ success: false, msg: 'card number or pin not provided' });
    }else{
        cardsch.findOne({card_number:card_number},function(err,data){
            console.log(data.card_number)
            console.log(card_number)
            if (err){
                return res.status(422).json({ success: false, msg: err });
            }
                if(data.pin == pin && data.card_number == card_number){
                    return res.status(200).json({ success: true, msg: 'logged in successfully' });
                }else{
                    // console.log("data.pin is ========>",data.pin);
                    // console.log("pin is ========>",pin);
                    return res.status(422).json({ success: false, msg: 'incorrect pin entered' });

                }
            
        })
        }
});
module.exports = router;