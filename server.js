const express = require('express')
const connectDB = require('./config/db');
const ShortURL = require('./models/ShortURL');
const app = express()

connectDB();

app.use(express.json({extended: false}))
app.use(express.urlencoded({ extended: false }))

app.use('/api/shorturl', require('./routes/shorturls') );

app.get('/:shorturl' , async (req, res)=> {
    try {
        const data = await ShortURL.findOne({ short: req.params.shorturl })
        if(data){
            res.redirect(data.full)
        } else {
           res.sendStatus(404)
        }
    } catch (error) {
        
    }
})

app.listen(process.env.PORT  || 5000 , ()=> console.log('Server started !!'))