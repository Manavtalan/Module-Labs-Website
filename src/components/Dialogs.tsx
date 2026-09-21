import {useEffect,useRef,type ReactNode} from 'react';
import {X,ArrowUpRight,Mail,MessageCircle,Instagram} from 'lucide-react';
import {type Project,studio} from '../data';
import {Label} from './Common';
import ProjectVisual from './ProjectVisual';

function Dialog({onClose,children,title,className=''}:{onClose:()=>void;children:ReactNode;title:string;className?:string}){
  const ref=useRef<HTMLDialogElement>(null);
  useEffect(()=>{const dialog=ref.current;const previous=document.activeElement as HTMLElement;dialog?.showModal();const old=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{dialog?.close();document.body.style.overflow=old;previous?.focus()}},[]);
  return <dialog ref={ref} className={`dialog ${className}`} aria-label={title} onCancel={e=>{e.preventDefault();onClose()}} onClick={e=>{if(e.target===e.currentTarget){const r=e.currentTarget.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)onClose()}}}>
    <button className="dialog-close icon-button" onClick={onClose} aria-label="Close dialog"><X size={19}/></button>
    {children}
  </dialog>;
}

export function ProjectDialog({project,onClose,onContact}:{project:Project;onClose:()=>void;onContact:(scope?:string)=>void}){
  return <Dialog onClose={onClose} title={`${project.name} concept study`} className="project-dialog">
    <div className="dialog-project-media"><ProjectVisual kind={project.kind}/></div>
    <div className="project-dialog-content"><Label>STUDIO CONCEPT / {project.year}</Label><h2>{project.name}</h2><p>{project.description}</p><div className="dialog-tags">{project.deliverables.map(d=><span key={d}>{d}</span>)}</div><div className="concept-disclosure">An original studio exploration. This is a demonstration project, not commissioned client work. Product imagery is generated for the concept.</div><button className="cta" onClick={()=>onContact(`A project inspired by ${project.name}`)}>Build something like this <ArrowUpRight size={17}/></button></div>
  </Dialog>;
}

export function ContactDialog({onClose,scope:_scope}:{onClose:()=>void;scope:string}){
  const options=[
    {label:'Instagram',href:studio.instagram,icon:<Instagram size={19}/>,external:true,ariaLabel:'Visit Module Labs on Instagram'},
    {label:'WhatsApp',href:studio.whatsappUrl,icon:<MessageCircle size={19}/>,external:true,ariaLabel:'Message Module Labs on WhatsApp'},
    {label:'Email',href:studio.emailUrl,icon:<Mail size={19}/>,external:false,ariaLabel:'Email Module Labs'}
  ];
  return <Dialog onClose={onClose} title="Start a project" className="contact-choice-dialog">
    <Label>START A PROJECT</Label>
    <h2>How would you like<br/>to reach us?</h2>
    <div className="contact-options">
      {options.map(option=><a key={option.label} className="contact-option" href={option.href} target={option.external?'_blank':undefined} rel={option.external?'noopener noreferrer':undefined} aria-label={option.ariaLabel}><span className="contact-option-icon">{option.icon}</span><span>{option.label}</span><ArrowUpRight className="contact-option-arrow" size={18}/></a>)}
    </div>
  </Dialog>;
}
