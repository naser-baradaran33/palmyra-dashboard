import DashboardShell from "../components/DashboardShell";
import "./globals.css";

export const metadata = {
  title: "Palmyra Dashboard",
  description: "User dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-background text-textDark">
        <DashboardShell>{children}</DashboardShell>
      </body>
    </html>
  );
}
