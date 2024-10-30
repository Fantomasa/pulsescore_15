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
    <div className="flex md:px-2">
      {/* <div className="w-1/3"> */}
      <SideNavProvider>
        <SideNav categories={categories} />
      </SideNavProvider>
      {/* </div> */}
      <div className="w-full p-1">{children}</div>
    </div>
  );
}
