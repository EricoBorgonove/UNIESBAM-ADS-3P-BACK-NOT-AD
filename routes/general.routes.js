const express = require ('express');
const router = express.Router();
const path = require ('path');

router.get ('/algo', (req,res)=> {
    res.sendFile(path.join(__dirname, '../public ','algo.html'))
});

router.get ('/saude', (req, res)=>{
    res.status(200).send('Aplicação Saudável')
});
router.get ('/jack', (req, res)=>{
    res.status(500).send('MacDonalds nada Saudável')
});

module.exports = router