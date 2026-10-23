import React, { useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Database, Braces, Layers3, Terminal, ExternalLink, Download,
  MapPin, CheckCircle2
} from "lucide-react";

const projects = [
  {
    title: "Chat Bot Using Python",
    category: "Python · Automation",
    description: "A Python chatbot project focused on processing user input and returning relevant responses.",
    stack: ["Python", "Logic", "Text Processing"],
    github: "https://github.com/takshil-khurana/chat-bot-using-python"
  },
  {
    title: "REST API with Flask",
    category: "Backend · API Development",
    description: "A REST API project demonstrating backend routing and HTTP request handling with Flask.",
    stack: ["Python", "Flask", "REST API"],
    github: "https://github.com/takshil-khurana/Building-a-Rest-API-with-Flask"
  },
  {
    title: "Fraud Detection Model",
    category: "Machine Learning",
    description: "A machine-learning project exploring fraud detection using Python and data-analysis workflows.",
    stack: ["Python", "pandas", "scikit-learn"],
    github: "https://github.com/takshil-khurana/FRAUD-DETECTION-MODEL-USING-PYTHON"
  },
  {
    title: "News Headlines Web Scraper",
    category: "Python · Web Scraping",
    description: "A scraper project for collecting news headlines from web pages and organizing extracted text.",
    stack: ["Python", "Requests", "BeautifulSoup"],
    github: "https://github.com/takshil-khurana/-Web-Scraper-for-News-Headlines"
  },
  {
    title: "Image Resizer Tool",
    category: "Python · Utility",
    description: "A utility project for resizing images with a simple Python-based workflow.",
    stack: ["Python", "Image Processing"],
    github: "https://github.com/takshil-khurana/Image-Resizer-tool-using-python"
  },
  {
    title: "Basic 2FA System",
    category: "Database · Security",
    description: "A basic two-factor authentication concept implemented with MySQL-focused logic.",
    stack: ["MySQL", "SQL", "Authentication"],
    github: "https://github.com/takshil-khurana/-Basic-2FA-system-using-MySQL-only"
  },
  {
    title: "Fake News Detection Model",
    category: "Machine Learning",
    description: "A machine learning project focused on detecting fake news using Python and natural language processing techniques.",
    stack: ["Python", "scikit-learn", "pandas"],
    github: "https://github.com/takshil-khurana/Fake-News-Detection-Model"
  },
  {
    title: "Marketing growth automation website",
    category: "Web Development · Automation",
    description: "A website for automating marketing growth strategies using modern web technologies.",
    stack: ["HTML5", "CSS3", "JavaScript", "Python", "Flask", "Zapier", "Google Forms", "Mango CRM", "AI Chatbot Integration", "Workflow Automation"],
    github: "https://github.com/takshil-khurana/marketing-growth-automation"
  },
  {
    title: "Django CRUD API",
    category: "Web Development · Backend",
    description: "A REST API for a simple CRUD application built with Django.",
    stack: ["Python", "Django", "Django REST Framework", "SQLite"],
    github: "https://github.com/takshil-khurana/django-crud-api"
  },
  {
    title: "Data Analysis on CSV Files",
    category: "Data Science · Analysis",
    description: "A project for analyzing data from CSV files using Python and pandas.",
    stack: ["Python", "pandas", "NumPy"],
    github: "https://github.com/takshil-khurana/-Data-Analysis-on-CSV-Files"
  },
  {
    title: "Restaurant Management Project",
    category: "Data Science · Analysis",
    description: "A project for managing restaurant operations and analyzing data using Python and pandas.",
    stack: ["Python", "pandas", "NumPy"],
    github: "https://github.com/takshil-khurana/restaurant_management_project"
  }
];

