import ProductListingPage from "../../components/ProductListingPage";

export default function SearchPage({ searchParams }) {
  return <ProductListingPage title="جست‌وجوی محصولات" eyebrow="Search" initialQuery={searchParams?.q || ""} />;
}
