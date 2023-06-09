const mongoose = require('mongoose');

const InvoiceSchema = mongoose.Schema({
    projectNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    invoiceNumber: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    inputFields: {
        type: Object,
        required: true
    },
    freeInputFields: {
        type: Object,
        required: true
    },
    subTotal: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        required: true
    },
    deposit: {
        type: Number,
        default: 0
    },
    balance: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Invoice', InvoiceSchema);