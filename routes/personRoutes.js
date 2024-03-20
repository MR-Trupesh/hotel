const express = require('express');
const router = express.Router();
const person = require('./../models/person');

router.post('/', async(req, res) => {
    try {
        const data = req.body
        const newPerson = new person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: 'INternal server error' })
    }
    router.get('/', async(req, res) => {
        try {
            const data = await person.find();
            console.log('data  fethed');
            res.status(200).json(data);

        } catch (err) {
            console.log(err);
            res.status(500).json({ Error: 'INternal server error' })
        }
    })

})

router.get('/person/:workTyep', async(req, res) => {
    try {
        const workTyep = req.params.workTyep;
        const newLocal = 'manager';
        if (workTyep == 'chef' || workTyep == newLocal || workTyep == 'waiter') {
            const response = await person.find({ work: workTyep });
            console.log('response fetched');
            res.status(200).json(response);
        } else {
            res.status(400).json({ Error: ' Invalid workType' })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: 'INternal server error' })

    }
})

router.put('/:id', async(req, res) => {
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true,
        })

        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log('data updated');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
router.delete('/:id', async(req, res) => {
    try {
        const personId = req.params.id;
        const response = await person.findByIdAndDelete(personId);
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('data delete');
        res.status(200).json({ message: 'person Deleted Successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


module.exports = router;