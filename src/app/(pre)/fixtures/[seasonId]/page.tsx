export default async function Page({ params }: { params: Promise<{ seasonId: string }> }) {
  const paramsData = await params;

  return <div>{paramsData.seasonId}</div>;
}
