"use client";

import ProductCard from "../../components/ProductCard";

export default function OrdersPage() {
  const orders = [
    {
      id: "#1234",
      title: "کفش ورزشی نایک",
      price: "€49.99",
      image: "/file.svg",
    },
    {
      id: "#1235",
      title: "هدفون سونی",
      price: "€89.99",
      image: "/file.svg",
    },
    {
      id: "#1236",
      title: "کیبورد مکانیکال",
      price: "€129.99",
      image: "/file.svg",
    },
  ];

  return (
    <div className="flex flex-col gap-section">
      <div>
        <h1 className="text-2xl font-bold text-textDark">سفارش‌ها</h1>
        <p className="mt-2 text-sm text-textLight">تاریخچه سفارش‌های ثبت شده شما</p>
      </div>

      <div className="grid grid-cols-1 gap-cardGap sm:grid-cols-2 lg:grid-cols-3">
        {orders.map((order, index) => (
          <ProductCard
            key={index}
            title={order.title}
            price={order.price}
            image={order.image}
            onClick={() => console.log("Order clicked:", order.id)}
          />
        ))}
      </div>
    </div>
  );
}
