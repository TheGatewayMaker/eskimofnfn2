import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle, AlertCircle } from "lucide-react";

export default function Status() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-max">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              System Status
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
              Check the status of Eskimo services and view incident history.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max max-w-3xl">
            <div className="mb-12 p-8 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  All Systems Operational
                </h2>
              </div>
              <p className="text-green-700">
                All services are running normally. Last updated: Today at 12:00
                UTC
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Service Status
              </h2>
              <div className="space-y-3">
                {[
                  {
                    service: "API Services",
                    status: "Operational",
                    uptime: "99.99%",
                  },
                  {
                    service: "Web Application",
                    status: "Operational",
                    uptime: "99.98%",
                  },
                  {
                    service: "Mobile Apps",
                    status: "Operational",
                    uptime: "99.97%",
                  },
                  {
                    service: "Payment Processing",
                    status: "Operational",
                    uptime: "99.99%",
                  },
                  {
                    service: "Data Centers",
                    status: "Operational",
                    uptime: "99.99%",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                  >
                    <div>
                      <div className="font-semibold text-gray-900">
                        {item.service}
                      </div>
                      <div className="text-sm text-gray-600">
                        Uptime: {item.uptime}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <span className="text-sm font-medium text-green-700">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Recent Incidents
              </h2>
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <p className="text-gray-600">
                  No recent incidents. Great job, team!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
