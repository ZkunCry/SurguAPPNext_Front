import Container from "@/components/ui/container";

import HeaderMain from "@/components/widgets/main/HeaderMain";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex relative w-full h-full flex-col items-start overflow-auto ">
      <HeaderMain />
      <Container>{children}</Container>
    </div>
  );
}
