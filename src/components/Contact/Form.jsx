import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l83rqjp",
        "template_f865pr5",
        form.current,
        "X3elwwQ_hKiWKF9sk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="form-section" className="form-section">
      <div className="form-container">
        <form
          ref={form}
          className="--form-control --card --flex-center --dir-column"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
            className="w-full"
          />
          <input
            className="w-full"
            type="email"
            placeholder="Email"
            name="user_email"
            required
          />
          <input
            className="w-full"
            type="text"
            placeholder="Subject"
            name="subject"
            required
          />
          <textarea
            className="border w-full p-2 text-base"
            name="message"
            cols="30"
            rows="5"
            placeholder="Write your message here"
          ></textarea>
          <button type="submit" className="--btn --btn-primary text-lg">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
