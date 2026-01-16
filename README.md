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

## 🗂️ Project Structure (Simplified)

```
app/
  projects/
    page.tsx
    [id]/
      page.tsx
      ProjectTasks.tsx
  tasks/
    page.tsx
    TasksWrapper.tsx

components/
  projects/
    ProjectCard.tsx
    ProjectsTable.tsx
    CreateProjectModal.tsx
  tasks/
    TasksTable.tsx
    CreateTaskModal.tsx

lib/
  types.ts
```

---

## 🧩 Architecture Decisions

### Single Source of Truth

* Each page owns its own state (no global store)
* `TasksWrapper` manages tasks on the global tasks page
* `ProjectTasks` manages tasks within a single project

### Dumb Components

* Tables and cards are intentionally stateless
* All mutations flow downward via props

This keeps the system predictable, debuggable, and easy to extend.

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
