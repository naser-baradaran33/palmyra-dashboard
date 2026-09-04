import ProductCard from "../../components/ProductCard";

export default function WishlistPage() {
  const items = [
    {
      title: "ساعت هوشمند سامسونگ",
      price: "€199.99",
      image: "/products/watch.jpg",
    },
    {
      title: "عینک آفتابی ری‌بن",
      price: "€129.99",
      image: "/products/sunglasses.jpg",
    },
  ];

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
          />
        ))}
      </div>
    </div>
  );
}
