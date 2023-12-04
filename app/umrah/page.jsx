import CallToActions from "@/components/common/CallToActions";
import dynamic from "next/dynamic";
// import DefaultHeader from "@/components/header/default-header";
// import DefaultFooter from "@/components/footer/default";
import UnderConstraction from "@/components/common/UnderConstraction";

export const metadata = {
  title: "Umrah Tours for a Spiritual Pilgrimage - Dream Ziarah",
  description: "Experience the essence of devotion with our Umrah tours at DreamZiarah.com. Tailored for spiritual seekers, our Umrah packages offer a sacred pilgrimage to the holiest destinations, ensuring a meaningful and transformative journey.",
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