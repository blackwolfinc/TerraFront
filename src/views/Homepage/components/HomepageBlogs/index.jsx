import BlogList from "components/BlogList";
import React from "react";
import { useBlogDataQuery } from "services/blogs/get-blogs";

const HomepageBlogs = () => {
  const { data: blogData } = useBlogDataQuery({
    params: {
      page: 1,
      paginate: 6,
      preview: true,
    },
  });

  const blogsDataRow = blogData?.data?.datas || [];

  return (
    <>
      <BlogList data={blogsDataRow} header="New Article" />
    </>
  );
};

export default HomepageBlogs;
