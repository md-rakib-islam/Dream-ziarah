// import Wrapper from "@/components/layout/Wrapper";
import dynamic from 'next/dynamic';
// import MainHome from "../app/(homes)/home_3/page";
// import MainHome from "@/components/home/MainHome";

const MainHome = dynamic(() => import("@/components/home/MainHome"));
const Wrapper = dynamic(() => import("@/components/layout/Wrapper"));

export const metadata = {
  title: "Ziarah Packages for Spiritual Exploration - Dream Ziarah",
  description:  "Embark on a soul-stirring Ziarah journey with DreamZiarah.com. Discover sacred destinations and enrich your spiritual experience with our meticulously curated Ziarah packages.",
};

export default function Home() {
  
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
