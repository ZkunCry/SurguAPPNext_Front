import Container from "@/components/ui/container";
import Grid from "@/components/widgets/main/Grid";

import HeaderMain from "@/components/widgets/main/HeaderMain";
import { cookies } from "next/headers";
import { publicLinks } from "../constants/sidebar/links";
import SidebarMenu from "@/components/widgets/main/SidebarMenu";
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
      <Container>
        <Grid>
          <SidebarMenu links={publicLinks} />
          {children}
        </Grid>
      </Container>
    </div>
  );
}
