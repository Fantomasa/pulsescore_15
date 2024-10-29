import LinkBadge from "@/components/PreMatch/LinkBadge";

export default async function Layout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ seasonId: string }>;
}>) {
  const seasonId = (await params).seasonId;

  return (
    <div className="block">
      <nav>
        <ul className="flex w-full justify-between px-10 mb-5">
          <li>
            <LinkBadge seasonId={seasonId} path="table" />
          </li>
          <li>
            <LinkBadge seasonId={seasonId} path="fixtures" />
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}
