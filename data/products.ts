import { Product } from "@/models/products";

const products: Product[] = [
    {
        id: "prod-1",
        slug: "novabook-pro-15",
        name: "Novabook Pro 15",
        description: "15-inch performance laptop with Intel i7, 16gb RAM and 512GB SSD. Perfect for productivity and light gaming",
        price: 1599.99,
        imageUrl: "/products/novabook-pro-15.jpg",
        category: "laptop",
        inStock: 8,
        featured: true,
        brand: "NovaTech",
        rating: 4.7,
        tags: ["laptop", "intel", "16gb-ram", "ssd"]
    },
    {
        id: "prod-2",
        slug: "novabook-air-13",
        name: "NovaBook Air 13",
        description: "Ultra-light 13-inch laptop ideal for study, work and travel. Long battery life and silent performance",
        price: 1199.99,
        imageUrl: "/products/novabook-air-13.jpg",
        category: "laptop",
        inStock: 12,
        featured: false,
        brand: "NovaTech",
        rating: 4.5,
        tags: ["laptop", "student"]
    },
    {
        id: "prod-3",
        slug: "luminaview-27",
        name: "LuminaView 27\" QHD 144Hz",
        description: "27-inch QHD gaming monitor with 144Hz refresh and ultra-thin bezels",
        price: 399.99,
        imageUrl: "/products/luminaview-27.jpg",
        category: "monitor",
        inStock: 15,
        featured: true,
        brand: "Lumina",
        rating: 4.8,
        tags: ["monitor", "gaming", "144hz", "qhd"]
    },
    {
        id: "prod-4",
        slug: "luminaview-ultrawide-34",
        name: "LuminaView UltraWide 34\"",
        description: "34-inch ultrawide monitor for multitasking, content creation and productivity",
        price: 700,
        imageUrl: "/products/luminaview-ultrawide-34.jpg",
        category: "monitor",
        inStock: 6,
        featured: false,
        brand: "Lumina",
        rating: 4.6,
        tags: ["monitor", "ultrawide"]
    },
    {
        id: "prod-5",
        slug: "voidstrike-x-gaming-mouse",
        name: "VoidStrike X Gaming Mouse",
        description: "Ergonomic gaming mouse with adjustable DPI up to 16,000 and customizable RGB lighting.",
        price: 79.99,
        imageUrl: "/products/voidstrike-x-mouse.jpg",
        category: "accessory",
        inStock: 25,
        featured: false,
        brand: "VoidStrike",
        rating: 4.4,
        tags: ["mouse", "gaming", "rgb"]
    },
    {
        id: "prod-6",
        slug: "voidstrike-mechanical-keyboard",
        name: "VoidStrike Mechanical Keyboard",
        description: "Mechanical keyboard with hot-swappable switches and per-key RGB. Ideal for gaming and typing.",
        price: 130,
        imageUrl: "/products/voidstrike-keyboard.jpg",
        category: "accessory",
        inStock: 10,
        featured: true,
        brand: "VoidStrike",
        rating: 4.7,
        tags: ["keyboard", "mechanical", "rgb"]
    },
    {
        id: "prod-7",
        slug: "echocore-surround-headset",
        name: "EchoCore Surround HeadSet",
        description: "Surround sound gaming headset with noise-cancelling microphone and comfortable ear cushions.",
        price: 99.99,
        imageUrl: "/products/echocore-headset.jpg",
        category: "accessory",
        inStock: 18,
        featured: false,
        brand: "EchoCore",
        rating: 4.3,
        tags: ["headset", "gaming", "surround"]
    },
    {
        id: "prod-8",
        slug: "starter-tech-bundle",
        name: "Starter Tech Bundle",
        description: "Starter bundle including gaming mouse, mechanical keyboard and beadset at a special price",
        price: 249.99,
        imageUrl: "/products/starter-tech-bundle.jpg",
        category: "bundle",
        inStock: 5,
        featured: true,
        brand: "VoidStrike",
        rating: 4.6,
        tags: ["bundle", "gaming", "accessory"]
    }
];

export default products;