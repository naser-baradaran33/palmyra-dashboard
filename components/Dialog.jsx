"use client";

export default function Dialog({ open, title, children, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm" role="presentation">
      <div className="w-full max-w-[400px] rounded-dialog border border-border bg-card p-dialogPadding shadow-xl" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        
        {/* عنوان */}
        <h2 id="dialog-title" className="mb-4 text-lg font-bold text-textDark">{title}</h2>

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
