import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogPage = () => {
  const featuredPost = blogPosts.find(p => p.featured);
  const otherPosts = blogPosts.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="container-presto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mt-4 mb-6">
              Noticias y Actualidad
            </h1>
            <p className="text-lg text-muted-foreground">
              Mantente al día con las últimas tendencias, innovaciones y noticias 
              del sector de la grifería y el equipamiento sanitario.
            </p>
          </motion.div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="container-presto mb-16">
            <Link to={`/blog/${featuredPost.slug}`}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid lg:grid-cols-2 gap-8 bg-muted/30 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="aspect-[4/3] lg:aspect-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                      Destacado
                    </span>
                    <span className="text-muted-foreground text-sm">{featuredPost.date}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-display mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
              </motion.article>
            </Link>
          </section>
        )}

        {/* Posts Grid */}
        <section className="container-presto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, idx) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-muted-foreground text-xs">{post.date}</span>
                    <span className="text-muted-foreground text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-display mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Leer más <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </motion.article>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
