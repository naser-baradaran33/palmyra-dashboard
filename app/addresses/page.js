"use client";

import AddressCard from "../../components/AddressCard";

export default function AddressesPage() {
  const addresses = [
    {
      name: "ناصر",
      phone: "09123456789",
      address: "آلمان، اشتات، خیابان 12، پلاک 4",
    },
    {
      name: "علی",
      phone: "09121234567",
      address: "تهران، سعادت‌آباد، کوچه 5، پلاک 2",
    },
  ];

  return (
    <div className="flex flex-col gap-section">
      <div>
        <h1 className="text-2xl font-bold text-textDark">آدرس‌ها</h1>
        <p className="mt-2 text-sm text-textLight">آدرس‌های ذخیره شده برای ارسال سفارش‌ها</p>
      </div>

      <div className="flex flex-col gap-cardGap">
        {addresses.map((a, index) => (
          <AddressCard
            key={index}
            name={a.name}
            phone={a.phone}
            address={a.address}
            onEdit={() => console.log("edit")}
            onDelete={() => console.log("delete")}
          />
        ))}
      </div>
    </div>
  );
}
