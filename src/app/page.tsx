import { MockProduct } from "@/lib/mockdata";

import { ProductPage } from "./product/page";
import { ProductCard } from "./product/productCard";

type SearchParams = { [key: string]: string | string[] | undefined };


export default function Home(props: { searchParams: SearchParams }) {
  const searchParams =  props.searchParams;
 ;
  return (
    <main className=" max-w-11/12 mx-auto">
      <h1>Home</h1>

      <p>Total product is {MockProduct.length}</p>
      <ProductPage searchParams={searchParams}/>

    
    </main>
  );
}
