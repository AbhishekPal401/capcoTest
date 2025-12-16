import { useGetPostsQuery } from "../../../services/api/post/index.js";

import { useSelector } from "react-redux";
import { restApi } from "../../../services/api/index.js";

const CacheChecker = () => {
  const cachedPosts = useSelector(
    (state) => restApi.endpoints.getPosts.select()(state)?.data
  );

  console.log("Cached posts:", cachedPosts);

  return null;
};

const Posts = () => {
  const { data, error, isLoading } = useGetPostsQuery();

  console.log("Posts query called");

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
      <CacheChecker />
    </div>
  );
};

export default Posts;
