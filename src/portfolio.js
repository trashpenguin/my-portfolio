/* Change this file to get your personal Portfolio */

import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {animated: false};

const greeting = {
  username: "Francis.",
  title: "Francis Nino Moncada",
  subTitle:
    "I am a cybersecurity-focused IT professional who secures systems, builds practical tools, and approaches every project with a security-first mindset. I have hands-on experience spanning security analysis, system administration, and full-stack development.",
  resumeLink:
    "https://drive.google.com/file/d/1lCKr1faBLtl3HHKNKPrYg5XrffTFi5e-/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/trashpenguin",
  linkedin: "https://www.linkedin.com/in/francisninoranilemoncada/",
  gmail: "francisninoranile.moncada@bicol-u.edu.ph",
  facebook: "https://www.facebook.com/uselesspenguissleeping",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle:
    "Cybersecurity-oriented IT professional with hands-on experience in security analysis, systems programming, and data tooling",
  skills: [
    "Assess and mitigate security vulnerabilities across systems and networks",
    "Build web applications, desktop systems, and automation tools from scratch",
    "Aggregate and enrich data through scripting, APIs, and multi-source pipelines",
    "Design professional graphics and documents for events and organizational use"
  ],

  softwareSkills: [
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "ReactJS", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Linux", fontAwesomeClassname: "fab fa-linux"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "C / C++", fontAwesomeClassname: "fas fa-code"},
    {skillName: "Networking", fontAwesomeClassname: "fas fa-network-wired"},
    {skillName: "Canva", fontAwesomeClassname: "fas fa-palette"}
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Bicol University",
      logo: require("./assets/images/buLogo.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "2019 — July 2024",
      desc: "Graduated with a strong foundation in networking, cybersecurity, system administration, and software development. Completed on-the-job training focused on digital records management and administrative IT support.",
      descBullets: [
        "Capstone: Developed an Online School Management System for San Jose National High School",
        "Completed 460 hours of OJT at the Bicol University Accounting/Budget/Supply Office"
      ]
    }
  ]
};

// Tech Stack
const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Cybersecurity & Threat Analysis", progressPercentage: "80%"},
    {Stack: "Networking & System Administration", progressPercentage: "75%"},
    {Stack: "Scripting & Automation (Python / C)", progressPercentage: "70%"},
    {Stack: "Web & Application Development", progressPercentage: "65%"}
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Customer Service Representative",
      company: "Optum",
      companylogo: require("./assets/images/optumLogo.png"),
      date: "November 2024 — August 2025",
      desc: "Handle complex customer inquiries in a high-volume healthcare environment. Apply strong communication, analytical, and problem-solving skills while adhering to strict data privacy and compliance protocols."
    },
    {
      role: "IT Intern",
      company: "Bicol University — Accounting/Budget/Supply Office",
      companylogo: require("./assets/images/buLogo.png"),
      date: "February 2024 — June 2024",
      desc: "Gained hands-on experience in document management, financial operations, and administrative coordination across three divisions. Created graphical designs for official events and documents using Canva. Organized and managed accounting records to support daily office operations."
    },
    {
      role: "Capstone Research Developer",
      company: "San Jose National High School",
      companylogo: require("./assets/images/schoolLogo.png"),
      date: "September 2023 — January 2024",
      desc: "Led the design and development of an Online School Management System. Delivered a system that improved administrative efficiency, enhanced document security, and provided a user-friendly interface for school staff."
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: true,
  display: true
};

// Big Projects
const bigProjects = {
  title: "Best projects",
  subtitle:
    "A selection of projects I have built — spanning web, systems programming, and data tooling",
  projects: [
    {
      image: require("./assets/images/osm.png"),
      projectName: "Online School Management System",
      projectDesc:
        "A full-featured web system developed for San Jose National High School to digitize administrative processes, manage student records, and secure sensitive academic documents. Designed and built end-to-end as a capstone project.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      footerLink: []
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      projectName: "VGC Puzzle Trainer",
      projectDesc:
        "A web-based puzzle training app for competitive Pokemon VGC (doubles) players. Mirrors the chess puzzle format — a real game state is frozen at a critical decision point, the player picks the best action, and the system reveals the correct answer with a precise mechanical explanation.",
      technologies: ["TypeScript", "React"],
      footerLink: [
        {
          name: "Live Demo",
          url: "https://vgc-puzzle-trainer-web.vercel.app"
        },
        {
          name: "GitHub",
          url: "https://github.com/Aazirr/vgc-puzzle-trainer"
        }
      ]
    },
    {
      image: "https://opengraph.githubassets.com/1/trashpenguin/Chess-Engine",
      projectName: "Chess Engine in C",
      projectDesc:
        "A chess engine built from scratch in C/C++, implementing core game logic including move generation, board state management, and 2D rendering. A deep dive into low-level systems programming and algorithmic problem-solving.",
      technologies: ["C", "C++"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/trashpenguin/Chess-Engine"
        }
      ]
    },
    {
      image: "https://opengraph.githubassets.com/1/trashpenguin/contractor-search",
      projectName: "Contractor Discovery & Enrichment Tool",
      projectDesc:
        "A Python-powered multi-source data aggregation tool that discovers and enriches contractor profiles for HVAC, Electrical, and Excavating businesses across the USA. Automates lead generation through web scraping and data normalization.",
      technologies: ["Python", "Web Scraping", "APIs"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/trashpenguin/contractor-search"
        }
      ]
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      projectName: "Animated Flower Webpage",
      projectDesc:
        "A creative, interactive webpage built with pure HTML, SCSS, and vanilla JavaScript featuring smooth CSS animations and an elegant visual design — demonstrating front-end craft without relying on any frameworks.",
      technologies: ["HTML", "SCSS", "JavaScript"],
      footerLink: [
        {
          name: "Live Demo",
          url: "https://trashpenguin.github.io/IHaveSomethingForYou/"
        },
        {
          name: "GitHub",
          url: "https://github.com/trashpenguin/IHaveSomethingForYou"
        }
      ]
    },
    {
      image: "https://opengraph.githubassets.com/1/trashpenguin/EDP",
      projectName: "Event-Driven Programming Final Project",
      projectDesc:
        "A Visual Basic .NET desktop application developed as a final project for an Event-Driven Programming course. Demonstrates event handling, Windows form design, and object-oriented principles in a real coursework context.",
      technologies: ["VB.NET", "Windows Forms"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/trashpenguin/EDP"
        }
      ]
    }
  ],
  display: true
};

// Achievements
const achievementSection = {
  title: "Achievements & Certifications",
  subtitle:
    "Recognitions, training completions, and milestones from my IT and cybersecurity journey.",
  achievementsCards: [
    {
      title: "Google IT Support Specialization",
      subtitle:
        "Completed the full 5-course Google IT Support Professional Certificate on Coursera, covering networking, operating systems, system administration, security, and IT infrastructure.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google IT Support Specialization",
      footerLink: []
    },
    {
      title: "Foundations of Cybersecurity",
      subtitle:
        "Earned Google's Foundations of Cybersecurity certificate, covering core security concepts, common threats, and entry-level security practices.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Cybersecurity Certificate",
      footerLink: []
    },
    {
      title: "System Administration & IT Infrastructure Services",
      subtitle:
        "Certified in system administration covering infrastructure services, directory services, cloud infrastructure, and IT disaster recovery.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google System Administration Certificate",
      footerLink: []
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      subtitle:
        "Completed Google's networking course covering TCP/IP, DNS, DHCP, cloud networking, and troubleshooting network issues.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Networking Certificate",
      footerLink: []
    },
    {
      title: "Operating Systems: Becoming a Power User",
      subtitle:
        "Completed Google's OS course covering Windows and Linux command-line usage, file systems, process management, and software package management.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google OS Certificate",
      footerLink: []
    },
    {
      title: "OJT Completion — Bicol University",
      subtitle:
        "Successfully completed 460 hours of On-the-Job Training at Bicol University's Accounting/Budget/Supply Office, contributing to real-world document management and administrative IT operations.",
      image: require("./assets/images/ojtLogo.png"),
      imageAlt: "OJT Certificate",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "Writing about cybersecurity, technology, and lessons from my IT journey.",
  displayMediumBlogs: false,
  blogs: [],
  display: false
};

// Talks Section
const talkSection = {
  title: "Talks",
  subtitle: "Sharing knowledge through discussions and tech talks.",
  talks: [],
  display: false
};

// Podcast Section
const podcastSection = {
  title: "Podcast",
  subtitle: "Exploring technology and digital security topics.",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my latest resume.",
  display: true
};

// Contact Info
const contactInfo = {
  title: "Let's Connect",
  subtitle:
    "Open to opportunities in cybersecurity, IT support, and web development. My inbox is always open.",
  number: "+639198188442",
  email_address: "francisninoranile.moncada@bicol-u.edu.ph"
};

// Twitter Section
const twitterDetails = {userName: "", display: false};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
