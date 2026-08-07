import './SectionHeading.css'

function SectionHeading({ number, title, subtitle }) {
  return (
    <div className="section-heading-block">
      <h2 className="section-heading">
        <span className="num">{number}.</span>
        {title}
        <span className="rule" />
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
