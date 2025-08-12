export type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
};

export const MockProduct: Product[] = [
    {
        id: "1",
        name: "Vintage Leather Backpack",
        price: 79.99,
        description: "A handcrafted leather backpack with a timeless design and plenty of storage space.",
        image: "https://images.unsplash.com/photo-1585386959984-a4155223f6f4",
        category: "Bags"
    },
    {
        id: "2",
        name: "Wireless Noise-Cancelling Headphones",
        price: 199.9,
        description: "High-quality over-ear headphones with premium sound and active noise cancellation.",
        image: "https://images.unsplash.com/photo-1512499617640-c2f999018b72",
        category: "Electronics"
    },
    {
        id: "3",
        name: "Minimalist Wooden Desk",
        price: 249.9,
        description: "A clean and modern wooden desk made from sustainable materials.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
        category: "Furniture"
    },
    {
        id: "4",
        name: "Ceramic Coffee Mug Set",
        price: 29.99,
        description: "A set of 4 handmade ceramic mugs perfect for coffee or tea lovers.",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        category: "Kitchenware"
    },
    {
        id: "5",
        name: "Running Sneakers",
        price: 89.99,
        description: "Lightweight running sneakers designed for comfort and performance.",
        image: "https://images.unsplash.com/photo-1606813902917-4e76af1b36c8",
        category: "Footwear"
    }
];
