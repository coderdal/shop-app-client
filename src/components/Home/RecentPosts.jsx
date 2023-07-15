import { useState } from "react";

import PostCard from "@/components/Home/Card";

const RecentPosts = () => {
  const data = [
    {
      name: "Product 1",
      price: 10,
      category: "60f0f2b41934c616d8fe1bce",
      imageUrl:
        "https://m.media-amazon.com/images/I/61WQ0mBtBYL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      description: "Product lorem ipsum dolor sit",
      authorId: "60f0f2b41934c616d8fe1bcd",
      author: {
        username: "john.doe",
        role: "user",
      },
    },
    {
      name: "Product Lorem",
      price: 20,
      category: "60f0f2b41934c616d8fe1bce",
      imageUrl:
        "https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SX466_.jpg",
      description: "Product lorem ipsum dolor sit",
      authorId: "60f0f2b41934c616d8fe1bcd",
      author: {
        username: "jane.doe",
        role: "user",
      },
    },
    {
      name: "Product Pro 3",
      price: 30,
      category: "60f0f2b41934c616d8fe1bce",
      imageUrl:
        "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mq1f3tua-apple-iphone-14-pro-256gb-derin-mor-mq1f3tua-637987546501615808.jpg",
      description: "lorem ipsum dolor sit",
      authorId: "60f0f2b41934c616d8fe1bcd",
      author: {
        username: "jim.smith",
        role: "user",
      },
    },
    {
      name: "Lorem Air 4",
      price: 40,
      category: "60f0f2b41934c616d8fe1bce",
      imageUrl:
        "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mnep3tua-637909909361850839.jpg",
      description: "lorem ipsum dolor sit amet.",
      authorId: "60f0f2b41934c616d8fe1bcd",
      author: {
        username: "emma.watson",
        role: "user",
      },
    },
    {
      name: "Display 2222'",
      price: 50,
      category: "60f0f2b41934c616d8fe1bce",
      imageUrl:
        "https://m.media-amazon.com/images/I/51s3V6HgAsL._AC_UF1000,1000_QL80_.jpg",
      description: "Display product lorem ipsum",
      authorId: "60f0f2b41934c616d8fe1bcd",
      author: {
        username: "robert.jones",
        role: "user",
      },
    },
    {
      name: "Watch Ce HD'",
      price: 50,
      category: "60f0f2b41934c616d8fe1bce",
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MP7F3ref_VW_PF+watch-44-alum-silver-nc-se_VW_PF_WF_CO_GEO_TR?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683237043713",
      description: "My watch",
      authorId: "60f0f2b41934c616d8fe1bcd",
      author: {
        username: "sarah.jackson",
        role: "user",
      },
    },
  ];

  return (
    <div className="w-full mt-8 ">
      <h1 className="text-black font-semibold text-2xl">Recent Posts</h1>
      <div className="my-4 grid grid-cols-6 gap-4 max-lg:grid-cols-1">
        {data.map((item, key) => {
          return (
            <PostCard
              key={key}
              image={item.imageUrl}
              path={item.path}
              title={item.name}
              author={item.author}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecentPosts;
