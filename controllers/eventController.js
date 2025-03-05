const Event = require("../models/eventModel.js");

const addEvent = async (req, res) => {
   try {
      const { title, customerName, email, phoneNumber, guestCount, start, end, status, linkDocumentation, testimonial } = req.body;
      const { address, cityName, postalCode, note } = req.body.location;

      const newEvent = new Event({
         title,
         customerName,
         phoneNumber,
         guestCount,
         start,
         end,
         status,
         location: {
            address,
            cityName,
            postalCode,
            note,
         },
         linkDocumentation,
         testimonial,
      });

      await newEvent.save();

      res.status(201).json({ message: "Acara berhasil ditambahkan", event: newEvent });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

const getEvents = async (req, res) => {
   try {
      const events = await Event.find();
      res.json(events);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

const getEventById = async (req, res) => {
   const eventId = req.params.id;

   try {
      const event = await Event.findById(eventId);

      if (!event) {
         return res.status(404).json({ message: "Acara tidak ditemukan" });
      }

      res.json(event);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

const deleteEvent = async (req, res) => {
   const eventId = req.params.id;

   try {
      const deletedEvent = await Event.findByIdAndDelete(eventId);

      if (!deletedEvent) {
         return res.status(404).json({ message: "Acara tidak ditemukan" });
      }

      res.json({ message: "Acara berhasil dihapus", deletedEvent });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

const updateEvent = async (req, res) => {
   const eventId = req.params.id;
   const { title, customerName, email, phoneNumber, guestCount, start, end, status, linkDocumentation, testimonial } = req.body;
   const { address, cityName, postalCode, note } = req.body.location;

   try {
      const updatedEvent = await Event.findByIdAndUpdate(
         eventId,
         {
            $set: {
               title,
               customerName,
               email,
               phoneNumber,
               guestCount,
               start,
               end,
               status,
               location: {
                  address,
                  cityName,
                  postalCode,
                  note,
               },
               linkDocumentation,
               testimonial,
            },
         },
         { new: true }
      );

      if (!updatedEvent) {
         return res.status(404).json({ message: "Acara tidak ditemukan" });
      }

      res.json({ message: "Detail acara berhasil diperbarui", updatedEvent });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

module.exports = {
   addEvent,
   getEvents,
   getEventById,
   deleteEvent,
   updateEvent,
};
