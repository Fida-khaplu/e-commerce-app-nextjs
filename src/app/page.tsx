import { MockProduct } from "@/lib/mockdata";

import { ProductPage } from "./product/page";

export default function Home() {
  return (
    <main className=" max-w-11/12 mx-auto">
      <h1>Home</h1>
      
       <p>Total product is {MockProduct.length}</p>
       <ProductPage/>
    </main>
  );
}
