const express= require("express");
const router=express.Router();
const {genNumber,getNumber,roughScale,reset} =require( '../core.js');


router.post('/start', (_,res)=>{
    genNumber()
    res.json({msg:'the game has started'})
    
})

router.get('/guess',(req, res)=>{
    const number=getNumber();
    const guessed=roughScale(req.query.number,10);
    if(!guessed || guessed<1 ||guessed>100)
    {
        res.status(406).send({status: 'Not a legal number.'})
        return;
    }
    else if(guessed===number) {
        res.status(200).send({status: 'Equal'})
        return;
    }
    guessed>number?
    res.status(200).send({status:"smaller"}):
    res.status(200).send({status:"bigger"})
});

router.post('/restart',(_,res)=>{
    reset();
    let number=genNumber();
    res.json({msg:'the game has started',data:number})
})

module.exports=router;