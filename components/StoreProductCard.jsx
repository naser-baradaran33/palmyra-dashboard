import Image from "next/image";
import Link from "next/link";

export default function StoreProductCard({ product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group flex min-w-0 flex-col gap-2">
      <div className="relative overflow-hidden rounded-card border border-[#f0edf5] bg-white p-2 shadow-[0_4px_18px_rgba(45,32,79,0.06)]">
        <Image src={product.image} alt={product.title} width={700} height={700} className="aspect-[0.88] w-full rounded-[0.65rem] object-contain transition duration-500 group-hover:scale-105" />
        <span className="absolute right-3 top-3 rounded-full bg-white px-2 py-1 text-[10px] text-textDark shadow-sm">{product.category}</span>
      </div>
      <div className="flex items-start justify-between gap-2 px-1">
        <div>
          <h3 className="text-sm font-bold text-textDark transition group-hover:text-primary">{product.title}</h3>
          <p className="mt-1 text-[11px] text-textLight">ارسال سریع و ضمانت اصالت</p>
        </div>
        <span className="whitespace-nowrap text-sm font-bold text-primary">{product.price}</span>
      </div>
    </Link>
  );
}
