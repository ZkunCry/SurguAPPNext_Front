import Container from "@/components/ui/container";

import HeaderMain from "@/components/widgets/main/HeaderMain";
import { cookies } from "next/headers";

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = (await cookies()).getAll();
  console.log(cookie);
  return (
    <div className="flex relative w-full h-full flex-col items-start overflow-auto ">
      <HeaderMain />
      <Container>{children}</Container>
    </div>
  );
}
