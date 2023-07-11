import DefaultLayout from "layout/DefaultLayout";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import FormPromo from "components/FormPromo";
import PromoList from "components/PromoList";
import BlogList from "components/BlogList";
import { useBlogDataQuery } from "services/blogs/get-blogs";

const Blogs = () => {
  const [searchBlog, setSearchBlog] = useState({});
  const { data: blogData } = useBlogDataQuery({
    params: {
      page: 1,
      paginate: 6,
      preview: true,
      ...searchBlog,
    },
  });

  const blogsDataRow = blogData?.data?.datas || [];

  return (
    <DefaultLayout>
      <div className="mb-10 w-full pt-28 lg:pt-32">
        <SearchBar
          onChange={(val) => {
            setSearchBlog(val);
          }}
        />
      </div>
      <div className="mb-20">
        <BlogList data={blogsDataRow} header="New Article" />
      </div>
      <div>
        <h1 className="text-center font-bevietnampro text-4xl font-semibold">
          Instagram
        </h1>
        <div className="mt-10"></div>
      </div>
      <div id="form-promo" className="mb-40" data-aos="fade-up">
        <FormPromo bgForm />
      </div>
      <div className="mb-40" data-aos="fade-up">
        <PromoList onlyFeatured />
      </div>
    </DefaultLayout>
  );
};

export default Blogs;
