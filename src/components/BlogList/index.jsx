import React from "react";
import BlogItem from "./BlogItem";

const BlogList = ({ data = [], header }) => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="mx-10 max-md:mx-2">
        {header && (
          <h3 className="mb-10 font-bevietnampro text-2xl font-semibold text-black/70 max-md:text-center">
            {header}
          </h3>
        )}
        <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {data.map((blog) => (
            <BlogItem
              key={blog.id}
              id={blog.id}
              title={blog.title}
              date={blog.createdAt}
              creator={blog.createdBy}
              description={blog.body}
              category={blog.category}
              image={
                blog.image
                  ? `${process.env.REACT_APP_API_IMAGE}/${blog.image}`
                  : null
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
