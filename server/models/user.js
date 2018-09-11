import mongoose  from 'mongoose';
import mongooseDel from 'mongoose-delete';

const UserSchema = mongoose.Schema({
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    dateOfBirth: {type: String, required: true},
    sex: {type: String, required: true},
    address: {type: String, required: true}
}, {
    timestamps: true
});

UserSchema.plugin(mongooseDel);
export default mongoose.model('User', UserSchema);