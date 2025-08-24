<div align="center">

# 🎓 Student Course Registration System

<img src="https://img.shields.io/badge/Version-2.0.0-blue.svg" alt="Version">
<img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License">
<img src="https://img.shields.io/badge/MongoDB-Ready-brightgreen.svg" alt="MongoDB">
<img src="https://img.shields.io/badge/React-18.2.0-61DAFB.svg" alt="React">
<img src="https://img.shields.io/badge/Node.js-18.0+-339933.svg" alt="Node.js">

### A modern, full-stack web application for seamless student course registration and management

[🚀 Live Demo](https://your-demo-url.com) • [📖 Documentation](https://docs.your-site.com) • [🐛 Report Bug](https://github.com/yuvarajpanditrathod/student-course-registration/issues) • [💡 Request Feature](https://github.com/yuvarajpanditrathod/student-course-registration/issues)

</div>

---

## 🌟 Overview

The **Student Course Registration System** is a comprehensive, production-ready web application built with the MERN stack. It empowers educational institutions to manage course registrations efficiently while providing students with an intuitive interface to discover and enroll in courses. The system features robust authentication, real-time data synchronization, and an admin panel for complete course management.

## ✨ Key Features

### 🔐 **Authentication & Security**
- JWT-based secure authentication system
- Role-based access control (Student, Admin, Instructor)
- Password encryption with bcrypt
- Session management and token refresh
- Email verification for new registrations

### 📚 **Course Management**
- Comprehensive course catalog with search and filtering
- Real-time seat availability tracking
- Course prerequisites and requirements
- Semester-based course scheduling
- Instructor assignment and management

### 👨‍🎓 **Student Features**
- Personalized dashboard with enrolled courses
- Course registration with conflict detection
- Academic transcript and grade tracking
- Waitlist functionality for full courses
- Email notifications for important updates

### 👨‍💼 **Administrative Tools**
- Complete course CRUD operations
- Student enrollment management
- Reports and analytics dashboard
- Bulk operations for course management
- System configuration and settings

### 📱 **User Experience**
- Fully responsive design across all devices
- Progressive Web App (PWA) capabilities
- Dark/Light theme toggle
- Accessibility compliance (WCAG 2.1)
- Multi-language support (i18n)

## 🏗️ Technology Stack

### **Frontend**
```
React.js 18.2.0      │ Modern UI framework
TypeScript           │ Type-safe JavaScript
Redux Toolkit        │ State management
Material-UI 5.x      │ Component library
React Router 6.x     │ Client-side routing
Axios                │ HTTP client
React Hook Form      │ Form management
Chart.js             │ Data visualization
```

### **Backend**
```
Node.js 18.x         │ JavaScript runtime
Express.js 4.x       │ Web framework
MongoDB 6.x          │ NoSQL database
Mongoose 7.x         │ MongoDB ODM
JWT                  │ Authentication
Bcrypt               │ Password hashing
Nodemailer           │ Email service
Express Rate Limit   │ API rate limiting
```

### **DevOps & Tools**
```
Docker               │ Containerization
GitHub Actions       │ CI/CD pipeline
ESLint + Prettier    │ Code formatting
Jest + RTL           │ Testing framework
Husky                │ Git hooks
Vite                 │ Build tool
```

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:

| Requirement | Version | Download Link |
|-------------|---------|---------------|
| Node.js | 18.0+ | [Download](https://nodejs.org/) |
| npm/yarn | Latest | Included with Node.js |
| MongoDB | 6.0+ | [Download](https://www.mongodb.com/try/download/community) |
| Git | Latest | [Download](https://git-scm.com/) |

### Installation

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yuvarajpanditrathod/student-course-registration.git
cd student-course-registration
```

#### 2️⃣ Environment Setup

Create environment files for both client and server:

**Server (.env)**
```env
# Database
MONGO_URI=mongodb://localhost:27017/student_course_db
MONGO_URI_TEST=mongodb://localhost:27017/student_course_db_test

# JWT
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
JWT_EXPIRES_IN=30d

# Server
PORT=5000
NODE_ENV=development

# Email (Optional - for notifications)
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Rate Limiting
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX_REQUESTS=100
```

**Client (.env)**
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_SOCKET_URL=http://localhost:5000
REACT_APP_VERSION=2.0.0
```

#### 3️⃣ Install Dependencies

```bash
# Install server dependencies
npm install

# Navigate to client directory and install frontend dependencies
cd client
npm install
cd ..
```

#### 4️⃣ Database Setup

```bash
# Start MongoDB service
# Windows (MongoDB Compass or Services)
# macOS: brew services start mongodb-community
# Linux: sudo systemctl start mongod

# Seed the database with sample data (optional)
npm run seed
```

#### 5️⃣ Development Server

```bash
# Start both client and server concurrently
npm run dev

# Or start them separately:
# Server: npm run server
# Client: npm run client
```

#### 6️⃣ Access the Application

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:5000](http://localhost:5000)
- **API Documentation**: [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

### 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build

# Run in production mode
docker-compose -f docker-compose.prod.yml up --build
```

## 📁 Project Architecture

```
student-course-registration/
├── 📁 client/                     # React frontend
│   ├── 📁 public/                 # Public assets
│   ├── 📁 src/
│   │   ├── 📁 components/         # Reusable UI components
│   │   ├── 📁 pages/              # Page components
│   │   ├── 📁 hooks/              # Custom React hooks
│   │   ├── 📁 services/           # API service layer
│   │   ├── 📁 store/              # Redux store & slices
│   │   ├── 📁 utils/              # Utility functions
│   │   └── 📁 styles/             # Global styles
│   ├── 📄 package.json
│   └── 📄 .env
├── 📁 server/                     # Node.js backend
│   ├── 📁 controllers/            # Route controllers
│   ├── 📁 middleware/             # Express middleware
│   ├── 📁 models/                 # MongoDB schemas
│   ├── 📁 routes/                 # API routes
│   ├── 📁 services/               # Business logic
│   ├── 📁 utils/                  # Helper functions
│   ├── 📁 config/                 # Configuration files
│   └── 📄 app.js                  # Express app setup
├── 📁 tests/                      # Test suites
├── 📁 docs/                       # Documentation
├── 📄 docker-compose.yml          # Docker configuration
├── 📄 package.json                # Root package.json
└── 📄 README.md                   # This file
```

## 🔧 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | ❌ |
| POST | `/api/auth/login` | User login | ❌ |
| POST | `/api/auth/refresh` | Refresh JWT token | ✅ |
| POST | `/api/auth/logout` | User logout | ✅ |
| GET | `/api/auth/me` | Get current user | ✅ |

### Course Endpoints

| Method | Endpoint | Description | Auth Required | Role |
|--------|----------|-------------|---------------|------|
| GET | `/api/courses` | Get all courses | ❌ | - |
| GET | `/api/courses/:id` | Get course by ID | ❌ | - |
| POST | `/api/courses` | Create new course | ✅ | Admin |
| PUT | `/api/courses/:id` | Update course | ✅ | Admin |
| DELETE | `/api/courses/:id` | Delete course | ✅ | Admin |

### Registration Endpoints

| Method | Endpoint | Description | Auth Required | Role |
|--------|----------|-------------|---------------|------|
| POST | `/api/registrations` | Register for course | ✅ | Student |
| GET | `/api/registrations/my` | Get my registrations | ✅ | Student |
| DELETE | `/api/registrations/:id` | Drop course | ✅ | Student |

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run specific test suites
npm run test:unit
npm run test:integration
npm run test:e2e

# Run tests in watch mode
npm run test:watch
```

### Test Structure

```
tests/
├── 📁 unit/                       # Unit tests
│   ├── 📁 components/             # Component tests
│   ├── 📁 services/               # Service tests
│   └── 📁 utils/                  # Utility tests
├── 📁 integration/                # Integration tests
│   ├── 📁 api/                    # API endpoint tests
│   └── 📁 database/               # Database tests
└── 📁 e2e/                        # End-to-end tests
    ├── 📁 auth/                   # Authentication flows
    ├── 📁 registration/           # Registration flows
    └── 📁 admin/                  # Admin functionality
```

## 🚀 Deployment

### Environment-Specific Configurations

#### **Development**
```bash
npm run dev
```

#### **Staging**
```bash
npm run build:staging
npm run start:staging
```

#### **Production**
```bash
npm run build
npm start
```

### Deployment Platforms

#### **Heroku**
```bash
# Install Heroku CLI and login
heroku create your-app-name
heroku config:set NODE_ENV=production
heroku config:set MONGO_URI=your_production_mongo_uri
git push heroku main
```

#### **Vercel (Frontend)**
```bash
# Install Vercel CLI
npm i -g vercel
cd client
vercel --prod
```

#### **Digital Ocean App Platform**
1. Connect your GitHub repository
2. Configure environment variables
3. Deploy with automatic CI/CD

### Docker Production

```bash
# Build production image
docker build -t student-course-registration .

# Run container
docker run -p 80:3000 --env-file .env.production student-course-registration
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/student_course_db` | ✅ |
| `JWT_SECRET` | JWT signing secret | - | ✅ |
| `JWT_EXPIRES_IN` | JWT expiration time | `30d` | ❌ |
| `PORT` | Server port | `5000` | ❌ |
| `NODE_ENV` | Environment mode | `development` | ❌ |
| `EMAIL_SERVICE` | Email service provider | `gmail` | ❌ |
| `RATE_LIMIT_MAX_REQUESTS` | API rate limit | `100` | ❌ |

### Database Schema

#### **User Model**
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  role: Enum ['student', 'admin', 'instructor'],
  studentId: String (unique, for students),
  isEmailVerified: Boolean,
  avatar: String,
  createdAt: Date,
  updatedAt: Date
}
```

#### **Course Model**
```javascript
{
  _id: ObjectId,
  code: String (unique),
  name: String,
  description: String,
  credits: Number,
  instructor: ObjectId (ref: User),
  semester: String,
  year: Number,
  maxCapacity: Number,
  enrolledStudents: [ObjectId] (ref: User),
  prerequisites: [ObjectId] (ref: Course),
  schedule: {
    days: [String],
    startTime: String,
    endTime: String,
    location: String
  },
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

## 🔐 Security Features

### Authentication & Authorization
- **JWT Tokens**: Secure, stateless authentication
- **Password Hashing**: bcrypt with salt rounds
- **Role-Based Access Control**: Student, Admin, Instructor roles
- **Rate Limiting**: API endpoint protection
- **Input Validation**: Comprehensive request validation

### Data Protection
- **CORS Configuration**: Cross-origin resource sharing setup
- **Helmet.js**: Security headers
- **Express Validator**: Input sanitization
- **Environment Variables**: Sensitive data protection
- **HTTPS Enforcement**: Production SSL/TLS

## 📊 Performance & Monitoring

### Performance Optimizations
- **Database Indexing**: Optimized MongoDB queries
- **Caching**: Redis integration for session management
- **Code Splitting**: React lazy loading
- **Image Optimization**: Compressed assets
- **Minification**: Production build optimization

### Monitoring & Logging
- **Winston Logging**: Structured application logs
- **Morgan**: HTTP request logging
- **Error Tracking**: Centralized error handling
- **Health Checks**: Application monitoring endpoints

## 🐛 Troubleshooting

### Common Issues & Solutions

#### **MongoDB Connection Error**
```bash
# Check MongoDB service status
sudo systemctl status mongod

# Restart MongoDB
sudo systemctl restart mongod

# Check connection string in .env file
```

#### **Port Already in Use**
```bash
# Find process using port 5000
lsof -ti:5000

# Kill the process
kill -9 $(lsof -ti:5000)

# Or use different port in .env
PORT=5001
```

#### **JWT Token Issues**
```bash
# Clear browser local storage
localStorage.clear()

# Verify JWT_SECRET in .env
# Check token expiration time
```

#### **Build Failures**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version compatibility
node --version
```

### Debug Mode

```bash
# Enable debug logging
DEBUG=app:* npm run dev

# Database query debugging
DEBUG=mongoose:* npm run dev

# Specific module debugging
DEBUG=app:auth,app:courses npm run dev
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can get involved:

### Development Workflow

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/student-course-registration.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-new-feature
   ```

3. **Make your changes**
   - Follow the coding standards
   - Add tests for new functionality
   - Update documentation

4. **Test your changes**
   ```bash
   npm run test
   npm run lint
   ```

5. **Commit with conventional commits**
   ```bash
   git commit -m "feat: add amazing new feature"
   ```

6. **Push and create a Pull Request**
   ```bash
   git push origin feature/amazing-new-feature
   ```

### Coding Standards

#### **JavaScript/React**
- Use ES6+ features
- Follow Airbnb style guide
- Use functional components with hooks
- Implement proper error boundaries

#### **Git Commit Messages**
```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting changes
refactor: code refactoring
test: adding tests
chore: maintenance tasks
```

### Issue Templates

When reporting bugs or requesting features, please use our issue templates:

- 🐛 **Bug Report**: Detailed bug information
- 💡 **Feature Request**: New feature proposals
- 📚 **Documentation**: Documentation improvements
- ❓ **Question**: General questions about the project

## 📈 Roadmap

### Version 2.1.0 (Q2 2024)
- [ ] Mobile application (React Native)
- [ ] Real-time notifications (WebSocket)
- [ ] Advanced analytics dashboard
- [ ] Payment integration for course fees
- [ ] Multi-language support

### Version 2.2.0 (Q3 2024)
- [ ] AI-powered course recommendations
- [ ] Calendar integration (Google Calendar, Outlook)
- [ ] Bulk operations for administrators
- [ ] Advanced reporting system
- [ ] Integration with LMS platforms

### Version 3.0.0 (Q4 2024)
- [ ] Microservices architecture
- [ ] GraphQL API
- [ ] Progressive Web App (PWA)
- [ ] Advanced security features
- [ ] Performance optimizations

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ Liability
- ❌ Warranty

## 🙏 Acknowledgements

We extend our gratitude to the following:

### **Technologies & Libraries**
- [**MongoDB**](https://www.mongodb.com/) - For robust document-based storage
- [**Express.js**](https://expressjs.com/) - For the lightweight web framework
- [**React.js**](https://reactjs.org/) - For the powerful frontend library
- [**Node.js**](https://nodejs.org/) - For the JavaScript runtime environment
- [**Material-UI**](https://mui.com/) - For the beautiful component library

### **Community & Contributors**
- All contributors who have helped improve this project
- The open-source community for inspiration and support
- Educational institutions that provided feedback and testing

### **Special Thanks**
- **MongoDB University** - For database design best practices
- **React Documentation Team** - For comprehensive guides
- **Node.js Foundation** - For the excellent runtime environment

## 📞 Support & Contact

### 🆘 Getting Help

- **📖 Documentation**: Check our [comprehensive docs](https://docs.your-site.com)
- **💬 Discussions**: Join our [GitHub Discussions](https://github.com/yuvarajpanditrathod/student-course-registration/discussions)
- **🐛 Issues**: Report bugs in our [Issue Tracker](https://github.com/yuvarajpanditrathod/student-course-registration/issues)
- **💡 Feature Requests**: Suggest new features [here](https://github.com/yuvarajpanditrathod/student-course-registration/issues/new?template=feature_request.md)

### 👤 Contact Information

**Project Maintainer**: Yuvaraj Pandit Rathod

📧 **Email**: [yuvarajpanditrathod@gmail.com](mailto:yuvarajpanditrathod@gmail.com)  
🐙 **GitHub**: [@yuvarajpanditrathod](https://github.com/yuvarajpanditrathod)  
💼 **LinkedIn**: [Yuvaraj Pandit Rathod](https://linkedin.com/in/yuvarajpanditrathod)  
🐦 **Twitter**: [@yuvarajpandit](https://twitter.com/yuvarajpandit)

### 🕐 Response Times

| Type | Expected Response |
|------|------------------|
| 🐛 Critical Bugs | 24-48 hours |
| 💡 Feature Requests | 3-5 days |
| ❓ General Questions | 1-3 days |
| 📖 Documentation | 1-2 weeks |

---

<div align="center">

### ⭐ If you find this project helpful, please consider giving it a star on GitHub!

### 🚀 Ready to transform education management? [Get Started Now!](https://github.com/yuvarajpanditrathod/student-course-registration)

### 📱 Stay connected for updates and educational technology discussions!

[🌟 Star this repo](https://github.com/yuvarajpanditrathod/student-course-registration) • [🍴 Fork it](https://github.com/yuvarajpanditrathod/student-course-registration/fork) • [📢 Share it](https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20Student%20Course%20Registration%20System!&url=https://github.com/yuvarajpanditrathod/student-course-registration)

---

**Made with ❤️ by [Yuvaraj Pandit Rathod](https://github.com/yuvarajpanditrathod)**

</div>
