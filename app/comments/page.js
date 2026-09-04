export default function CommentsPage() {
  const comments = [
    { user: "کاربر ۱", comment: "خیلی عالی بود!" },
    { user: "کاربر ۲", comment: "کیفیت محصول خوب نبود." },
    { user: "کاربر ۳", comment: "ارسال سریع، ممنون!" },
  ];

  return (
    <div className="flex flex-col gap-section">
      <h1 className="text-2xl font-bold text-textDark">دیدگاه‌ها</h1>

      <div className="flex flex-col gap-cardGap">
        {comments.map((c, index) => (
          <article
            key={index}
            className="flex flex-col gap-2 rounded-card border border-border bg-card p-cardPadding shadow-sm"
          >
            <span className="font-medium text-textDark">{c.user}</span>
            <span className="text-textLight">{c.comment}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
