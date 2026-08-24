function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <div className="footer-decoration" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="footer-logo">
            JobBoard
          </p>
        </div>

        <div className="footer-contact">
          <h2>Contatti</h2>

          <p>hello@jobboard.it</p>
          <p>+39 02 1234 5678</p>
          <p>Roma, IT</p>

          <button type="button">
            Lavora con noi
          </button>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 JobBoard</p>
        <p>Tutti i diritti riservati</p>
      </div>
    </footer>
  )
}

export default Footer