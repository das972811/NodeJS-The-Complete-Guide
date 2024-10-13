const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('In the second middleware');
    res.send('<form action="/add-product" method="POST"><input type="text" name="title" /><button type="submit">Add product</button></form>');
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    console.log('This is a POST REQUEST');
    res.redirect('/');
});

module.exports = router;
