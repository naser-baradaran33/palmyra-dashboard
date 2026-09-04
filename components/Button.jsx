"use client";

export default function Button({ children, onClick, variant = "primary", className = "" }) {
  const base =
    "px-4 py-2 rounded-button font-medium transition-all duration-200";

  const styles = {
    primary: "bg-primary text-white hover:bg-primaryHover",
    outline: "border border-border text-textDark hover:bg-card",
    ghost: "text-textDark hover:bg-card",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
