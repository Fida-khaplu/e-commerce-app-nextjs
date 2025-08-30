import { MockProduct } from "@/lib/mockdata";
import { ProductCard } from "./productCard";
import { PrismaClient } from "@/generated/prisma";


// type SearchParams = { [key: string]: string | string[] | undefined };


export async function ProductPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }){
  const prisma = new PrismaClient();

  // const product = await prisma.product.findMany();
  

  
  
  const page  =  Number(searchParams?.page) || 1;
  console.log("serach params ==" ,  page);
  
  const products = await prisma.product.findMany({
    // take: 12, // limit per page
    // skip: (page - 1) * 12, // pagination offset
    // include: { category: true }, // include category data if needed
  });
  console.log("product ===>" , products);
  
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {
        products.map((item)=>(
          <ProductCard key={item.id} product={item}/>
        ))
       }
       </div>
    )
}