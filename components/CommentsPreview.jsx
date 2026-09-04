export default function CommentsPreview() {
  const comments = [
    { user: "کاربر ۱", comment: "خیلی عالی بود!" },
    { user: "کاربر ۲", comment: "کیفیت محصول خوب نبود." },
    { user: "کاربر ۳", comment: "ارسال سریع، ممنون!" },
  ];

  return (
    <section className="rounded-card border border-border bg-card p-cardPadding shadow-sm">
      <h3 className="mb-5 text-lg font-bold text-textDark">دیدگاه‌های اخیر</h3>

      <div className="flex flex-col gap-4">
        {comments.map((c, index) => (
          <div key={index} className="flex flex-col gap-1 border-b border-border pb-3 last:border-0 last:pb-0">
            <span className="font-medium text-textDark">{c.user}</span>
            <span className="text-textLight">{c.comment}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
