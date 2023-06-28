import DefaultLayout from "layout/DefaultLayout";
import moment from "moment";
import React from "react";
import { useParams } from "react-router-dom";
import { useBlogDataQuery } from "services/blogs/get-blogs";

const DetailBlogs = () => {
  const { id } = useParams();

  const { data: blogData, isLoading: blogLoading } = useBlogDataQuery({
    id: id,
  });

  return (
    <>
      <DefaultLayout>
        <div className="mx-auto min-h-screen max-w-screen-xl">
          <div
            className={`mb-10 flex aspect-[20/9] w-full items-center justify-center overflow-hidden bg-gray-200 ${
              blogLoading ? "animate-pulse" : ""
            }`}
          >
            {!blogLoading && (
              <img
                src={`${process.env.REACT_APP_API_IMAGE}/${blogData?.data.image}`}
                alt={blogData?.data?.title}
                className="min-h-full min-w-full object-cover"
              />
            )}
          </div>
          <div className="px-20 max-md:px-4">
            <div className="mb-2">
              {blogLoading ? (
                <div className="w-30 h-7 animate-pulse rounded-lg bg-gray-200"></div>
              ) : (
                <h1 className="text-3xl font-bold">{blogData?.data?.title}</h1>
              )}
            </div>
            {!blogLoading && (
              <div className="mb-8 flex items-center gap-2">
                <p>
                  Dibuat oleh{" "}
                  <span className="font-semibold">
                    {blogData?.data?.createdBy}.
                  </span>
                </p>
                <span>
                  {moment(blogData?.data?.createdAt).format("DD/MM/YYYY")}
                </span>
              </div>
            )}
            {blogLoading ? (
              <div className="flex animate-pulse flex-col gap-4">
                <div className="h-4 w-full rounded-lg bg-gray-200"></div>
                <div className="h-4 w-full rounded-lg bg-gray-200"></div>
                <div className="h-4 w-1/2 rounded-lg bg-gray-200"></div>
              </div>
            ) : (
              <div className="mb-20">
                <div
                  dangerouslySetInnerHTML={{ __html: blogData?.data?.body }}
                ></div>
              </div>
            )}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default DetailBlogs;
