import { ArrowDown, ArrowUpRight, AudioLines, Blocks, Bot, CalendarRange, ChartNoAxesCombined, CircleDot, Compass, Layers3, ScanFace, Sparkles, WandSparkles } from 'lucide-react';

const projects = [
  { number: '01', name: 'Project 01', type: 'Digital experience', icon: Compass, color: '#b9ff66', ink: '#12220a', url: null },
  { number: '02', name: 'Project 02', type: 'Productivity', icon: CalendarRange, color: '#7c5cff', ink: '#ffffff', url: null },
  { number: '03', name: 'Project 03', type: 'Artificial intelligence', icon: Bot, color: '#ff6b44', ink: '#2b0b04', url: null },
  { number: '04', name: 'Project 04', type: 'Data & insights', icon: ChartNoAxesCombined, color: '#61d6ff', ink: '#061d26', url: null },
  { number: '05', name: 'Project 05', type: 'Creativity', icon: WandSparkles, color: '#ff8ec7', ink: '#280819', url: null },
  { number: '06', name: 'Project 06', type: 'Connections', icon: Blocks, color: '#ffd84d', ink: '#251c00', url: null },
  { number: '07', name: 'Project 07', type: 'Audio & content', icon: AudioLines, color: '#90a7ff', ink: '#071130', url: null },
  { number: '08', name: 'Project 08', type: 'Identity', icon: ScanFace, color: '#ff9f66', ink: '#291005', url: null },
  { number: '09', name: 'Project 09', type: 'Modular system', icon: Layers3, color: '#7ce6b6', ink: '#082219', url: null },
  { number: '10', name: 'Project 10', type: 'Next idea', icon: Sparkles, color: '#e5dcff', ink: '#19112c', url: null },
];

export default function Home() {
  return <main>
    <nav className="nav shell" aria-label="Main navigation">
      <a href="#top" className="brand" aria-label="Home"><span className="brand-mark">E</span><span>EDUARDO<br />MELO</span></a>
      <div className="nav-meta"><span>PORTFOLIO</span><span>2026</span></div>
      <a className="nav-link" href="#projects">View projects <ArrowDown size={16} /></a>
    </nav>
    <section className="hero shell" id="top">
      <div className="hero-kicker"><CircleDot size={15} /> Building products worth existing</div>
      <h1>TEN IDEAS.<br /><span>ONE UNIVERSE</span><br />IN MOTION.</h1>
      <div className="hero-bottom"><p>A living collection of original apps — imagined, designed and built to turn curiosity into real experiences.</p><div className="orbit" aria-hidden="true"><span>10</span><small>ORIGINAL<br />PROJECTS</small></div></div>
    </section>
    <section className="projects shell" id="projects">
      <header className="section-head"><div><span className="eyebrow">01 / PROJECTS</span><h2>WHAT'S<br />COMING TO LIFE</h2></div><p>This portfolio grows alongside the projects. Each space below will connect to its full experience as soon as it is ready.</p></header>
      <div className="project-grid">{projects.map((project) => { const Icon = project.icon; return <article className="project-card" key={project.number} style={{ '--card-color': project.color, '--card-ink': project.ink } as React.CSSProperties}>
        {project.url && <a className="card-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`} />}
        <div className="card-top"><span>{project.number}</span><span className="status"><i /> In progress</span></div>
        <div className="project-visual"><div className="icon-stage"><Icon strokeWidth={1.5} /></div><span className="ghost-number">{project.number}</span></div>
        <div className="card-copy"><span>{project.type}</span><h3>{project.name}</h3><span className="soon" aria-label="Link coming soon">COMING SOON <ArrowUpRight size={18} /></span></div>
      </article>; })}</div>
    </section>
    <section className="manifesto shell"><span className="eyebrow">02 / ABOUT</span><div className="manifesto-grid"><h2>IDEAS ARE JUST<br />THE BEGINNING.</h2><div><p>I create digital products at the intersection of <strong>technology, design and utility.</strong> This is a record of ten experiments moving from idea to reality — one at a time.</p><span className="contact-soon">CONTACT COMING SOON <ArrowUpRight size={18} /></span></div></div></section>
    <footer className="footer shell"><div className="footer-word">MAKE<span>★</span>IT HAPPEN</div><div className="footer-bottom"><span>© 2026 EDUARDO MELO</span><span>MADE WITH INTENTION AND CURIOSITY</span><a href="#top">BACK TO TOP ↑</a></div></footer>
  </main>;
}
