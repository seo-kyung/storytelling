const express = require("express");
let router = express.Router();
router.use(function(req, res,next){
    next();
})

const Datastore = require('nedb');
const database_one = new Datastore('public/one.db');


database_one.loadDatabase();


router.route('/one')
.get((request, response) => {
    database_one.find({}, (err,data) => {
        if (err) {
            response.end();
            return;
        }
        response.json({data});
    })
})
.post((request, response) => {
    console.log(request.body);
    const data = request.body;
    const timestamp = Date.now();
    console.log(timestamp);
    data.timestamp = timestamp; 
    database_one.insert(data);
    
    
    response.json({
        
        status: 'success',
        timestamp: timestamp,
        message: data.message,
       
    });
});
 



module.exports = router;