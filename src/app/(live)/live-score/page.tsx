import LiveScoreWrapper from "@/components/Live/LiveScoreWrapper";
import { WEB_PAGE_DESCRIPTION, WEB_PAGE_KEYWORDS } from "@/metadata";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: `Live Score`,
    description: WEB_PAGE_DESCRIPTION,
    keywords: WEB_PAGE_KEYWORDS
  };
}

export default function LiveScore() {
  return <LiveScoreWrapper />;
}
