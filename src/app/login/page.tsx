import { auth } from "@/auth";
import Login from "@/components/auth/Login";
import Profile from "@/components/auth/Profile";
import FadeIn from "@/components/common/FadeIn";
import { WEB_PAGE_DESCRIPTION, WEB_PAGE_KEYWORDS } from "@/metadata";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: `Login`,
    description: WEB_PAGE_DESCRIPTION,
    keywords: WEB_PAGE_KEYWORDS
  };
}

export default async function LoginPage() {
  const session = await auth();

  return (
    <div className="flex w-full flex-col justify-center items-center">
      {session?.user ? <Profile session={session} /> : <Login btnProps={{ size: "lg", variant: "outline" }} />}
      {session?.user && (
        <FadeIn x={0} y={0} delay={0.5}>
          <span className="text-xl">Hello, {session.user.name || session.user.email} you are ready to browse!</span>
        </FadeIn>
      )}
    </div>
  );
}
