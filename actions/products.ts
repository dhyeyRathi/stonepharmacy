"use server";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import { ProductType } from "@/Types/Product";

const PRODUCT_QUERY = defineQuery(`*[_type == "product"] |  order(_createdAt) {
    "id":  _id,
    name,
    category,
    description,
    "image": image.asset->url,
    price,
    oldPrice,
    discount,
    unit,
    rating,
    reviews,
    size,
    pricePerUnit,
    offer,
    "cartQuantity": coalesce(cartQuantity, 0)
}`);

export async function getProducts() {
    const products = await client.fetch<ProductType[]>(PRODUCT_QUERY);

    if (!products || products.length === 0) {
        return [];
    }

    return products;
}
