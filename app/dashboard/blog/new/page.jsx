"use client";

import AdminLayout from "@/components/layout/AdminLayout";
import BlogPostForm from "@/components/blog/BlogPostForm";

export default function NewBlogPostPage() {
  return (
    <AdminLayout>
      <BlogPostForm mode="new" />
    </AdminLayout>
  );
}
