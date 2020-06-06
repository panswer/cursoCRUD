const { Schema, model } = require('mongoose');
const bcryptjs = require('bcryptjs');

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    }
}, {
    timestamps: true
});

UserSchema.methods.encryptPassword = async password => {
    let salt = await bcryptjs.genSalt(10);
    return bcryptjs.hash(password, salt);
};

UserSchema.methods.matchPassword = async function(password) {
    return await bcryptjs.compare(password, this.password);
}

module.exports = model('User', UserSchema);