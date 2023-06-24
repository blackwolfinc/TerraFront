import React from "react";
import moment from "moment";
import DummyProfile from "assets/img/dummy-profile-pic.png";
import NoImage from "assets/img/no-image.jpg";
import { removeHTMLTags } from "utils/utils";

const BlogItem = ({ image, title, date, creator, description, category }) => {
  return (
    <div className="relative h-[550px] w-full cursor-pointer shadow-md transition-all hover:-translate-y-1 max-md:h-[440px]">
      {category && (
        <div className="absolute left-4 top-4 w-fit rounded-md bg-accent px-2 py-1 text-sm font-bold text-white">
          <span>{category}</span>
        </div>
      )}
      <div className="pointer-events-none absolute flex h-full w-full items-center pl-4">
        <div className="rounded-md bg-red-600 px-2 py-1 font-bold text-white">
          <span>{moment(date).format("DD/MM/YYYY")}</span>
        </div>
      </div>
      <div className="flex h-full w-full flex-col overflow-hidden rounded-md bg-white">
        <div className="flex h-1/2 items-center justify-center overflow-hidden bg-gray-100">
          <img
            src={image || NoImage}
            alt="Blog"
            className="min-h-full min-w-full object-cover"
          />
        </div>
        <div className="h-1/2 text-teal-800">
          <div className="flex h-full flex-col p-4 pt-8">
            <div className="mb-4 flex items-center gap-2">
              <div className="aspect-square w-10 overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-md">
                <img
                  src={DummyProfile}
                  alt="Profile"
                  className="min-h-full min-w-full object-cover"
                />
              </div>
              <span>{creator || "-"}</span>
            </div>
            <div className="flex h-full flex-1 flex-col">
              <h6 className="mb-2 line-clamp-2 text-ellipsis text-lg font-bold">
                {title || "Blogs Title"}
              </h6>
              <p className="line-clamp-4 text-justify max-md:line-clamp-2">
                {removeHTMLTags(description)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
