import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/lib/mockdata";
import Image from "next/image";

export function ProductCard({ product }: { product: Product }) {
    return (
        // <div className="border border-gray-200 rounded-lg gap-3 ">
        //  here using card from shadcn
            <Card className=" pt-0 overflow-hidden">
            <Image
                src={product.image}
                alt={product.name}
                // fill
                // className="object-cover"
                width={500}
                height={100}
            />
            <CardHeader>
                <CardTitle>
                    <p className=" text-lg font-semibold">{product.name}</p>
                </CardTitle>
                <CardDescription>
                     <p>{product.description}</p>
                </CardDescription>
            </CardHeader>
            
            <CardFooter>
                <p>{product.price.toFixed(2)}</p>
            </CardFooter>
           
            
            {/* <p>{product.category}</p> */}
            </Card>
        // </div>
    )

}

