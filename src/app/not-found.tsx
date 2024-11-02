import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center w-full h-dvh">
      <Link href="/">
        <Image src="/images/not-found.jpg" alt="Not Found" width={500} height={500} className="rounded-md" />
      </Link>
      {/* <Link href="/">Return Home</Link> */}
    </div>
  );
}
