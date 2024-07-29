const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

const connectDB = require('./config/db');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// app.set('view engine', 'ejs');
// app.set('views', 'views');


// app.use(userRoutes);


// mongoose.connect('mongodb+srv://mahajantanmay910:lOR4pn0dzSoyIQZ2@cluster0.ln5vzac.mongodb.net/agritech');
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });




// Connect to MongoDB
connectDB();

const MONGODB_URI = process.env.MONGODB_URI;
const mongodbStore = require('connect-mongodb-session')(session);

const store = new mongodbStore({
    uri: MONGODB_URI,
    collection : 'sessions'

});



// Express Session Middleware

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  store: store
}));

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// EJS
app.set('view engine', 'ejs');

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/posts'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
