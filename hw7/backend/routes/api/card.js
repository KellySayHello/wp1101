const express = require('express');
const router =express.Router();
const ScoreCard= require("../../models/ScoreCard.js");

exports.clearDB=async(req,res)=>{
    try{
        await ScoreCard.deleteMany({});
        console.log("DB clear");
        res.status(200).send({message:"DataBase clear"});
    }catch(e){
        throw new Error("DataBase clear failed");
    }
};

exports.createScoreCard=async(req,res)=>{
    const data=req.body;
    const name=data.name;
    const subject=data.subject;
    const score=data.score;

    const exist=await ScoreCard.findOne({name:name,subject:subject});
    if(exist){
        try{
            ScoreCard.updateOne({name:name,subject:subject},{score:score});
            res.status(200).send({message:`add (${name},${subject},${score})`});
            return;
        }catch(e){
            throw new Error("ScoreCard update error: "+e);
        }
    }
    try{
        const newScoreCard= new ScoreCard(data);
        newScoreCard.save();
        res.status(200).send({message:`add (${name},${subject},${score})`});
        return;
    }catch(e){
        throw new Error("ScoreCard add error: "+e);
    }
    
    
};

exports.queryScoreCard = async(req,res)=>{
    const queryType=req.query.type;
    const content=req.query.queryString;

    let query={};
    query[queryType] = content;
    ScoreCard.find(query).exec((err,r)=>{
        if(err){
            console.log("error:" ,err);
        }
        else{
            let message=[];
            for (let i=0;i<r.length;i++){
                message[i]=`name:${r[i].name}, subject:${r[i].subject}, score:${r[i].score}`;
            }
            res.status(200).send({messages:message});
        }
    });
}