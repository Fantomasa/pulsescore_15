"use client";

import Image from "next/image";
import { useState } from "react";

function TournamentImage({ tournament }: { tournament: string }) {
  const [img, setImg] = useState(`/tournament/${tournament}.png`);

  return (
    <Image className="w-auto h-auto" src={img} alt={tournament} width={20} height={15} onError={() => setImg("/tournament/default.png")} />
  );
}

export default TournamentImage;
