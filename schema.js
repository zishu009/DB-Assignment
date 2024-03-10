// schema.js

const mongoose = require("mongoose");

// schema for Product Category
const productCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
  },
  { timestamps: true }
);

// schema for Product Inventory
const productInventorySchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// schema for Discount
const discountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    discount_percent: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// schema for Product
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    SKU: String,
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductCategory",
      required: true,
    },
    inventory_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductInventory",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Discount",
      required: true,
    },
  },
  { timestamps: true }
);

// Models based on the schemas
const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);
const ProductInventory = mongoose.model(
  "ProductInventory",
  productInventorySchema
);
const Discount = mongoose.model("Discount", discountSchema);
const Product = mongoose.model("Product", productSchema);

module.exports = {
  ProductCategory,
  ProductInventory,
  Discount,
  Product,
};
