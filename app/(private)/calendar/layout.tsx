import HeaderMain from "@/components/widgets/main/HeaderMain";

export default function CalendarLayout({ children }: React.ReactNode) {
  return (
    <>
      <HeaderMain />

      {children}
    </>
  );
}
