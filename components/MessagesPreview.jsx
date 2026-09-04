export default function MessagesPreview() {
  const messages = [
    { from: "کاربر ۱", text: "سلام، یک سوال داشتم…" },
    { from: "کاربر ۲", text: "محصول به دستم رسید، ممنون!" },
    { from: "کاربر ۳", text: "چطور می‌تونم سفارشمو تغییر بدم؟" },
  ];

  return (
    <section className="rounded-card border border-border bg-card p-cardPadding shadow-sm">
      <h3 className="mb-5 text-lg font-bold text-textDark">پیام‌های اخیر</h3>

      <div className="flex flex-col gap-4">
        {messages.map((msg, index) => (
          <div key={index} className="flex flex-col gap-1 border-b border-border pb-3 last:border-0 last:pb-0">
            <span className="font-medium text-textDark">{msg.from}</span>
            <span className="text-textLight">{msg.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
