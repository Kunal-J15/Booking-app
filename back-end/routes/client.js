const express = require('express');
var router = express.Router({mergeParams:true});
const appoint = require("../controllers/appoint");

router.route("/")
  .get(appoint.getAllAppointmets)
  .post(appoint.postAppointment)

 
// ...................................

  router.route("/:id")
  .put(appoint.updateAppointment)
  .delete(appoint.deleteAppointment)

  module.exports = router;
