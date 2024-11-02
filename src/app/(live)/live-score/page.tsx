import LiveScoreWrapper from "@/components/Live/LiveScoreWrapper";
import { WEB_PAGE_DESCRIPTION, WEB_PAGE_KEYWORDS, WEB_PAGE_NAME } from "@/metadata";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: `${WEB_PAGE_NAME} | Live Score`,
    description: WEB_PAGE_DESCRIPTION,
    keywords: WEB_PAGE_KEYWORDS
  };
}

export default function LiveScore() {
  return <LiveScoreWrapper />;
}
