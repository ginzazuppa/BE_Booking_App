const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
   title: { type: String, required: true },
   customerName: { type: String, required: true },
   phoneNumber: { type: String, required: true },
   guestCount: { type: String, required: true },
   start: { type: Date, required: true },
   end: { type: Date, required: true },
   status: { type: String, required: true },
   location: {
      address: String,
      cityName: String,
      postalCode: Number,
      note: String,
   },
   linkDocumentation: String,
   testimonial: String,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
