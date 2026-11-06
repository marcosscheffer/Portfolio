import { technologies } from '../../data/technologies'
import { sectionIds } from '../../data/navigation'
import { useLanguage } from '../../i18n/LanguageContext'
import { SectionHeading } from '../ui/SectionHeading'
import { TagList } from '../ui/TagList'

export function Technologies() {
  const { t } = useLanguage()

  return (
    <section id={sectionIds.technologies} className="section shell">
      <SectionHeading number="02" label={t('TECNOLOGIAS')} title={t('As ferramentas do meu trabalho.')} />
      <div className="technology-grid">
        {technologies.map(({ icon: Icon, title, description, items }) => (
          <article key={title} className="technology-card">
            <Icon size={25} />
            <h3>{t(title)}</h3>
            <p>{t(description)}</p>
            <TagList items={items} />
          </article>
        ))}
      </div>
    </section>
  )
}
