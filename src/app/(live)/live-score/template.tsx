import NavComponent from "@/components/Live/Nav";

export default async function Template({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:px-2 w-full md:w-1/3 mx-auto">
      <div className="w-full mx-auto my-2">
        <NavComponent />
      </div>
      <div className="w-full px-4">{children}</div>
    </div>
  );
}
