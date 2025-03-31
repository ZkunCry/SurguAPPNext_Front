import Grid from "@/components/widgets/main/Grid";
import SidebarMenu from "@/components/widgets/main/SidebarMenu";
import { publicLinks } from "@/app/constants/sidebar/links";
export default function TeachersLayout({ children }) {
  return (
    <Grid>
      <SidebarMenu links={publicLinks} />
      {children}
    </Grid>
  );
}
