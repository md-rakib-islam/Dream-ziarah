import Wrapper from "@/components/layout/Wrapper";
import MainHome from "../app/(homes)/home_3/page";

export const metadata = {
  title: "Home-1 || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

export default async function Home() {
  
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
