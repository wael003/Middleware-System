const express = require('express')

let toures =[
    {id : 1 , destination : 'petra' , price : '100 JOD'}
    ,{id : 2 , destination : 'amman' , price : '200 JOD'}
]

exports.getTour = (req,res)=>{
    res.json(toures)
}
exports.createTour = (req , res)=>{
    const newTour = {
        id : toures.length + 1 ,
        destination : req.body.destination ,
        price : req.body.price
    }
    toures.push(newTour)
    res.json(newTour)
}