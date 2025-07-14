import "../styles/footer.css";

const Footer = () => (
  <footer className="footer">
    <p>
      &copy; {new Date().getFullYear()} Expense Tracker. All rights reserved.
    </p>
  </footer>
);

export default Footer;
