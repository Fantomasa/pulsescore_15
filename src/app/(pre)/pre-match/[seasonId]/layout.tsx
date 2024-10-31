import PreMatchSubNav from "@/components/PreMatch/PreMatchSubNav";

export default async function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="block">
      {/* <Transition> */}
      <PreMatchSubNav />
      {children}
      {/* </Transition> */}
    </div>
  );
}
