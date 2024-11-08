import './styles/ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-section">
      <h1 className="contact-heading">&bull; Get in Touch &bull;</h1>

      <form action="#" method="post" id="contact_form">
        <div className="name">
          <input
            type="text"
            placeholder="My name is"
            name="name"
            id="name_input"
            required
          ></input>
        </div>
        <div className="email">
          <input
            type="email"
            placeholder="My e-mail is"
            name="email"
            id="email_input"
            required
          ></input>
        </div>
        <div className="telephone">
          <input
            type="text"
            placeholder="My number is"
            name="telephone"
            id="telephone_input"
            required
          ></input>
        </div>
        <div className="subject">
          <select name="subject" id="subject_input" required>
            <option disabled hidden selected>
              Subject line
            </option>
            <option>I'd like to start a project</option>
            <option>I'd like to ask a question</option>
            <option>I'd like to make a proposal</option>
          </select>
        </div>
        <div className="message">
          <textarea
            name="message"
            placeholder="I'd like to chat about"
            id="message_input"
            required
          ></textarea>
        </div>
        <div className="submit">
          <input type="submit" value="Send Message" id="form_button" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
