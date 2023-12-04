
'use client'

import { useCreateNewsLetterMutation } from "@/features/newsLetter/newsLetterSlice";
import { useState } from "react";

const initialState = {
  full_name : "",
  email : "",
  subject : "",
  message : "",
}

const ContactForm = () => {
  const [formState, setFormState] = useState({...initialState});
  const [createNewsLetter, {isLoading, isSuccess}] = useCreateNewsLetterMutation();
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    const res = await createNewsLetter(formState);
    if(res.data){
      alert("thanks for contact with us!");
      setFormState(initialState);
    }
    
    
  };

  const handleChange = (event) => {
    setFormState((prev) => ({
      ...prev,
      [event.target.name] : event.target.value
    }));

  }

  return (
    <form className="row y-gap-20 pt-20" onSubmit={handleSubmit}>
      <div className="col-12">
        <div className="form-input">
          <input onChange={handleChange} value={formState.fullName} type="text" name="full_name" id="name" required />
          <label htmlFor="name" className="lh-1 text-16 text-light-1">
            Full Name
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <input onChange={handleChange} value={formState.email} type="email" name="email" id="email" required />
          <label htmlFor="email" className="lh-1 text-16 text-light-1">
            Email
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <input onChange={handleChange} value={formState.subject} type="text" name="subject" id="subject" required />
          <label htmlFor="subject" className="lh-1 text-16 text-light-1">
            Subject
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <textarea onChange={handleChange} value={formState.message} id="message" name="message" required rows="4"></textarea>
          <label htmlFor="message" className="lh-1 text-16 text-light-1">
            Your Message
          </label>
        </div>
      </div>
      <div className="col-auto">
        <button
          type="submit"
          className="button px-24 h-50 -dark-1 bg-blue-1 text-white"
        >
          Send Message <div className="icon-arrow-top-right ml-15"></div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
