import FixturesComponent from "@/components/PreMatch/Fixtures/Fixtures";
import Transition from "@/components/Transition";
import { getFixtures } from "@/services/pre-match/pre-match";

export default async function Fixtures({ params }: { params: Promise<{ seasonId: string }> }) {
  const seasonId = (await params).seasonId;

  const fixturesData = await getFixtures(seasonId);

  if (fixturesData.data.length <= 0) {
    return (
      <Transition>
        <div className="flex flex-col text-lg mx-auto justify-center text-center">
          <span>Selected League don&apos;t have Fixtures.</span>
          <span className="flex gap-2 text-center mx-auto"></span>
        </div>
      </Transition>
    );
  }

  return (
    <Transition>
      <FixturesComponent matches={fixturesData.data[0].matches} />;
    </Transition>
  );
}
