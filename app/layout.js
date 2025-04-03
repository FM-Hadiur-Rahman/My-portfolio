import Navbar from "../components/ui/Navbar";
import "./globals.css"; // Ensure your global styles are imported

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Navbar />
        <main className="">{children}</main>
        {/* Add padding to avoid overlap */}
      </body>
    </html>
  );
}
