import express  from 'express';
import bodyParser  from 'body-parser';
import mongoose from 'mongoose';
import config from './config';
import compression from 'compression';
import morgan from 'morgan';
import session from 'express-session';

// create express app
const app = express();

app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(morgan('tiny'));
app.use(session({
    secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));


mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.set('useCreateIndex', true);
mongoose.connect(config.urlMongo, {useNewUrlParser: true})
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

import userRoutes from './routes/user.routes';
import itemRoutes from './routes/item.routes';

((myApp)=> {
  userRoutes(myApp);
  itemRoutes(myApp);
})(app);

// listen for requests
app.listen(config.port, () => {
    console.log("Server is listening on port 3000");
});