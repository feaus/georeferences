const express = require('express');
const Joi = require('joi');


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
    .post('/api/countries', (req, res) => {
        const schema = Joi.object({
            name: Joi.string().min(3).required(),
        });

        const result = schema.validate(req.body);

        if (result.error) {
            res.status(400).send(result.error.details[0].message);
            return;
        }
        const course = {
            id: 1,
            name: req.body.name,
        };
        res.send(course);
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
    .put('/api/countries/:id', (req, res) => {
        const country = countries.find(c => c.id === parseInt(req.params.id));
        if (!country) {
            return res.status(404).send('Country not found');
        }

        const { error } = validateSchema(req.body);
        if (error) {
            return res.status(400).send(error.message);
        }

        country.name = req.body.name;
        res.send(country);
    })
;

function validateSchema(country) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    })

    return schema.validate(country);
}


module.exports = router;