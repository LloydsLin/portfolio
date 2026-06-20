import { useEffect, useState } from 'react'
import DigitalIdPage from './pages/DigitalIdPage.jsx'
import './App.css'

const rotatingWords = ['React Native UI', 'Smooth Mobile Flows', 'Scalable Front Ends']

const projectHighlights = [
  {
    title: 'Pratibha Mobile App',
    type: 'Featured Project',
    description:
      'I built the user interface for the Pratibha app using React Native. I took the raw product ideas and coded them into real, working mobile screens. My main focus was writing clean, reusable code so the app runs fast, looks great, and connects smoothly to our backend.',
    stack: ['React Native', 'JavaScript', 'REST APIs', 'Android Workflow'],
    achievement: 'Helped build the app UI with the team.',
    recruiterFocus: ['React Native-first workflow', 'Reusable UI patterns', 'Responsive mobile screens'],
  },
  {
    title: 'Student Performance Data Workflow',
    type: 'Project-Style Experience',
    description:
      'Supported attendance and student performance tracking in a full-time data-focused role. I helped keep reports clear and easy to read so progress was easier to review.',
    stack: ['Python', 'JavaScript', 'Spreadsheet Reporting', 'Data Analysis'],
    achievement: 'Made reporting easier to follow.',
  },
  {
    title: 'Full-Time Operations Officer',
    type: 'Project-Style Experience',
    description:
      'Helped with market analysis and day-to-day project work by organizing data, preparing reports, and supporting team communication. The role taught me how to keep work moving smoothly and stay organized under pressure.',
    stack: ['Data Processing', 'Report Documentation', 'Stakeholder Coordination'],
    achievement: 'Kept project work on track.',
  },
]

const techStack = {
  Languages: ['JavaScript', 'Python', 'Java', 'HTML5', 'CSS3'],
  Frameworks: ['React', 'React Native'],
  Tools: [
    'REST/HTTP APIs',
    'TCP/IP Fundamentals',
    'Data Analysis Workflows',
    'Git & GitHub',
    'Cross-platform Environments (macOS, Linux, Windows)',
  ],
}

function App() {
  const [wordIndex, setWordIndex] = useState(0)
  const [route, setRoute] = useState(() => window.location.hash || '#/')

  useEffect(() => {
    const syncRoute = () => {
      setRoute(window.location.hash || '#/')
    }

    window.addEventListener('hashchange', syncRoute)

    return () => window.removeEventListener('hashchange', syncRoute)
  }, [])

  useEffect(() => {
    if (route === '#/digital-id') {
      return undefined
    }

    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % rotatingWords.length)
    }, 2300)

    return () => window.clearInterval(interval)
  }, [route])

  if (route === '#/digital-id') {
    return <DigitalIdPage />
  }

  const featuredProject = projectHighlights[0]
  const supportingProjects = projectHighlights.slice(1)

  return (
    <div className="page-shell">
      <header className="top-nav">
        <p className="brand">Lin Thit Aung</p>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#stack">Tech Stack</a>
          <a href="#contact">Work With Me</a>
          <a href="https://github.com/LloydsLin" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-mesh" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow">Junior Mobile Developer</p>
            <h1>
              Building polished, user-first mobile experiences that turn ideas into
              intuitive products.
            </h1>
            <p className="hero-subtext">
              I recently worked on the Pratibha mobile app, focused on interface
              implementation, reusable component thinking, and smooth product delivery.
            </p>

            <div className="rotating-pill">
              <span>Currently building:</span>
              <strong>{rotatingWords[wordIndex]}</strong>
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View Projects
              </a>
              <a className="btn btn-secondary" href="#contact">
                Collaborate
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <h2>About</h2>
          <p>
            My development path combines formal study in ICT and Computer Science with
            practical experience as a Junior Developer. On the Pratibha app, I worked
            with a tech team to build the mobile interface, turning product ideas into
            responsive screens and reusable UI parts that kept the app clear and easy to use.
          </p>
          <p>
            I am driven by steady progress, whether that is improving software or training
            toward a 10k run. I also enjoy building efficient tech setups and working across
            macOS, Linux, and Windows to stay flexible and learn faster.
          </p>
        </section>

        <section className="section" id="projects">
          <h2>Project Highlights</h2>

          <div className="project-flow">
            <article className="project-card featured">
              <p className="project-type">{featuredProject.type}</p>
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.description}</p>
              <ul className="chip-list">
                {featuredProject.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="focus-strip" aria-label="Featured recruiter focus">
                {featuredProject.recruiterFocus.map((focus) => (
                  <p key={focus}>{focus}</p>
                ))}
              </div>
              <p className="achievement">
                <span>Key Achievement:</span> {featuredProject.achievement}
              </p>
            </article>

            <div className="project-grid">
              {supportingProjects.map((project) => (
                <article className="project-card" key={project.title}>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="chip-list">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="achievement">
                    <span>Key Achievement:</span> {project.achievement}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="stack">
          <h2>Tech Stack</h2>

          <div className="stack-grid">
            {Object.entries(techStack).map(([group, items]) => (
              <article className="stack-card" key={group}>
                <h3>{group}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section cta id-bridge" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Work With Me</p>
            <h2>Digital ID Card</h2>
            <p>
              Open my standalone card to view the QR, LinkedIn, GitHub, and private
              digital ID view without exposing the rest of the portfolio.
            </p>
          </div>

          <div className="id-bridge-actions">
            <a className="btn btn-primary" href="#/digital-id">
              Open Digital ID Card
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>Lin Thit Aung • Mobile Application Developer</p>
      </footer>
    </div>
  )
}

export default App
