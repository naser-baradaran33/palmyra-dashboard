"use client";

import { useMemo, useState } from "react";
import StoreProductCard from "./StoreProductCard";
import { products } from "../lib/products";

export default function ProductListingPage({ title, eyebrow = "Web UI Design", initialCategory = "همه", initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const categories = ["همه", "کفش ورزشی", "کیف", "ست", "لوازم دیجیتال"];
  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory = category === "همه" || product.category === category;
      return matchesCategory && product.title.includes(query);
    });
    return [...filtered].sort((a, b) => sort === "price" ? Number.parseFloat(a.price.slice(1)) - Number.parseFloat(b.price.slice(1)) : 0);
  }, [category, query, sort]);

  return (
    <div className="mx-auto max-w-[1368px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="border-b border-border pb-8">
        <p className="mb-3 text-sm font-bold text-primary">{eyebrow}</p>
        <h1 className="text-3xl font-black text-textDark sm:text-4xl">{title}</h1>
        <p className="mt-3 text-textLight">محصولات انتخاب‌شده با کیفیت و طراحی ماندگار.</p>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="جست‌وجوی محصول..." className="mt-5 w-full max-w-sm rounded-button border border-border px-4 py-3 text-sm outline-none focus:border-primary" aria-label="جست‌وجوی محصول" />
      </div>
      <div className="flex flex-col gap-4 border-b border-border py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="hidden gap-2 overflow-x-auto sm:flex">
          {categories.map((item) => (
            <button key={item} type="button" onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition ${category === item ? "border-primary bg-primary text-white" : "border-border text-textLight hover:border-primary hover:text-primary"}`}>
              {item}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => setFiltersOpen((open) => !open)} className="flex-1 rounded-button border border-border px-4 py-2 text-sm sm:hidden">
            فیلترها
          </button>
          <select value={sort} onChange={(event) => setSort(event.target.value)} className="flex-1 rounded-button border border-border bg-white px-3 py-2 text-sm text-textDark outline-none focus:border-primary sm:flex-none" aria-label="مرتب‌سازی">
            <option value="featured">محبوب‌ترین</option>
            <option value="price">ارزان‌ترین</option>
          </select>
        </div>
      </div>
      {filtersOpen && (
        <div className="mt-4 grid grid-cols-2 gap-2 rounded-card border border-border bg-slate-50 p-3 sm:hidden">
          {categories.map((item) => (
            <button key={item} type="button" onClick={() => { setCategory(item); setFiltersOpen(false); }} className={`rounded-button px-3 py-2 text-sm ${category === item ? "bg-primary text-white" : "bg-white text-textLight"}`}>
              {item}
            </button>
          ))}
        </div>
      )}
      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-4">
        {visibleProducts.map((product) => <StoreProductCard key={product.slug} product={product} />)}
      </div>
      {visibleProducts.length === 0 && (
        <div className="mt-10 rounded-card border border-dashed border-border bg-slate-50 p-12 text-center text-sm text-textLight">
          محصولی با این مشخصات پیدا نشد. فیلترها یا عبارت جستجو را تغییر دهید.
        </div>
      )}
    </div>
  );
}
