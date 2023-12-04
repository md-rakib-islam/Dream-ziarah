import Link from "next/link";

const UnderConstraction = () => {
  const data = {
    imageSrc: "/img/general/404.svg",
    title: "Something amazing is on the way!",
    description:
      "This page is currently under construction. Please check back soon for updates.",
    buttonLabel: "Go back to homepage",
    buttonUrl: "/",
  };

  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-lg-6">
            <img src={data.imageSrc} alt="image" />
          </div>
          <div className="col-lg-5">
            <div className="no-page">
              {/* <div className="no-page__title">
                40<span className="text-blue-1">4</span>
              </div> */}
              <h2 className="text-30 fw-600">{data.title}</h2>
              <div className="pr-30 mt-5">{data.description}</div>
              <div className="d-inline-block mt-40 md:mt-20">
                <Link
                  href={data.buttonUrl}
                  className="button -md -dark-1 bg-blue-1 text-white"
                >
                  {data.buttonLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderConstraction;
