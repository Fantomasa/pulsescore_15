import NavComponent from "@/components/Live/Nav";

export default async function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:px-2 w-full md:w-1/3 mx-auto">
      <div className="w-2/3 mx-auto my-2">
        <NavComponent />
      </div>
      <div className="w-full px-4">{children}</div>
    </div>
  );
}
