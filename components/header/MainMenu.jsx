import Link from "next/link";

// import {
//   blogItems,
//   dashboardItems,
//   homeItems,
//   pageItems,
// } from "../../data/mainMenuData";
import {
  isActiveLink
} from "../../utils/linkActiveChecker";
// import CategoriesMegaMenu from "./CategoriesMegaMenu";

import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";


const MainMenu = ({ style = "" }) => {
  const pathname = usePathname();
  // const [isActiveParent, setIsActiveParent] = useState(false);
  const {menuItems} = useSelector(state => state.menus);
  const filteredMenus = menuItems?.filter((item) => {
    if(item.name ==="About" || item.name === "Contact" || item.name === "Tour") {
      return false;
    };
    return true;
  });
  filteredMenus.sort((a, b) => a.position - b.position);
  
  const modifiedMenuItems = filteredMenus?.map((item) => {
    if(item.name === "Ziarah"){
      return{
        ...item,
        routePath : "/",
        children : item?.children?.length > 0 ? item.children.map((subItem) => ({...subItem, routePath : `/${item.name.toLowerCase()}/${subItem.name.toLowerCase()}`})) : []
      }
    }
    return {
      ...item,
      routePath : `/${item?.name?.toLowerCase()}`,
      children : item?.children?.length > 0 ? item.children.map((subItem) => ({...subItem, routePath : `/${item.name.toLowerCase()}/${subItem.name.toLowerCase()}`})) : []
    }
  });

  // console.log(pathname.split('/')[1])
 const currentPathName = pathname.split('/')[1] === 'destinations' ? '/destinations' : pathname.split('/')[1] === 'blog-details' ? "/blog": pathname;

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
      {
        
        modifiedMenuItems.map((menu) => (
          <li
          key={menu.id}
          className={`${
            isActiveLink(menu?.routePath, currentPathName) ? "current" : ""
          } menu-item-has-children`}
        >
          {
            menu?.children?.length > 0 ? (<a href="#">
            <span className="mr-10">{menu.name}</span>
            <i className="icon icon-chevron-sm-down" />
          </a>) : (<Link href={menu?.routePath}>
              <span className="mr-10">{menu.name}</span>
              {/* <i className="icon icon-chevron-sm-down" /> */}
            </Link>)
          }
         {menu.children.length > 0 && ( <ul className="subnav">
            {menu.children.map((item) => (
              <li
                key={item.id}
                className={`${
                  isActiveLink(item.routePath, pathname) ? "current" : ""
                } menu-item-has-children`}
              >
                <Link href={item.routePath}>{item.name}</Link>
              </li>
            ))}
          </ul>)}
        </li>
        ))
      
    }

        {/* <li
          className={`${
            isActiveParentChaild(homeItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Home</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {homeItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}
        {/* End home page menu */}

        {/* <li className={isActiveParent ? "menu-item-has-children -has-mega-menu current":'menu-item-has-children -has-mega-menu'}>
          <a href="#">
            <span className="mr-10">Categories</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <div className="mega">
            <CategoriesMegaMenu setIsActiveParent={setIsActiveParent} />
          </div>
        </li> */}
        {/* End categories menu items */}

        {/* <li className={pathname === "/destinations" ? "current" : ""}>
          <Link href="/destinations">Destinations</Link>
        </li> */}
        {/* End Destinatinos single menu */}

        {/* <li
          className={`${
            isActiveParentChaild(blogItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Blog</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {blogItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}
        {/* End blogIems */}
{/* 
        <li
          className={`${
            isActiveParentChaild(pageItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Pages</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {pageItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}
        {/* End pages items */}

        {/* <li
          className={`${
            pathname.split('/')[1] == 'dashboard'  || pathname.split('/')[1] == 'vendor-dashboard' ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Dashboard</span>
            <i className="icon icon-chevron-sm-down" />
          
          </a>
          <ul className="subnav ">
            {dashboardItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}

        {/* <li className={pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Contact</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default MainMenu;
