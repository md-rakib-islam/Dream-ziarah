"use client";
import { BASE_URL } from "@/constant/constants";
import useBlogs from "@/hooks/useBlogs";
import Image from "next/image";
import Link from "next/link";
// import blogsData from "../../../../data/blogs";

const RecentPost = () => {
  const blogPosts = useBlogs();
  blogPosts?.sort((a, b) => b.created_at - a.created_at);
  
  return (
    <>
      {blogPosts?.slice(0, 3).map((item) => (
        <div className="col-12" key={item.id}>
          <div className="d-flex items-center">
            <Image
              width={65}
              height={65}
              className="size-65 rounded-8"
              src={`${BASE_URL}/media/${item.img}`}
              alt="image"
            />

            <div className="ml-15">
              <h5 className="text-15 lh-15 fw-500">
                <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
              </h5>
              <div className="text-13 lh-1 mt-5">{item.date}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentPost;
