import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        © {year} Nur Aziz Raihan — Built with React &amp; Vite
      </p>
    </footer>
  )
}

export default Footer
