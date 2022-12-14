require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth')
const MongoUri = require('./uri.ts')
 
const app = express()

app.use(bodyParser.json())
app.use(authRoutes)
app.use(trackRoutes) 

  
mongoose.connect(MongoUri.mongoUri)
app.get('/',requireAuth, (req, res) => {
  res.send(`your email: ${req.user.email}`)
})
mongoose.connection.on('connected', () => {
  console.log('connceted to mongo instance');
})

mongoose.connection.on('error', (err) => {
  console.error('error connecting to mongo', err);
})
app.listen(3000, () => {
  console.log('listening on port 3000');
  
})