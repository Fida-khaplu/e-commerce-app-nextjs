import { MockProduct } from "@/lib/mockdata";

import { ProductPage } from "./product/page";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      
       <p>Total product is {MockProduct.length}</p>
       <ProductPage/>
    </main>
  );
}
