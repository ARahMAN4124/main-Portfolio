import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iptnrvr",
        "template_l80mj8y",
        e.target,
        "user_mFhNVyxPtthlQ8Q4FYkN7"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result) {
            alert("Send Your Message");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <section className="Contact ">
      <div className="row  m-0 Contact-row">
        <div className="col-md-2 p-0  Contact-title d-flex align-items-center">
          <h2>CONTACT</h2>
        </div>
        <div className="col-md-10">
          <div className="contact-title">
            <h2 className="">GET IN TOUCH</h2>
            <hr />
          </div>
          <div className="pt-5 pl-5">
            <form className="contact-form" onSubmit={sendEmail}>
              <div className="form-div mb-3">
                <input type="hidden" name="to_name" value="Abdur Rahman" />
                <input
                  type="text"
                  className="form-control"
                  name="from_name"
                  placeholder="Name"
                  id=""
                />
              </div>
              <div className="form-div mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="reply_to"
                  placeholder="Email"
                  id=""
                />
              </div>
              <div className="form-div mb-3">
                <textarea
                  placeholder="Message"
                  name="message"
                  cols="30"
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
              <div className="form-div mb-3">
                <button type="submit" className="secondary-btn">
                  Send Message
                </button>
              </div>
            </form>
            {/* <form onSubmit={handleContactFrom}>
              <div className="form-div mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="user_name"
                  placeholder="Name"
                  id=""
                />
              </div>
              <div className="form-div mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="user_email"
                  placeholder="Email"
                  id=""
                />
              </div>
              <div className="form-div mb-3">
                <textarea
                  placeholder="Message"
                  name="message"
                  cols="30"
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
              <div className="form-div mb-3">
                <button type="submit" className="secondary-btn">
                  Send Message
                </button>
              </div>
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
