import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Providers from "./providers/Providers";
import { Toaster } from "react-hot-toast";
import { Montserrat } from "next/font/google";
import Modal from "@/components/widgets/modal/Modal";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Ассистент студента",
  description:
    "Централизованное веб-приложение для управления учебным процессом",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} !bg-background `}>
        <Providers>
          <ThemeProvider attribute="class">
            <div className="flex flex-col  h-px relative overflow-y-auto overflow-x-hidden max-h-dvh w-full min-h-dvh">
              {children}
            </div>
            <Toaster
              position="bottom-right"
              toastOptions={{
                className: "!bg-maincolor dark:!text-white !text-dark  ",
              }}
            />
            <Modal />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
