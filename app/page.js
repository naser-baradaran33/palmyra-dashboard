import Image from "next/image";
import Link from "next/link";
import StoreProductCard from "../components/StoreProductCard";
import { products } from "../lib/products";

const categories = [
  { title: "کفش‌های زنانه", href: "/plp/shoe", image: "/figma-assets/Untitled design - 2026-08-27T150551.514 1.png" },
  { title: "کیف‌های زنانه", href: "/plp/bag", image: "/figma-assets/Product Card.png" },
  { title: "ست‌های روزانه", href: "/plp/set", image: "/figma-assets/custom_sphere_03.png" },
];

const popularProducts = products.slice(0, 5);

function SectionTitle({ eyebrow, title, href = "/shop" }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        <p className="mb-2 text-xs font-bold text-primary">{eyebrow}</p>
        <h2 className="text-xl font-black text-textDark sm:text-2xl">{title}</h2>
      </div>
      <Link href={href} className="shrink-0 text-xs font-bold text-textLight transition hover:text-primary">مشاهده همه ←</Link>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-[1368px] px-4 pt-6 sm:px-6 lg:px-8">
        <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] bg-[#f2efff] sm:min-h-[470px]">
          <Image src="/figma-assets/Ads.png" alt="خرید آنلاین از پالمیرا" fill priority className="object-cover object-center" />
          <div className="absolute inset-y-0 right-0 flex w-[45%] items-center justify-center p-5 sm:p-10">
            <div className="rounded-3xl bg-white/85 p-5 text-right shadow-xl backdrop-blur-sm sm:p-8">
              <p className="text-sm font-bold text-primary">تازه‌ترین انتخاب‌ها</p>
              <h1 className="mt-3 text-2xl font-black leading-tight text-textDark sm:text-4xl">استایل خاص،<br />انتخاب ماندگار</h1>
              <Link href="/shop" className="mt-5 inline-flex rounded-button bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-primaryHover">مشاهده محصولات</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1368px] px-4 py-10 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="دسته‌بندی‌ها" title="آنچه می‌پسندی را پیدا کن" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.href} href={category.href} className="group relative flex min-h-32 items-center justify-between overflow-hidden rounded-2xl bg-primaryLight p-5">
              <span className="relative z-10 text-sm font-black text-textDark">{category.title}<br /><small className="mt-2 inline-block font-normal text-primary">مشاهده محصولات ←</small></span>
              <Image src={category.image} alt={category.title} width={150} height={130} className="h-28 w-32 object-contain transition duration-300 group-hover:scale-110" />
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1368px] px-4 py-6 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="پیشنهاد شگفت‌انگیز" title="محبوب‌ترین محصولات" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {popularProducts.map((product) => <StoreProductCard key={product.slug} product={product} />)}
        </div>
      </section>

      <section className="mx-auto max-w-[1368px] px-4 py-8 sm:px-6 lg:px-8">
        <Image src="/figma-assets/App Ads.png" alt="خرید راحت‌تر با پالمیرا" width={1262} height={578} className="h-auto w-full rounded-[1.75rem]" />
      </section>

      <section className="mx-auto grid max-w-[1368px] gap-4 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
        {[
          ["Ads.png", "آمبیوه طبیعی"],
          ["MCI Banner.png", "بسته‌های متنوع"],
          ["MCI Banner-4.png", "فیلم و سریال"],
        ].map(([image, title]) => (
          <Link href="/shop" key={image} className="overflow-hidden rounded-2xl bg-slate-50 transition hover:-translate-y-1">
            <Image src={`/figma-assets/${image}`} alt={title} width={786} height={400} className="h-auto w-full object-cover" />
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-[1368px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[1.75rem] bg-[#f7f4ff] p-4 sm:p-8">
          <SectionTitle eyebrow="مجله پالمیرا" title="ایده‌هایی برای استایل بهتر" href="/search" />
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <Image src="/figma-assets/card-article.png" alt="مقاله مجله پالمیرا" width={1238} height={856} className="h-full min-h-56 w-full rounded-2xl object-cover" />
            <div className="flex flex-col justify-center rounded-2xl bg-white p-6">
              <p className="text-xs font-bold text-primary">راهنمای خرید</p>
              <h3 className="mt-3 text-2xl font-black">انتخابی که با تو می‌ماند</h3>
              <p className="mt-4 text-sm leading-8 text-textLight">جدیدترین ترندها و پیشنهادهای کاربردی را در مجله پالمیرا دنبال کن.</p>
              <Link href="/search" className="mt-6 w-fit rounded-button bg-primary px-5 py-3 text-sm font-bold text-white">مطالعه بیشتر</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
