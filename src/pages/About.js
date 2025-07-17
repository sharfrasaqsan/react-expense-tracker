import "../styles/about.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About This App</h1>

      <p className="about-description">
        This Expense Tracker is a full-featured web application designed to help
        you manage your personal finances effectively. You can add, edit, and
        delete transactions, and track your income and expenses with real-time
        balance updates.
      </p>

      <p className="about-description">
        The app is built using <strong>React</strong>,{" "}
        <strong>Context API</strong> for state management, and{" "}
        <strong>Firebase</strong> for authentication and cloud database storage.
        It also features CSV export, charts, filtering, and search
        functionalities.
      </p>

      <p className="about-description">
        The app is responsive, simple to use, and beginner-friendly — perfect
        for learning modern React development and Firebase integration.
      </p>

      <p className="about-footer">
        Designed & built by <strong>Sharfras</strong> — 2025
      </p>
    </div>
  );
};

export default About;
