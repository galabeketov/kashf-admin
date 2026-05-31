"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import AdminLayout, { useAdminLang } from "@/components/layout/AdminLayout";
import { db } from "@/lib/firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const getSeconds = (ts) => (typeof ts?.seconds === "number" ? ts.seconds : 0);

const getLocalized = (value, lang) => {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (typeof value === "object") {
    return value[lang] || value.en || value.uz || value.ru || "";
  }
  return "";
};

export default function BlogAdminPage() {
  const { lang } = useAdminLang();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "posts"));
        const items = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        items.sort((a, b) => getSeconds(b.createdAt) - getSeconds(a.createdAt));
        setPosts(items);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const onDelete = async (id) => {
    const confirmed = window.confirm("Delete this post?");
    if (!confirmed) return;

    await deleteDoc(doc(db, "posts", id));
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const onTogglePublished = async (post) => {
    const nextPublished = !post.published;
    await updateDoc(doc(db, "posts", post.id), { published: nextPublished });
    setPosts((prev) =>
      prev.map((item) =>
        item.id === post.id ? { ...item, published: nextPublished } : item,
      ),
    );
  };

  const hasPosts = useMemo(() => posts.length > 0, [posts]);

  return (
    <AdminLayout>
      <div className="d-flex justify-between items-center mb-30">
        <h1 style={{ color: "#f1f5f9", fontSize: "30px", fontWeight: 700 }}>
          Blog Posts
        </h1>
        <Link
          href="/dashboard/blog/new"
          style={{
            background: "#3b82f6",
            color: "#fff",
            borderRadius: "10px",
            padding: "10px 18px",
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          Add Post
        </Link>
      </div>

      <div
        style={{
          background: "#1a2235",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        {loading ? (
          <div
            style={{ padding: "30px", color: "#64748b", textAlign: "center" }}
          >
            Loading posts...
          </div>
        ) : !hasPosts ? (
          <div style={{ padding: "40px", textAlign: "center" }}>
            <div style={{ color: "#f1f5f9", marginBottom: "16px" }}>
              No posts yet
            </div>
            <Link
              href="/dashboard/blog/new"
              style={{
                background: "#3b82f6",
                color: "#fff",
                borderRadius: "10px",
                padding: "10px 18px",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Add First Post
            </Link>
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table
              className="col-12"
              style={{ minWidth: "900px", borderCollapse: "collapse" }}
            >
              <thead style={{ background: "rgba(255,255,255,0.03)" }}>
                <tr>
                  {["Cover", "Title (EN)", "Category", "Status", "Actions"].map(
                    (label) => (
                      <th
                        key={label}
                        style={{
                          color: "#64748b",
                          fontSize: "12px",
                          textTransform: "uppercase",
                          padding: "13px 20px",
                          textAlign: "left",
                        }}
                      >
                        {label}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => {
                  const title = getLocalized(post.title, lang) || "Untitled";

                  return (
                    <tr
                      key={post.id}
                      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                    >
                      <td style={{ padding: "13px 20px", color: "#f1f5f9" }}>
                        <img
                          src={post.coverImage || "/img/blog/1.png"}
                          alt={title}
                          style={{
                            width: "48px",
                            height: "36px",
                            objectFit: "cover",
                            borderRadius: "4px",
                          }}
                        />
                      </td>
                      <td style={{ padding: "13px 20px", color: "#f1f5f9" }}>
                        {post.title?.en || title}
                      </td>
                      <td style={{ padding: "13px 20px", color: "#f1f5f9" }}>
                        {post.category || "-"}
                      </td>
                      <td style={{ padding: "13px 20px" }}>
                        <button
                          onClick={() => onTogglePublished(post)}
                          style={{
                            background: post.published
                              ? "rgba(16,185,129,0.15)"
                              : "rgba(100,116,139,0.15)",
                            color: post.published ? "#10b981" : "#64748b",
                            border: "none",
                            borderRadius: "20px",
                            padding: "3px 10px",
                            fontSize: "11px",
                          }}
                        >
                          {post.published ? "Published" : "Draft"}
                        </button>
                      </td>
                      <td style={{ padding: "13px 20px" }}>
                        <div style={{ display: "flex", gap: "8px" }}>
                          <Link
                            href={`/dashboard/blog/${post.id}`}
                            style={{
                              background: "rgba(59,130,246,0.15)",
                              color: "#3b82f6",
                              borderRadius: "6px",
                              padding: "5px 12px",
                              fontSize: "12px",
                              textDecoration: "none",
                            }}
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => onDelete(post.id)}
                            style={{
                              background: "rgba(239,68,68,0.1)",
                              color: "#ef4444",
                              border: "none",
                              borderRadius: "6px",
                              padding: "5px 12px",
                              fontSize: "12px",
                              cursor: "pointer",
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
