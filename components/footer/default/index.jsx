// import AppButton from "./AppButton";
"use client";
import { useCreateNewsLetterMutation } from "@/features/newsLetter/newsLetterSlice";
import { useState } from "react";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";

const index = () => {
  const [email, setEmail] = useState("");
  const [createNewsLetter, {isLoading}] = useCreateNewsLetterMutation();

  const handleSubmit = async() => {
    const res = await createNewsLetter(JSON.stringify({email}));
    setEmail("");
    // console.log(res);
  }

  return (
    <footer className="footer -type-1">
      <div className="container">
        <div className="pt-60 pb-60">
          <div className="row y-gap-40 justify-between xl:justify-start">
            <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Contact Us</h5>
              <ContactInfo />
            </div>
            {/* End col */}

            <FooterContent />
            {/* End footer menu content */}

            <div className="col-xl-3 col-lg-4 col-sm-6">
              {/* <h5 className="text-16 fw-500 mb-30">Mobile</h5> */}
              <h5 className="text-16 fw-500 mb-30">Sign up to our newsletter</h5>
              {/* <AppButton /> */}
              <div className="single-field w-100 d-flex flex-column y-gap-20">
              <div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  name="email"
                  className="border border-secondary h-50"
                  type="text"
                  placeholder="Your Email"
                />
              </div>
              {/* End email input */}

              <div>
                <button disabled={!email || isLoading} onClick={handleSubmit} className="button -md h-50 bg-blue-1 w-100 text-white">
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
      {/* End container */}
    </footer>
  );
};

export default index;
