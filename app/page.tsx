import {
  ArrowUpRight,
  Blocks,
} from 'lucide-react';

const projects = [
  { number: '01', name: 'PlayUp', logo: '/play-app.png', color: '#c7f0db', ink: '#063b2c', status: 'LIVE', description: 'Manage pickup games, create player profiles and build balanced teams with less friction.', url: 'https://play-up-two.vercel.app/' },
  { number: '02', name: 'Atlas', logo: '/atlas.png', color: '#dff7f8', ink: '#063b46', status: null, description: 'Keep flights, stays and essential trip details organized in one calm travel companion.', url: null },
  { number: '03', name: 'Little Bytes', icon: Blocks, color: '#ff8ec7', ink: '#280819', status: 'IN PROGRESS', description: 'Project details and visual identity are currently being developed.', url: null },
  { number: '04', name: 'In Progress', color: '#61d6ff', ink: '#061d26', status: 'IN PROGRESS', description: null, url: null },
  { number: '05', name: 'In Progress', color: '#b9ff66', ink: '#12220a', status: 'IN PROGRESS', description: null, url: null },
  { number: '06', name: 'In Progress', color: '#ffd84d', ink: '#251c00', status: 'IN PROGRESS', description: null, url: null },
  { number: '07', name: 'In Progress', color: '#90a7ff', ink: '#071130', status: 'IN PROGRESS', description: null, url: null },
  { number: '08', name: 'In Progress', color: '#ff9f66', ink: '#291005', status: 'IN PROGRESS', description: null, url: null },
  { number: '09', name: 'In Progress', color: '#7ce6b6', ink: '#082219', status: 'IN PROGRESS', description: null, url: null },
  { number: '10', name: 'In Progress', color: '#e5dcff', ink: '#19112c', status: 'IN PROGRESS', description: null, url: null },
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
        <h1 id="page-title">TEN IDEAS.<br /><span>ONE UNIVERSE.</span></h1>
        <div className="intro-copy"><p>A living collection of original apps, built one idea at a time.</p><span>10 PROJECTS · IN MOTION</span></div>
      </section>

      <section className="project-grid" aria-label="Projects">
        {projects.map((project) => {
          const Icon = 'icon' in project ? project.icon : null;
          return (
            <article className="project-card" key={project.number} style={{ '--card-color': project.color, '--card-ink': project.ink } as React.CSSProperties}>
              {project.url && <a className="card-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`} />}
              <div className="card-meta"><span>{project.number}</span>{project.status && <span>{project.status}</span>}</div>
              {'logo' in project && project.logo ? <img className={`project-logo logo-${project.number}`} src={project.logo} alt={`${project.name} logo`} /> : Icon ? <Icon className="project-icon" strokeWidth={1.6} /> : <span className="placeholder-mark">{project.number}</span>}
              <div className="card-title"><strong>{project.name}</strong><ArrowUpRight /></div>
              {project.description && <div className="card-overlay"><span>{project.number} / {project.name}</span><p>{project.description}</p>{project.status && <small>{project.status}</small>}</div>}
            </article>
          );
        })}
      </section>
    </main>
  );
}
