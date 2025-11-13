import mongoose from "mongoose"

const thirukuralSchema = new mongoose.Schema({}, { strict: false }); 

const Paals = mongoose.model("paals", thirukuralSchema)

export default Paals