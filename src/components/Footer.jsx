function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <p>
          © {new Date().getFullYear()} Abdul. All rights reserved.
        </p>

        <div>
          <a href="#home">Back to top ↑</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;