"use client";

import DefaultFooter from "@/components/footer/default";
import Header3 from "@/components/header/header-3";
import Aos from "aos";
import "aos/dist/aos.css";
// import Script from 'next/script';
import { useEffect } from "react";
import { Provider } from "react-redux";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SrollTop from "../components/common/ScrollTop";
import { store } from "../store/store";
import "../styles/index.scss";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


export default function RootLayout({ children }) {

  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);


 
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body>
        <main>
          <Provider store={store}>
          <Header3 />
            {children}
            <DefaultFooter/>
            <SrollTop />
          </Provider>
        </main>   
        {/* <Script type="text/javascript" src="https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=d894d0d4-5eab-4e15-821d-6770f0186810" async={true}/>
        <Script type="text/javascript" src="https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=aa4c5059-8d0b-43dc-8bd3-bac143537416" async={true}/> */}
      </body>
    </html>
  );
}

 
