# Developer Portfolio

A personal portfolio website built with React and SCSS, featuring a dark amber-themed design. Showcases projects, skills, work experience, and certifications.

**Live site:** [trashpenguin.github.io/developerFolio](https://trashpenguin.github.io/developerFolio)

---

## About

Cybersecurity-focused IT professional with hands-on experience in security analysis, systems programming, and web development. Graduate of Bicol University (BS Information Technology, 2024).

---

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | React (Create React App) |
| Styling | SCSS, Font Awesome |
| Animations | react-reveal, Lottie |
| Deployment | GitHub Pages (`gh-pages`) |

---

## Projects

| Project | Technologies |
| --- | --- |
| Online School Management System | PHP, MySQL, JavaScript |
| VGC Puzzle Trainer | TypeScript, React |
| Chess Engine in C | C, C++ |
| Contractor Discovery & Enrichment Tool | Python, Web Scraping, APIs |
| Animated Flower Webpage | HTML, SCSS, JavaScript |
| Event-Driven Programming Final Project | VB.NET, Windows Forms |

---

## Certifications

- Google IT Support Professional Certificate (5 courses)
- Foundations of Cybersecurity — Google
- System Administration & IT Infrastructure Services — Google
- The Bits and Bytes of Computer Networking — Google
- Operating Systems: Becoming a Power User — Google
- OJT Completion — Bicol University (460 hours)

---

## Run Locally

```bash
git clone https://github.com/trashpenguin/developerFolio.git
cd developerFolio
npm install
npx react-scripts start
```

App runs at `localhost:3000`.

---

## Customize

All content is controlled from a single file: [`src/portfolio.js`](src/portfolio.js)

Edit the exported objects to update:

- `greeting` — name, subtitle, resume link
- `socialMediaLinks` — GitHub, LinkedIn, Gmail, Facebook
- `skillsSection` — skills list and software skill icons
- `techStack` — proficiency bars
- `workExperiences` — job history
- `bigProjects` — project cards
- `achievementSection` — certifications and awards
- `educationInfo` — school and degree info

To toggle a section on/off, set `display: false` on the relevant object.

---

## Deploy

```bash
npm run deploy
```

This builds the project and pushes to the `gh-pages` branch. The live site updates automatically.

> Requires the `homepage` field in `package.json` to match your GitHub Pages URL.

---

## Links

- GitHub: [github.com/trashpenguin](https://github.com/trashpenguin)
- LinkedIn: [linkedin.com/in/francisninoranilemoncada](https://www.linkedin.com/in/francisninoranilemoncada/)
- Email: francisninoranile.moncada@bicol-u.edu.ph
