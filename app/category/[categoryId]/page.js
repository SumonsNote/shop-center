import Category from "@/app/components/Category";

export default function CategoryPage({ params: { categoryId } }) {
  return <Category categoryId={categoryId} />;
}
