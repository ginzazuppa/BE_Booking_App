const express = require("express");
const { addEvent, getEvents, getEventById, deleteEvent, updateEvent } = require("../controllers/eventController.js");

const router = express.Router();

router.get("/event", getEvents);
router.get("/event/:id", getEventById);
router.post("/event", addEvent);
router.delete("/event/:id", deleteEvent);
router.put("/event/:id", updateEvent);

module.exports = router;
