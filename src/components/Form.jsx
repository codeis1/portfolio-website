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
    <section id="form-section" className="form-section">
      <div>
        <div className="form-container">
          <h2 className="--text-center text-lg font-semibold">Contact Me</h2>
          <form
            ref={form}
            className="--form-control --card --flex-center --dir-column pt-4"
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
              className="border w-full"
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
    </section>
  );
};

export default Form;
