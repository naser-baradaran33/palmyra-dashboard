import Image from "next/image";
import Link from "next/link";

export default function StoreProductCard({ product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group flex flex-col gap-4">
      <div className="relative overflow-hidden rounded-card bg-slate-100">
        <Image src={product.image} alt={product.title} width={700} height={700} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs text-textDark shadow-sm">{product.category}</span>
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-bold text-textDark transition group-hover:text-primary">{product.title}</h3>
          <p className="mt-1 text-sm text-textLight">ارسال سریع و ضمانت اصالت</p>
        </div>
        <span className="whitespace-nowrap font-bold text-primary">{product.price}</span>
      </div>
    </Link>
  );
}
