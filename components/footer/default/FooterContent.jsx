import Link from "next/link";
import footerDataContent from "../../../data/footerContent";

const FooterContent = () => {
  return (
    <>
      {footerDataContent.map((item) => (
        <div className="col-xl-2 col-lg-4 col-sm-6 " key={item.id}>
          <h5 className="text-16 fw-600 mb-10">{item.title}</h5>
          <div className="d-flex y-gap-0 flex-column">
            {item.menuList.map((menu, i) => (
              <Link href={menu.routerPath} key={i}>
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default FooterContent;
