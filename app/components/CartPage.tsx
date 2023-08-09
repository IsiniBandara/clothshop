import React from "react";
import CartItem from "./CartItem";

interface CartData {
  id: number;
  name: string;
  price: number;
}

const mockCartItems: CartData[] = [
  { id: 1, name: "Product 1", price: 19.99 },
  { id: 2, name: "Product 2", price: 29.99 },
  // Add more items as needed
];

const CartPage: React.FC = () => {
  return (
    <div className="mx-auto mt-8 w-full p-5 bg-white md:hidden ">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {mockCartItems.map((item) => (
          <CartItem key={item.id} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
