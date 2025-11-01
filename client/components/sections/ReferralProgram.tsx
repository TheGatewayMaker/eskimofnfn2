import { Share2, Users, Gift, TrendingUp } from "lucide-react";

export const ReferralProgram = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="scroll-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Earn Unlimited{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Free Data
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Share Eskimo with your friends and family. Every successful
              referral gives you 500MB of free data, with absolutely no limit.
              Keep earning data forever.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: Share2,
                  title: "Share Your Link",
                  description:
                    "Get a unique referral link and share it with anyone, anywhere in the world.",
                },
                {
                  icon: Users,
                  title: "They Sign Up",
                  description:
                    "Your friends activate their eSIM using your referral link.",
                },
                {
                  icon: Gift,
                  title: "You Both Earn",
                  description:
                    "You get 500MB free data, and your friend gets a bonus too.",
                },
                {
                  icon: TrendingUp,
                  title: "Unlimited Earning",
                  description:
                    "No caps, no limits. Refer as many people as you want.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="btn-primary inline-flex items-center gap-2">
              Download App to Get Started
            </button>
          </div>

          {/* Right side - Visual */}
          <div className="scroll-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="relative">
              {/* Label */}
              <div className="mb-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                What You'll See in the App
              </div>

              {/* Gradient background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl blur-2xl opacity-40" />

              <div className="relative bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-3xl p-12 md:p-16">
                <div className="space-y-8">
                  {/* Referral stats */}
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">
                      ∞
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      Unlimited Referrals
                    </div>
                    <div className="text-sm text-gray-600">
                      No cap on earnings
                    </div>
                  </div>

                  {/* Sample referral link card */}
                  <div className="bg-white border border-blue-200 rounded-xl p-4">
                    <div className="text-sm text-gray-600 mb-2">
                      Your Referral Link
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                      <code className="text-sm font-mono text-gray-900 flex-grow truncate">
                        eskimo.global/ref/ABC123XYZ
                      </code>
                      <button className="text-primary hover:text-blue-700 font-semibold">
                        Copy
                      </button>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="flex justify-center">
                    <div className="w-32 h-32 bg-white border-2 border-blue-300 rounded-xl flex items-center justify-center">
                      <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                        QR Code
                      </div>
                    </div>
                  </div>

                  {/* Referral counter */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 text-center border border-blue-200">
                    <div className="text-sm text-gray-600 mb-2">
                      Referrals This Month
                    </div>
                    <div className="text-4xl font-bold text-primary">0</div>
                    <div className="text-sm text-gray-600 mt-2">0MB Earned</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits comparison */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 scroll-fade-in">
          {[
            { referrals: "1", data: "500MB" },
            { referrals: "5", data: "2.5GB" },
            { referrals: "10", data: "5GB" },
            { referrals: "50", data: "25GB" },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-6 bg-white border border-blue-200 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {item.referrals}
              </div>
              <div className="text-sm text-gray-600 mb-3">Referrals</div>
              <div className="text-2xl font-bold text-gray-900">
                {item.data}
              </div>
              <div className="text-xs text-gray-600 mt-1">Free Data</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
