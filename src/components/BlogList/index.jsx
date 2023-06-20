import React from "react";
import BlogItem from "./BlogItem";
import { useBlogDataQuery } from "services/blogs/get-blogs";

const BlogList = () => {
  const { data: blogData } = useBlogDataQuery({
    params: {
      page: 1,
      paginate: 6,
    },
  });

  const blogsDataRow = blogData?.data?.datas || [];

  return (
    <div className="mx-10">
      <h3 className="mb-10 font-bevietnampro text-2xl font-semibold text-black/70">
        New Article
      </h3>
      <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {blogsDataRow.map((blog) => (
          <BlogItem
            key={blog.id}
            title={blog.title}
            date={blog.created_at}
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
  );
};

export default BlogList;
