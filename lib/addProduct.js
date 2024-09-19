// lib/addProduct.js
"use server";

export async function handleAddProduct(formData) {
  const productName = formData.get("productName");
  const description = formData.get("description");
  const price = formData.get("price");
  const discountPercentage = formData.get("discountPercentage");
  const discountType = formData.get("discountType");
  const sku = formData.get("sku");
  const barcode = formData.get("barcode");
  const quantity = formData.get("quantity");
  const category = formData.get("category");
  const tags = formData.getAll("tags");

  // You can save this data to your database or any storage here
  console.log({
    productName,
    description,
    price,
    discountPercentage,
    discountType,
    sku,
    barcode,
    quantity,
    category,
    tags,
  });

  // Return a success message
  return { success: true };
}
