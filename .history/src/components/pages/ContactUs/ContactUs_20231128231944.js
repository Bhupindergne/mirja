import React, { useRef, useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import "./style.css";
import { FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Lottie from "react-lottie-player";
import checkJson from "./check.json";
import sendKiteJson from "./sendKite.json";

function ContactUs() {
  const form = useRef();
  const [isSending, SetIsSending] = useState(false);
  const [showForm, SetShowForm] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(process.env.REACT_APP_EMAIL_SERVICE_ID);

  const sendEmail = (e) => {
    e.preventDefault();
    SetShowForm(false);
    SetIsSending(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID, //"service_z6l1m8d",
        process.env.REACT_APP_EMAIL_TEMPLATE_ID, // "template_0jd2dxo",
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY //"gLqlqUdspga0nhofs"
      )
      .then(
        (result) => {
          console.log(result.text);
          SetIsSending(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="wrapper">
                <div class="row no-gutters">
                  <div class="col-md-6 d-flex align-items-stretch">
                    <div
                      class={`contact-wrap w-100 p-md-5 p-4 py-5 ${
                        showForm ? "" : "container"
                      }`}
                    >
                      {showForm ? (
                        <>
                          <h3 class="mb-4">Write us</h3>
                          <form
                            ref={form}
                            method="POST"
                            id="contactForm"
                            name="contactForm"
                            class="contactForm"
                            onSubmit={sendEmail}
                          >
                            <div class="row">
                              <div class="col-md-12">
                                <div class="form-group">
                                  <input
                                    type="text"
                                    class="form-control"
                                    name="user_name"
                                    id="name"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                              <div class="col-md-12">
                                <div class="form-group">
                                  <input
                                    type="email"
                                    class="form-control"
                                    name="user_email"
                                    id="email"
                                    placeholder="Email"
                                  />
                                </div>
                              </div>
                              <div class="col-md-12">
                                <div class="form-group">
                                  <input
                                    type="text"
                                    class="form-control"
                                    name="user_phone"
                                    id="phone"
                                    placeholder="phone"
                                  />
                                </div>
                              </div>
                              <div class="col-md-12">
                                <div class="form-group">
                                  <input
                                    type="text"
                                    class="form-control"
                                    name="user_subject"
                                    id="subject"
                                    placeholder="Subject"
                                  />
                                </div>
                              </div>
                              <div class="col-md-12">
                                <div class="form-group">
                                  <textarea
                                    name="message"
                                    class="form-control"
                                    id="message"
                                    cols="30"
                                    rows="6"
                                    placeholder="Message"
                                  ></textarea>
                                </div>
                              </div>
                              <div class="col-md-12">
                                <div class="form-group">
                                  <input
                                    type="submit"
                                    value="Send Message"
                                    class="btn btn-primary"
                                  />
                                  <div class="submitting"></div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </>
                      ) : (
                        !isSending && (
                          <Lottie
                            loop={false}
                            animationData={checkJson}
                            play
                            style={{ width: 300, height: 300 }}
                          />
                        )
                      )}
                      {isSending && (
                        <Lottie
                          loop={sendKiteJson}
                          animationData={sendKiteJson}
                          play
                          style={{ width: 300, height: 300 }}
                        />
                      )}
                    </div>
                  </div>
                  <div class="col-md-6 d-flex align-items-stretch">
                    <div class="info-wrap w-100 p-md-5 p-4 py-5 img">
                      <h3>Contact information</h3>
                      <div class="dbox w-100 d-flex align-items-center">
                        <div class="icon d-flex align-items-center justify-content-center">
                          <FaMapMarkedAlt color="white" />
                        </div>
                        <div class="text pl-3">
                          <p>
                            <span>Address:</span> Roadaxle Truck Parts Limited
                            1050 Industrial RdAyr, ON N0B 1E0
                          </p>
                        </div>
                      </div>
                      <div class="dbox w-100 d-flex align-items-center">
                        <div class="icon d-flex align-items-center justify-content-center">
                          <FaPhone color="white" />
                        </div>
                        <div class="text pl-3">
                          <p>
                            <span>Phone:</span>{" "}
                            <a href="tel://1234567920">+1 519-621-7779</a>
                          </p>
                        </div>
                      </div>
                      <div class="dbox w-100 d-flex align-items-center">
                        <div class="icon d-flex align-items-center justify-content-center">
                          <MdEmail color="white" />
                        </div>
                        <div class="text pl-3">
                          <p>
                            <span>Email:</span>{" "}
                            <a href="mailto:info@roadaxletruckpartlimited.com">
                              info@roadaxletruckpartlimited.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactUs;
