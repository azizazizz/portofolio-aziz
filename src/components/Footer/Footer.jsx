import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>© {year} Nur Aziz Raihan</p>
    </footer>
  )
}

export default Footer
