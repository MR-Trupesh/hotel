const express = require('express');
const router = express.Router();
const MenuItrm = require('./../models/Menuitem');

router.post('/', async(req, res) => {
    try {
        const data = req.body
        const newMenu = new MenuItrm(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: 'INternal server error' })
    }
    router.get('/', async(req, res) => {
        try {
            const data = await MenuItrm.find();
            console.log('data fethed');
            res.status(200).json(data);

        } catch (err) {
            console.log(err);
            res.status(500).json({ Error: 'INternal server error' })
        }
    })

})


module.exports = router;