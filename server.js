const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next) => {
    const randomQuote = (getRandomElement(quotes));
    if(randomQuote) {
        res.send({quote: randomQuote});
    } else {
        res.status(404).send('No random quotes found');
    }
})

app.get('/api/quotes', (req, res, next) => {
//     console.log(req);
// console.log(req.query.person);
// console.log(res);
if(req.query.person !== undefined) {
 const personQuotes = quotes.filter(quote => quote.person.toLowerCase() === req.query.person.toLowerCase());
 res.send({ quotes: personQuotes})
  } else {
    res.send({quotes: quotes});
  }
    

});

app.post('/api/quotes', (req, res, next)=> {
    // console.log(req.query);
    
        if(req.query.quote !== '' && req.query.person !== '') {
            quotes.push(req.query);
            res.status(201).send({quote: req.query})
        } else {
            res.status(400).send('Please quote.')
        }
    
});


app.listen(PORT, ()=>{
    console.log(`All yours at port ${PORT}`)
});