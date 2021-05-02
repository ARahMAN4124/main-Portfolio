import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleContactFrom = (event) => {
    event.preventDefault();
    const clientMessage = {
      Name: event.target.name.value,
      Phone: event.target.phone.value,
      Message: event.target.message.value,
    };
    console.log(clientMessage);
  };
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
            <form onSubmit={handleContactFrom}>
              <div className="form-div mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  id=""
                />
              </div>
              <div className="form-div mb-3">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  placeholder="Phone"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
