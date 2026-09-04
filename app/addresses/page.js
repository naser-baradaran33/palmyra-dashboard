"use client";

import { useState } from "react";
import AddressCard from "../../components/AddressCard";
import Button from "../../components/Button";
import Dialog from "../../components/Dialog";

export default function AddressesPage() {
  const initialAddresses = [
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
  const [addresses, setAddresses] = useState(initialAddresses);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const openAddDialog = () => {
    setEditingIndex(null);
    setDialogOpen(true);
  };

  const openEditDialog = (index) => {
    setEditingIndex(index);
    setDialogOpen(true);
  };

  const removeAddress = (index) => {
    setAddresses((current) => current.filter((_, itemIndex) => itemIndex !== index));
  };

  return (
    <div className="flex flex-col gap-section">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-textDark">آدرس‌ها</h1>
          <p className="mt-2 text-sm text-textLight">آدرس‌های ذخیره شده برای ارسال سفارش‌ها</p>
        </div>
        <Button onClick={openAddDialog} className="shrink-0">+ افزودن آدرس</Button>
      </div>

      <div className="flex flex-col gap-cardGap">
        {addresses.map((a, index) => (
          <AddressCard
            key={index}
            name={a.name}
            phone={a.phone}
            address={a.address}
            onEdit={() => openEditDialog(index)}
            onDelete={() => removeAddress(index)}
          />
        ))}
      </div>
      <Dialog
        open={dialogOpen}
        title={editingIndex === null ? "افزودن آدرس جدید" : "ویرایش آدرس"}
        onClose={() => setDialogOpen(false)}
        onConfirm={() => setDialogOpen(false)}
      >
        <p className="text-sm leading-7 text-textLight">
          {editingIndex === null
            ? "اطلاعات آدرس جدید را وارد کنید."
            : `ویرایش آدرس ${addresses[editingIndex]?.name || ""}`}
        </p>
      </Dialog>
    </div>
  );
}
