# React Expense Tracker

[![Live Demo](https://img.icons8.com/?size=100&id=UyjPlooIqDBC&format=png&color=000000)](https://sharfrasaqsan.vercel.app/) 

This is a simple and effective expense tracker application built with React, designed to help you manage your personal finances by tracking income and expenses. It utilizes Firebase for authentication and data storage, providing a secure and reliable experience.

## Features and Functionality

*   **Dashboard:** Provides an overview of your balance, income, and expenses.
*   **Transaction Management:**
    *   Add new income and expense transactions with descriptions and amounts.
    *   Edit existing transactions to correct or update information.
    *   Delete transactions to remove them from the record.
*   **Filtering:** Filter transactions by type (income, expense, or all).  The filter functionality is implemented in `src/components/Filter.js`.
*   **Searching:** Search transactions by description. Implemented in `src/components/Search.js`.
*   **Balance Summary:** Visual representation of your financial status, including total balance, total income, and total expenses.  The balance summary is implemented in `src/components/Balance.js`.
*   **Chart Summary:** Display income breakdown using a pie chart. Implemented in `src/components/ChatSummary.js`.
*   **CSV Export:** Export transaction data to a CSV file for further analysis or record-keeping. The export functionality is implemented in `src/components/ExportCSV.js`.
*   **Authentication:** Secure user authentication with Firebase.  Users can register, login, and logout.
*   **Private Routes:**  Authenticated users only can access the dashboard, add and edit transactions.
*   **Responsive Design:** The app is designed to be responsive and usable on various devices.

## Technology Stack

*   **React:** A JavaScript library for building user interfaces.
*   **React Router DOM:** For handling navigation between different pages.
*   **Firebase:** For authentication and cloud database (Firestore).
*   **Date-fns:** To format the date.
*   **Recharts:** To display charts.
*   **Context API:** For global state management.
*   **CSS:** For styling.
*   **HTML:** For structuring the app content.

## Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js:**  (version 14 or higher is recommended).
*   **npm** (Node Package Manager) or **yarn**.

## Installation Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/sharfrasaqsan/react-expense-tracker.git
    cd react-expense-tracker
    ```

2.  **Install dependencies:**

    ```bash
    npm install  # or yarn install
    ```

3.  **Firebase Configuration:**

    *   Create a new project in the [Firebase Console](https://console.firebase.google.com/).
    *   Configure a web app within your Firebase project.
    *   Obtain your Firebase configuration object.
    *   Replace the placeholder values in `src/firebase/firebase.js` with your actual Firebase configuration:

        ```javascript
        // src/firebase/firebase.js
        import { initializeApp } from "firebase/app";
        import { getFirestore } from "firebase/firestore";
        import { getAuth } from "firebase/auth";

        const firebaseConfig = {
          apiKey: "YOUR_API_KEY",
          authDomain: "YOUR_AUTH_DOMAIN",
          projectId: "YOUR_PROJECT_ID",
          storageBucket: "YOUR_STORAGE_BUCKET",
          messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
          appId: "YOUR_APP_ID",
          measurementId: "YOUR_MEASUREMENT_ID"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        // Export initialize Firebase
        export const auth = getAuth(app);
        export const db = getFirestore(app);
        ```

4.  **Environment Variables:**

    *   This project requires no explicit `.env` file configurations, as Firebase keys are directly integrated.
    *   It is crucial to properly configure the Firebase settings directly within the `src/firebase/firebase.js` file.

## Usage Guide

1.  **Start the development server:**

    ```bash
    npm start  # or yarn start
    ```

2.  **Open the application in your browser:**

    Navigate to `http://localhost:3000` (or the port specified by your development environment).

3.  **Register or Login:**

    *   If you are a new user, click on the "Register" link in the navigation bar and provide your username, email, and password.
    *   If you already have an account, click on the "Login" link and enter your credentials.

4.  **Manage Transactions:**

    *   Once logged in, you will be redirected to the dashboard.
    *   To add a new transaction, click on "Add Transaction" in the navigation bar.
    *   Fill in the transaction description, select the transaction type (income or expense), and enter the amount.
    *   Click the "Add" button to save the transaction.
    *   To edit an existing transaction, click the edit icon (<FaRegEdit/>) in the Transaction History table.  This will navigate you to the `/edit/:id` route, handled by the `EditTransaction` component in `src/pages/EditTransaction.js`.
    *   To delete a transaction, click the delete icon (<RiDeleteBin6Line/>) in the Transaction History table.

5.  **Filter and Search Transactions:**

    *   Use the filter dropdown in `src/components/Filter.js` to view all transactions, income transactions, or expense transactions.
    *   Use the search bar in `src/components/Search.js` to find transactions by description.

6.  **Export Transactions:**

    *   Click the "Export CSV" button to download your transaction data as a CSV file.

7.  **Logout:**

    *   Click the "Logout" button to sign out of your account.

## API Documentation

This project utilizes Firebase Firestore as its database. There's no separate backend API built from scratch. All data fetching and manipulation occur directly between the React application and Firebase.

*   **Firebase Firestore:**  Data is stored and retrieved from the "transactions" collection. Each document in the collection represents a single transaction and includes fields like `datetime`, `text`, `amount`, `type`, and `uid` (user ID).  Refer to the `src/context/DataContext.js` file for how Firestore operations are handled, especially the `useEffect` hook.
*   **Firebase Authentication:** Used for user registration, login, and logout.  Refer to `src/context/AuthContext.js`, `src/pages/Login.js`, and `src/pages/Register.js` for implementation details.

## Contributing Guidelines

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, descriptive messages.
4.  Test your changes thoroughly.
5.  Submit a pull request.

## License Information

No license specified. All rights reserved.

## Contact/Support Information

For questions or support, please contact [sharfrasaqsan](https://github.com/sharfrasaqsan).