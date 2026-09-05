import Link from "next/link";

export default function StorefrontShell({ children }) {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <header className="sticky top-0 z-30 border-b border-border bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
          <Link href="/" className="text-2xl font-black tracking-tight text-primary">پالمیرا</Link>
          <nav className="hidden items-center gap-8 text-sm text-textDark md:flex" aria-label="منوی فروشگاه">
            <Link href="/" className="transition hover:text-primary">خانه</Link>
            <div className="group relative">
              <Link href="/shop" className="transition group-hover:text-primary">فروشگاه</Link>
              <div className="invisible absolute right-0 top-full z-40 w-64 translate-y-2 rounded-card border border-border bg-white p-4 opacity-0 shadow-lg transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <Link href="/category/set" className="block rounded-button px-3 py-2 hover:bg-primaryLight hover:text-primary">ست‌ها</Link>
                <Link href="/category/bag" className="block rounded-button px-3 py-2 hover:bg-primaryLight hover:text-primary">کیف‌ها</Link>
                <Link href="/category/shoe" className="block rounded-button px-3 py-2 hover:bg-primaryLight hover:text-primary">کفش‌ها</Link>
                <Link href="/search" className="block rounded-button px-3 py-2 hover:bg-primaryLight hover:text-primary">جست‌وجو</Link>
              </div>
            </div>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/cart" className="rounded-button border border-border px-4 py-2 text-sm transition hover:border-primary hover:text-primary">
              سبد خرید
            </Link>
            <Link href="/dashboard" className="hidden rounded-button bg-primary px-4 py-2 text-sm text-white transition hover:bg-primaryHover sm:inline-flex">
              حساب کاربری
            </Link>
          </div>
        </div>
      </header>
      <div className="border-b border-primaryLight bg-primaryLight">
        <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-2 px-4 py-2 text-xs text-primary sm:text-sm">
          <span>ارسال رایگان برای سفارش‌های بالای €100</span>
          <span aria-hidden="true">•</span>
          <Link href="/shop" className="font-bold underline">مشاهده محصولات</Link>
        </div>
      </div>
      <main>{children}</main>
      <footer className="mt-16 border-t border-border bg-slate-50">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-4 py-10 text-sm text-textLight sm:px-6 lg:px-10">
          <strong className="text-lg text-textDark">پالمیرا</strong>
          <span>تجربه‌ای ساده و مطمئن برای خرید آنلاین</span>
        </div>
      </footer>
    </div>
  );
}
