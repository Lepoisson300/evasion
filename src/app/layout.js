import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Evasion Elegance | Interior Design Portfolio",
  description: "Create individual stories that we write between the walls",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${openSans.variable} ${poppins.variable} antialiased bg-slate-900 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
