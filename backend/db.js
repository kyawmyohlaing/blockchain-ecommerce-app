const mongoose = require('mongoose');

mongoose.connect(
    // 'your connection string',
    // 'mongodb+srv://kyawmyohlaing:<password>@cluster0.cmy46.mongodb.net/<dbname>?retryWrites=true&w=majority'
    'mongodb+srv://kyawmyohlaing:Kmh@450066267@cluster0.cmy46.mongodb.net/blockchain-ecommerce?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}
);

const paymentSchema = new mongoose.Schema({
    id: String,
    itemId: String,
    paid: Boolean
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
    Payment
};