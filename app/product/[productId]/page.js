import ProductDetails from "@/app/components/ProductDetails";

export default function ProductPage({ params: { productId } }) {
  return <ProductDetails id={productId} />;
}
