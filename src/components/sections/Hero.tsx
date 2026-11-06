import { Fragment } from 'react'
import { ArrowDown, ArrowUpRight, FileText, Github, MapPin, Terminal } from 'lucide-react'
import { profile } from '../../data/profile'
import { sectionIds } from '../../data/navigation'
import { useLanguage } from '../../i18n/LanguageContext'
import { ExternalLink } from '../ui/ExternalLink'

/** Agrupa a stack em linhas de dois itens para a janela de código. */
function chunk<T>(items: T[], size: number) {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, index) => items.slice(index * size, index * size + size))
}

function CodeWindow() {
  const { t } = useLanguage()
  const rows = chunk(profile.heroStack, 2)

  return (
    <div className="code-window" role="img" aria-label={t('Resumo das tecnologias e áreas de atuação')}>
      <div className="code-bar">
        <div className="window-dots"><i /><i /><i /></div>
        <span>Developer.java</span>
        <Terminal size={15} />
      </div>
      <div className="code-body" aria-hidden="true">
        <p className="code-comment">{t('// Muito além de escrever código.')}</p>
        <p><b>var</b> developer = Developer.builder()</p>
        <p className="indent">.name(<em>"{profile.shortName}"</em>)</p>
        <p className="indent">.focus(<em>"Backend Java"</em>)</p>
        <p className="indent">.stack(List.of(</p>
        {rows.map((row, rowIndex) => (
          <p className="indent-double" key={row.join()}>
            {row.map((item, index) => (
              <Fragment key={item}>
                {index > 0 && ', '}<em>"{item}"</em>
              </Fragment>
            ))}
            {rowIndex < rows.length - 1 ? ',' : ''}
          </p>
        ))}
        <p className="indent">))</p>
        <p className="indent">.mindset(<em>{t('"Sempre aprendendo"')}</em>)</p>
        <p className="indent">.build();</p>
        <p className="code-last"><span>developer</span>.ship()<span className="cursor">_</span></p>
      </div>
      <div className="code-footer"><span className="status-dot" /> {t('Da ideia à aplicação.')}</div>
    </div>
  )
}

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id={sectionIds.hero} className="hero shell">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> {t('CÓDIGO, CONTEXTO E SOLUÇÕES.')}</p>
        <h1>Marcos Vinicius<br /><span>Scheffer da Conceição<span className="accent">.</span></span></h1>
        <p className="hero-role">{t(profile.role)}</p>
        <p className="hero-description">
          {t('Transformando desafios reais em aplicações bem construídas. APIs REST com Java e Spring Boot, dados em PostgreSQL e entrega com Docker.')}
        </p>
        <ul className="hero-meta">
          <li><span className="status-dot" /> {t(profile.availability)}</li>
          <li><MapPin size={14} /> {t(profile.location)}</li>
        </ul>
        <div className="flex flex-wrap gap-3">
          <a className="button button-primary" href={`#${sectionIds.projects}`}>{t('Ver projetos')} <ArrowUpRight size={18} /></a>
          <ExternalLink href={profile.github} className="button button-secondary"><Github size={18} /> GitHub</ExternalLink>
          {profile.resume && (
            <a href={profile.resume} className="button button-secondary" download aria-label={t('Baixar currículo (PDF)')}>
              <FileText size={18} /> {t('Currículo')}
            </a>
          )}
        </div>
      </div>

      <CodeWindow />

      <div className="hero-bottom">
        <span>JAVA. SPRING BOOT. BACKEND.</span>
        <a href={`#${sectionIds.about}`}>{t('Explore o portfólio')} <ArrowDown size={16} /></a>
      </div>
    </section>
  )
}
