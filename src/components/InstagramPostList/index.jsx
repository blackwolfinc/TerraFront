import React, { useState } from "react";
import { useEffect } from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { useInstagramBasicDataQuery } from "services/instagram/get-instagram-basic";

const InstagramPostList = () => {
  const [instagramPost, setInstagramPost] = useState([]);
  const { data: instagramDataList } = useInstagramBasicDataQuery({
    params: {
      fields: "permalink,media_url",
      limit: 6,
    },
  });

  useEffect(() => {
    if (instagramDataList) {
      setInstagramPost(instagramDataList?.data?.map((item) => item.permalink));
    }
  }, [instagramDataList]);

  return (
    <div className="mx-auto grid max-w-screen-xl grid-cols-1 justify-between gap-4 px-4 sm:grid-cols-2 md:px-10 xl:grid-cols-3">
      {instagramPost?.map((item, i) => {
        return (
          <div
            key={`ig-${i}`}
            className="aspect-square overflow-y-hidden border-b-2"
          >
            <InstagramEmbed url={item} width="100%" />
          </div>
        );
      })}
    </div>
  );
};

export default InstagramPostList;
