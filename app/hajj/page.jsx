import CallToActions from "@/components/common/CallToActions";
import dynamic from "next/dynamic";
// import DefaultHeader from "@/components/header/default-header";
// import DefaultFooter from "@/components/footer/default";
import UnderConstraction from "@/components/common/UnderConstraction";

export const metadata = {
  title: "Hajj Packages: Pilgrimage of a Lifetime - Dream Ziarah",
  description: "Embark on the sacred journey of Hajj with DreamZiarah.com. Our Hajj packages are designed to facilitate your pilgrimage, providing a seamless and spiritually enriching experience as you fulfill this sacred obligation.",
};

const index = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      {/* <DefaultHeader /> */}
      {/* End Header 1 */}

      <UnderConstraction/>
      {/* End 404 section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      {/* <DefaultFooter /> */}
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });