// app/layout.js
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-col flex-grow">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
