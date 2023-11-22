'use client';
import { useGetAllContentQuery } from "@/features/content/contentApi";
import { useGetImagesByMenuIdQuery } from "@/features/image/imageApi";
import { Interweave } from "interweave";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
// import blogsData from "../../data/blogs";
import Loading from "@/app/loading";
import { BASE_URL } from "@/constant/constants";
import { setTotalItem } from "@/features/pagination/paginationSlice";


const Blog2 = () => {
  const dispatch = useDispatch();
  const {menuItems} = useSelector(state => state.menus);
  const {currentPage, PageSize} = useSelector(state => state.pagination);
  const blogId = menuItems.find((item) => item.name === "Blog")?.id;
  const {isSuccess, data, isLoading} = useGetImagesByMenuIdQuery(blogId);
  const {isSuccess: isContentSuccess, data : contentItems, isLoading: isBlogContentLoading} = useGetAllContentQuery(blogId)

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
 
  let blogItems = [];
  if(isContentSuccess && isSuccess){
    blogItems = contentItems.map((item) => ( {
      id: item.id,
      img: data.content_images[item.name],
      title: item.name,
      date: "Jan 06, 2023",
      delayAnimation: "100",
      details: item.value,
      tag: "art",
      tags: ["adventure_travel", "food_drink"],
    }))

    dispatch(setTotalItem(blogItems.length))
  }
  
 
  return (
    isLoading && isBlogContentLoading ? (<div style={{width:"700px", display:"flex", justifyContent:"center"}}><Loading/></div>) :(<>
      {blogItems.slice(firstPageIndex, lastPageIndex).map((item) => (
        <Link
          href={`/blog-details/${item.id}`}
          className="blogCard -type-1 col-12"
          key={item.id}
        >
          <div className="row y-gap-15 items-center md:justify-center md:text-center">
            <div className="col-lg-4">
              <div className="blogCard__image rounded-4">
                <Image
                  width={250}
                  height={250}
                  className="cover w-100 img-fluid"
                  src={`${BASE_URL}/media/${item.img}`}
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="text-15 text-light-1">{item.date}</div>
              <h3 className="text-22 text-dark-1 mt-10 md:mt-5">
                {item.title}
              </h3>
              <div style={{
                maxHeight: '2.6em', 
                lineHeight: '1.3em', // Set the line height for readability
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2, // Limit the content to two lines
                }} className="text-15 lh-16 text-light-1 mt-10 md:mt-5">
              <Interweave
                allowAttributes
                allowElements
                disableLineBreaks={false}
                content={item.details}
              />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>) 
  );
};

export default Blog2;
