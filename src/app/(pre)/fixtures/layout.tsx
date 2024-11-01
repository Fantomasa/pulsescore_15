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
    <div className="flex flex-col md:w-2/3 mx-auto">
      <SideNavProvider>
        <SideNav categories={categories} />
      </SideNavProvider>
      <h1 className="text-xl w-full mx-auto text-center">Football</h1>
      <div className="w-full p-1">{children}</div>
    </div>
  );
}
