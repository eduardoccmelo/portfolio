import {
  ArrowUpRight,
  AudioLines,
  Blocks,
  Bot,
  CalendarRange,
  ChartNoAxesCombined,
  Compass,
  Layers3,
  ScanFace,
  Sparkles,
  WandSparkles,
} from 'lucide-react';

const projects = [
  { number: '01', name: 'Project 01', icon: Compass, color: '#b9ff66', ink: '#12220a', url: null },
  { number: '02', name: 'Project 02', icon: CalendarRange, color: '#7c5cff', ink: '#fff', url: null },
  { number: '03', name: 'Project 03', icon: Bot, color: '#ff6b44', ink: '#2b0b04', url: null },
  { number: '04', name: 'Project 04', icon: ChartNoAxesCombined, color: '#61d6ff', ink: '#061d26', url: null },
  { number: '05', name: 'Project 05', icon: WandSparkles, color: '#ff8ec7', ink: '#280819', url: null },
  { number: '06', name: 'Project 06', icon: Blocks, color: '#ffd84d', ink: '#251c00', url: null },
  { number: '07', name: 'Project 07', icon: AudioLines, color: '#90a7ff', ink: '#071130', url: null },
  { number: '08', name: 'Project 08', icon: ScanFace, color: '#ff9f66', ink: '#291005', url: null },
  { number: '09', name: 'Project 09', icon: Layers3, color: '#7ce6b6', ink: '#082219', url: null },
  { number: '10', name: 'Project 10', icon: Sparkles, color: '#e5dcff', ink: '#19112c', url: null },
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
          const Icon = project.icon;
          return (
            <article className="project-card" key={project.number} style={{ '--card-color': project.color, '--card-ink': project.ink } as React.CSSProperties}>
              {project.url && <a className="card-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`} />}
              <div className="card-meta"><span>{project.number}</span><span>SOON</span></div>
              <Icon className="project-icon" strokeWidth={1.6} />
              <div className="card-title"><strong>{project.name}</strong><ArrowUpRight /></div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
