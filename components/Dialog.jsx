"use client";

export default function Dialog({ open, title, children, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-card rounded-dialog border border-border p-dialogPadding w-[400px] shadow-xl">
        
        {/* عنوان */}
        <h2 className="text-lg font-bold text-textDark mb-4">{title}</h2>

        {/* محتوا */}
        <div className="mb-6">{children}</div>

        {/* دکمه‌ها */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-button border border-border text-textDark hover:bg-card"
          >
            لغو
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-button bg-primary text-white hover:bg-primaryHover"
          >
            تایید
          </button>
        </div>
      </div>
    </div>
  );
}
