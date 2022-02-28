const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    names: {
        type: String,
        required: [true, 'Name is required']
    },
    surnames: {
        type: String,
        required: [true, 'Surnames is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    nickname: {
        type: String
    },
    address: {
        type: String
    },
    role: {
        type: String,
        required: [true, 'Role is required'],
        default: 'USER_ROLE',
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    status: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
    img: {
        type: String
    }

}, {
    versionKey: false
});

userSchema.methods.toJSON = function () {
    const { password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
}

module.exports = model('User', userSchema);