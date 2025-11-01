import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Tag, CheckCircle } from "lucide-react";

export default function Changelog() {
  const releases = [
    {
      version: "1.2.0",
      date: "March 2024",
      type: "Feature Release",
      changes: [
        "Added QR code scanning for easier eSIM setup",
        "New referral analytics dashboard",
        "Improved data usage tracking",
        "Better offline mode support",
      ],
    },
    {
      version: "1.1.5",
      date: "February 2024",
      type: "Bug Fixes",
      changes: [
        "Fixed payment processing issues",
        "Improved app stability",
        "Enhanced error messages",
        "Performance optimizations",
      ],
    },
    {
      version: "1.1.0",
      date: "January 2024",
      type: "Feature Release",
      changes: [
        "Support for new countries",
        "Redesigned user interface",
        "Added multi-language support",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-max">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Changelog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
              See what's new in Eskimo. We're constantly improving your
              experience.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max max-w-3xl">
            <div className="space-y-8">
              {releases.map((release, i) => (
                <div key={i} className="border-l-4 border-primary pl-6 pb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Tag className="w-5 h-5 text-primary" />
                        <h3 className="text-2xl font-bold text-gray-900">
                          v{release.version}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span>{release.date}</span>
                        <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                          {release.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {release.changes.map((change, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
