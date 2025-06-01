// app/layout.js
import "./globals.css";
import "./utils.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

export const metadata = {
  title: "Fin.AI",
  description: "A finance platform powered by AI",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Toaster richColors />
          <footer className="bg-primary py-12">
            <div className="max-w-7xl mx-auto px-4 text-center text-white">
              <p>© 2025 AI Finance. All rights reserved.</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
