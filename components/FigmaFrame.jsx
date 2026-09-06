export default function FigmaFrame({ desktop, mobile = desktop, title }) {
  return (
    <main className="bg-[#f8f8f8]">
      <h1 className="sr-only">{title}</h1>
      <div className="hidden min-h-screen lg:block">
        <iframe
          title={`${title} desktop`}
          src={`/figma-assets/${encodeURIComponent(desktop)}`}
          className="h-[calc(100vh-72px)] min-h-[900px] w-full border-0"
        />
      </div>
      <div className="min-h-screen lg:hidden">
        <iframe
          title={`${title} mobile`}
          src={`/figma-assets/${encodeURIComponent(mobile)}`}
          className="h-[calc(100vh-72px)] min-h-[760px] w-full border-0"
        />
      </div>
    </main>
  );
}
