const express = require('express');
const router = express.Router();
const ShortURL = require('../models/ShortURL')

router.post('/', async (req, res) => {
    try {
        console.log(req.get('host'))
        const data = await ShortURL.findOne({full: req.body.url})
        if(data){
            res.json({ shortUrl : req.get('host') + '/' +  data.short})
        } else {
            const shortUrl = new ShortURL({ full : req.body.url })

            await shortUrl.save()
            res.json({ shortUrl : req.get('host') + '/' + shortUrl.short})
        }
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server error')
    }
    
})

module.exports = router