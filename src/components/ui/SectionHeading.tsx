interface Props {
  number: string
  label: string
  title: string
}

export function SectionHeading({ number, label, title }: Props) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span>{number}</span> / {label}</p>
      <h2>{title}</h2>
    </div>
  )
}
