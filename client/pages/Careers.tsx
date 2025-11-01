import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";

export default function Careers() {
  const jobs = [
    {
      id: 1,
      title: "Senior Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      id: 3,
      title: "Customer Success Manager",
      department: "Support",
      location: "Remote",
      type: "Full-time",
    },
    {
      id: 4,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-max">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Join Our Team
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
              We're looking for talented people who are passionate about
              connecting the world.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <div className="mb-16 bg-blue-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why Join Eskimo?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Remote First
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Work from anywhere in the world
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Great Benefits
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Competitive salary, health insurance, and more
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Growth Opportunity
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Join a fast-growing startup with global impact
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Open Positions
              </h2>
              <div className="space-y-4">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="flex flex-col md:flex-row md:items-center md:justify-between p-6 bg-white border border-gray-200 rounded-xl hover:border-primary transition-colors group"
                  >
                    <div className="flex-grow mb-4 md:mb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-bold text-gray-900">
                          {job.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span>{job.department}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <button className="text-primary font-semibold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
