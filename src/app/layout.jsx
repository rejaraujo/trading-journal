import "./globals.css";
import { Inter } from "next/font/google";
import { ReduxProvider } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        {/* import the custom provider component */}
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
