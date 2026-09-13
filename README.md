# Aditya Singh — Portfolio

A fully responsive, dark-mode portfolio website built with the MERN stack.

**Live**: https://adityasingh909.github.io/portfolio *(update after deploy)*

---

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS v3 |
| Animations | Framer Motion + custom Intersection Observer hooks |
| Icons | Lucide React |
| Backend | Express.js, Node.js |
| Database | MongoDB Atlas (Mongoose) |
| Email | Nodemailer (Gmail SMTP) |

---

## Quick Start

### 1. Install dependencies

```bash
# From /portfolio root
cd client && npm install
cd ../server && npm install
```

### 2. Configure the server

```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB URI and Gmail credentials
```

**MongoDB Atlas**: Create a free cluster at [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas), get the connection string, and paste it as `MONGO_URI`.

**Gmail App Password**: 
1. Go to your Google Account → Security → 2-Step Verification → App passwords
2. Create an app password for "Mail"
3. Paste the 16-character password as `GMAIL_APP_PASSWORD`

### 3. Run development servers

```bash
# Terminal 1 — Frontend (http://localhost:5173)
cd client && npm run dev

# Terminal 2 — Backend (http://localhost:5000)
cd server && npm run dev
```

---

## Adding Projects

Open [`client/src/components/Projects.jsx`](client/src/components/Projects.jsx) and add objects to the `projects` array:

```js
const projects = [
  {
    title: 'My Project',
    description: 'A description of what this project does...',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Adityasingh909/my-project',
    live: 'https://my-project.com',
    gradient: 'from-violet-500 to-cobalt-600',
  },
]
```

## Adding Your Photo

Drop a photo named `me.jpg` into `client/public/`, then in `About.jsx` replace the avatar `div` with:

```jsx
<img src="/me.jpg" alt="Aditya Singh" className="w-full h-full object-cover" />
```

---

## Deployment

**Frontend**: Deploy `client/` to Vercel or Netlify.  
**Backend**: Deploy `server/` to Railway, Render, or any Node.js host.  
Update `CLIENT_URL` in server `.env` to your production frontend URL.

---

## Project Structure

```
portfolio/
├── client/                 # React + Tailwind (Vite)
│   └── src/
│       ├── components/     # Navbar, Hero, About, Education, Skills, Projects, Contact, Footer
│       ├── hooks/          # useScrollAnimation, useTypewriter
│       ├── App.jsx
│       └── index.css
└── server/                 # Express + MongoDB
    ├── models/Message.js
    ├── routes/contact.js
    └── index.js
```
