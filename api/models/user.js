import mongoose from "mongoose";

const User = mongoose.model('User', new mongoose.Schema({
    email: {type: String, unique: true},
    password: {type: String},
    roles: {type: Array }
}));

export default User