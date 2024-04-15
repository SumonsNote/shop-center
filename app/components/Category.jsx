"use client";

import { useRouter } from "next/navigation";
import db from "../../db/products.json";
import CategoryProduct from "./CategoryProduct";
import NewsLetter from "./NewsLetter";

export default function Category({ categoryId }) {
  const categoryProducts =
    categoryId === "all"
      ? db.products
      : db.products.filter((c) => c.category === categoryId);
  const categories = [
    "all",
    ...new Set(db.products.map((product) => product.category)),
  ];

  const router = useRouter();
  const handleClick = (category) => {
    if (category === "all") {
      router.push("/category/all");
    } else {
      router.push(`/category/${category}`);
    }
  };

  return (
    <main>
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleClick(category)}
              className={`hover:border-b border-black block h-6 box-border mt-4 ${
                categoryId === category ? "text-blue-500" : "text-black"
              }`}
            >
              {category[0].toUpperCase() + category.substring(1)}
            </button>
          ))}
        </div>
        <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
          <CategoryProduct categoryProducts={categoryProducts} />
        </div>
      </section>

      <NewsLetter />
    </main>
  );
}
