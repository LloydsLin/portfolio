import pratibhaMockupScreens from '../data/projects/pratibhaMockupScreens'

function PratibhaMockupPage() {
  return (
    <main className="mockup-page">
      <div className="mockup-page-header">
        <p className="eyebrow">Pratibha Mobile App</p>
        <h1 className="mockup-page-title">App Screen Mockups</h1>
        <p className="mockup-page-desc">
          A visual walkthrough of the key screens I built during the Pratibha
          mobile app project — each representing a focused UX area.
        </p>
      </div>

      <div className="mockup-grid mockup-page-grid">
        {pratibhaMockupScreens.map((screen) => (
          <div className={`mockup-device ${screen.accent}`} key={screen.title}>
            <div className="mockup-screen">
              {/* Simulated status bar */}
              <div className="mockup-status-bar" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <p className="eyebrow" style={{ margin: 0 }}>{screen.eyebrow}</p>
              <h3>{screen.title}</h3>
              <p style={{ margin: 0 }}>{screen.summary}</p>

              {/* Simulated content area */}
              <div className="mockup-panel" aria-hidden="true" />

              {/* Simulated list rows */}
              <div className="mockup-list" aria-hidden="true">
                <span style={{ width: '70%' }} />
                <span style={{ width: '54%' }} />
                <span style={{ width: '82%' }} />
                <span style={{ width: '62%' }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mockup-page-notes">
        <p className="mockup-page-note-label eyebrow">Design Notes</p>
        <div className="mockup-notes">
          {pratibhaMockupScreens.map((screen) => (
            <article key={`note-${screen.title}`}>
              <p className="eyebrow" style={{ margin: 0 }}>{screen.eyebrow}</p>
              <h3>{screen.title}</h3>
              <p>{screen.summary}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mockup-page-return">
        <a className="btn btn-secondary" href="#/">
          ← Back to Portfolio
        </a>
      </div>
    </main>
  )
}

export default PratibhaMockupPage
