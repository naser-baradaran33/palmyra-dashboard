import ProductCard from "../../components/ProductCard";

export default function WishlistPage() {
  const items = [
    {
      title: "ساعت هوشمند سامسونگ",
      price: "€199.99",
      image: "/file.svg",
    },
    {
      title: "عینک آفتابی ری‌بن",
      price: "€129.99",
      image: "/file.svg",
    },
  ];

  return (
    <div className="flex flex-col gap-section">
      <h1 className="text-2xl font-bold text-textDark">لیست علاقه‌مندی‌ها</h1>

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
