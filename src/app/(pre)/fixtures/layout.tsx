import SideNav from "@/components/PreMatch/SideNav/SideNav";
import { getTournaments } from "@/services/pre-match/pre-match";
import { SideNavProvider } from "@/components/PreMatch/SideNav/context";

export default async function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getTournaments();

  return (
    <div className="flex md:w-2/3 mx-auto">
      <SideNavProvider>
        <SideNav categories={categories} />
      </SideNavProvider>
      <div className="w-full p-1">{children}</div>
    </div>
  );
}
