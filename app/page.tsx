import React from "react";
import Card from "../app/components/Card";
import CartPage from "./components/CartPage";

const products = [
  {
    title: "V-NECK BUTTON DOWN TOP",
    image: "/image.jpg",
    price: 29.99,
    sizes: ["S", "M", "L"],
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Page = () => {
  return (
    <div className="flex flex-wrap h-screen ">
      {products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
      <CartPage />
    </div>
  );
};

export default Page;
