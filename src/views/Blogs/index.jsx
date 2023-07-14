import DefaultLayout from "layout/DefaultLayout";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import FormPromo from "components/FormPromo";
import PromoList from "components/PromoList";
import BlogList from "components/BlogList";
import { useBlogDataQuery } from "services/blogs/get-blogs";
import InstagramPostList from "components/InstagramPostList";
import Aos from "aos";
import { useEffect } from "react";

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

  useEffect(() => {
    Aos.init({ duration: 1000, anchorPlacement: "top-bottom" });
  }, []);

  const blogsDataRow = blogData?.data?.datas || [];

  return (
    <DefaultLayout>
      <div data-aos="fade-up">
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
      </div>
      <div className="mb-40" data-aos="fade-up">
        <h1 className="mb-10 text-center font-bevietnampro text-4xl font-semibold">
          Instagram
        </h1>
        <div>
          <InstagramPostList />
        </div>
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
