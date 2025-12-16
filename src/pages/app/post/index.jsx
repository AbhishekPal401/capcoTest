import React from "react";
import { useGetPostsQuery } from "../../../services/api/post/index.js";

const Posts = () => {
  const { data, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts</p>;

  return (
    <div>
      <h2>Posts</h2>
      {data?.map((post) => (
        <div
          key={post.id}
          style={{
            marginBottom: "12px",
            padding: "16px",
            background: "#fff",
            borderRadius: "10px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
