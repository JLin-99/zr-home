import Header from "@/components/Header";
import ProductCategories from "@/components/ProductCategories";
import ProductDisplay from "@/components/ProductDisplay";
import ProductNavbar from "@/components/ProductNavbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ZrHome</title>
        <meta name="description" content="ZrHome products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ProductNavbar />
      <ProductCategories />
      <ProductDisplay />
    </>
  );
}
