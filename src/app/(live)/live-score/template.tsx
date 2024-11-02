import NavComponent from "@/components/Live/Nav";
import Transition from "@/components/Transition";
import { WEB_PAGE_DESCRIPTION, WEB_PAGE_KEYWORDS, WEB_PAGE_NAME } from "@/metadata";
import { Metadata } from "next";
// import { RefreshCache } from "@/components/common/RefreshCache";
// import { revalidatePath } from "next/cache";

export function generateMetadata(): Metadata {
  return {
    title: `${WEB_PAGE_NAME} | Live Score`,
    description: WEB_PAGE_DESCRIPTION,
    keywords: WEB_PAGE_KEYWORDS
  };
}

export default async function Template({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // async function check() {
  //   "use server";
  //   revalidatePath(`/live-score`);
  // }

  return (
    <div className="flex flex-col md:px-2 w-full md:w-1/3 mx-auto">
      <div className="w-full mx-auto my-2">
        <NavComponent />
      </div>
      <div className="w-full px-4">
        {/* <RefreshCache check={check} time={5} /> */}
        <Transition>{children}</Transition>
      </div>
    </div>
  );
}
