import {
  ArrowUpRight,
  CheckSquare2,
  Clock3,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';

const projects = [
  { number: '01', name: 'Atlas', logo: '/atlas.png', color: '#dff7f8', ink: '#063b46', status: 'LIVE', description: 'Organize flights, stays and essential travel details in one calm travel companion.', url: 'https://atlas-sooty-tau.vercel.app/' },
  { number: '02', name: 'PlayUp', logo: '/play-app.png', color: '#c7f0db', ink: '#063b2c', status: 'LIVE', description: 'Organize pickup football games, manage players and build balanced teams with less friction.', url: 'https://play-up-two.vercel.app/' },
  { number: '03', name: 'Simple TODO App', icon: CheckSquare2, color: '#ffd84d', ink: '#251c00', status: 'LIVE', description: 'A focused task manager for capturing, organizing and completing everyday to-dos.', url: 'https://todoapp-react.vercel.app/' },
  { number: '04', name: 'BumpTime', icon: Clock3, color: '#ff8ec7', ink: '#280819', status: 'IN PROGRESS', description: 'Final details are being polished. The live experience is coming soon.', url: null },
  { number: '05', name: 'Next Project', icon: Sparkles, color: '#90a7ff', ink: '#071130', status: 'IN PROGRESS', description: 'A new product is currently taking shape.', url: null },
];

export default function Home() {
  return (
    <main className="portfolio-screen">
      <header className="topbar">
        <div className="brand"><span className="brand-mark">E</span><strong>EDUARDO MELO</strong></div>
        <div className="topbar-note"><i /> APP PORTFOLIO</div>
        <span className="year">2026</span>
      </header>

      <section className="intro" aria-labelledby="page-title">
        <h1 id="page-title">FIVE PROJECTS.<br /><span>ONE DIRECTION.</span></h1>
        <div className="intro-copy"><p>A growing collection of useful apps, designed and shipped one idea at a time.</p><span>3 LIVE · 2 IN MOTION</span></div>
      </section>

      <section className="project-grid" aria-label="Projects">
        {projects.map((project) => {
          const Icon = 'icon' in project ? project.icon : null;
          return (
            <article className={`project-card ${project.url ? 'is-clickable' : ''}`} key={project.number} style={{ '--card-color': project.color, '--card-ink': project.ink } as React.CSSProperties}>
              {project.url && <a className="card-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`} />}
              <div className="card-meta"><span>{project.number}</span>{project.status && <span>{project.status}</span>}</div>
              {'logo' in project && project.logo ? <Image className={`project-logo logo-${project.number}`} src={project.logo} alt={`${project.name} logo`} width={180} height={140} /> : Icon ? <Icon className="project-icon" strokeWidth={1.6} /> : <span className="placeholder-mark">{project.number}</span>}
              <div className="card-title"><strong>{project.name}</strong>{project.url && <ArrowUpRight />}</div>
              {project.description && <div className="card-overlay"><span>{project.number} / {project.name}</span><p>{project.description}</p>{project.status && <small>{project.status}</small>}</div>}
            </article>
          );
        })}
      </section>
    </main>
  );
}
