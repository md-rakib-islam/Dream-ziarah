"use client";
import { useCreateNewsLetterJustEmailMutation } from "@/features/newsLetter/newsLetterSlice";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const CallToActions = () => {
  const [email, setEmail] = useState("");
  const [createNewsLetterJustEmail, {isLoading, isSuccess}] = useCreateNewsLetterJustEmailMutation();

  const handleSubmit = async() => {
    try{
      const res = await createNewsLetterJustEmail({email});
      console.log(res?.error?.data?.email[0]);
    if(res.data){
      // alert("subcription added! thank you");
      toast.success('Your subscription confirms your seat on a journey designed for Muslim travelers.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      setEmail("");
    }
    if(res?.error){
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
    }catch(err){
      toast.error('Something went wrong!', {
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
  }


  return (
    <section className="layout-pt-md layout-pb-md bg-dark-2">
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
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-auto">
            <div className="row y-gap-20  flex-wrap items-center">
              <div className="col-auto">
                <div className="icon-newsletter text-60 sm:text-40 text-white" />
              </div>
              <div className="col-auto">
                <h4 className="text-26 text-white fw-600">
                  Your Travel Journey Starts Here
                </h4>
                <div className="text-white">
                  Sign up and we`&apos;ll send the best deals to you
                </div>
              </div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="single-field -w-410 d-flex x-gap-10 y-gap-20">
              <div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  name="email"
                  className="bg-white h-60"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              {/* End email input */}

              <div>
                <button disabled={!email || isLoading} onClick={handleSubmit} className="button -md h-60 bg-blue-1 text-white">
                  Subscribe
                </button>
              </div>
              {/* End subscribe btn */}
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default CallToActions;
