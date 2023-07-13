import { useState } from "react";

import Card from "@/components/Home/Card";

const Categories = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const toggleExpandCategories = () => {
    setShowAllCategories((prev) => !prev);
  };

  const data = [
    {
      image:
        "https://st-troy.mncdn.com/Content/media/ProductImg/original/mq1f3tua-apple-iphone-14-pro-256gb-derin-mor-mq1f3tua-637987546501615808.jpg?width=785",
      path: "/",
      title: "Phones",
    },
    {
      image:
        "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mkgq3tua-637706785413146823.jpg",
      path: "/",
      title: "Laptops",
    },
    {
      image:
        "https://cdn.cimri.io/image/1000x1000/applewatchseriesmmakllsaat_288427543.jpg",
      path: "/",
      title: "Watches",
    },
    {
      image:
        "https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817602.jpg?w=2000",
      path: "/",
      title: "Headphones",
    },
    {
      image:
        "https://www.lg.com/levant_en/images/air-conditioning-units/md07547825/gallery/D-1.jpg",
      path: "/",
      title: "Air conditioners",
    },
    {
      image:
        "https://www.westinghouse.com.au/remote.jpg.ashx?urlb64=aHR0cHM6Ly9yZXNvdXJjZS5lbGVjdHJvbHV4LmNvbS5hdS9wdWJsaWMvaW1hZ2UyL3Byb2R1Y3QvMTExNTQyLzQyMDcwL1dILVByb2R1Y3Rab29tL2ZyaWRnZXNfd2hlNjA2MHNiX2dhbGxlcnlfMS5wbmc&hmac=kCoB3FIjpo4",
      path: "/",
      title: "Fridge",
    },
  ];

  return (
    <div className="w-full mt-8 ">
      <h1 className="text-black font-semibold text-2xl">Categories</h1>
      <div className="my-4 grid grid-cols-6 gap-4 max-lg:grid-cols-1">
        {data.slice(0, showAllCategories ? data.length : 6).map((item, key) => {
          return (
            <Card
              key={key}
              image={item.image}
              path={item.path}
              title={item.title}
            />
          );
        })}
      </div>
      <button
        className="w-full bg-white text-gray-800 font-semibold text-base py-1.5 rounded-md"
        onClick={toggleExpandCategories}
      >
        See {showAllCategories ? "less" : "all"}
      </button>
    </div>
  );
};

export default Categories;
