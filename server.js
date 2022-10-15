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
        res.send({q: randomQuote});
    } else {
        res.status(404).send('No random quotes found');
    }
})

app.get('/api/quotes', (req, res, next) => {

// console.log({quotes: quotes});
    res.send({quotes: quotes});

});

app.listen(PORT, ()=>{
    console.log(`All yours at port ${PORT}`)
});