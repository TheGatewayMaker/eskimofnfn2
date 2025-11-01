import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Heart, Globe, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-max">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Eskimo
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're building the future of global connectivity, one eSIM at a
                time.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Globe,
                  title: "Global Mission",
                  description:
                    "Connect the world without borders, making international travel seamless for everyone.",
                },
                {
                  icon: Zap,
                  title: "Fast & Reliable",
                  description:
                    "Instant activation, no ID verification, and access to 4G/5G networks in 200+ countries.",
                },
                {
                  icon: Heart,
                  title: "Customer First",
                  description:
                    "We put your needs first, offering transparent pricing and unlimited earning opportunities.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="text-center p-8 bg-blue-50 rounded-xl"
                  >
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mx-auto mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-white border border-blue-200 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-6 text-lg leading-relaxed">
                Eskimo was founded with a simple vision: to make international
                connectivity accessible to everyone, without the complexity and
                cost. We believe that in today's connected world, staying online
                shouldn't require identity verification or expensive roaming
                charges. Our platform empowers digital nomads, frequent
                travelers, and anyone who values borderless connectivity.
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                Through our innovative referral program, we've created an
                ecosystem where users can earn unlimited free data by sharing
                the benefits with friends. This isn't just a product—it's a
                movement toward a more connected world.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
