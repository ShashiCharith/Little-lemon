
# Little Lemon Restaurant

Little Lemon is a family-owned restaurant based in Chicago that serves traditional Mediterranean food with a modern twist.

This project is a responsive restaurant website built using React as part of the Meta Front-End Developer course capstone project.

## Features

- Responsive homepage with restaurant information.
- Navigation between Home, About, Menu, Reservations, Order Online and Login pages.
- Restaurant specials and customer testimonials.
- Table reservation form with date, time, guest count and occasion fields.
- Dynamic available booking times based on the selected date.
- Form validation to prevent invalid reservations.
- Booking confirmation page.
- Unit tests for important components and booking functionality.

## Technologies Used

- React
- JavaScript
- HTML5
- CSS3
- React Router
- React Hooks (`useState`, `useEffect`, `useReducer`)
- Jest
- React Testing Library

## Project Structure

```text
src/
├── assets/
├── pages/
│   ├── Homepage.js
│   ├── About.js
│   ├── Menu.js
│   ├── BookingPage.js
│   ├── OrderOnline.js
│   └── Login.js
├── App.js
├── App.css
├── Main.js
├── Header.j
├── Nav.js
├── Footer.js
├── BookingForm.js
├── ConfirmedBooking.js
├── Main.test.js
├── App.test.js
└── BookingForm.test.js
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/ShashiCharith/Little-lemon.git
```

### 2. Navigate to the project directory

```bash
cd Little-lemon/lil-lemon
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

The application will run at:

http://localhost:3000

## Running Tests

To run the project's test suite:

```bash
npm test
```

## Production Build

To create an optimized production build:

```bash
npm run build
```

## Future Improvements

- Implement real user authentication.
- Connect a backend and database.
- Add online food ordering functionality.
- Improve reservation management.

## Author

Shashi Charith

GitHub: https://github.com/ShashiCharith
