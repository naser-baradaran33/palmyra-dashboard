"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const titles = {
    "/dashboard": ["داشبورد", "خوش آمدی ناصر عزیز"],
    "/orders": ["سفارش‌ها", "مدیریت و مشاهده سفارش‌های شما"],
    "/wishlist": ["لیست علاقه‌مندی‌ها", "محصولات مورد علاقه شما"],
    "/comments": ["دیدگاه‌ها", "دیدگاه‌های ثبت شده شما"],
    "/addresses": ["آدرس‌ها", "آدرس‌های ذخیره شده شما"],
    "/messages": ["پیام‌ها", "پیام‌های اخیر شما"],
    "/profile": ["حساب کاربری", "اطلاعات حساب کاربری"],
  };
  const [title, subtitle] = titles[pathname] || titles["/dashboard"];

  return (
    <header className="flex min-h-20 w-full items-center justify-between border-b border-border bg-card px-4 sm:px-8 lg:px-10">
      
      {/* عنوان صفحه */}
      <div>
        <h2 className="text-xl font-bold text-textDark">{title}</h2>
        <p className="mt-1 text-sm text-textLight">{subtitle}</p>
      </div>

      {/* بخش آیکن‌ها و پروفایل */}
      <div className="flex items-center gap-3 sm:gap-6">

        {/* نوتیفیکیشن */}
        <button className="relative rounded-full p-2 transition hover:bg-primaryLight" aria-label="اعلان‌ها">
          <span className="text-2xl">🔔</span>
          <span className="absolute -top-1 -right-1 bg-primary text-white text-xs px-1 rounded-full">
            3
          </span>
        </button>

        {/* پیام‌ها */}
        <button className="relative rounded-full p-2 transition hover:bg-primaryLight" aria-label="پیام‌ها">
          <span className="text-2xl">✉️</span>
          <span className="absolute -top-1 -right-1 bg-primary text-white text-xs px-1 rounded-full">
            1
          </span>
        </button>

        {/* پروفایل */}
        <div className="hidden items-center gap-3 sm:flex">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-primaryLight font-bold text-primary"
            role="img"
            aria-label="تصویر پروفایل ناصر"
          >
            ن
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-textDark">ناصر</span>
            <span className="text-xs text-textLight">آنلاین</span>
          </div>
        </div>

      </div>
    </header>
  );
}
