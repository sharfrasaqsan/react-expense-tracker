import "../styles/about.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About This App</h1>
      <p className="about-description">
        This Expense Tracker is a simple React application that helps you manage
        your personal finances. You can add, edit, and delete transactions, and
        view your income, expenses, and balance in real-time.
      </p>
      <p className="about-description">
        It's built using React, Context API, and JSON Server for simulating
        backend API. The app is fully responsive and user-friendly.
      </p>
      <p className="about-footer">Created by Sharfras — 2025</p>
    </div>
  );
};

export default About;
