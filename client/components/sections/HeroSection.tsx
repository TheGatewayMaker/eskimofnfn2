import { ArrowRight, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white pt-20 pb-32 md:pt-32 md:pb-48">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30 translate-y-1/2" />
      </div>

      <div className="container-max relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-slideInUp">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Global eSIM Connectivity
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your One eSIM for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Everywhere
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Instant global connectivity without ID verification. Get 4G/5G data
            in 200+ countries, earn unlimited free data through referrals, and
            stay connected forever.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary inline-flex items-center gap-2 group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline">Learn More</button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "200+", detail: "Countries" },
              { label: "4G/5G", detail: "Networks" },
              { label: "No ID", detail: "Verification" },
              { label: "Lifetime", detail: "Validity" },
            ].map((stat, i) => (
              <div
                key={i}
                className="animate-fadeIn"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero image placeholder with gradient overlay */}
      <div className="mt-16 relative container-max">
        <div className="relative bg-gradient-to-b from-blue-500 to-blue-700 rounded-2xl overflow-hidden h-96 md:h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
            alt="Global connectivity"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <Zap className="w-16 h-16 mx-auto mb-4 opacity-80" />
              <p className="text-sm opacity-75">Global 4G/5G Coverage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
