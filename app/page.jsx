import Wrapper from "@/components/layout/Wrapper";
import MainHome from "../app/(homes)/home_3/page";

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
