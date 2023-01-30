import Header from "@/components/Header";
import ProductNavbar from "@/components/ProductNavbar";
import Head from "next/head";
import ProductShowcase from "@/components/ProductShowcase";
import { ProductProvider } from "@/context/ProductContext";

export default function Home() {
  return (
    <>
      <Head>
        <title>ZrHome</title>
        <meta name="description" content="ZrHome products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid h-screen grid-cols-[5rem_1fr] grid-rows-[6rem_1fr] bg-red-300">
        <ProductProvider>
          <Header />
          <ProductNavbar />
          <ProductShowcase />
        </ProductProvider>
      </main>
    </>
  );
}
