function App() {
  const handleContact = (event: any) => {};

  return (
    <>
      <div className="center-div">
        <h1 className="londrina-sketch-regular">JUJUPPS JUICEBOX</h1>
      </div>
      <div className="underline"></div>

      {/* <div className="flex-container">
        <div>Home</div>
        <div>About</div>
        <div>Projects</div>
        <div>Contact</div>
        <div>Shop</div>
      </div> */}

      <div className="flex-container">
        <div className="container">
          <img src="./assets/paint.svg"></img>
          <span className="dynapuff-regular">Projects</span>
        </div>
        <div className="container">
          <img src="./assets/about-me.svg"></img>
          <span className="dynapuff-regular">About Me</span>
        </div>
        <div className="container">
          <img src="./assets/stalls.svg"></img>
          <span className="dynapuff-regular">Stalls</span>
        </div>
      </div>
      <div className="underline"></div>
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
      <footer>
        Photo by <a href="/photographer/johnnyberg-50785">johnnyberg</a> on{' '}
        <a href="/">Freeimages.com</a>
      </footer>
    </>
  );
}

export default App;
