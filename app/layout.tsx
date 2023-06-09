import "./globals.css";
import { Inter, Nunito } from "next/font/google";
import { Navbar } from "./components";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb | clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