const skillGroups = [
  { icon: Braces, title: "Languages", skills: ["Python", "SQL","Java","JavaScript", "C"] },
  { icon: Layers3, title: "Web & Backend", skills: ["React.js", "HTML5", "CSS3", "Flask", "Django", "REST APIs", "Node.js", "Express.js"] },
  { icon: Database, title: "Data & ML", skills: ["pandas", "NumPy", "scikit-learn", "Matplotlib", "TF-IDF","Machine Learning","Scikit-learn", "NLP", "TF-IDF", "Logistic Regression", "AI Chatbots", "Predictive Modeling"] },
  { icon: Terminal, title: "Tools & Practices", skills: ["Git & GitHub", "OOP", "Debugging", "SDLC", "Postman"] }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Python", "Backend", "Machine Learning"];
  const visibleProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Python") return project.stack.includes("Python");
    if (activeFilter === "Backend") return project.category.includes("Backend") || project.stack.includes("Flask") || project.stack.includes("REST API");
    return project.category.includes("Machine Learning") || project.stack.includes("scikit-learn");
  });

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a href="#home" className="brand" onClick={closeMenu}><span className="brand-mark">TK</span><span>Takshil Khurana<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="https://github.com/takshil-khurana" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO SOFTWARE DEVELOPMENT OPPORTUNITIES</div>
            <h1>Building useful things<br />with <span className="gradient-text">code & curiosity.</span></h1>
            <p className="hero-subtitle">I'm <strong>Takshil Khurana</strong>, a developer interested in building clean web experiences, reliable Python backends, and practical software solutions.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={18} /></a>
              <a className="button button-quiet" href="#contact">Let's connect <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-meta"><span><MapPin size={15} /> Delhi NCR, India</span><span><CheckCircle2 size={15} /> Available for opportunities</span></div>
          </div>
          <div className="hero-visual" aria-label="Code illustration">
            <div className="glow glow-one" /><div className="glow glow-two" />
            <div className="code-window">
              <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>developer.py</span><span className="window-lock">●</span></div>
              <div className="code-body">
                <div><span className="line-no">01</span><span className="code-purple">class</span> <span className="code-blue">Developer</span>:</div>
                <div><span className="line-no">02</span>  <span className="code-purple">def</span> <span className="code-yellow">__init__</span>(self):</div>
                <div><span className="line-no">03</span>    self.name = <span className="code-green">"Takshil"</span></div>
                <div><span className="line-no">04</span>    self.focus = [</div>
                <div><span className="line-no">05</span>      <span className="code-green">"Full Stack"</span>,</div>
                <div><span className="line-no">06</span>      <span className="code-green">"Python"</span>,</div>
                <div><span className="line-no">07</span>      <span className="code-green">"Problem Solving"</span></div>
                <div><span className="line-no">08</span>    ]</div>
                <div><span className="line-no">09</span>  <span className="code-purple">def</span> <span className="code-yellow">build</span>(self):</div>
                <div><span className="line-no">10</span>    <span className="code-purple">return</span> <span className="code-green">"Keep learning."</span><span className="cursor">▍</span></div>
              </div>
              <div className="code-footer"><span><span className="tiny-green" /> Python</span><span>UTF-8</span><span>Ln 10, Col 28</span></div>
            </div>
            <div className="floating-card float-react"><Code2 size={17} /><span>React UI</span></div>
            <div className="floating-card float-api"><Braces size={17} /><span>Python APIs</span></div>
          </div>
          <a href="#about" className="scroll-hint"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
        </section>

        <section id="about" className="section-wrap section-block">
          <div className="section-heading"><span className="section-kicker">01 / ABOUT</span><h2>A developer who likes<br /><span className="muted-heading">making ideas work.</span></h2></div>
          <div className="about-grid">
            <div className="about-intro"><p className="large-copy">I enjoy turning problems into practical, maintainable software — from responsive interfaces to APIs and data-driven applications.</p><p>My focus is on strengthening my full-stack development skills, writing understandable code, and building projects that demonstrate how technology can solve real needs.</p><a className="text-link" href="https://github.com/takshil-khurana" target="_blank" rel="noreferrer">Browse my GitHub <ArrowUpRight size={16} /></a></div>
            <div className="about-facts">
              <div className="fact-card"><span className="fact-number">01</span><div><h3>Build with purpose</h3><p>Projects that solve a clear problem and are easy to explain.</p></div></div>
              <div className="fact-card"><span className="fact-number">02</span><div><h3>Learn continuously</h3><p>Exploring tools, patterns and better engineering practices.</p></div></div>
              <div className="fact-card"><span className="fact-number">03</span><div><h3>Think end-to-end</h3><p>Considering the UI, backend, data and user experience together.</p></div></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-block section-tinted">
          <div className="section-wrap">
            <div className="section-heading"><span className="section-kicker">02 / TOOLKIT</span><h2>Technologies I work with<span className="accent-dot">.</span></h2><p className="section-description">A growing toolkit for building web applications, backend services and data projects.</p></div>
            <div className="skills-grid">{skillGroups.map(({ icon: Icon, title, skills }) => <article className="skill-card" key={title}><div className="skill-icon"><Icon size={21} /></div><h3>{title}</h3><div className="skill-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
            <p className="small-note">Skill levels vary by technology. Be ready to discuss your hands-on experience with each one.</p>
          </div>
        </section>

        <section id="projects" className="section-wrap section-block">
          <div className="section-heading heading-with-action"><div><span className="section-kicker">03 / SELECTED WORK</span><h2>Projects that show<br /><span className="muted-heading">how I think.</span></h2></div><a className="text-link" href="https://github.com/takshil-khurana" target="_blank" rel="noreferrer">All repositories <ArrowUpRight size={16} /></a></div>
          <div className="filter-row">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? "filter-chip active" : "filter-chip"} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div>
          <div className="projects-grid">{visibleProjects.map((project, index) => <article className="project-card" key={project.title}>
            <div className="project-top"><span className="project-index">0{projects.indexOf(project) + 1}</span><a className="project-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}><ArrowUpRight size={19} /></a></div>
            <span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p>
            <div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
            <a className="project-bottom-link" href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> View source <ExternalLink size={13} /></a>
          </article>)}</div>
          <p className="small-note">Before publishing, verify that each repository is public, complete, and accurately described. Add live demo links where available.</p>
        </section>

        <section id="experience" className="section-block section-tinted">
          <div className="section-wrap">
            <div className="section-heading"><span className="section-kicker">04 / EXPERIENCE & EDUCATION</span><h2>Learning by doing<span className="accent-dot">.</span></h2></div>
            <div className="timeline">
              <article className="timeline-item"><span className="timeline-marker" /><div className="timeline-date">FULL TIME EXPERIENCE AND FREELANCE</div><div className="timeline-content"><h3>Full time Software Developer at Mbience · Interior design firm & Freelance Developer</h3><p className="timeline-org"> Designed full stack web applications,Personalised Chabots,Automation Tools,Personalised Softwares</p><p>Supported project documentation, client data organization,website design and management,personalised chatbot designing presentation preparation and workflow coordination using digital tools..</p></div></article>
              <article className="timeline-item"><span className="timeline-marker" /><div className="timeline-date">INTERNSHIP</div><div className="timeline-content"><h3>Data Analysis & Technical Projects</h3><p className="timeline-org">Elevate Labs and other internship projects</p><p>Use this section to describe the specific tasks, tools and outcomes from your internships. Replace this summary with verified role titles and dates before publishing.</p></div></article>
              <article className="timeline-item"><span className="timeline-marker" /><div className="timeline-date">SEP 2023 — JUN 2026</div><div className="timeline-content"><h3>Bachelor of Computer Applications (BCA)</h3><p className="timeline-org">Sri Guru Tegh Bahadur Institute of Management and Information Technology</p><p>Coursework and independent practice in programming, databases, web development and software fundamentals.</p></div></article>
            </div>
          </div>
        </section>

        <section id="contact" className="section-wrap section-block contact-section">
          <div className="contact-panel"><div className="contact-orb" /><span className="section-kicker">05 / CONTACT</span><h2>Have a role or project<br />in mind<span className="accent-dot">?</span></h2><p>I'm interested in software development opportunities where I can contribute, learn and build useful products with a team.</p><div className="contact-actions"><a className="button button-primary" href="mailto:Takshilkhurana12@gmail.com">Email me <Mail size={17} /></a><a className="button button-outline" href="https://www.linkedin.com/in/takshil-khurana-53157422a" target="_blank" rel="noreferrer">Connect on LinkedIn <Linkedin size={17} /></a></div><div className="contact-socials"><a href="https://github.com/takshil-khurana" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><span>·</span><a href="https://www.linkedin.com/in/takshil-khurana-53157422a" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a><span>·</span><span><MapPin size={15} /> Delhi NCR, India</span></div></div>
        </section>
      </main>

      <footer className="footer section-wrap"><a href="#home" className="brand"><span className="brand-mark">TK</span><span>Takshil Khurana<span className="brand-dot">.</span></span></a><span>Designed to grow with the work.</span><a href="#home" className="back-top">Back to top ↑</a></footer>
    </div>
  );
}

export default App;