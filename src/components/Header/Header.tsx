import Link from "next/link";
import Login from "../auth/Login";
import { auth } from "@/auth";
import Profile from "../auth/Profile";
import { IoPulseSharp } from "react-icons/io5";
import Nav from "./Nav";

export default async function Header() {
  const session = await auth();

  return (
    <header className="flex rounded-md sticky top-0 z-20 justify-center items-center w-full md:w-2/3 mx-auto p-4 border-b backdrop-blur">
      <Link href="/" className="flex items-center">
        <IoPulseSharp className="size-8 text-primary" />
        {/* <p className="text-lg md:text-xl font-bold hover:text-primary"></p> */}
      </Link>

      <div className="flex-1 flex justify-center">
        <Nav />
      </div>

      <div>{session?.user ? <Profile session={session} /> : <Login btnProps={{ variant: "ghost" }} />}</div>
    </header>
  );
}
