// import AppButton from "./AppButton";
"use client";
import { useCreateNewsLetterJustEmailMutation } from "@/features/newsLetter/newsLetterSlice";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";

import "react-toastify/dist/ReactToastify.css";
import { useGetLogoUrlQuery } from "@/features/site-setting/siteSettingApi";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  const [email, setEmail] = useState("");
  const [createNewsLetterJustEmail, { isLoading, isSuccess }] =
    useCreateNewsLetterJustEmailMutation();
  const { isLoading: pageLoading } = useGetLogoUrlQuery(null);

  const handleSubmit = async () => {
    try {
      const res = await createNewsLetterJustEmail({ email });
      console.log(res?.error?.data?.email[0]);
      if (res.data) {
        // alert("subcription added! thank you");
        toast.success(
          "Your subscription confirms your seat on a journey designed for Muslim travelers.",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
        setEmail("");
      }
      if (res?.error) {
        // alert("subcription added! thank you");
        toast.error(res?.error?.data?.email[0], {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (err) {
      toast.error("Something went wrong!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <footer className="footer -type-1">
      {!pageLoading && (
        <div className="container">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <div className="pt-60 pb-60">
            <div className="row y-gap-10">
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="d-flex items-center">
                  <Link href="/" className="header-logo mr-20">
                    {/* {
                    isLoading ? (<Loading/>) : (<Image style={{width : "60px", height:"60px"}} src={logoUrl} width={128} height={128} alt="logo"/>)
                  } */}

                    <Image
                      unoptimized
                      quality={100}
                      style={{ width: "80px", height: "80px" }}
                      src="/img/logo_loading.webp"
                      width={128}
                      height={128}
                      alt="Hajj, Umrah and Ziarah"
                    />
                  </Link>
                  {/* End logo */}
                </div>
                <div className={"text-14 mt-0 w-100 text-start"}>
                  Welcome to Dream Ziarah, your trusted partner for spiritual
                  journeys. We specialize in making your pilgrimage comfortable
                  and meaningful. Whether it's Ziarah, Hajj, or Umrah, we're
                  here to simplify your experience. Our legacy is built on
                  excellence, ensuring every detail is taken care of for a
                  hassle-free journey.
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <h5 className="text-16 fw-600 mb-10 w-100">Contact Us</h5>
                <ContactInfo />
              </div>
              {/* End col */}

              <FooterContent />
              {/* End footer menu content */}

              <div className="col-xl-3 col-lg-3 col-sm-6 ">
                {/* <h5 className="text-16 fw-600 mb-30">Mobile</h5> */}
                <h5 className="text-16 fw-600 mb-10 w-100">
                  Sign up to our newsletter
                </h5>
                {/* <AppButton /> */}
                <div className="single-field w-100 d-flex flex-column y-gap-20 w-100">
                  <div>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                      name="email"
                      className="border border-secondary h-50"
                      type="email"
                      placeholder="Your Email"
                    />
                  </div>
                  {/* End email input */}

                  <div>
                    <button
                      disabled={!email || isLoading}
                      onClick={handleSubmit}
                      className="button -md h-50 bg-blue-1 w-100 text-white"
                    >
                      Subscribe
                    </button>
                  </div>
                  {/* End subscribe btn */}
                </div>
              </div>
            </div>
          </div>
          {/* End footer top */}

          <div className="py-20 border-top-light">
            <Copyright />
          </div>
          {/* End footer-copyright */}
        </div>
      )}
      {/* End container */}
    </footer>
  );
};

export default index;
