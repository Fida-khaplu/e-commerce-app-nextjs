import { Product } from "@/lib/mockdata";
import Image from "next/image";

export function ProductCard({ product }: { product: Product }) {
    return (
        <div className="border border-gray-200 rounded-lg gap-3 ">
            <Image
                src={product.image}
                alt={product.name}
                // fill
                // className="object-cover"
                width={500}
                height={100}
            />
            <p className=" text-lg font-semibold">{product.name}</p>
            <p>{product.price.toFixed(2)}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
        </div>
    )

}

