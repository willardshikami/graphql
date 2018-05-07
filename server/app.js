const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross origin requests
app.use(cors());

//connect to database
mongoose.connect('mongodb://shikami:shikami@ds263109.mlab.com:63109/gqlshikami');
mongoose.connection.once('open', ()=> {
  console.log('Connected to Database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
