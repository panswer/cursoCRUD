const { Schema, model } = require('mongoose');

const NoteSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    description: {
        type: String,
        required: [true, 'description is required']
    }
}, {
    timestamps: true
});

module.exports = model('Note', NoteSchema);