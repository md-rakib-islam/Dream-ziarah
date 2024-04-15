"use client";
import DefaultFooter from "@/components/footer/default";
import Header3 from "@/components/header/header-3";
import Aos from "aos";
import "aos/dist/aos.css";
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
        {/* old*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* end*/}

        <link rel="icon" href="./favicon.ico" />
      </head>
      <body>
        <main>
          <Provider store={store}>
            <Header3 />
            {children}
            <DefaultFooter />
            <SrollTop />
          </Provider>
        </main>
      </body>
    </html>
  );
}
