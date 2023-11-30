"use client";
import { addCategory } from "@/features/blog/blogSlice";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Categories = () => {
  const dipatch = useDispatch();
  const catContent = [
    { id: 1, name: "Hajj", number: 0 },
    { id: 2, name: "Umrah", number: 0  },
    { id: 3, name: "Destinations", number: 0  },
    { id: 4, name: "Travel Tips", number: 0  },
    { id: 5, name: "Budget Travel", number: 0  },
    { id: 5, name: "Travel Planning", number: 0  },
    { id: 5, name: "Local Insights", number: 0  },
  ];
  const [currentCategory, setCurrnetCategory] = useState( { id: 1, name: "Hajj", number: "92" });
  return (
    <>
      {catContent.map((item) => (
        <Link
          href={`/blog?category=${item?.name}`}
          className="d-flex items-center justify-between text-dark-1"
          onClick={() => {setCurrnetCategory(item); dipatch(addCategory(item))}}
          key={item.id}
        >
          <span className={`text-15 ${currentCategory.name === item.name ? "text-primary": "text-dark-1"}`}>{item.name}</span>
          <span className="text-14 text-light-1">{item.number}</span>
        </Link>
      ))}
    </>
  );
};

export default Categories;
