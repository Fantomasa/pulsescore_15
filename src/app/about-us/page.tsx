import FadeIn from "@/components/common/FadeIn";
import Link from "next/link";

import { Metadata } from "next";
import { WEB_PAGE_DESCRIPTION, WEB_PAGE_KEYWORDS } from "@/metadata";

export function generateMetadata(): Metadata {
  return {
    title: `About us`,
    description: WEB_PAGE_DESCRIPTION,
    keywords: WEB_PAGE_KEYWORDS
  };
}

export default function AboutUs() {
  return (
    <div className="text-white min-h-screen p-8 text-balance">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn x={-5} y={0} delay={0.3}>
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
        </FadeIn>

        <FadeIn x={5} y={1} delay={0.4}>
          <p className="text-lg mb-6">
            Welcome to{" "}
            <Link href="/" className="text-primary hover:underline">
              PulseScore
            </Link>
            , your one-stop solution for real-time sports data. We cover live scores, fixture updates, and comprehensive sports statistics
            to keep you in the game at all times. Whether you&apos;re tracking football, basketball, or tennis, our platform provides the
            insights you need, right at your fingertips.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-6">
          <FadeIn x={0} y={5} delay={0.5}>
            <div className="bg-secondary p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
              <p>
                To deliver accurate and timely sports data, empowering fans and enthusiasts to stay informed and engaged with their favorite
                sports.
              </p>
            </div>
          </FadeIn>

          <FadeIn x={0} y={5} delay={0.6}>
            <div className="bg-secondary p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">Our Coverage</h2>
              <p>
                We provide live scores for Football, Basketball, and Tennis, as well as fixtures and league tables. Whether it’s the big
                leagues or local tournaments, we bring the stats to you.
              </p>
            </div>
          </FadeIn>

          <FadeIn x={0} y={5} delay={0.7}>
            <div className="bg-secondary p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
              <p>
                With our real-time data feeds, easy-to-navigate interface, and detailed match analytics, we aim to be the go-to platform for
                all sports data enthusiasts.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
