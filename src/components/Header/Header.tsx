import Link from "next/link";
import Login from "../auth/Login";
import { auth } from "@/auth";
import Profile from "../auth/Profile";
import { IoPulseSharp } from "react-icons/io5";
import Nav from "./Nav";

export default async function Header() {
  const session = await auth();

  return (
    <header className="flex justify-between items-center gap-3 p-4 border-b">
      <Link href="/" className="flex gap-1 items-center">
        <IoPulseSharp className="w-6 h-6 text-primary" />
        <p className="text-2xl font-bold hover:text-primary">PulseScore</p>
      </Link>

      <Nav />
      {session?.user ? <Profile session={session} /> : <Login />}
    </header>
  );
}