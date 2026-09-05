import ProductListingPage from "../../../components/ProductListingPage";

const categories = {
  set: ["ست‌های منتخب", "ست"],
  bag: ["کیف‌ها", "کیف"],
  shoe: ["کفش‌ها", "کفش ورزشی"],
};

export default function CategoryPage({ params }) {
  const [title, category] = categories[params.slug] || ["محصولات", "همه"];
  return <ProductListingPage title={title} eyebrow="Category" initialCategory={category} />;
}
