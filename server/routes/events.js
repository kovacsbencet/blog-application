const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('THIS WORKS!')
    console.log("Hello Boy!")
});

export default router;