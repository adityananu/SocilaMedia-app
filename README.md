# Project Name

A simple social media application allowing users to sign up, post short messages, follow other users, and view a personalized feed.

## Technologies Used

- React
- Firebase (Authentication and Firestore for backend)
- Tailwind CSS
- UUID
- React Router DOM

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/your-repo.git
    ```

2. **Install dependencies**

    ```bash
    cd your-repo
    npm install
    ```

3. **Set up Firebase**

   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Set up Firebase Authentication and Firestore.
   - Add your Firebase configuration to the `src/firebase/firebase.js` file.

4. **Start the development server**

    ```bash
    npm start
    ```

    Visit [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Project Structure

- `public`: Static assets and HTML template
- `src`:
  - `components`: React components
    - `Feed.js`: Component for displaying user posts
    - `Users.js`: Component for listing users
    - `Profile.js`: Component for user profile, including posts, followers, and following
    - `Header.js`: Header component with navigation
  - `pages`: React components representing different pages
    - `Home.js`: Home page with main content
    - `Login.js`: Login page
    - `Signup.js`: Signup page
  - `context`: React context for user authentication
  - `firebase`: Firebase configuration and initialization
  - `utils`: Utility functions
  - `App.js`: Main application component
  - `index.js`: Entry point of the application

## Features

1. **User Authentication**
   - Users can sign up and log in to access the application.

2. **Posting**
   - Users can post short text messages similar to Twitter.

3. **Feed**
   - Users have a personalized feed showing posts from users they follow.

4. **User Profile**
   - Users have profiles displaying their posts, followers, and following.

5. **Follow/Unfollow**
   - Users can follow and unfollow other users.

6. **Logout**
   - Users can log out of the application.

## Deployment

The application is deployed and hosted on [Netlify](https://www.netlify.com/).

[Live Demo](https://your-live-demo-url.netlify.app/)

## Contributors

- Your Name

## License

This project is licensed under the [MIT License](LICENSE).
