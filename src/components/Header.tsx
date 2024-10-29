import Link from "next/link";
import Login from "./auth/Login";
import { auth } from "@/auth";
import Profile from "./auth/Profile";
import { IoPulseSharp } from "react-icons/io5";

export default async function Header() {
  const session = await auth();

  return (
    <header className="flex justify-between items-center gap-3 p-4 border-b">
      <Link href="/" className="flex gap-1 items-center">
        <IoPulseSharp className="w-6 h-6 text-primary" />
        <p className="text-2xl font-bold">PulseScore</p>
      </Link>

      <div className="flex gap-4 justify-between items-center">
        <Link href="/pre-match">PreMatch</Link>
        <Link href="/live-score">Live</Link>
      </div>
      {session?.user ? <Profile session={session} /> : <Login />}
    </header>
  );
}
