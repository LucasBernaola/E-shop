export interface Product {
    id: string;
    slug: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    inStock: number;
    featured: boolean;
    brand: string;
    rating: number;
    tags: Array<string>;
}