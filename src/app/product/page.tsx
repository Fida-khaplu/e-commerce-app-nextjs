import { MockProduct } from "@/lib/mockdata";
import { ProductCard } from "./productCard";

export  function ProductPage(){
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {
        MockProduct.map((item)=>(
          <ProductCard key={item.id} product={item}/>
        ))
       }
       </div>
    )
}