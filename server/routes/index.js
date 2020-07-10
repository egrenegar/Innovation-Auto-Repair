const express = require("express")
const router = express.Router()
const db = require("../../models/")

router.get("/times", (req, res) => {
    db.Appointments.find({}, (times) => {
        res.json(times)
    })
    .catch(err => console.log(err))
})

router.get('/times/:date', (req, res) => {
    db.Appointments.find({date: req.params.date}, (times) => {
        if(times === null) {
            //All times available (9-5)
        } else {
            let availableTimes = times.map(time => {
                if(available) {
                    return time;
                }
            })
            return availableTimes;
        }
    })
})

module.exports = router