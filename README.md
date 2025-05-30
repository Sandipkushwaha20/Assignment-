# PinspireClone

A modern Pinterest-like application built with React, featuring a responsive design and interactive user interface.

## 🚀 Features

- **User Authentication**
  - Sign up and login functionality
  - Social media authentication
  - User profile management

- **Pin Management**
  - Create, edit, and delete pins
  - Upload images with descriptions
  - Pin categorization and tagging
  - Save pins to boards

- **Board Organization**
  - Create multiple boards
  - Organize pins into boards
  - Public and private board options
  - Collaborative boards

- **Interactive Features**
  - Like and comment on pins
  - Follow other users
  - Search functionality
  - Infinite scroll
  - Responsive grid layout

## 🏗️ Architecture

### Frontend
- React.js for UI components
- Redux for state management
- React Router for navigation
- Styled-components for styling
- Axios for API requests

### Backend
- Node.js with Express
- MongoDB for database
- JWT for authentication
- AWS S3 for image storage
- RESTful API architecture

### Project Structure
```
pinterest-clone/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   └── src/
│       ├── components/    # Reusable components
│       ├── pages/        # Page components
│       ├── redux/        # State management
│       ├── services/     # API services
│       └── utils/        # Utility functions
│
├── server/                # Backend Node.js application
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   └── middleware/      # Custom middleware
│
└── README.md
```

## 🛠️ Tech Stack

- **Frontend**
  - React.js
  - Redux
  - React Router
  - Styled-components
  - Axios
  - Material-UI

- **Backend**
  - Node.js
  - Express.js
  - MongoDB
  - JWT
  - AWS S3
  - Mongoose

- **Development Tools**
  - Git
  - VS Code
  - Postman
  - MongoDB Compass

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- AWS Account (for S3)
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/pinterest-clone.git
cd pinterest-clone
```

2. Install dependencies
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Environment Setup
```bash
# Server (.env)
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
AWS_ACCESS_KEY=your_aws_access_key
AWS_SECRET_KEY=your_aws_secret_key
AWS_BUCKET_NAME=your_bucket_name

# Client (.env)
REACT_APP_API_URL=http://localhost:5000
```

4. Start the application
```bash
# Start server
cd server
npm run dev

# Start client
cd ../client
npm start
```

## 📝 API Documentation

### Authentication Endpoints
- POST /api/auth/register - Register new user
- POST /api/auth/login - User login
- GET /api/auth/profile - Get user profile

### Pin Endpoints
- GET /api/pins - Get all pins
- POST /api/pins - Create new pin
- GET /api/pins/:id - Get pin by ID
- PUT /api/pins/:id - Update pin
- DELETE /api/pins/:id - Delete pin

### Board Endpoints
- GET /api/boards - Get user boards
- POST /api/boards - Create new board
- GET /api/boards/:id - Get board by ID
- PUT /api/boards/:id - Update board
- DELETE /api/boards/:id - Delete board

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Pinspirefor inspiration
- All contributors who have helped shape this project
