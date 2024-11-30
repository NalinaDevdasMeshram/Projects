import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
const Contacts = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_option">
          <article className="contact_options">
            <MdOutlineEmail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>meshramnalu16@gmail.com</h5>
            <a href="mailto:dummyegator@gmail.com" target="_blank">
              Send a Mail
            </a>
          </article>

          <article className="contact_options">
            <FaWhatsapp className="contact_option_icon" />
            <h4>WhatsApp</h4>
            <h5>+91 7821023155</h5>
            <a
              href="https://api.whatsapp.com/send?phone/+91 7821023155"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/********Form*** */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
