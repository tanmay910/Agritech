const express = require('express');
const app = express();
const userRoutes = require('./routes/welcome');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
