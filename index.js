const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './public');
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render("home");
});

app.get('/about', (req, res) => res.render('about'));

app.get('*', (req, res) => res.status(404).send("404 Error - Page not found"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Magic is happening on port ' + String(PORT) + "...");
});