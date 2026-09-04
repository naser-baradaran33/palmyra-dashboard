export default function MessagesPage() {
  const messages = [
    { from: "کاربر ۱", text: "سلام، یک سوال داشتم…" },
    { from: "کاربر ۲", text: "محصول به دستم رسید، ممنون!" },
    { from: "کاربر ۳", text: "چطور می‌تونم سفارشمو تغییر بدم؟" },
  ];

  return (
    <div className="flex flex-col gap-section">
      <h1 className="text-2xl font-bold text-textDark">پیام‌ها</h1>

      <div className="flex flex-col gap-cardGap">
        {messages.map((msg, index) => (
          <article
            key={index}
            className="flex flex-col gap-2 rounded-card border border-border bg-card p-cardPadding shadow-sm"
          >
            <span className="font-medium text-textDark">{msg.from}</span>
            <span className="text-textLight">{msg.text}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
