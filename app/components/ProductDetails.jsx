"use client";
import Image from "next/image";
import { useState } from "react";
import db from "../../db/products.json";
import { generateStarRating } from "../utils/rating-util";

export default function ProductDetails({ id }) {
  const [image, setImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const parseId = parseInt(id);
  const singleProduct = db.products.find((product) => product.id === parseId);
  const stars = generateStarRating(singleProduct.rating);

  const handleImageClick = (image, index) => {
    setImage(image);
    setSelectedImage(index);
  };
  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
            <Image
              src={image || singleProduct.images[0]}
              className="w-[400px] h-[500px] mx-auto object-cover"
              width={40}
              height={50}
              unoptimized
              alt={singleProduct.title}
            />

            <div className="flex gap-4 mt-4 justify-center ">
              {singleProduct.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={image.title}
                  width={100}
                  height={80}
                  onClick={() => handleImageClick(image, index)}
                  className={`${
                    selectedImage === index ? "border-4 border-indigo-600" : ""
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {singleProduct.title}
            </h1>
            <span className="text-[#919090] my-3">
              {singleProduct.category}
            </span>
            <div className="mt-3 flex items-center justify-start gap-1">
              {stars}
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  ${singleProduct.discountPercentage}
                </span>{" "}
                <span className="font-bold text-2xl">
                  ${singleProduct.price}
                </span>
              </p>
            </div>
            <div>
              <p className="leading-7">{singleProduct.description}</p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - ${singleProduct.price}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
