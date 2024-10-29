type Params = {
  params: {
    seasonId: string;
  };
};

export default async function Page({ params }: Params) {
  const paramsData = await params;

  return <div>{paramsData.seasonId}</div>;
}
