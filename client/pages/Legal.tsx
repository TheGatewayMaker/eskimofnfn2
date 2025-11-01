import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function Legal() {
  const [activeTab, setActiveTab] = useState("privacy");

  const tabs = [
    { id: "privacy", label: "Privacy Policy" },
    { id: "terms", label: "Terms of Service" },
    { id: "cookies", label: "Cookie Policy" },
    { id: "gdpr", label: "GDPR" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-max">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Legal Information
            </h1>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max max-w-3xl">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 font-semibold transition-colors border-b-2 ${
                    activeTab === tab.id
                      ? "text-primary border-primary"
                      : "text-gray-600 border-transparent hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Privacy Policy */}
            {activeTab === "privacy" && (
              <div className="prose prose-sm max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Privacy Policy
                </h2>
                <div className="space-y-6 text-gray-600">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      1. Introduction
                    </h3>
                    <p>
                      Eskimo ("we", "our", or "us") is committed to protecting
                      your privacy. This Privacy Policy explains our data
                      practices and your rights.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2. Information We Collect
                    </h3>
                    <p>
                      We collect information you provide directly, such as when
                      you create an account, activate an eSIM, or contact us. We
                      may also collect information automatically through your
                      use of our services.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      3. How We Use Your Information
                    </h3>
                    <p>
                      We use your information to provide, maintain, and improve
                      our services, process transactions, send promotional
                      communications, and comply with legal obligations.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      4. Data Protection
                    </h3>
                    <p>
                      We implement appropriate security measures to protect your
                      personal information from unauthorized access, alteration,
                      and destruction.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      5. Your Rights
                    </h3>
                    <p>
                      You have the right to access, correct, or delete your
                      personal information. You may also opt-out of promotional
                      communications at any time.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Terms of Service */}
            {activeTab === "terms" && (
              <div className="prose prose-sm max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Terms of Service
                </h2>
                <div className="space-y-6 text-gray-600">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      1. Acceptance of Terms
                    </h3>
                    <p>
                      By using Eskimo services, you agree to comply with these
                      Terms of Service. If you do not agree with any part,
                      please do not use our services.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2. User Responsibilities
                    </h3>
                    <p>
                      You are responsible for maintaining the confidentiality of
                      your account credentials and for all activities under your
                      account. You agree not to use the service for illegal
                      purposes.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      3. eSIM Activation
                    </h3>
                    <p>
                      eSIMs are provided on an as-is basis. We reserve the right
                      to suspend service for abuse or violation of these terms.
                      Data is non-refundable once activated.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      4. Limitation of Liability
                    </h3>
                    <p>
                      Eskimo is not liable for any indirect, incidental, or
                      consequential damages arising from your use of our
                      services.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      5. Changes to Terms
                    </h3>
                    <p>
                      We may modify these terms at any time. Continued use of
                      our services constitutes acceptance of modified terms.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Cookie Policy */}
            {activeTab === "cookies" && (
              <div className="prose prose-sm max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Cookie Policy
                </h2>
                <div className="space-y-6 text-gray-600">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      1. What Are Cookies?
                    </h3>
                    <p>
                      Cookies are small text files stored on your device that
                      help us remember your preferences and improve your
                      experience.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2. Types of Cookies We Use
                    </h3>
                    <p>
                      We use essential cookies for functionality, analytical
                      cookies to understand usage, and marketing cookies to show
                      relevant ads.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      3. Cookie Control
                    </h3>
                    <p>
                      You can control cookie settings through your browser.
                      Disabling cookies may affect some features of our
                      services.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      4. Third-Party Cookies
                    </h3>
                    <p>
                      Third-party partners may use cookies to provide analytics
                      and advertising services. We are not responsible for their
                      cookie practices.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* GDPR */}
            {activeTab === "gdpr" && (
              <div className="prose prose-sm max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  GDPR Compliance
                </h2>
                <div className="space-y-6 text-gray-600">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      1. Data Subject Rights
                    </h3>
                    <p>
                      Under GDPR, you have the right to access, correct, or
                      delete your personal data. You also have the right to data
                      portability and to object to processing.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2. Legal Basis for Processing
                    </h3>
                    <p>
                      We process your data based on your consent, contract
                      performance, legal compliance, or legitimate interests.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      3. Data Protection Officer
                    </h3>
                    <p>
                      For GDPR-related inquiries, please contact our Data
                      Protection Officer at dpo@eskimo.global
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      4. Data Transfers
                    </h3>
                    <p>
                      We implement appropriate safeguards when transferring data
                      outside the EU in compliance with GDPR requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      5. Complaints
                    </h3>
                    <p>
                      If you believe we have violated your GDPR rights, you have
                      the right to lodge a complaint with your supervisory
                      authority.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Last updated: March 2024. For questions about our legal
                policies, please contact legal@eskimo.global
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
