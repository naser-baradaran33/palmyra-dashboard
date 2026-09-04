import Button from "./Button";

export default function AddressCard({
  name,
  phone,
  address,
  onEdit,
  onDelete,
}) {
  return (
    <article className="rounded-card border border-border bg-card p-cardPadding flex flex-col gap-5 shadow-sm">

      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-textDark">{name}</span>

        <div className="flex gap-2">
          <Button variant="outline" className="px-3 py-1" onClick={onEdit}>
            ویرایش
          </Button>
          <Button variant="ghost" className="px-3 py-1 text-error" onClick={onDelete}>
            حذف
          </Button>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="text-sm text-textLight">شماره تماس</span>
        <span className="text-textDark font-medium">{phone}</span>
      </div>

      <div className="flex flex-col">
        <span className="text-sm text-textLight">آدرس</span>
        <span className="text-textDark">{address}</span>
      </div>
    </article>
  );
}
