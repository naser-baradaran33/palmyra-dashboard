"use client";

import ProductCard from "../../components/ProductCard";
import { products } from "../../lib/products";

export default function OrdersPage() {
  const orders = products.slice(0, 3);

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
            href={`/product/${order.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
