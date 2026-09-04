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
    <aside className="fixed bottom-0 z-40 w-full border-t border-border bg-card px-2 py-2 lg:static lg:min-h-screen lg:w-[320px] lg:shrink-0 lg:border-l lg:border-t-0 lg:p-6">
      <div className="hidden text-xl font-bold text-textDark lg:mb-14 lg:flex lg:items-center lg:justify-between">
        <span className="tracking-tight">پالمیرا</span>
        <span className="text-2xl font-black text-primary">پ</span>
      </div>
      <nav className="hidden gap-2 overflow-x-auto pb-1 lg:flex lg:flex-col" aria-label="منوی دسکتاپ">
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
      <nav className="grid grid-cols-5 gap-1 lg:hidden" aria-label="منوی موبایل">
        {menu.slice(0, 5).map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-w-0 flex-col items-center gap-1 rounded-button px-1 py-2 text-[10px] transition ${
                active ? "bg-primaryLight font-bold text-primary" : "text-textLight"
              }`}
              aria-current={active ? "page" : undefined}
            >
              <span className="text-lg leading-none" aria-hidden="true">{item.icon}</span>
              <span className="truncate">{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
