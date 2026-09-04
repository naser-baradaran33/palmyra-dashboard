export default function OrdersPreview() {
  const orders = [
    { id: "#1234", date: "امروز", price: "€49.99", status: "در حال پردازش" },
    { id: "#1233", date: "دیروز", price: "€89.99", status: "تحویل شده" },
    { id: "#1232", date: "۲ روز پیش", price: "€19.99", status: "لغو شده" },
  ];

  return (
    <section className="rounded-card border border-border bg-card p-cardPadding shadow-sm">
      <h3 className="mb-5 text-lg font-bold text-textDark">سفارش‌های اخیر</h3>

      <div className="flex flex-col gap-4">
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-2 border-b border-border pb-3 text-sm last:border-0 last:pb-0 sm:grid-cols-4 sm:items-center"
          >
            <span className="text-textDark">{order.id}</span>
            <span className="text-textLight">{order.date}</span>
            <span className="text-primary font-medium">{order.price}</span>
            <span className="text-textLight">{order.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
