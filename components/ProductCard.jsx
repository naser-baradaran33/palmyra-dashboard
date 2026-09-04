"use client";

import Image from "next/image";

export default function ProductCard({ title, price, image, onClick }) {
  return (
    <article
      className="flex cursor-pointer flex-col gap-3 rounded-card border border-border bg-card p-cardPadding shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (event) => {
        if (event.key === "Enter" || event.key === " ") onClick();
      } : undefined}
    >
      <Image
        src={image}
        alt={title}
        width={640}
        height={320}
        className="h-48 w-full rounded-card object-cover"
      />

      <span className="text-textDark font-medium">{title}</span>

      <span className="text-primary font-bold text-lg">{price}</span>
    </article>
  );
}
