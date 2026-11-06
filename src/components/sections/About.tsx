import { aboutParagraphs, principles } from '../../data/about'
import { sectionIds } from '../../data/navigation'
import { useLanguage } from '../../i18n/LanguageContext'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  const { t } = useLanguage()

  return (
    <section id={sectionIds.about} className="section shell">
      <SectionHeading number="01" label={t('SOBRE MIM')} title={t('Tecnologia com propósito.')} />
      <div className="about-grid">
        <div className="about-copy">
          <p>{t(aboutParagraphs.intro)} <strong>{t(aboutParagraphs.introHighlight)}</strong></p>
          {aboutParagraphs.body.map(paragraph => <p key={paragraph}>{t(paragraph)}</p>)}
        </div>
        <div className="principles">
          {principles.map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <Icon size={22} />
              <div>
                <h3>{t(title)}</h3>
                <p>{t(text)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
