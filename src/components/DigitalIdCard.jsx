import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import profileImage from '../assets/Profile.png'

const profileDetails = {
  fullName: 'Lin Thit Aung',
  title: ' Mobile Application Developer',
  focus: 'Pactical product delivery, React Native UI, Responsive frontends, ',
  email: 'linthitaung78@gmail.com',
  education: ['Bachelor of Science (Information and Communication Technology)', 'Bachelor of Science (Computer Science)'],
  status: 'Open to mobile development projects and frontend opportunities',
  linkedin: 'https://www.linkedin.com/in/linthit2003/',
  github: 'https://github.com/LloydsLin',
}

function DigitalIdCard({ qrUrl }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const toggleFlip = () => {
    setIsFlipped((current) => !current)
  }

  return (
    <section className="id-card-panel">
      <article
        className={`flip-card ${isFlipped ? 'is-flipped' : ''}`}
        aria-label="Digital identity card"
        role="presentation"
        tabIndex={-1}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            toggleFlip()
          }
        }}
      >
        <div className="flip-card-inner">
          <div className="flip-card-face flip-card-front">
            <div className="id-card-topline">
              <p className="id-label">Digital ID</p>
              <span className="id-chip">Verified</span>
            </div>

            <div className="id-front-body">
              <img className="id-photo" src={profileImage} alt="Profile portrait of Lin Thit Aung" />

              <div className="id-name-block">
                <h1>{profileDetails.fullName}</h1>
                <p className="id-role">{profileDetails.title}</p>
                <p className="id-front-focus">{profileDetails.focus}</p>

                <div className="id-front-meta">
                  <div className="id-field-group">
                    <p className="id-field-label">Education</p>
                    <div className="id-degree-list">
                      {profileDetails.education.map((edu, index) => (
                        <p className="id-degree-item" key={index}>
                          {edu}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="id-field-group">
                    <p className="id-field-label">Status</p>
                    <p className="id-field-value">{profileDetails.status}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="flip-card-face flip-card-back">
            <div className="id-card-topline">
              <p className="id-label">Digital ID · Back</p>
              <span className="id-chip">Scan &amp; view</span>
            </div>
            <div className="id-back-grid">
              <div className="qr-frame" aria-label="QR code linking to the digital ID page">
                <QRCodeSVG
                  value={qrUrl}
                  size={154}
                  bgColor="transparent"
                  fgColor="#eaf5ff"
                  level="M"
                  includeMargin
                />
              </div>

              <div className="id-back-copy">
                <h2>Quick profile access</h2>
                <p>
                  Scan this code to open my standalone digital ID page. It keeps the
                  rest of the portfolio private and shows only this card.
                </p>

                <div className="id-info-list">
                  <div>
                    <p className="id-field-label">Email</p>
                    <a className="id-link" href={`mailto:${profileDetails.email}`}>
                      {profileDetails.email}
                    </a>
                  </div>

                  <div>
                    <p className="id-field-label">LinkedIn</p>
                    <a className="id-link" href={profileDetails.linkedin} target="_blank" rel="noreferrer">
                      LinkedIn Profile
                    </a>
                  </div>

                  <div>
                    <p className="id-field-label">GitHub</p>
                    <a className="id-link" href={profileDetails.github} target="_blank" rel="noreferrer">
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="id-card-controls">
        <button className="btn btn-secondary" type="button" onClick={toggleFlip}>
          {isFlipped ? 'Show Front' : 'Flip Card'}
        </button>
      </div>
    </section>
  )
}

export default DigitalIdCard