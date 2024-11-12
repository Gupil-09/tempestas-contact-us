import React from 'react';
import './ContactUs.css'; // Import the CSS file

const ContactUs = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div className="container-fluid">
            <div className="goit">
              <div id="logo1" style={{ backgroundImage: `url('/logo.png')` }}></div> {/* Ensure logo.png is in the public folder */}
            </div>
            <div id="me"></div>
            <div className="navbar-brand"></div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link" aria-current="page" href="index.html">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="about_us.html">About Us</a></li>
                <li className="nav-item"><a className="nav-link" href="map.html">Maps</a></li>
                <li className="nav-item"><a className="nav-link" href="notes.html">Notes</a></li>
                <li className="nav-item"><a className="nav-link" href="news.html">News</a></li>
                <li className="nav-item"><a className="nav-link active" href="shop.html">Shop</a></li>
              </ul>
              <div className="d-flex ms-lg-3">
                <button className="btn btn-outline-success me-2" type="button">Log In</button>
                <button className="btn btn-outline-success" type="button">Sign Up</button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-fill">
        <div className="contact-container">
          <h1>Contact Us</h1>
          <form action="send_message.php" method="post">
            <input type="text" name="name" className="form-control" placeholder="Your Name" required />
            <input type="email" name="email" className="form-control" placeholder="Your Email" required />
            <input type="tel" name="phone" className="form-control" placeholder="Your Phone Number" required />
            <textarea name="message" className="form-control" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer id="qaz">
        <div className="help">
          <dl className="bolder">COMPANY</dl>
          <dl><a className="ni0" href="#">Proven Superior Accuracy</a></dl>
          <dl><a className="ni0" href="#">About Tempestas</a></dl>
          <dl><a className="ni0" href="#">Digital Advertising</a></dl>
          <dl><a className="ni0" href="#">Careers</a></dl>
          <dl><a className="ni0" href="#">Press</a></dl>
          <dl><a className="ni0" href="#">Articles</a></dl>
          <dl><a className="ni0" href="#">Researchers</a></dl>
          <dl><a className="ni0" href="#">News and Notifications</a></dl>
        </div>
        <div className="help">
          <dl className="bolder">PRODUCT & SERVICES</dl>
          <dl><a className="ni0" href="#">For Business</a></dl>
          <dl><a className="ni0" href="#">For Partners</a></dl>
          <dl><a className="ni0" href="#">For Advertising</a></dl>
          <dl><a className="ni0" href="#">Tempestas APIs</a></dl>
          <dl><a className="ni0" href="#">Tempestas Connect</a></dl>
          <dl><a className="ni0" href="#">Real Shade</a></dl>
          <dl><a className="ni0" href="#">RealFeel Shade</a></dl>
        </div>
        <div className="help">
          <dl className="bolder">SUBSCRIPTION SERVICES</dl>
          <dl><a className="ni0" href="#">iPhone App</a></dl>
          <dl><a className="ni0" href="#">Android App</a></dl>
          <dl><a className="ni0" href="#">See all Apps & Downloads</a></dl>
          <dl><a className="ni0" href="#">More Info</a></dl>
          <dl><a className="ni0" href="#">Delivery</a></dl>
          <dl><a className="ni0" href="#">Travel</a></dl>
          <dl><a className="ni0" href="#">Terms of Use</a></dl>
        </div>
        <div className="help">
          <dl className="bolder">CONNECT WITH US</dl>
          <dl><a className="ni0" href="#">Instagram</a></dl>
          <dl><a className="ni0" href="#">Facebook</a></dl>
          <dl><a className="ni0" href="#">YouTube</a></dl>
          <dl><a className="ni0" href="#">Twitter</a></dl>
          <dl><a className="ni0" href="#">Telegram</a></dl>
          <dl><a className="ni0" href="#">LinkedIn</a></dl>
          <dl><a className="ni0" href="#">Threads</a></dl>
          <dl><a className="ni0" href="#">Website</a></dl>
          <dl><a className="ni0" href="#">Reddit</a></dl>
        </div>
      </footer>

      <footer id="jin">
        <a className="ki" href="#">Web Accessibility</a>
        <a className="ki" href="#">Privacy Statement</a>
        <a className="ki" href="#">Terms of Use</a>
        <a className="ki" href="contact_us.html">Contact Us</a>
        <p style={{ marginTop: '10px' }}>Made with &hearts; by Tempestas's Weather Forecasting Website</p>
        <p>&#169; Tempestas 2024. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
