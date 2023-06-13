import React from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  return (
    <div className="mx-10">
      <h3 className="mb-10 font-bevietnampro text-2xl font-semibold text-black/70">
        New Article
      </h3>
      <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  );
};

export default BlogList;
