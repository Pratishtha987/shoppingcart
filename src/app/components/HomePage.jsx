import React from "react";
import Products from "./Products";

const HomePage = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const posts = await response.json();
  return (
    <div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
        {posts.map((post) => (
          <Products key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
