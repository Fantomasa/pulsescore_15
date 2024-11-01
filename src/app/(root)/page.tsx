import Link from "next/link";
import { IoPulseSharp } from "react-icons/io5";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center h-[70vh] text-center px-4 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
      >
        <div className="bg-black/70 p-8 rounded-lg shadow-lg max-w-2xl">
          <h1 className="text-4xl font-extrabold mb-6 leading-tight">
            Welcome to{" "}
            <span className="flex items-center text-5xl mx-auto w-full justify-center text-green-500">
              <IoPulseSharp className="text-green-500" />
              <p className="ml-2 font-extrabold">PulseScore</p>
            </span>
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-6 text-white/90 leading-relaxed tracking-wide">
            Your go-to platform for real-time sports data and scores across Football, Basketball, and Tennis. Dive into live scores,
            fixtures, league tables, and more.
          </p>
          <Link
            href="/live-score?sport=football"
            className="bg-green-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
          >
            Explore Live Scores
          </Link>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-16 px-6 bg-black/70 text-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold leading-tight">Why Choose Us?</h2>
          <p className="text-lg text-white/80 leading-relaxed max-w-xl mx-auto">
            Reliable, up-to-the-minute sports data coverage tailored for true fans.
          </p>
        </div>
        <div className="flex flex-wrap justify-around items-stretch space-y-6 md:space-y-0 md:space-x-6">
          <Section
            title="Live Scores"
            content="Follow the action in real time with instant updates on Football, Basketball, and Tennis scores."
          />
          <Section
            title="League Tables & Fixtures"
            content="Stay updated with the latest fixtures and standings for your favorite leagues and tournaments."
          />
          <Section
            title="Comprehensive Statistics"
            content="Dive deeper into team and player stats to get a complete picture of each match."
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-6 text-center bg-green-500 text-gray-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 leading-tight">Join the Ultimate Sports Community</h2>
          <p className="text-lg mb-6 text-gray-900 leading-relaxed">
            Sign up for exclusive insights, match analyses, and get notified with the latest scores and fixtures.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

function Section({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-black/70 border border-gray-700 text-white p-6 rounded-lg shadow-md w-full md:w-1/3">
      <h3 className="text-2xl font-semibold mb-3 leading-tight text-green-400">{title}</h3>
      <p className="text-white/90 leading-relaxed tracking-wide">{content}</p>
    </div>
  );
}
