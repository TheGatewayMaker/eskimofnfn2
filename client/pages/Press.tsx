import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Download, FileText } from "lucide-react";

export default function Press() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-max">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Press Kit
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
              Everything journalists and media partners need to know about
              Eskimo.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-3xl mx-auto">
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  About Eskimo
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Eskimo is a global eSIM provider offering seamless,
                  document-free connectivity in 200+ countries. We empower
                  digital nomads, frequent travelers, and anyone seeking
                  borderless connectivity without traditional ID verification
                  requirements.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our revolutionary referral program allows users to earn
                  unlimited free data, creating a sustainable model for global
                  connectivity.
                </p>
              </div>

              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Brand Assets
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: "Logo - Full Color", file: "eskimo-logo-full.zip" },
                    { name: "Logo - Monochrome", file: "eskimo-logo-mono.zip" },
                    { name: "Brand Guidelines", file: "brand-guidelines.pdf" },
                    { name: "Product Screenshots", file: "screenshots.zip" },
                  ].map((asset, i) => (
                    <button
                      key={i}
                      className="flex items-center gap-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-left"
                    >
                      <FileText className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {asset.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {asset.file}
                        </div>
                      </div>
                      <Download className="w-5 h-5 text-primary ml-auto flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Facts
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Available in 200+ countries with 4G/5G coverage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>
                      No ID verification required for instant activation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>
                      Data never expires with unlimited referral earning
                      potential
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>
                      Full call and SMS support after 30-day probation period
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Media Contact
                </h2>
                <div className="bg-blue-50 rounded-xl p-8">
                  <p className="text-gray-900 font-semibold mb-2">
                    Press & PR Inquiries
                  </p>
                  <p className="text-gray-600 mb-4">press@eskimo.global</p>
                  <p className="text-gray-600 text-sm">
                    For interview requests, press releases, or media
                    partnerships, please reach out to our press team.
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
