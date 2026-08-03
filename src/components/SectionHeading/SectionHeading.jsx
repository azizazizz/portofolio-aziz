import './SectionHeading.css'

function SectionHeading({ number, title }) {
  return (
    <h2 className="section-heading">
      <span className="num">{number}.</span>
      {title}
      <span className="rule" />
    </h2>
  )
}

export default SectionHeading
