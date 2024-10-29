import { AudioLines } from "lucide-react";
import Link from "next/link";
import Login from "./auth/Login";
import { auth } from "@/auth";
import Profile from "./auth/Profile";

export default async function Header() {
  const session = await auth();

  return (
    <header className="flex justify-between items-center gap-3 p-4 border-b">
      <Link href="/" className="flex gap-1 items-center">
        <AudioLines className="w-6 h-6 text-primary" />
        <p className="text-2xl font-bold">PulseScore</p>
      </Link>
      {/* <Form action="/" scroll={false} className="flex items-center bg-foreground rounded-lg w-1/2">
        <input
          name="query"
          placeholder="Search Team"
          className="w-full border-white border-[1px] outline-white text-white bg-foreground p-2 rounded-md"
        />
      </Form> */}
      <div className="flex gap-4 justify-between items-center">
        <Link href="/pre-match">PreMatch</Link>
        <Link href="/live-score">Live</Link>
      </div>
      {session?.user ? <Profile session={session} /> : <Login />}
    </header>
  );
}
