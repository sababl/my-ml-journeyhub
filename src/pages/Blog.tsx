import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogPosts } from "../services/api";
import { Skeleton } from "@/components/ui/skeleton";

const Blog = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: fetchBlogPosts,
  });
  
  const categories = ["all", ...new Set(posts.map(post => post.category))];
  
  const filteredPosts = posts.filter(post => 
    categoryFilter === "all" ? true : post.category === categoryFilter
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-12 w-32 mb-8" />
          <div className="flex gap-4 mb-8">
            {[1, 2, 3].map(i => (
              <Skeleton key={i} className="h-10 w-24" />
            ))}
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map(i => (
              <Skeleton key={i} className="h-48 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

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