# VibeHQ

### Personal Growth & Skill Tracking Platform
https://vibehq-app.vercel.app/
VibeHQ is a full-stack web application focused on helping students and self-learners track habits, build skills, and improve study consistency through structured progress tracking and daily workflow management.

The platform combines a responsive frontend experience with a backend architecture powered by Django and MySQL, allowing users to manage personal development activities in a centralized environment.

<img width="1891" height="848" alt="image" src="https://github.com/user-attachments/assets/79a902fb-ca99-44fa-8333-4a009e2306c2" />


---

## Features

- Multi-page responsive web application
- Skill and habit tracking system
- Task creation and management
- Daily productivity tracking
- Student-focused workflow organization
- Responsive layouts for desktop and mobile
- Modular frontend component structure
- Django backend architecture
- MySQL database integration
- REST-style backend development workflow

---

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Python
- Django
- Django REST Framework

### Database
- MySQL

### Development Tools
- Git
- GitHub

---

## Project Overview

VibeHQ was built as a personal project focused on improving productivity, skill development, and study consistency for students and self-learners.

The application allows users to:

- Add and manage tasks
- Track habits and personal goals
- Organize study workflows
- Monitor progress across multiple activities
- Navigate a responsive multi-page interface

Pages currently include:

- Home
- Tracker
- About

The project is also being expanded into a full-stack application using Django and MySQL to strengthen backend engineering and database integration skills.

---

## Architecture

The frontend uses a modular multi-page structure built with HTML, CSS, and JavaScript.

The backend uses Django and Django REST Framework for API and server-side development.

Example project structure:

```bash
VibeHQ/
├── backend/
│   ├── api/
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── index.html
│   ├── tracker.html
│   ├── about.html
│   ├── css/
│   ├── js/
│   └── assets/
└── README.md
```

---

## Prerequisites

Make sure you have the following installed:

- Python 3.10+
- MySQL
- Git

Verify installations:

```bash
python --version
mysql --version
git --version
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/vibehq.git

cd VibeHQ
```

---

## Backend Setup (Django)

Navigate into the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment (Windows):

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install django djangorestframework mysqlclient
```

Run migrations:

```bash
python manage.py migrate
```

Start the Django development server:

```bash
python manage.py runserver
```

Backend runs at:

```bash
http://127.0.0.1:8000
```

---

## Frontend Setup

Open the frontend files normally through the browser or connect them to the Django backend during development.

Example frontend pages:

```bash
frontend/index.html
frontend/tracker.html
frontend/about.html
```

---

## MySQL Database

VibeHQ is being upgraded from a frontend-only project into a full-stack application using MySQL for persistent data storage.

Planned database features include:

- User accounts
- Habit persistence
- Task history
- Progress analytics
- Study streak tracking

---

## Lessons Learned

- Improved understanding of responsive multi-page frontend design
- Strengthened HTML/CSS layout and spacing practices
- Learned how to structure larger frontend projects cleanly
- Gained experience integrating Django backend architecture
- Improved understanding of REST-style backend workflows
- Learned database integration fundamentals using MySQL
- Improved ability to organize scalable full-stack project structures
- Strengthened Git and GitHub workflow practices

---

## Future Improvements

- User authentication system
- Login and registration flows
- Dashboard analytics
- Habit streak system
- Study session timer
- Calendar integration
- API-driven frontend architecture
- Deployment with Docker
- Cloud database hosting

---

## Contributing

Create a feature branch:

```bash
git checkout -b feature/your-feature-name
```

Commit changes:

```bash
git commit -m "Add new feature"
```

Push branch:

```bash
git push origin feature/your-feature-name
```

Open a Pull Request.

---

## License

MIT License

Copyright (c) 2026 VibeHQ
