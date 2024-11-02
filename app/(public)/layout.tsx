import Container from "@/components/ui/container";
import Grid from "@/components/widgets/main/Grid";
import HeaderMain from "@/components/widgets/main/HeaderMain";
import SidebarMenu from "@/components/widgets/main/SidebarMenu";
import { publicLinks } from "../constants/sidebar/links";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full h-full flex-col items-start ">
      <HeaderMain />
      <Container>
        <Grid>
          <SidebarMenu className="sticky top-[20px]" links={publicLinks} />
          {children}
        </Grid>
      </Container>
    </div>
  );
}
