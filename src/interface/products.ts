interface Category {
    id: string;
    name: string;
}

interface Brand {
    id: string;
    name: string;
}

interface Discount {
    percentage: number;
    startDate: string;
    endDate: string;
}

interface Price {
    current: number;
    currency: string;
    discount: Discount;
}

interface Image {
    id: string;
    url: string;
    alt: string;
}

interface Variant {
    id: string;
    name: string;
    options: string[];
}

interface Inventory {
    inStock: boolean;
    quantity: number;
}

interface Rating {
    average: number;
    count: number;
}

interface Review {
    id: string;
    author: string;
    rating: number;
    title: string;
    content: string;
    date: string;
}

export interface Product {
    id: string;
    name: string;
    description: string[];
    category: Category;
    brand: Brand;
    price: Price;
    images: Image[];
    variants: Variant[];
    inventory: Inventory;
    ratings: Rating;
    reviews: Review[];
    recentlyViewed: boolean;
    addedToCart: boolean;
}

