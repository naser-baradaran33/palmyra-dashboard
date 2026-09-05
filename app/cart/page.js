"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../../components/Button";
import { getProduct } from "../../lib/products";

export default function CartPage() {
  const [quantity, setQuantity] = useState(1);
  const product = getProduct("nike-sport-shoes");
  const total = (49.99 * quantity).toFixed(2);

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:py-16">
      <h1 className="text-3xl font-black text-textDark">سبد خرید</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <section className="rounded-card border border-border bg-white p-5 sm:p-8">
          <div className="flex gap-4 border-b border-border pb-6">
            <Image src={product.image} alt={product.title} width={160} height={160} className="h-28 w-28 rounded-card object-cover" />
            <div className="flex flex-1 flex-col gap-2">
              <h2 className="font-bold">{product.title}</h2>
              <span className="text-primary">{product.price}</span>
              <div className="mt-auto flex w-fit items-center rounded-button border border-border">
                <button type="button" className="px-3 py-1" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</button>
                <span className="min-w-8 text-center">{quantity}</span>
                <button type="button" className="px-3 py-1" onClick={() => setQuantity((value) => value + 1)}>+</button>
              </div>
            </div>
          </div>
          <Link href="/shop" className="mt-6 inline-block text-sm text-primary">ادامه خرید</Link>
        </section>
        <aside className="h-fit rounded-card bg-slate-50 p-5 sm:p-8">
          <h2 className="text-lg font-bold">خلاصه سفارش</h2>
          <div className="mt-6 flex justify-between border-b border-border pb-4 text-sm"><span>جمع محصولات</span><span>€{total}</span></div>
          <div className="flex justify-between py-4 text-sm"><span>ارسال</span><span>رایگان</span></div>
          <div className="flex justify-between text-lg font-bold"><span>مبلغ نهایی</span><span className="text-primary">€{total}</span></div>
          <Button className="mt-6 w-full py-3">ادامه پرداخت</Button>
        </aside>
      </div>
    </div>
  );
}
