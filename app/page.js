import Image from "next/image";
import Link from "next/link";
import StoreProductCard from "../components/StoreProductCard";
import { products } from "../lib/products";

export default function Home() {
  return (
    <div>
      <section className="mx-auto grid max-w-[1440px] gap-8 px-4 py-12 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-10">
        <div>
          <p className="mb-5 text-sm font-bold text-primary">کالکشن جدید پالمیرا</p>
          <h1 className="max-w-xl text-4xl font-black leading-tight text-textDark sm:text-6xl">سادگی که هر روز همراه توست.</h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-textLight">محصولات منتخب با طراحی ماندگار، کیفیت بالا و تجربه خریدی ساده.</p>
          <Link href="/shop" className="mt-8 inline-flex rounded-button bg-primary px-7 py-3 font-bold text-white transition hover:bg-primaryHover">مشاهده محصولات</Link>
        </div>
        <div className="overflow-hidden rounded-[2rem] bg-primaryLight">
          <Image src="/products/shoe.jpg" alt="کالکشن جدید پالمیرا" width={900} height={700} priority className="h-[360px] w-full object-cover sm:h-[520px]" />
        </div>
      </section>
      <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10">
        <div className="mb-8 flex items-end justify-between">
          <div><p className="text-sm text-primary">انتخاب ما برای تو</p><h2 className="mt-2 text-2xl font-black">محبوب‌ترین محصولات</h2></div>
          <Link href="/shop" className="text-sm text-primary">مشاهده همه</Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.map((product) => <StoreProductCard key={product.slug} product={product} />)}</div>
      </section>
    </div>
  );
}
