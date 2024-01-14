// import CallToActions from "@/components/common/CallToActions";
// import dynamic from "next/dynamic";
// import UnderConstraction from "@/components/common/UnderConstraction";

// export const metadata = {
//   title: "Hajj Packages: Pilgrimage of a Lifetime - Dream Ziarah",
//   description: "Embark on the sacred journey of Hajj with DreamZiarah.com. Our Hajj packages are designed to facilitate your pilgrimage, providing a seamless and spiritually enriching experience as you fulfill this sacred obligation.",
// };

// const index = () => {
//   return (
//     <>

//       <div className="header-margin"></div>


//       <UnderConstraction/>
     

//       <CallToActions />
  
//     </>
//   );
// };

// export default dynamic(() => Promise.resolve(index), { ssr: false });


import Hajj from "@/components/hajj";
import HajjHeading from "@/components/hajj/HajjHeading";
import Wrapper from "@/components/layout/Wrapper";


export const metadata = {
  title: "Hajj Packages: Pilgrimage of a Lifetime - Dream Ziarah",
  description: "Embark on the sacred journey of Hajj with DreamZiarah.com. Our Hajj packages are designed to facilitate your pilgrimage, providing a seamless and spiritually enriching experience as you fulfill this sacred obligation.",
};

export default function HajjPage() {
  
  return (
    <>
      <Wrapper>
        <Hajj>
          <HajjHeading/>
        </Hajj>
      </Wrapper>
    </>
  );
}