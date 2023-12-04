'use client';
import { Interweave } from "interweave";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
// import blogsData from "../../data/blogs";
import { BASE_URL } from "@/constant/constants";
import { setTotalItem } from "@/features/pagination/paginationSlice";
import useBlogs from "@/hooks/useBlogs";


const Blog2 = () => {

  const dispatch = useDispatch();
  const blogPosts = useBlogs();
  const {currentPage, PageSize} = useSelector(state => state.pagination);
  const {currentCategory, searchTerm} = useSelector(state => state.blog);

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;

  const blogItems = blogPosts?.filter((item) => item.category.toLowerCase() === currentCategory?.name.toLowerCase())?.filter((item) => {
    if(item?.title.toLowerCase().includes(searchTerm.toLowerCase()) || item?.details.toLowerCase().includes(searchTerm.toLowerCase())) return true;
  });
  dispatch(setTotalItem(blogItems.length))

  return (<>
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
  </>);
};

export default Blog2;
