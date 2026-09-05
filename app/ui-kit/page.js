"use client";

import { useState } from "react";
import Button from "../../components/Button";
import Dialog from "../../components/Dialog";
import Input from "../../components/Input";

export default function UiKitPage() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="mx-auto max-w-[1100px] px-4 py-10 sm:px-6 lg:py-16">
      <p className="text-sm font-bold text-primary">Palmyra UI Kit</p>
      <h1 className="mt-2 text-4xl font-black text-textDark">کامپوننت‌های پایه</h1>
      <p className="mt-3 text-textLight">مرجع مشترک دکمه‌ها، فرم‌ها، کارت‌ها و حالت‌های تعاملی پروژه.</p>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-card border border-border bg-card p-6">
          <h2 className="mb-5 text-lg font-bold">دکمه‌ها</h2>
          <div className="flex flex-wrap gap-3">
            <Button>اصلی</Button>
            <Button variant="outline">خطی</Button>
            <Button variant="ghost">ساده</Button>
            <Button onClick={() => setDialogOpen(true)}>باز کردن دیالوگ</Button>
          </div>
        </div>
        <div className="rounded-card border border-border bg-card p-6">
          <h2 className="mb-5 text-lg font-bold">فرم‌ها</h2>
          <div className="flex flex-col gap-4">
            <Input label="نام و نام خانوادگی" placeholder="نام خود را وارد کنید" />
            <Input label="ایمیل" type="email" placeholder="example@gmail.com" />
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-card border border-border bg-card p-6">
        <h2 className="mb-5 text-lg font-bold">رنگ‌ها و حالت‌ها</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-button bg-primary p-5 text-center text-sm text-white">Primary</div>
          <div className="rounded-button bg-primaryLight p-5 text-center text-sm text-primary">Primary Light</div>
          <div className="rounded-button border border-border p-5 text-center text-sm text-textDark">Border</div>
          <div className="rounded-button bg-slate-50 p-5 text-center text-sm text-textLight">Neutral</div>
        </div>
      </section>

      <Dialog open={dialogOpen} title="نمونه دیالوگ" onClose={() => setDialogOpen(false)} onConfirm={() => setDialogOpen(false)}>
        <p className="text-sm leading-7 text-textLight">این دیالوگ از همان کامپوننت مشترک صفحه آدرس استفاده می‌کند.</p>
      </Dialog>
    </div>
  );
}
