import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg md:text-2xl font-semibold mb-3">Sports Info</h3>
            <p className="text-xs md:text-sm">
              Your ultimate source for real-time sports updates, league tables, and match statistics. Stay connected with live scores and
              the latest from Football, Basketball, and Tennis.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="text-xs md:text-sm space-y-2">
              <li>
                <Link href="/fixtures" className="hover:underline">
                  Fixtures
                </Link>
              </li>
              <li>
                <Link href="/live-score?sport=football" className="hover:underline">
                  LiveScore
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <p className="text-sm">Email: pulsescore@gmail.com</p>
            <p className="text-sm">Phone: +359 878 823 037</p>
            <p className="text-sm">Follow us on social media:</p>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" className="hover:opacity-75" aria-label="Facebook">
                <BsFacebook className="size-6" />
              </a>
              <a href="https://x.com" className="hover:opacity-75" aria-label="X">
                <TwitterLogoIcon className="size-6" />
              </a>
              <a href="https://instagram.com" className="hover:opacity-75" aria-label="Instagram">
                <InstagramLogoIcon className="size-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-secondary pt-4 text-center text-xs">
          © {new Date().getFullYear()} PulseScore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
