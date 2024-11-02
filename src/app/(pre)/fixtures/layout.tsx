import SideNav from "@/components/PreMatch/SideNav/SideNav";
import { getTournaments } from "@/services/pre-match/pre-match";
import { SideNavProvider } from "@/components/PreMatch/SideNav/context";
import { Metadata } from "next";
import { WEB_PAGE_DESCRIPTION, WEB_PAGE_KEYWORDS, WEB_PAGE_NAME } from "@/metadata";

export function generateMetadata(): Metadata {
  return {
    title: `${WEB_PAGE_NAME} | Fixtures`,
    description: WEB_PAGE_DESCRIPTION,
    keywords: WEB_PAGE_KEYWORDS
  };
}

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
      <div className="w-full p-1">
        <h1 className="text-2xl text-center">Football</h1>
        {children}
      </div>
    </div>
  );
}
