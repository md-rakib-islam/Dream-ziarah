import CallToActions from "@/components/common/CallToActions";
import dynamic from "next/dynamic";
// import DefaultHeader from "@/components/header/default-header";
// import DefaultFooter from "@/components/footer/default";
import NotFound from "@/components/common/NotFound";

export const metadata = {
  title: "404 || DreamZiarah - Hajj, Umrah And Ziarah",
  description: "DreamZiarah - Hajj, Umrah And Ziarah",
};

const index = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      {/* <DefaultHeader /> */}
      {/* End Header 1 */}

      <NotFound />
      {/* End 404 section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      {/* <DefaultFooter /> */}
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
