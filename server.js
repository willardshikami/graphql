import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

//import schema from './graphql';

const app = express();

//Mongoose Setup
mongoose.connect('mongodb://willies:animelistpassword1@ds251179.mlab.com:51179/roamkenya');
const db = mongoose.connection;

//Checking for DB connection 
db.on('error', () => console.log('Failed to connect to Database'));
db.once('open', () => console.log('Connected to Database'));


app.get('/', (req, res) => {
  res.send('Hello World')
});

//GraphQL API Endpoint
app.use('./graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true
})));

//Starting the Server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});