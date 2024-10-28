import { AudioLines } from "lucide-react";
import Link from "next/link";
import Form from "next/form";
import Login from "./Login";

export default async function Header() {
  return (
    <header className="flex justify-between items-center gap-3 p-4">
      <Link href="/" className="flex gap-1 items-center">
        <AudioLines className="w-6 h-6 text-primary" />
        <p className="text-2xl font-bold">PulseScore</p>
      </Link>
      <Form action="/" scroll={false} className="flex items-center bg-foreground rounded-lg w-1/2">
        <input
          name="query"
          placeholder="Search Team"
          className="w-full border-white border-[1px] outline-white text-white bg-foreground p-2 rounded-md"
        />
      </Form>
      <Login />
    </header>
  );
}
