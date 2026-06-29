# Portfolio Website

A personal portfolio website built with **React** and **Tailwind CSS**.

## Tech Stack

- [React](https://react.dev/) — UI library
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173` (or whichever port your setup uses).

### Build for Production

```bash
npm run build
```

---

## Using This as a Template

Want to use this portfolio as a starting point for your own? All the personal content lives in the `src/data/` folder — you only need to edit those files to make it yours.

### Steps

1. **Fork or clone** this repository.
2. **Open the `src/data/` folder** and fill in each file with your own information (see the file guide below).
3. **Replace any assets** (profile photo, project screenshots, resume PDF) in the `public/` or `src/assets/` folder.
4. **Deploy** — push to GitHub and connect to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or your host of choice.

That's it. You don't need to touch any component files.

### Data Files

| File          | What to fill in                                                       |
| ------------- | --------------------------------------------------------------------- |
| `myData.js`   | Your name, email, title, bio, and social links                        |
| `projects.js` | Your projects — title, description, tech stack, links, and screenshot |
| `career.js`   | Work history — company, role, dates, and bullet points                |
| `mySkills.js` | Your skills grouped by category (e.g. Languages, Tools, Frameworks)   |

Each file contains comments explaining every field, so you know exactly what to replace.

### Renaming the Files

If you prefer different file names, you can rename any file in `src/data/` as long as you update the corresponding import in the component that uses it. For example, renaming `projects.js` to `work.js` means updating the import in `Projects.jsx`:

```js
// Before
import projects from "../data/projects";

// After
import projects from "../data/work";
```

---

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/            # Page sections (About, Projects, etc.)
├── data/             # ← Your personal content lives here
│   ├── myData.js
│   ├── projects.js
│   ├── career.js
│   ├── mySkills.js
│
├── assets/           # Images and static files
└── App.jsx
```

---

## Deployment

This site can be deployed to any static hosting platform. Recommended options:

- **Vercel** — connect your GitHub repo and it deploys automatically on every push.
- **Netlify** — same workflow, also supports form submissions if you use the contact form.
- **GitHub Pages** — free hosting directly from your repository.

---

## License

This project is open source and available under the [MIT License](LICENSE).
