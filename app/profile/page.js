"use client";

import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "ناصر",
    email: "example@gmail.com",
    phone: "09123456789",
  });
  const [saved, setSaved] = useState(false);

  const updateField = (field) => (event) => {
    setSaved(false);
    setProfile((current) => ({ ...current, [field]: event.target.value }));
  };

  return (
    <div className="flex flex-col gap-section">
      <div>
        <h1 className="text-2xl font-bold text-textDark">حساب کاربری</h1>
        <p className="mt-2 text-sm text-textLight">اطلاعات شخصی خود را مدیریت کنید</p>
      </div>

      <form
        className="flex w-full max-w-xl flex-col gap-5 rounded-card border border-border bg-card p-cardPadding shadow-sm"
        onSubmit={(event) => {
          event.preventDefault();
          setSaved(true);
        }}
      >
        <Input label="نام" value={profile.name} onChange={updateField("name")} />
        <Input label="ایمیل" type="email" value={profile.email} onChange={updateField("email")} />
        <Input label="شماره تماس" type="tel" value={profile.phone} onChange={updateField("phone")} />

        <div className="flex items-center gap-3">
          <Button variant="primary" type="submit">ذخیره تغییرات</Button>
          {saved && <span className="text-sm text-primary">تغییرات ذخیره شد</span>}
        </div>
      </form>
    </div>
  );
}
