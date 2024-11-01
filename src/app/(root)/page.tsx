import Link from "next/link";
import { IoPulseSharp } from "react-icons/io5";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-100 bg-gray-900">
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center h-[70vh] text-center px-4 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
      >
        <div className="bg-gray-800/70 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold mb-6">
            Welcome to{" "}
            <span className="flex items-center text-5xl mx-auto w-full justify-center text-indigo-400">
              <IoPulseSharp className="text-indigo-400" />
              <p className="ml-2 font-extrabold">PulseScore</p>
            </span>
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-6 text-gray-300">
            Your go-to platform for real-time sports data and scores across Football, Basketball, and Tennis. Dive into live scores,
            fixtures, league tables, and more.
          </p>
          <Link
            href="/live-score?sport=football"
            className="bg-indigo-500 px-6 py-3 rounded-lg text-lg font-semibold text-gray-100 hover:bg-indigo-400 transition"
          >
            Explore Live Scores
          </Link>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-16 px-6 bg-gray-800 text-gray-200">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold text-indigo-300">Why Choose Us?</h2>
          <p className="text-lg text-gray-400">Reliable, up-to-the-minute sports data coverage tailored for true fans.</p>
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
      <section className="py-16 px-6 text-center bg-indigo-700 text-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Join the Ultimate Sports Community</h2>
          <p className="text-lg mb-6 text-indigo-200">
            Sign up for exclusive insights, match analyses, and get notified with the latest scores and fixtures.
          </p>
          <button className="bg-indigo-500 px-6 py-3 rounded-lg text-lg font-semibold text-gray-100 hover:bg-indigo-400 transition">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

function Section({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-gray-700 text-indigo-300 p-6 rounded-lg shadow-md w-full md:w-1/3 border border-gray-600">
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300">{content}</p>
    </div>
  );
}
