import {useEffect,useRef} from 'react';
import {ArrowUpRight} from 'lucide-react';
import {Label} from './Common';
import {projects,type Project} from '../data';

function ProjectVideo({project}:{project:Project}){
  const videoRef=useRef<HTMLVideoElement>(null);

  useEffect(()=>{
    const video=videoRef.current;
    if(!video)return;
    const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
    let isNear=false;
    const syncPlayback=()=>{
      if(isNear&&!reducedMotion.matches&&!document.hidden)video.play().catch(()=>{});
      else video.pause();
    };
    const observer=new IntersectionObserver(([entry])=>{isNear=entry.isIntersecting;syncPlayback()},{rootMargin:'180px',threshold:.08});
    observer.observe(video);
    document.addEventListener('visibilitychange',syncPlayback);
    reducedMotion.addEventListener('change',syncPlayback);
    return()=>{
      observer.disconnect();
      document.removeEventListener('visibilitychange',syncPlayback);
      reducedMotion.removeEventListener('change',syncPlayback);
      video.pause();
    };
  },[]);

  return <video ref={videoRef} src={project.video} autoPlay muted loop playsInline preload="metadata" aria-hidden="true"/>;
}

function ProjectCard({project,duplicate=false}:{project:Project;duplicate?:boolean}){
  return <a
    className="work-project-card"
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={project.ariaLabel}
    tabIndex={duplicate?-1:undefined}
  >
    <span className="work-video-frame"><ProjectVideo project={project}/></span>
    <span className="work-card-overlay">
      <span className="work-project-copy">
        <strong>{project.name}</strong>
        <span className="work-project-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</span>
      </span>
      <span className="work-site-link">See Site <ArrowUpRight size={17}/></span>
    </span>
  </a>;
}

export default function Work(){
  return <section id="work" className="section work-section">
    <div className="section-head reveal">
      <div><Label>SELECTED WORK</Label><h2>A few things we’ve<br/><em>put into the world.</em></h2></div>
      <div className="section-aside"><p>Different disciplines.<br/>The same attention to detail.</p><span className="mono">Selected portfolio / 2026</span></div>
    </div>
    <div className="work-loop" aria-label="Selected Module Labs portfolio projects">
      <div className="work-loop-track">
        {[false,true].map(duplicate=><div className="work-loop-group" data-duplicate={duplicate||undefined} aria-hidden={duplicate||undefined} key={String(duplicate)}>
          {projects.map(project=><ProjectCard key={`${duplicate?'copy':'primary'}-${project.id}`} project={project} duplicate={duplicate}/>)}
        </div>)}
      </div>
    </div>
    <div className="work-end mono"><span>Ideas made tangible.</span><span>DESIGN / DEVELOPMENT / ENGINEERING</span></div>
  </section>;
}
