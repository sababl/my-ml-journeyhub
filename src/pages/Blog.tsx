import { useState } from "react";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: "Understanding Transformer Architecture",
    excerpt: "A deep dive into the architecture that revolutionized natural language processing...",
    category: "Deep Learning",
    date: "2024-02-15",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Optimizing PyTorch Models for Production",
    excerpt: "Best practices and techniques for deploying efficient PyTorch models in production...",
    category: "MLOps",
    date: "2024-02-10",
    readTime: "6 min read",
  },
  // Add more blog posts as needed
];

const Blog = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  
  const categories = ["all", ...new Set(posts.map(post => post.category))];
  
  const filteredPosts = posts.filter(post => 
    categoryFilter === "all" ? true : post.category === categoryFilter
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Blog</h1>
        
        <div className="flex gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                categoryFilter === category
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid gap-8">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span className="text-accent">{post.category}</span>
                </div>
                <h2 className="text-2xl font-semibold text-primary mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-accent hover:text-accent/80 font-medium transition-colors">
                  Read more →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;