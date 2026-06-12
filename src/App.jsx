import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll } from 'framer-motion'
import './App.css'

const rotatingWords = ['React Native UI', 'Smooth Mobile Flows', 'Scalable Front Ends']
const resumeLink = '#resume-url-placeholder'

const projectHighlights = [
  {
    title: 'Pratibha Mobile App',
    type: 'Featured Project',
    description:
      'I built the user interface for the Pratibha app using React Native. I took the raw product ideas and coded them into real, working mobile screens. My main focus was writing clean, reusable code so the app runs fast, looks great, and connects smoothly to our backend.',
    stack: ['React Native', 'JavaScript', 'REST APIs', 'Android Workflow'],
    achievement: 'Helped build the app UI with the team.',
    recruiterFocus: ['React Native-first workflow', 'Reusable UI patterns', 'Responsive mobile screens'],
    mockup: [
      {
        title: 'Dashboard',
        eyebrow: 'Home',
        summary: 'Quick access to student insights, tasks, and high-priority actions.',
        accent: 'accent-one',
      },
      {
        title: 'Student Detail',
        eyebrow: 'Profile',
        summary: 'A focused view for attendance, performance, and notes.',
        accent: 'accent-two',
      },
      {
        title: 'Activity Feed',
        eyebrow: 'Updates',
        summary: 'A clean feed for recent changes and follow-up items.',
        accent: 'accent-three',
      },
    ],
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

const skillsSummary = [
  'Junior mobile and frontend developer focused on clean UI implementation and reusable components.',
  'Comfortable working with React, React Native, JavaScript, and API-driven interfaces.',
  'Strong fit for teams that value responsiveness, consistency, and dependable delivery.',
]

const learningUpdates = [
  'Currently building cleaner Android-style interface patterns for the Pratibha app mockup.',
  'Recently refined reusable component structure and mobile layout consistency.',
  'Continuing to sharpen frontend delivery, responsiveness, and product thinking.',
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
  const [activeView, setActiveView] = useState('portfolio')
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % rotatingWords.length)
    }, 2300)

    return () => window.clearInterval(interval)
  }, [])

  const revealUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: { opacity: 1, y: 0 },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 10 },
    show: { opacity: 1, scale: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  }

  const projectStagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
        delayChildren: shouldReduceMotion ? 0 : 0.04,
      },
    },
  }

  const featuredProject = projectHighlights[0]
  const supportingProjects = projectHighlights.slice(1)

  if (activeView === 'mockup') {
    return (
      <div className="page-shell">
        <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

        <header className="top-nav">
          <p className="brand">Lin Thit Aung</p>
          <nav>
            <button type="button" className="nav-button" onClick={() => setActiveView('portfolio')}>
              Back to Portfolio
            </button>
            <a href={resumeLink}>Resume</a>
            <a href="https://github.com/LloydsLin" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>
        </header>

        <main>
          <section className="mockup-hero section">
            <p className="eyebrow">Pratibha Mockup</p>
            <h1>Android concept screens with the same calm, high-contrast design language.</h1>
            <p className="hero-subtext">
              This view is a visual mockup for the Pratibha app. It shows how the Android
              version can feel consistent with the portfolio’s polished, product-first style.
            </p>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary" onClick={() => setActiveView('portfolio')}>
                Return to Portfolio
              </button>
              <a className="btn btn-secondary" href={resumeLink}>
                Resume Placeholder
              </a>
            </div>
          </section>

          <section className="section">
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={revealUp}
              transition={{ duration: 0.45 }}
            >
              Mockup Screens
            </motion.h2>

            <div className="mockup-grid">
              {featuredProject.mockup.map((screen, index) => (
                <motion.article
                  className={`mockup-device ${screen.accent}`}
                  key={screen.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={scaleIn}
                  transition={{ duration: 0.45 + index * 0.08, ease: 'easeOut' }}
                >
                  <div className="mockup-screen">
                    <div className="mockup-status-bar">
                      <span />
                      <span />
                      <span />
                    </div>
                    <p className="project-type">{screen.eyebrow}</p>
                    <h3>{screen.title}</h3>
                    <p>{screen.summary}</p>
                    <div className="mockup-panel" />
                    <div className="mockup-list">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mockup-notes">
              <article>
                <h3>What this adds</h3>
                <p>
                  A separate presentation view gives recruiters a quick way to see the app concept,
                  even before the final Android build is complete.
                </p>
              </article>
              <article>
                <h3>Consistency goal</h3>
                <p>
                  The mockup reuses the same type scale, color contrast, and card structure as the
                  rest of the portfolio so the app and portfolio feel like one system.
                </p>
              </article>
            </div>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="page-shell">
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

      <header className="top-nav">
        <p className="brand">Lin Thit Aung</p>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <button type="button" className="nav-button" onClick={() => setActiveView('mockup')}>
            Pratibha Mockup
          </button>
          <a href="#stack">Tech Stack</a>
          <a href={resumeLink}>Resume</a>
          <a href="#contact">Work With Me</a>
          <a href="https://github.com/LloydsLin" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-mesh" aria-hidden="true" />
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.p className="eyebrow" variants={revealUp} transition={{ duration: 0.45 }}>
              Junior Mobile Developer
            </motion.p>
            <motion.h1 variants={revealUp} transition={{ duration: 0.6, ease: 'easeOut' }}>
              Building polished, user-first mobile experiences that turn ideas into
              intuitive products.
            </motion.h1>
            <motion.p
              className="hero-subtext"
              variants={revealUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              I recently worked on the Pratibha mobile app, focused on interface
              implementation, reusable component thinking, and smooth product delivery.
            </motion.p>

            <motion.div className="rotating-pill" variants={revealUp} transition={{ duration: 0.55 }}>
              <span>Currently building:</span>
              <AnimatePresence mode="wait">
                <motion.strong
                  key={rotatingWords[wordIndex]}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
                  transition={{ duration: 0.35 }}
                >
                  {rotatingWords[wordIndex]}
                </motion.strong>
              </AnimatePresence>
            </motion.div>

            <motion.div
              className="hero-actions"
              variants={revealUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <a className="btn btn-primary" href="#projects">
                View Projects
              </a>
              <a className="btn btn-secondary" href="#contact">
                Collaborate
              </a>
              <a className="btn btn-secondary" href={resumeLink}>
                Resume Placeholder
              </a>
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          className="section summary-grid"
          id="summary"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <motion.article className="summary-card" variants={scaleIn} transition={{ duration: 0.45 }}>
            <p className="project-type">Skills Summary</p>
            <h2>Junior mobile and frontend focus</h2>
            {skillsSummary.map((item) => (
              <p key={item}>{item}</p>
            ))}
            <a className="inline-link" href={resumeLink}>
              Download resume placeholder
            </a>
          </motion.article>

          <motion.article className="summary-card momentum-card" variants={scaleIn} transition={{ duration: 0.5 }}>
            <p className="project-type">Momentum</p>
            <h2>Currently learning and recently built</h2>
            <ul className="momentum-list">
              {learningUpdates.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        </motion.section>

        <motion.section
          className="section"
          id="about"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={revealUp} transition={{ duration: 0.45 }}>
            About
          </motion.h2>
          <motion.p variants={revealUp} transition={{ duration: 0.55 }}>
            My development path combines formal study in ICT and Computer Science with
            practical experience as a Junior Developer. On the Pratibha app, I worked
            with a tech team to build the mobile interface, turning product ideas into
            responsive screens and reusable UI parts that kept the app clear and easy to use.
          </motion.p>
          <motion.p variants={revealUp} transition={{ duration: 0.55 }}>
            I am driven by steady progress, whether that is improving software or training
            toward a 10k run. I also enjoy building efficient tech setups and working across
            macOS, Linux, and Windows to stay flexible and learn faster.
          </motion.p>
        </motion.section>

        <section className="section" id="projects">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={revealUp}
            transition={{ duration: 0.45 }}
          >
            Project Highlights
          </motion.h2>

          <motion.div
            className="project-flow"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={projectStagger}
          >
            <motion.article
              className="project-card featured"
              variants={revealUp}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      rotateX: 2,
                      rotateY: -2,
                      scale: 1.01,
                    }
              }
            >
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
              <button type="button" className="inline-link button-link" onClick={() => setActiveView('mockup')}>
                Open mockup version
              </button>
            </motion.article>

            <div className="project-grid">
              {supportingProjects.map((project) => (
                <motion.article
                  className="project-card"
                  key={project.title}
                  variants={revealUp}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: -6,
                        }
                  }
                >
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
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="section" id="stack">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={revealUp}
            transition={{ duration: 0.45 }}
          >
            Tech Stack
          </motion.h2>

          <motion.div
            className="stack-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {Object.entries(techStack).map(([group, items]) => (
              <motion.article
                className="stack-card"
                key={group}
                variants={scaleIn}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <h3>{group}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <motion.section
          className="section cta"
          id="contact"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={revealUp}>Work With Me</motion.h2>
          <motion.p variants={revealUp}>
            I am actively open to junior mobile or frontend opportunities,
            internships, and meaningful product collaborations. If you are building
            something impactful and value discipline, ownership, and continuous growth,
            I would love to connect.
          </motion.p>
          <motion.div className="cta-actions" variants={revealUp}>
            <a className="btn btn-secondary" href={resumeLink}>
              Resume Placeholder
            </a>
            <a className="btn btn-primary" href="mailto:linthitaung78@gmail.com">
              Send Email
            </a>
            <a
              className="btn btn-secondary"
              href="https://www.linkedin.com/in/linthit2003/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
            <a
              className="btn btn-secondary"
              href="https://github.com/LloydsLin"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>
          </motion.div>
        </motion.section>
      </main>

      <footer>
        <p>Lin Thit Aung • Junior Mobile Developer</p>
      </footer>
    </div>
  )
}

export default App
