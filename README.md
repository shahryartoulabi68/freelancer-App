# Freelancer Project

This project includes the roles of admin, freelancer, and employer.

## Project Structure

The project consists of two main parts:

- **Frontend**: A React application built with Vite.
- **Backend**: An Express server implemented with Node.js.

## Frontend

### Technologies

- React
- Vite
- Tailwind CSS
- React Router
- React Query
- Axios
- and other useful libraries

### Installation and Execution

1. Navigate to the frontend directory:
   ```bash
   cd freelancer-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the project in development mode:
   ```bash
   npm run dev
   ```

4. To build for production:
   ```bash
   npm run build
   ```

## Backend

### Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- and other useful libraries

### Installation and Execution

1. Navigate to the backend directory:
   ```bash
   cd freelancer-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with appropriate settings:
   ```
   PORT=5000
   APP_DB=mongodb://localhost:27017/freelancer
   ALLOW_CORS_ORIGIN=http://localhost:3000
   COOKIE_PARSER_SECRET_KEY=your-secret-key
   ```

4. Run the project in development mode:
   ```bash
   npm run dev
   ```

5. For production execution:
   ```bash
   npm start
   ```

## Deployment

### Backend

The backend project is deployed using Liara. Deployment settings are available in the `liara.json` file.

### Frontend

For frontend deployment, you can use various services such as Vercel, Netlify, or GitHub Pages.

## Contributing

To contribute to the project, please follow these steps:

1. Fork the project.
2. Create a new branch for your feature (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to your branch (`git push origin feature/amazing-feature`).
5. Create a Pull Request.

## License

This project is licensed under the ISC License.