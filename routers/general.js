const express = require('express')
const router = express.Router()
const allItems = require(`../utils/allItems`)

router.get('', (req, res, next) => {
    allItems.getAllIndexItems((err, items) => {
      if(err) return res.status(500).send(err);
      return res.render('index', {items})
    })
  });


module.exports = router;
