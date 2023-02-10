const mongoose = require('mongoose');

const { Schema } = mongoose;

const patientSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    drive: {
        type: String,
        required: true
    },
    tel: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    plan: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    feedback: {
        type: Date,
        required: true
    },
    update: {
        type: Date,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
},
    { timestamps: true }
);

const Patient = mongoose.model('Patient', patientSchema)

module.exports = {
    Patient,
    patientSchema,
};