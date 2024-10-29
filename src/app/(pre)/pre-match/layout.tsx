import SideNav from "@/components/PreMatch/SideNav";
import { getTournaments } from "@/services/pre-match/pre-match";

export default async function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getTournaments();

  return (
    <div className="flex">
      <div className="w-1/3">
        <SideNav categories={categories} />
      </div>
      <div className="w-2/3">{children}</div>
    </div>
  );
}
