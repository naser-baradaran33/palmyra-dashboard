 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const menu = [
    { title: "فعالیت‌ها", icon: "⌂", href: "/dashboard" },
    { title: "سفارش‌ها", icon: "▣", href: "/orders" },
    { title: "لیست علاقه‌مندی‌ها", icon: "♡", href: "/wishlist" },
    { title: "دیدگاه‌ها", icon: "□", href: "/comments" },
    { title: "آدرس‌ها", icon: "⌖", href: "/addresses" },
    { title: "پیام‌ها", icon: "▱", href: "/messages" },
    { title: "حساب کاربری", icon: "♙", href: "/profile" },
  ];
  const pathname = usePathname();

  return (
    <aside className="w-full shrink-0 border-b border-border bg-card p-4 lg:min-h-screen lg:w-[320px] lg:border-b-0 lg:border-l lg:p-6">
      <div className="mb-5 flex items-center justify-between text-xl font-bold text-textDark lg:mb-14">
        <span className="tracking-tight">پالمیرا</span>
        <span className="text-2xl font-black text-primary">پ</span>
      </div>
      <nav className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-2" aria-label="منوی داشبورد">
        {menu.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex shrink-0 items-center gap-3 rounded-button px-4 py-3 text-sm transition lg:text-base ${
                active
                  ? "bg-primaryLight font-bold text-primary"
                  : "text-textDark hover:bg-primaryLight hover:text-primary"
              }`}
              aria-current={active ? "page" : undefined}
            >
              <span className="flex w-5 justify-center text-lg leading-none" aria-hidden="true">{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
