const mongoose = require('mongoose');
const {Schema, model} = mongoose;

mongoose.connect('mongodb+srv://morgan:PglnyoMrWGv2MDVx@cluster0.k2cdfey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const UserSchema = new Schema({
  username: {type: String, required: true, min: 4, unique: true},
  password: {type: String, required: true},
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;