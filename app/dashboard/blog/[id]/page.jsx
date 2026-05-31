"use client";

import { useParams } from "next/navigation";
import AdminLayout from "@/components/layout/AdminLayout";
import BlogPostForm from "@/components/blog/BlogPostForm";

export default function EditBlogPostPage() {
  const params = useParams();
  const id = params?.id;

  return (
    <AdminLayout>
      <BlogPostForm mode="edit" postId={id} />
    </AdminLayout>
  );
}
