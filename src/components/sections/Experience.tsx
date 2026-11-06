import { ArrowUpRight } from 'lucide-react'
import { experience } from '../../data/experience'
import { sectionIds } from '../../data/navigation'
import { useLanguage } from '../../i18n/LanguageContext'
import { SectionHeading } from '../ui/SectionHeading'

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id={sectionIds.experience} className="section shell">
      <SectionHeading number="04" label={t('EXPERIÊNCIA')} title={t('Desenvolvimento no mundo real.')} />
      <div className="experience-list">
        {experience.map(({ icon: Icon, label, title, organization, activities }) => (
          <div className="experience" key={title}>
            <div className="experience-title">
              <div className="experience-icon"><Icon size={24} /></div>
              <div>
                <span className="current-label"><span className="status-dot" /> {t(label)}</span>
                <h3>{t(title)}</h3>
                <p>{t(organization)}</p>
              </div>
            </div>
            {activities.length > 0 && (
              <ul>
                {activities.map(activity => <li key={activity}><ArrowUpRight size={16} />{t(activity)}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
