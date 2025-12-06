import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type:String, requied: true},
    email: {type:String, requied: true, unique: true},
    password: {type:String, requied: true},
    creditBalance: {type:Number, default: 15},
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;