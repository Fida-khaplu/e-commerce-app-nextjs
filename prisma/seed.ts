
import { PrismaClient, Product } from '../src/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  await prisma.product.deleteMany();
    await prisma.category.deleteMany();

    const electronic = await prisma.category.create({

        data:{
            name:"Electronics",
            slug:"electronics"
        }
    })

    const clothing = await prisma.category.create({

        data:{
            name:"Clothing",
            slug:"clothing"
        }
    })

     const products: Product[] = [
        {
            id: "1",
            name: "Vintage Leather Backpack",
            price: 79.99,
            description: "A handcrafted leather backpack with a timeless design and plenty of storage space.",
            image: "https://images.unsplash.com/photo-1585386959984-a4155223f6f4",
            categoryId: clothing.id,
            slug:"Vintage Leather Backpack"
        },
        {
            id: "2",
            name: "Wireless Noise-Cancelling Headphones",
            price: 199.9,
            description: "High-quality over-ear headphones with premium sound and active noise cancellation.",
            image: "https://images.unsplash.com/photo-1512499617640-c2f999018b72",
            categoryId: electronic.id,
            slug:"Wireless Noise-Cancelling Headphones"
        },
       
    ];

    for (const product of products){
        await prisma.product.create({
            data:product
        })
    }
    
}

main()
  .then(async () => {
    console.log("seeding database");
    
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })