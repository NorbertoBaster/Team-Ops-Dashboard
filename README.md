# Project Dashboard App

A modern, client-side dashboard application built with **Next.js (App Router)** and **React**, designed to manage projects and tasks with a clean, intuitive UI.

This project demonstrates real-world state management, component composition, and UX patterns commonly used in production dashboards.

---

## 🚀 Features

### Projects

* Create, edit, and delete projects
* View projects as responsive cards
* Project status indicators
* Real-time task count and completion progress per project

### Tasks

* Create tasks assigned to projects
* Inline task title editing (click-to-edit)
* Keyboard-friendly editing (Enter to save, Escape to cancel)
* Task status cycling (Todo → In Progress → Done)
* Task filtering by status
* Optional global tasks view across projects

### UX & UI

* Clean, minimal dashboard layout
* Responsive grid and table layouts
* Empty states for better usability
* Modal-based creation flows
* Visual progress bars

---

## 🧠 Technical Highlights

* **Next.js App Router** with Server + Client Components
* **Client-side state management** using React hooks
* **Lazy initialization** to avoid hydration issues
* **LocalStorage persistence** for project-specific tasks
* Clear separation of concerns:

  * Containers manage state
  * Tables and cards are presentational
* Strict TypeScript typing for safety and clarity

---

## 🛠️ Getting Started

```bash
npm install
npm run dev
```

Then open: [http://localhost:3000](http://localhost:3000)

---

## 📈 What This Project Demonstrates

This dashboard is intentionally focused on **clarity over complexity** and shows:

* How to structure a medium-sized React/Next.js app
* How to avoid over-engineering with premature global state
* How to build editable tables and cards cleanly
* How to reason about component responsibility

It’s a strong foundation for expanding into:

* API-backed persistence
* Authentication & permissions
* Drag-and-drop workflows
* Analytics dashboards

---

## ✅ Status

**Feature-complete and stable.**

The application has undergone a final bug sweep and is ready for iteration, polishing, or presentation.

---

## 📄 License

MIT
