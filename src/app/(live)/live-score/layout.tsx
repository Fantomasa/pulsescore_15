import Nav from "@/components/Live/Nav";

export default async function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:px-2">
      <div className="w-2/3 mx-auto my-2">
        <Nav />
      </div>
      <div className="w-full p-1">{children}</div>
    </div>
  );
}
