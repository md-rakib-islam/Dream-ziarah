import CallToActions from "@/components/common/CallToActions";
// import dynamic from "next/dynamic";
// import DefaultHeader from "@/components/header/default-header";
// import DefaultFooter from "@/components/footer/default";
import TermsConent from "@/components/common/TermsConent";

export const metadata = {
  title: "Terms & Conditions || DreamZiarah - Hajj, Umrah And Ziarah",
  description: "DreamZiarah - Hajj, Umrah And Ziarah",
};

const Terms = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      {/* <DefaultHeader /> */}
      {/* End Header 1 */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="tabs js-tabs">
            <TermsConent />
          </div>
        </div>
      </section>
      {/* End terms section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      {/* <DefaultFooter /> */}
      {/* End Call To Actions Section */}
    </>
  );
};

// export default dynamic(() => Promise.resolve(Terms), { ssr: false });
export default Terms;
