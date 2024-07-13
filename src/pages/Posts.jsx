import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const Posts = () => {
  const posts = useFetch("https://jsonplaceholder.typicode.com/posts", []);

  return (
    <div>
      <h1>POSTS:</h1>
      {
        posts.map(post => {
          return <h2 key={post.id}>{post.title}</h2>
        })}
    </div>
  );
};

export default Posts;
