
export type ProductType = {
    _id?: string;
    id: number | string;
    name: string;
    category?: string;
    description?: string;
    image: string;
    price?: number;
    oldPrice?: number;
    discount?: string;
    unit?: string;
    rating: number;
    reviews?: number;
    size?: string;
    pricePerUnit?: string;
    offer: boolean;
    cartQuantity: number;
};