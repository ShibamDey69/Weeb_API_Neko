import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
const userSchema = new mongoose.Schema({
  _uid: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isBanned: {
    type: Boolean,
    default: false,
  },
  isPremium: {
    type: Boolean,
    default: false,
  },
  apiKey: {
    type: String,
    required: true,
    unique: true,
  },
  usage: {
    type: Array,
    default: [],
  },
  created: {
    type: String,
    default: Date.now,
  }
});

userSchema.methods.generateAuthToken = async function () {
  try {
     const token = jwt.sign({
    _uid: this._uid.toString(),
    username: this.username,
    email: this.email,
    phone: this.phone,
    isAdmin: this.isAdmin,
    isBanned: this.isBanned,
    isPremium: this.isPremium,
    apiKey: this.apiKey,
                         }, 
    process.env.JWT_SECRET,
                         {
    expiresIn: process.env.JWT_EXPIRES_IN || "7D",
                         });
  return token;
  } catch (error) {
     return error;
  }
};
const User = new mongoose.model('User', userSchema);
export default User
    
  