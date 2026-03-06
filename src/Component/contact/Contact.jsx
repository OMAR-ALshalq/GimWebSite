import { useState } from "react";
import "./Contact.css";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ivcdjf7",
      "template_nv6yqig",
      form.current,
      "q1NS15pvkXyOQjQPb"
    );
    setName("");
    setEmail("");
    setMessage("");
    e.target.reset();
  };

  const isFormValid =
    name.trim() !== "" && email.trim() !== "" && message.trim() !== "";
  return (
    <div id="contact" className="Box">
      <div className="continer continerBoxcontact">
        <div className="BoxContact">
          <div className="TextContact">
            <h2>
              <span>Sweat now, shine later.</span>Your body is a reflection of
              your lifestyle choices.
            </h2>
          </div>
          <div className="ButtonContact">
            <button onClick={() => setShowForm(true)}>CONTACT</button>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="Overlay">
          <div className="FormBox">
            <form ref={form} onSubmit={sendEmail}>
              <h3>Contact Us</h3>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                rows={7}
                name="message"
                id="message"
                placeholder="Enter Your message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="FormActions">
                <button onClick={() => setShowForm(false)}>Close</button>
                {isFormValid && <button type="submit">Send</button>}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
