const express = require('express');
const app = express();
const port = process.env.PORT || 4001;
const db = require('../db/db.js');

app.use(express.static('public'));

app.listen(port, function() {
    console.log(`Listening on port ${port}`)
});

app.get('/agrianBlog', function(req, res) {
    db.findAgrianBlogEntries((err, response)=>{
        if (err) throw err;
        res.send(response)
    })
})