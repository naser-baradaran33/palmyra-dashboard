import ActivityCards from "../../components/ActivityCards";
import OrdersPreview from "../../components/OrdersPreview";
import MessagesPreview from "../../components/MessagesPreview";
import CommentsPreview from "../../components/CommentsPreview";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-section">
      <div className="mb-1">
        <h1 className="text-2xl font-bold text-textDark">داشبورد</h1>
        <p className="mt-2 text-sm text-textLight">خلاصه‌ای از فعالیت‌های اخیر شما</p>
      </div>
      <ActivityCards />
      <OrdersPreview />
      <MessagesPreview />
      <CommentsPreview />
    </div>
  );
}
