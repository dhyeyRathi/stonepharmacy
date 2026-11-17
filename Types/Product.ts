export type ProductType = {
    id: number;
    name: string;
    category?: string;
    description?: string;
    image?: string;
    price?: number;
    oldPrice?: number;
    discount?: string;
    unit?: string;
    rating?: number;
    reviews?: number;
    size?: string;
    pricePerUnit?: string;
    offer?: boolean;
    cartQuantity: number;
};