import mongoose, { mongo } from 'mongoose';
import mongooseDel from 'mongoose-delete';

const ItemSchema = mongoose.Schema({
    barcode: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    status: {type: Boolean},
    amount: {type: Number},
}, {
    timestamps: true
});

ItemSchema.plugin(ItemSchema);

export default mongoose.model('Item', ItemSchema);