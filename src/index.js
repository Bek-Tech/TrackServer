require ('./models/User');
const express = require ('express');
const mongoose = require ('mongoose');
const authRoutes = require ('./routes/authRoutes');
const bodyParser = require ('body-parser');

const app = express ();

app.use (bodyParser.json ());
app.use (authRoutes);
const mongoUri =
  'mongodb+srv://admin:12345678o@cluster0-ibsts.mongodb.net/test?retryWrites=true&w=majority'; //  mongo uri have to be with out space

mongoose.connect (mongoUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.connection.on ('connected', () => {
  console.log ('connected to mongo ');
});

mongoose.connection.on ('error', err => {
  console.error ('error has occurred  ', err);
});

app.get ('/', (req, res) => {
  res.send ('Hi ');
});

app.listen (3001, () => {
  console.log ('port 3000 is working');
});
