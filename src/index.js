const express = require ('express');
const mongoose = require ('mongoose');

const bodyParser = require ('body-parser');
const authRoutes = require ('./routes/authRoutes');

const app = express ();

app.use (bodyParser.json ());
app.use (authRoutes);
// uri string  have to be without space
const mongoURI =
  'mongodb+srv://admin:55852425o@cluster0-uvvsv.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect (mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.connection.on ('connected', () => {
  console.log ('connected to mongoose');
});
mongoose.connection.on ('error', err => {
  console.log ('error has occurred  ', err);
});

app.get ('/', (req, res) => {
  res.send ('hi there');
});

app.listen (3000, () => {
  console.log ('port 3000');
});
