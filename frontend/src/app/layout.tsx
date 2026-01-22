import "./globals.css";
import type { Metadata } from "next";
import { AppLayout } from "@/components/shared/AppLayout/AppLayout";
import { Providers } from "@/components/shared/Providers/Providers";
import { RootShell } from "@/components/shared/RootShell/RootShell";

export const metadata: Metadata = {
  title: "Satstack",
  description: "Satstack is a platform for stacking sats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootShell>
      <Providers>
        <AppLayout>{children}</AppLayout>
      </Providers>
    </RootShell>
  );
}
