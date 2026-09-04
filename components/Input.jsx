export default function Input({ label, placeholder, value, onChange, type = "text" }) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm text-textDark">{label}</label>}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-input border border-border bg-white px-3 py-2.5 text-textDark outline-none transition placeholder:text-textLight/70 focus:border-primary focus:ring-2 focus:ring-primaryLight"
      />
    </div>
  );
}
