require('dotenv').config()

const express = require('express')
const methodOverride = require('method-override');
const Appointment = require('./models/appointment.js');
const app = express();
const port = 3000;
const clientRoute = require('./routes/client.js');
const sequelize = require('./utils/database.js');
const cors = require("cors");
app.use(cors());




// ........................................... ULRencoder, methodOverride................
app.use(express.json({extended:true}))
app.use(methodOverride('_method'));

sequelize.sync(/*{force:true}*/).then(u=>{
    app.listen(port, () => {
        console.log(`Booking app listening on port ${port}`)
      })
 }).catch(e=>{
     console.log(e);
 })


app.use("/client_/",clientRoute)
app.get('/', (req, res) => {
  res.send('Hello World!')
})


