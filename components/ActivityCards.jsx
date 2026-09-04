export default function ActivityCards() {
  const items = [
    { title: "سفارش‌های امروز", value: 12, icon: "🛒" },
    { title: "دیدگاه‌های جدید", value: 5, icon: "💬" },
    { title: "پیام‌های خوانده نشده", value: 3, icon: "✉️" },
    { title: "محصولات محبوب", value: 8, icon: "❤️" },
  ];

  return (
    <div className="grid grid-cols-1 gap-cardGap sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-card border border-border bg-card p-cardPadding flex flex-col gap-3 shadow-sm"
        >
          <span className="text-3xl">{item.icon}</span>
          <span className="text-textDark font-medium">{item.title}</span>
          <span className="text-primary text-2xl font-bold">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
