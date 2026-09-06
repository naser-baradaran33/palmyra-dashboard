"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../../../components/Button";
import { getProduct } from "../../../lib/products";
import { products } from "../../../lib/products";

export default function ProductPage({ params }) {
  return <ProductPageContent params={params} />;
}

function ProductPageContent({ params }) {
  const product = getProduct(params.slug);
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <Link href="/orders" className="w-fit text-sm text-textLight transition hover:text-primary">
        ← بازگشت به سفارش‌ها
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <section className="grid gap-3 sm:grid-cols-[96px_1fr]" aria-label="تصاویر محصول">
          <div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:flex-col">
            {product.gallery.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`shrink-0 overflow-hidden rounded-card border-2 bg-card ${
                  selectedImage === image && index === 0 ? "border-primary" : "border-border"
                }`}
                aria-label={`نمایش تصویر ${index + 1}`}
              >
                <Image src={image} alt="" width={96} height={96} className="h-20 w-20 object-cover" />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden rounded-card border border-border bg-card sm:order-2">
            <Image
              src={selectedImage}
              alt={product.title}
              width={900}
              height={700}
              priority
              className="h-[360px] w-full object-cover sm:h-[520px]"
            />
          </div>
        </section>

        <section className="flex flex-col gap-6 rounded-card border border-border bg-card p-5 shadow-sm sm:p-8">
          <div>
            <p className="mb-3 text-sm text-primary">{product.category}</p>
            <h1 className="text-2xl font-bold text-textDark sm:text-3xl">{product.title}</h1>
            <p className="mt-4 text-sm leading-7 text-textLight">{product.description}</p>
          </div>

          <div className="flex items-end gap-3 border-b border-border pb-5">
            <span className="text-3xl font-bold text-primary">{product.price}</span>
            <span className="text-sm text-textLight line-through">{product.oldPrice}</span>
          </div>

          {product.colors.length > 0 && (
            <div>
              <h2 className="mb-3 text-sm font-bold">رنگ</h2>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`h-8 w-8 rounded-full border-2 p-0.5 ${
                      selectedColor === color ? "border-primary" : "border-border"
                    }`}
                    aria-label={`رنگ ${color}`}
                  >
                    <span className="block h-full w-full rounded-full" style={{ backgroundColor: color }} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.sizes.length > 0 && (
            <div>
              <h2 className="mb-3 text-sm font-bold">سایز</h2>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-button border px-4 py-2 text-sm ${
                      selectedSize === size ? "border-primary bg-primaryLight text-primary" : "border-border"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">تعداد</span>
            <div className="flex items-center rounded-button border border-border">
              <button type="button" className="px-3 py-2 text-lg" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</button>
              <span className="min-w-8 text-center">{quantity}</span>
              <button type="button" className="px-3 py-2 text-lg" onClick={() => setQuantity((value) => value + 1)}>+</button>
            </div>
          </div>

          <Button onClick={() => setAdded(true)} className="w-full py-3">
            افزودن به سبد خرید
          </Button>
          {added && <p className="text-center text-sm text-primary">محصول با موفقیت به سبد خرید اضافه شد.</p>}
        </section>
      </div>

      <section className="rounded-card border border-border bg-card p-5 sm:p-8">
        <h2 className="mb-3 text-lg font-bold">توضیحات محصول</h2>
        <p className="max-w-3xl text-sm leading-8 text-textLight">{product.description}</p>
      </section>
      <section>
        <div className="mb-5 flex items-end justify-between">
          <div><p className="text-sm text-primary">پیشنهادهای مشابه</p><h2 className="mt-1 text-2xl font-bold">محصولات مرتبط</h2></div>
          <Link href="/shop" className="text-sm text-primary">مشاهده همه</Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {products.filter((item) => item.slug !== product.slug).slice(0, 4).map((item) => (
            <Link key={item.slug} href={`/product/${item.slug}`} className="group">
              <Image src={item.image} alt={item.title} width={400} height={400} className="aspect-square w-full rounded-card object-cover transition group-hover:opacity-80" />
              <p className="mt-2 text-sm font-bold">{item.title}</p>
              <p className="mt-1 text-sm text-primary">{item.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
