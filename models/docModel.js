import mongoose from "mongoose";

const documentationSchema = new mongoose.Schema({
   title: String,
   description: String,
   link: String,
});

const Documentation = mongoose.model("Documentation", documentationSchema);

export default Documentation;
