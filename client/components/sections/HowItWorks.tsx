import { Download, Zap, Users, Phone, CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: "Download & Activate",
      description:
        "Download the Eskimo app or visit our website. Activate your eSIM in seconds with no identity verification needed.",
    },
    {
      icon: Zap,
      title: "Instant Data",
      description:
        "Get approximately 1GB of starter data to begin using your eSIM. Connect to 4G/5G networks instantly across 200+ countries.",
    },
    {
      icon: Phone,
      title: "30-Day Probation",
      description:
        "For the first 30 days, you'll have data-only access. No calls, SMS, or OTP verification. This is our security phase.",
    },
    {
      icon: CheckCircle,
      title: "Unlock Full Access",
      description:
        "After 30 days, your eSIM automatically unlocks. You'll get a local number, full call/SMS capabilities, and OTP support.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            How Eskimo Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, transparent, and straightforward. Get global connectivity in
            four easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group scroll-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full bg-gradient-to-br from-blue-50 to-transparent border border-blue-100 rounded-xl p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform motion-safe:hover:-translate-y-1 ring-1 ring-transparent hover:ring-blue-200">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-sm flex items-center justify-center">
                    {index + 1}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-1 bg-gradient-to-r from-blue-300 to-transparent transform -translate-y-1/2" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8 md:p-12 scroll-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                label: "Starter Data",
                value: "~1GB",
                detail: "First month included",
              },
              {
                label: "Data Validity",
                value: "Lifetime",
                detail: "Never expires, earn more via referrals",
              },
              {
                label: "Referral Bonus",
                value: "500MB",
                detail: "Per successful referral",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="scroll-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {item.value}
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  {item.label}
                </div>
                <div className="text-sm text-gray-600">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
