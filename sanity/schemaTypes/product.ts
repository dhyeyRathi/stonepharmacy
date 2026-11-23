import { defineField, defineType } from "sanity";

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Product Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "image",
            title: "Product Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "number",
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: "oldPrice",
            title: "Old Price",
            type: "number",
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: "discount",
            title: "Discount",
            type: "string",
            description: 'e.g. "Save £9.53"',
        }),
        defineField({
            name: "unit",
            title: "Unit",
            type: "string",
            description: 'e.g. "pack"',
        }),
        defineField({
            name: "rating",
            title: "Rating",
            type: "number",
            validation: (Rule) => Rule.min(0).max(5),
        }),
        defineField({
            name: "reviews",
            title: "Reviews Count",
            type: "number",
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: "size",
            title: "Size",
            type: "string",
            description: 'e.g. "2ML"',
        }),
        defineField({
            name: "pricePerUnit",
            title: "Price Per Unit",
            type: "string",
            description: 'e.g. "£192.50 per 100ML"',
        }),
        defineField({
            name: "offer",
            title: "On Offer",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "cartQuantity",
            title: "Cart Quantity",
            type: "number",
            initialValue: 0,
            readOnly: true
        }),
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "category",
            media: "image",
        },
    },
});
