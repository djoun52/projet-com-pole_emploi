import mongoose from "mongoose";

const Diapo = mongoose.model('Diapo', new mongoose.Schema({
    link: { type: String, unique: true },
    titre: { type: String }
}));

export default Diapo