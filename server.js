const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next) => {
    // console.log(req.params);
    const randomQuote = (getRandomElement(quotes));
    if(randomQuote) {
        res.send({quote: randomQuote});
    } else {
        res.status(404).send('nea found');
    }
})

app.listen(PORT, ()=>{
    console.log(`All yours at port ${PORT}`)
});