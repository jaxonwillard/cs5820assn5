const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('Got a GET request')
})

router.post('/', function(req, res) {
    res.send('got a POST request')
})

router.get('/jaxon', function(req, res) {
    res.send('Got a GET request for jaxon')
})

router.post('/jaxon', function(req, res) {
    res.send('Got a GET request for jaxon')
})

router.delete('/jaxon', function(req, res) {
    res.send('Got a DELETE request for jaxon')
})

router.put('/jaxon', function(req, res) {
    res.send('Got a PUT request for jaxon')
})

router.get('/cs5820', function(req, res) {
    res.send('Got a GET request for cs5820')
})

router.post('/cs5820', function(req, res) {
    res.send('Got a GET request for cs5820')
})

router.delete('/cs5820', function(req, res) {
    res.send('Got a DELETE request for cs5820')
})

router.put('/cs5820', function(req, res) {
    res.send('Got a PUT request for cs5820')
})
module.exports=router;