import { ArrowDown, ArrowUpRight, AudioLines, Blocks, Bot, CalendarRange, ChartNoAxesCombined, CircleDot, Compass, Layers3, ScanFace, Sparkles, WandSparkles } from 'lucide-react';

const projects = [
  { number: '01', name: 'Projeto 01', type: 'Experiência digital', icon: Compass, color: '#b9ff66', ink: '#12220a', url: null },
  { number: '02', name: 'Projeto 02', type: 'Produtividade', icon: CalendarRange, color: '#7c5cff', ink: '#ffffff', url: null },
  { number: '03', name: 'Projeto 03', type: 'Inteligência artificial', icon: Bot, color: '#ff6b44', ink: '#2b0b04', url: null },
  { number: '04', name: 'Projeto 04', type: 'Dados & insights', icon: ChartNoAxesCombined, color: '#61d6ff', ink: '#061d26', url: null },
  { number: '05', name: 'Projeto 05', type: 'Criatividade', icon: WandSparkles, color: '#ff8ec7', ink: '#280819', url: null },
  { number: '06', name: 'Projeto 06', type: 'Conexões', icon: Blocks, color: '#ffd84d', ink: '#251c00', url: null },
  { number: '07', name: 'Projeto 07', type: 'Áudio & conteúdo', icon: AudioLines, color: '#90a7ff', ink: '#071130', url: null },
  { number: '08', name: 'Projeto 08', type: 'Identidade', icon: ScanFace, color: '#ff9f66', ink: '#291005', url: null },
  { number: '09', name: 'Projeto 09', type: 'Sistema modular', icon: Layers3, color: '#7ce6b6', ink: '#082219', url: null },
  { number: '10', name: 'Projeto 10', type: 'Próxima ideia', icon: Sparkles, color: '#e5dcff', ink: '#19112c', url: null },
];

export default function Home() {
  return <main>
    <nav className="nav shell" aria-label="Navegação principal">
      <a href="#top" className="brand" aria-label="Início"><span className="brand-mark">E</span><span>EDUARDO<br />MELO</span></a>
      <div className="nav-meta"><span>PORTFÓLIO</span><span>2026</span></div>
      <a className="nav-link" href="#projetos">Ver projetos <ArrowDown size={16} /></a>
    </nav>
    <section className="hero shell" id="top">
      <div className="hero-kicker"><CircleDot size={15} /> Construindo produtos que merecem existir</div>
      <h1>DEZ IDEIAS.<br /><span>UM UNIVERSO</span><br />EM MOVIMENTO.</h1>
      <div className="hero-bottom"><p>Uma coleção viva de aplicativos autorais — pensados, desenhados e construídos para transformar curiosidade em experiências reais.</p><div className="orbit" aria-hidden="true"><span>10</span><small>PROJETOS<br />AUTORAIS</small></div></div>
    </section>
    <section className="projects shell" id="projetos">
      <header className="section-head"><div><span className="eyebrow">01 / PROJETOS</span><h2>O QUE ESTÁ<br />GANHANDO VIDA</h2></div><p>Este portfólio cresce junto com os projetos. Cada espaço abaixo será conectado à sua experiência completa assim que ela estiver pronta.</p></header>
      <div className="project-grid">{projects.map((project) => { const Icon = project.icon; return <article className="project-card" key={project.number} style={{ '--card-color': project.color, '--card-ink': project.ink } as React.CSSProperties}>
        {project.url && <a className="card-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.name}`} />}
        <div className="card-top"><span>{project.number}</span><span className="status"><i /> Em construção</span></div>
        <div className="project-visual"><div className="icon-stage"><Icon strokeWidth={1.5} /></div><span className="ghost-number">{project.number}</span></div>
        <div className="card-copy"><span>{project.type}</span><h3>{project.name}</h3><span className="soon" aria-label="Link disponível em breve">EM BREVE <ArrowUpRight size={18} /></span></div>
      </article>; })}</div>
    </section>
    <section className="manifesto shell"><span className="eyebrow">02 / SOBRE</span><div className="manifesto-grid"><h2>IDEIAS SÃO SÓ<br />O COMEÇO.</h2><div><p>Eu crio produtos digitais na interseção entre <strong>tecnologia, design e utilidade.</strong> Este é o registro de dez experimentos que estão saindo do papel — um por vez.</p><span className="contact-soon">CONTATO EM BREVE <ArrowUpRight size={18} /></span></div></div></section>
    <footer className="footer shell"><div className="footer-word">FAZER<span>★</span>ACONTECER</div><div className="footer-bottom"><span>© 2026 EDUARDO MELO</span><span>FEITO COM INTENÇÃO E CURIOSIDADE</span><a href="#top">VOLTAR AO TOPO ↑</a></div></footer>
  </main>;
}
