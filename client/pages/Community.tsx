import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MessageCircle, Users, ExternalLink } from "lucide-react";

export default function Community() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-max">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Join Our Community
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
              Connect with fellow Eskimo users, share tips, and help each other
              stay connected.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {[
                {
                  icon: MessageCircle,
                  title: "Discord Server",
                  description:
                    "Join our active Discord community with thousands of members sharing tips, tricks, and travel stories.",
                  button: "Join Discord",
                  link: "#discord",
                },
                {
                  icon: Users,
                  title: "Community Forum",
                  description:
                    "Ask questions, share your experiences, and help other travelers navigate global connectivity.",
                  button: "Visit Forum",
                  link: "#forum",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-xl p-8"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    <a
                      href={item.link}
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      {item.button}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Community Guidelines
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Be Respectful
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Treat all community members with respect and kindness.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Share Knowledge
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Help others by sharing your experiences and solutions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">No Spam</h3>
                  <p className="text-gray-600 text-sm">
                    Keep discussions relevant and on-topic.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Protect Privacy
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Don't share personal information or referral links
                    abusively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
