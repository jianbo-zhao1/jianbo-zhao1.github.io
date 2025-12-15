import './App.css'

interface ProfileData {
  name: string,
  role: string,
  bio: string,
  skills: string[]
}

interface Project {
  name: string,
  description: string,
  imageUrl?: string,
  demoLink?: string,
  githubLink?: string,
  tags?: string[]
}

interface Experience {
  company: string,
  role: string,
  date: string,
  description: string,
  tags?: string[]
}

interface Education {
  school: string,
  degree: string,
  date: string
}

const Icons = {
  Email: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
  ),
  LinkedIn: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  ),
  GitHub: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  ),
  Link: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
  ),
  Work: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
  ),
  School: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 0 6-1 6-1v-7"></path></svg>
  )
}

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="experience-card">
      <div className="exp-header">
        <div>
          <h3 className="exp-role">{exp.role}</h3>
          <h4 className="exp-company">@ {exp.company}</h4>
        </div>
        <span className="exp-date">{exp.date}</span>
      </div>
      <p className="exp-desc">{exp.description}</p>
      {exp.tags && (
        <div className="tags-container" style={{marginTop: '12px'}}>
          {exp.tags.map(tag => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      {project.imageUrl && (
        <div className="project-image-wrapper">
          <img 
            src={project.imageUrl} 
            alt={project.name} 
            className="project-image"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.style.backgroundColor = '#f0f0f0';
            }}
          />
        </div>
      )}

      <div className="card-content">
        <div className="card-header">
          <h3 className="project-title">{project.name}</h3>
          <div className="project-links">
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="icon-link-small" title="Live Demo">
                <Icons.Link /> Demo
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="icon-link-small" title="GitHub Repo">
                <Icons.GitHub /> Code
              </a>
            )}
          </div>
        </div>
        
        <p className="project-desc">{project.description}</p>
        
        {project.tags && (
          <div className="tags-container">
            {project.tags.map(tag => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function App() {
  const me: ProfileData = {
    name: "Jianbo Zhao",
    role: "Founding Engineer @ Agora",
    bio: "Senior CS Student (Dec '25) & Founding Engineer specializing in Full-stack Web & Mobile Development. I build scalable products from 0 to 1 using React, TypeScript, and Swift. Actively seeking Web/Mobile Software Engineering roles for 2026.",    skills: ["TypeScript", "React", "Swift", "iOS", "Node.js", "Python", "Elasticsearch"]
  }

  const experiences: Experience[] = [
    {
      company: "Agora",
      role: "Founding Engineer & CTO",
      date: "Sept 2025 - Present",
      description: "Architected and built a multi-vendor marketplace from scratch as the sole engineer. Led the entire product lifecycle, translating business requirements into technical specs, and deployed the scalable MVP using React, TypeScript, and Firebase.",
      tags: ["System Design", "React", "TypeScript"]
    },
    {
      company: "OSU Makerspace",
      role: "Makerspace Mentor",
      date: "Aug 2024 - Present", 
      description: "Oversee operations for a high volume 3D printer farm. Engineered custom G-code scripts and JSON slicer profiles to automate workflows, significantly reducing print failure rates and optimizing hardware performance.",
      tags: ["G-Code", "Python", "Hardware/Software", "Operations"]
    }
  ]
  
  const education: Education = {
    school: "The Ohio State University",
    degree: "B.S. in Computer Science Engineering",
    date: "Dec 2025"
  }


  const projects: Project[] = [
    {
      name: "Agora",
      description: "As Founding Engineer, I am architecting the core trading platform (React/Node/Firebase). This live demo is 'Agora Connect', a pitch & marketing site I built to demonstrate our vision and secure early user interest.",      
      imageUrl: "images/agora_logo.svg",
      demoLink: "https://agora-connect.web.app/", 
      tags: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"]
    },
    {
      name: "Vend-nier",
      description: "Engineered a geospatial web application enabling real-time amenity discovery for the OSU community. I integrated Google Gemini to power natural language voice search and managed the full-stack cloud deployment.",
      imageUrl: "images/vendnier_preview.png",
      githubLink: "https://github.com/jianbo-zhao1/vending-machine", 
      demoLink: "https://vend-nier.onrender.com/", 
      tags: ["Python (Flask)", "Gemini AI", "Elasticsearch", "Render"] 
    }
  ]

  const email = ['z','h','a','o','j','i','a','n','b','o','9','8','@','g','m','a','i','l','.','c','o','m'].join('');

  return (
    <div className="page-wrapper">
      <div className="container">
        <header className="hero-section"> 
          <div className="avatar-wrapper">
            <img src="images/avatar.png" alt={me.name} className="avatar" />
          </div>

          <h1 className="hero-name">{me.name}</h1>
          <h2 className="hero-role">{me.role}</h2>
          
          <div className="social-links">
            <a href={`mailto:${email}`} className="social-icon" title="Email Me">
              <Icons.Email />
            </a>
            <a href="https://www.linkedin.com/in/zhao-allen" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <Icons.LinkedIn />
            </a>
            <a href="https://github.com/jianbo-zhao1" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
              <Icons.GitHub />
            </a>
          </div>

          <div className="skills-wrapper">
            {me.skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>

          <p className="hero-bio">{me.bio}</p>
        </header>

        {/* 1. Selected Projects - Now First */}
        <main className="section-block" style={{ animationDelay: '0.1s' }}>
          <h2 className="section-label">Selected Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </main>

        {/* 2. Experience - Second */}
        <section className="section-block" style={{ animationDelay: '0.2s' }}>
          <h2 className="section-label"><Icons.Work /> Experience</h2>
          <div className="projects-grid">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.company} exp={exp} />
            ))}
          </div>
        </section>

        {/* 3. Education - Last */}
        <section className="section-block" style={{ animationDelay: '0.3s' }}>
          <h2 className="section-label"><Icons.School /> Education</h2>
          <div className="education-card">
            <div className="edu-info">
              <h3 className="edu-school">{education.school}</h3>
              <p className="edu-degree">{education.degree}</p>
            </div>
            <span className="edu-date">{education.date}</span>
          </div>
        </section>

        <footer className="footer" style={{ animationDelay: '0.4s' }}>
          <p>© 2025 Allen Zhao. Built with React & TypeScript.</p>
        </footer>
      </div>
    </div>
  )
}

export default App