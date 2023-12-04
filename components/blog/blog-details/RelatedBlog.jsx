"use client";
import { BASE_URL } from "@/constant/constants";
import { useGetImagesByMenuIdQuery } from "@/features/image/imageApi";
import Image from "next/image";
import { useSelector } from "react-redux";
// import blogsData from "../../../data/blogs";

const RelatedBlog = ({relatedPosts}) => {
  const {menuItems} = useSelector(state => state.menus);
  const blogId = menuItems.find((item) => item.name === "Blog")?.id;
  const {isSuccess, data, isLoading} = useGetImagesByMenuIdQuery(blogId);
  
  let relatedBlogs = [];
  if(isSuccess){
    
      relatedBlogs = relatedPosts?.map((item) => ({
      id: item.id,
      img: data?.content_images[item.name],
      title: item.name,
      date: "Jan 06, 2023",
      delayAnimation: "100",
      details: item.value,
      tag: "art",
      tags: ["adventure_travel", "food_drink"],
    }))
  }
 
  return (
    <>
      {relatedBlogs?.map((item) => (
        <div className="col-lg-3 col-sm-6" key={item.id}>
          <a
            href={`/blog-details/${item.id}`}
            className="blogCard -type-2 d-block bg-white rounded-4 shadow-4"
          >
            <div className="blogCard__image">
              <div className="rounded-4">
                <Image
                  width={400}
                  height={300}
                  className="cover w-100 img-fluid"
                  src={`${BASE_URL}/media/${item.img}`}
                  alt="image"
                />
              </div>
            </div>
            <div className="px-20 py-20">
              <h4 className="text-dark-1 text-18 fw-500">{item.title}</h4>
              <div className="text-light-1 text-15 lh-14 mt-10">
                {item.date}
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default RelatedBlog;
