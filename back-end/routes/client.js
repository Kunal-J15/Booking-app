const express = require('express');
var router = express.Router({mergeParams:true});
const catchAsync = require('../utils/catchAsync');

// ............REQUIRED MODELS AND ROUTES...............
const Appointment = require('../models/appointment');

// .....................................................

router.route("/")
  .get(catchAsync(async(req,res,next)=>{
    // .......FIND ALL........
    const clients = await Appointment.findAll(); 
    res.send(clients)
  }))
  .post(catchAsync(async(req,res,next)=>{
    // .......... ADD ONE
    const {name,email,number} = req.body;
    let client = await Appointment.build({name,email,number}); 
    await client.save();
    res.send(client);
  }))

 
// ...................................

  router.route("/:id")
  .put(catchAsync(async(req,res,next)=>{
      // ....................UPDATE SPECIFIC
      const {name,email,number} = req.body;
      let client = await Appointment.update({name,email,number},{where:{ id:req.params.id }}); 
      res.send(client);
  }))
  .delete(catchAsync(async(req,res,next)=>{
    let client = await Appointment.destroy({where:{
      id:req.params.id
    }});
    res.send("deleted");
  }))

  module.exports = router;
