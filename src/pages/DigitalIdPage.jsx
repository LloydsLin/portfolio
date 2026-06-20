import DigitalIdCard from '../components/DigitalIdCard.jsx'

function DigitalIdPage() {
  const qrUrl = `${window.location.href.split('#')[0]}#/digital-id`

  return (
    <main className="digital-id-page">
      <DigitalIdCard qrUrl={qrUrl} />

      <a className="btn btn-secondary digital-id-return" href="#/">
        Back to Portfolio
      </a>
    </main>
  )
}

export default DigitalIdPage