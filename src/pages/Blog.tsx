import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogPosts } from "../services/api";
import type { BlogPost } from '../services/api';
import { Skeleton } from "@/components/ui/skeleton";

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <article className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
      <div className="flex gap-2 mb-4">
        {post.category?.map((cat) => (
          <span
            key={cat.id}
            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
          >
            {cat.name}
          </span>
        ))}
      </div>
      <time className="text-gray-600 text-sm">
        {new Date(post.date).toLocaleDateString()}
      </time>
      <p className="mt-4 text-gray-700">
        {post.content && post.content.length > 150
          ? `${post.content.slice(0, 150)}...`
          : post.content}
      </p>
    </article>
  );
};

const Blog = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  
  const { data: posts = [], isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['blog-posts'],
    queryFn: fetchBlogPosts,
  });
  
  const categories = ["all", ...new Set(posts.flatMap(post => post.category?.map(cat => cat.name) || []))];
  
  const filteredPosts = posts.filter(post => 
    categoryFilter === "all" ? true : post.category?.some(cat => cat.name === categoryFilter)
  );

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <Skeleton className="h-8 w-3/4 mb-4" />
              <Skeleton className="h-4 w-1/4 mb-4" />
              <Skeleton className="h-20 w-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-500">Error loading blog posts</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
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
      {filteredPosts && filteredPosts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No blog posts found</p>
      )}
    </div>
  );
};

export default Blog;