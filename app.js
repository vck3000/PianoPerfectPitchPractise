const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.set('views', './views');
app.set('view engine', 'ejs');

const testFolder = './assets/Piano88KeySoundsCut/';
const fs = require('fs');
var fileNamesLocal = [];

fs.readdirSync(testFolder).forEach(file => {
    // console.log(file);
    fileNamesLocal.push(file);
});


app.get('/', (req, res) => res.render('index', fileNames = fileNamesLocal));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(express.static('assets', { maxAge: 1800000 })) // expires in 30 mins. cache




