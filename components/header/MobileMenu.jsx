"use client";

import Image from "next/image";
import Link from "next/link";

import Loading from "@/app/loading";
import { BASE_URL } from "@/constant/constants";
import { useGetLogoUrlQuery } from "@/features/site-setting/siteSettingApi";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
} from "react-pro-sidebar";
import { useSelector } from "react-redux";
import {
  categorieMegaMenuItems
} from "../../data/mainMenuData";
import {
  isActiveLink,
} from "../../utils/linkActiveChecker";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";

const MobileMenu = () => {
  const pathname = usePathname();
  const router = useRouter()
  const {menuItems} = useSelector(state => state.menus);

  const [isActiveParent, setIsActiveParent] = useState(false)
  const [isActiveNestedParentTwo, setisActiveNestedParentTwo] = useState(false)
  const [isActiveNestedParent, setisActiveNestedParent] = useState(false)

  const {data, isSuccess, isLoading} = useGetLogoUrlQuery(null);
  
  const filteredMenus = menuItems?.filter((item) => {
    if(item.name ==="About" || item.name === "Contact") {
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
  let logoUrl = "";
 if(isSuccess){
  // console.log(data);
  logoUrl = `${BASE_URL}/${data?.general_settings[0].favicon}`
 }

 const currentPathName = pathname.split('/')[1] === 'destinations' ? '/destinations' : pathname.split('/')[1] === 'blog-details' ? "/blog": pathname;


   useEffect(() => {

    categorieMegaMenuItems.map((megaMenu=>{
    megaMenu?.menuCol?.map((megaCol=>{
      megaCol?.menuItems?.map((item=>{   
        item?.menuList?.map((list)=>{
          if (list.routePath?.split('/')[1] == pathname.split('/')[1]) {
            setIsActiveParent(true)
            setisActiveNestedParentTwo(item?.title)
            setisActiveNestedParent(megaMenu?.id)           
          }        
        })
      }))
    }))
  }))


   
 }, [])


  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href="/">
          {/* <img src="/img/general/logo-dark.svg" alt="brand" /> */}
          {
                    isLoading ? (<Loading/>) : (<Image style={{width : "60px", height:"60px"}} src={logoUrl} width={128} height={128} alt="logo"/>)
                  }
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

    
        <Sidebar width="400" backgroundColor="#fff">

          <Menu>
            {
              modifiedMenuItems?.map((menu) => {
                if(menu?.children.length === 0){
                  return (<MenuItem
                    onClick={()=>router.push(menu?.routePath)}
                    className={
                     pathname === menu?.routePath
                       ? "menu-active-link"
                       : ""
                   }
                     
                   >
                     {menu.name}
                   </MenuItem>)
                }else{
                  return (<SubMenu label={menu?.name} className={ menu?.children?.some((item=>item.routePath?.split('/')[1] == currentPathName.split("/")[1])) ? "menu-active-link":''}>
                  {menu?.children?.map((item, i) => (
                    <MenuItem
                      key={i}
                      onClick={()=>router.push(item.routePath)}
                      className={
                        isActiveLink(item.routePath, pathname)
                          ? "menu-active-link"
                          : "inactive-menu"
                      }
                     
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </SubMenu>)
                }
              })
            }
            {/* <SubMenu label="Home" className={ homeItems.some((item=>item.routePath?.split('/')[1] == pathname.split('/')[1])) ? "menu-active-link":''}>
              {homeItems.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={()=>router.push(item.routePath)}
                  className={
                    isActiveLink(item.routePath, pathname)
                      ? "menu-active-link"
                      : "inactive-menu"
                  }
                 
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu> */}
            {/* End  All Home Menu */}

            {/* <SubMenu label="Categories" className={isActiveParent ? 'menu-active-link':'' }>
              {categorieMobileItems.map((item) => (
                <SubMenu label={item.title} key={item.id} className={isActiveNestedParent == item.id ? 'menu-active-link':'inactive-menu'}>
                  {item.menuItems.map((single) => (
                    <SubMenu label={single.title} key={single.id}  className={isActiveNestedParentTwo == single.title ? 'menu-active-link':'inactive-menu'} >
                      {single.menuList.map((menu, i) => (
                        <MenuItem
                          key={i}
                          onClick={()=>router.push(menu.routePath)}
                          className={
                            isActiveLink(menu.routePath, pathname)
                              ? "menu-active-link"
                              : "inactive-menu"
                          }
                        >
                          {menu.name}
                        </MenuItem>
                      ))}
                    </SubMenu>
                  ))}
                </SubMenu>
              ))}
            </SubMenu> */}
            {/* End  All Categories Menu */}

            {/* <MenuItem
             onClick={()=>router.push("/destinations")}
             className={
              pathname === "/destinations"
                ? "menu-active-link"
                : ""
            }
              
            >
              Desitinations
            </MenuItem> */}
            {/* End  Desitinations Menu */}

            {/* <SubMenu label="Blog" className={ blogItems.some((item=>item.routePath?.split('/')[1] == pathname.split('/')[1])) ? "menu-active-link":''}>
              {blogItems.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={()=>router.push(item.routePath)}
                  className={
                    isActiveLink(item.routePath, pathname)
                      ? "menu-active-link"
                      : "inactive-menu"
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu> */}
            {/* End  All Blog Menu */}

            {/* <SubMenu label="Pages" className={ pageItems.some((item=>item.routePath?.split('/')[1] == pathname.split('/')[1])) ? "menu-active-link":''}>
              {pageItems.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={()=>router.push(item.routePath)}
                  className={
                    isActiveLink(item.routePath, pathname)
                      ? "menu-active-link"
                      : "inactive-menu"
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu> */}
            {/* End  All Pages Menu */}

            {/* <SubMenu label="Dashboard" className={ pathname.split('/')[1] == 'dashboard'  || pathname.split('/')[1] == 'vendor-dashboard' ? "menu-active-link":''}>
              {dashboardItems.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={()=>router.push(item.routePath)}
                  className={
                    isActiveLink(item.routePath, pathname)
                      ? "menu-active-link"
                      : "inactive-menu"
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu> */}
            {/* End  All Dashboard Menu */}

            <MenuItem
             onClick={()=>router.push("/contact")}
             className={
              pathname === "/contact" ? "menu-active-link" : ""
            }
             
            >
              Contact
            </MenuItem>
            {/* End Contact  Menu */}
          </Menu>
        </Sidebar>



      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
        <div className="mt-20">
          <Link
            className=" button -dark-1 px-30 fw-400 text-14 bg-blue-1 h-50 text-white"
            href="/login"
          >
            Become An Expert
          </Link>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};


export default MobileMenu;
