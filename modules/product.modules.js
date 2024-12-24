import mongoose, { mongo } from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category',
      required: true,
    },
    status: {
      type: String,
      enum: ['PENDING', 'CANCELLED', 'DELIEVERD'],
      default: 0,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
