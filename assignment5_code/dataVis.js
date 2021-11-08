var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send('Hello Data Vis!')
});

router.post('/', function (req, res) {
    res.send('Got a POST request')
});

router.get('/grade', function(req,res) {
    res.send('Got a GET request at /grade, Jaxon Willard')
})

router.post('/grade', function(req,res) {
    res.send('Got a POST request at /grade, Jaxon Willard')
})

router.put('/grade', function(req,res) {
    res.send('Got a PUT request at /grade, Jaxon Willard')
})

router.delete('/grade', function(req,res) {
    res.send('Got a DELETE request at /grade, Jaxon Willard')
})
module.exports = router;
