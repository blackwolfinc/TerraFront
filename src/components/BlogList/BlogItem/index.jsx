import React from "react";

const BlogItem = () => {
  return (
    <div className="relative h-[500px] w-full cursor-pointer shadow-md transition-all hover:-translate-y-1">
      <div className="absolute left-4 top-4 w-fit rounded-md bg-accent px-2 py-1 text-sm font-bold text-white">
        <span>Tips Properti</span>
      </div>
      <div className="pointer-events-none absolute flex h-full w-full items-center pl-4">
        <div className="rounded-md bg-red-600 px-2 py-1 font-bold text-white">
          <span>24/03/2023</span>
        </div>
      </div>
      <div className="flex h-full w-full flex-col overflow-hidden rounded-md bg-white">
        <div className="h-1/2 bg-gray-100"></div>
        <div className="h-1/2">
          <div className="flex h-full flex-col p-4 pt-8">
            <div className="mb-2 flex items-center gap-2">
              <div className="aspect-square w-8 rounded-full bg-gray-100 shadow-md"></div>
              <span>Sanjaya</span>
            </div>
            <div className="flex h-full flex-1 flex-col">
              <h6 className="mb-2 text-lg font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h6>
              <div className="h-[98px]">
                <p className="line-clamp-4 h-full text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                  voluptas placeat quod rerum temporibus sint ut, dolores
                  voluptatibus ex cum perspiciatis itaque voluptatum sapiente
                  earum dolorum enim adipisci nemo quaerat!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
