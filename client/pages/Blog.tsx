import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Stay Connected While Traveling",
      excerpt:
        "Learn the best practices for maintaining internet connectivity across the globe.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Travel Tips",
    },
    {
      id: 2,
      title: "Understanding eSIM Technology",
      excerpt:
        "A deep dive into how eSIM technology works and why it's revolutionizing mobile connectivity.",
      author: "Tech Team",
      date: "March 10, 2024",
      category: "Technology",
    },
    {
      id: 3,
      title: "Digital Nomad's Guide to Data Management",
      excerpt:
        "Tips and tricks for managing your data usage while working remotely from different countries.",
      author: "Alex Chen",
      date: "March 5, 2024",
      category: "Guides",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-max">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Eskimo Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
              Stay updated with the latest news, tips, and insights about global
              connectivity.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-400" />
                  <div className="p-6">
                    <div className="text-sm font-semibold text-primary mb-3">
                      {post.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                    </div>
                    <button className="text-primary font-semibold text-sm inline-flex items-center gap-2 hover:translate-x-1 transition-transform">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
