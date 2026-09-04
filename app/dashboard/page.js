import ActivityCards from "../../components/ActivityCards";
import OrdersPreview from "../../components/OrdersPreview";
import MessagesPreview from "../../components/MessagesPreview";
import CommentsPreview from "../../components/CommentsPreview";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-section">
      <ActivityCards />
      <OrdersPreview />
      <MessagesPreview />
      <CommentsPreview />
    </div>
  );
}
