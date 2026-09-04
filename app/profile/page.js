import Input from "../../components/Input";
import Button from "../../components/Button";

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-section">
      <div>
        <h1 className="text-2xl font-bold text-textDark">حساب کاربری</h1>
        <p className="mt-2 text-sm text-textLight">اطلاعات شخصی خود را مدیریت کنید</p>
      </div>

      <div className="flex w-full max-w-xl flex-col gap-5 rounded-card border border-border bg-card p-cardPadding shadow-sm">
        <Input label="نام" placeholder="ناصر" />
        <Input label="ایمیل" placeholder="example@gmail.com" />
        <Input label="شماره تماس" placeholder="09123456789" />

        <Button variant="primary">ذخیره تغییرات</Button>
      </div>
    </div>
  );
}
