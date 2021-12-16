const express = require('express');


const router = express.Router();

router
    .get('/health', (req, res) => {
        res.status(200).send({message: 'Running', version: '1.0.0'});
    })
    .get('/api/countries', (req, res) => {
        res.send({
            message: 'Countries returned successfully',
            data: [{
                id: 1,
                name: 'Argentina'
            }]
        });
    })
    .get('/api/countries/:id', (req, res) => {
        res.send({
            message: 'Country returned successfully',
            data: [{
                id: parseInt(req.params.id),
                name: 'Argentina'
            }]
        });
    })
;


module.exports = router;