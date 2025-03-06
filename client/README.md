# FLiiTS

FLiiTS is an innovative car-sharing platform designed to provide users with a convenient, flexible, and reliable way to access vehicles for rental, taxi services, and more. Our mission is to deliver seamless, on-demand transportation services, empowering users to find and share cars whenever they need them.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Car Rentals**: Rent cars for short or long durations, with flexible pickup and drop-off options.
- **FLiiTS Taxi**: Book rides with our taxi service, offering an alternative to traditional cabs.
- **Car Sharing**: Share your vehicle with others when you're not using it and earn passive income.
- **User-Friendly Interface**: A responsive web application optimized for both desktop and mobile devices.
- **Real-Time Availability**: Search for cars based on location, time, and date to ensure timely availability.
- **Secure Payments**: Process transactions securely with integrated payment options, ensuring a smooth booking experience.

## Installation

To set up FLiiTS locally for development, follow these instructions:

### 1. Clone the repository

```bash
git clone https://github.com/Kasy256/fliits.git
```

### 2. Navigate into the project directory

```bash
cd fliits
```

### 3. Install dependencies

For the **frontend**:

```bash
npm install
```

For the **backend**:

Navigate to the `Backend` folder, then install dependencies:

```bash
cd Backend
npm install
```

### 4. Set up MongoDB locally

To run FLiiTS with a local MongoDB server, follow these steps:

#### Option 1: Install MongoDB locally (if not installed already)

- **For Windows**: Follow the [MongoDB installation guide for Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/).
- **For macOS**: Use Homebrew:
  ```bash
  brew tap mongodb/brew
  brew install mongodb-community@5.0
  ```
- **For Linux**: Follow the [MongoDB installation guide for Linux](https://docs.mongodb.com/manual/installation/).

#### Option 2: Start the MongoDB service

After installing MongoDB, start the service:

- **Windows**: MongoDB should start automatically; if not, you can start it using:
  ```bash
  net start MongoDB
  ```
- **macOS / Linux**:
  ```bash
  brew services start mongodb/brew/mongodb-community
  ```

Alternatively, you can start MongoDB manually:
```bash
mongod
```

By default, MongoDB runs on `mongodb://localhost:27017`.

### 5. Start the development server

For the **frontend**:

```bash
npm run dev
```

For the **backend**:

```bash
node server.js
```

### 6. Access the local server

Once both servers are running, open your browser and go to [http://localhost:5173](http://localhost:5173) to see the app in action. The backend API will typically run on [http://localhost:5000](http://localhost:5000).

## Usage
Access the site at [fliits.firebaseapp.com](https://fliits.firebaseapp.com/)
1. **Sign Up / Log In**: Create an account or log in to access FLiiTS features.
2. **Search for Cars**: Use the search functionality to filter available cars by location, time, and availability.
3. **Book a Vehicle**: Choose your desired car and book it for a specified period.
4. **Manage Bookings**: View and manage your past and upcoming bookings through your account dashboard.

## Technologies

FLiiTS is built using the following technologies:

- **Frontend**: React.js, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Deployment**: AWS

## Contributing

We welcome contributions from the community to make FLiiTS better. If you'd like to contribute, please follow the steps below:

1. **Fork the repository** to your own GitHub account.
2. **Clone the forked repository** to your local machine:
   ```bash
   git clone https://github.com/YOUR_USERNAME/fliits.git
   ```
3. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
4. **Make your changes and commit them**:
   ```bash
   git commit -m "Describe your changes"
   ```
5. **Push your changes** to the remote branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
6. **Create a pull request** to submit your changes for review.

Please ensure that your code adheres to the project's style guide and that all tests pass before creating a pull request.

## License

FLiiTS is open-source software released under the [MIT License](LICENSE).

## Contact

For any inquiries, suggestions, or feedback, feel free to contact us:

- **Kasy Jonan**: [jonanrayan06@gmail.com](mailto:jonanrayan06@gmail.com)
- **GitHub**: [Kasy256](https://github.com/Kasy256)
