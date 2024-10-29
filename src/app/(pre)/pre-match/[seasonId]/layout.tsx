import SubNav from "@/components/PreMatch/SubNav";

export default async function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="block">
      <SubNav />
      <div>{children}</div>
    </div>
  );
}
