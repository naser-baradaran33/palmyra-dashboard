import ProductCard from "../../components/ProductCard";
import { products } from "../../lib/products";

export default function WishlistPage() {
  const items = products.slice(3);

  return (
    <div className="flex flex-col gap-section">
      <div>
        <h1 className="text-2xl font-bold text-textDark">لیست علاقه‌مندی‌ها</h1>
        <p className="mt-2 text-sm text-textLight">محصولاتی که ذخیره کرده‌اید</p>
      </div>

      <div className="grid grid-cols-1 gap-cardGap sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            price={item.price}
            image={item.image}
            href={`/product/${item.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
