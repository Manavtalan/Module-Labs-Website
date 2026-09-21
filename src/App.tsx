import {useEffect,useRef,useState} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Services from './components/Services';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import {ContactDialog,ProjectDialog} from './components/Dialogs';
import type {Project} from './data';
gsap.registerPlugin(ScrollTrigger);
export default function App(){const root=useRef<HTMLDivElement>(null);const [contact,setContact]=useState<string|null>(null);const [project,setProject]=useState<Project|null>(null);const openContact=(scope='')=>{setProject(null);setContact(scope)};useEffect(()=>{const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{const ctx=gsap.context(()=>{gsap.utils.toArray<HTMLElement>('.reveal').forEach(el=>{gsap.from(el,{y:32,opacity:0,duration:.95,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 94%',once:true}})});if(innerWidth>760){gsap.to('.brand-type-card',{rotation:-7,y:-18,scrollTrigger:{trigger:'.service-brand',start:'top bottom',end:'bottom top',scrub:1}});gsap.to('.brand-swatch-card',{rotation:6,y:16,scrollTrigger:{trigger:'.service-brand',start:'top bottom',end:'bottom top',scrub:1}});gsap.from('.commerce-demo',{y:32,rotation:3,scrollTrigger:{trigger:'.service-commerce',start:'top 85%',end:'center center',scrub:1}});gsap.to('.project-3 .project-art',{y:-15,scrollTrigger:{trigger:'.project-3',start:'top bottom',end:'bottom top',scrub:1}});gsap.from('.orbit-wrap',{scale:.83,opacity:0,scrollTrigger:{trigger:'.final-cta',start:'top 85%',end:'center center',scrub:1}})}},root);return()=>ctx.revert()});return()=>mm.revert()},[]);return <div ref={root}><Navbar onContact={()=>openContact()}/><main id="main"><Hero onContact={()=>openContact()}/><Work onProject={setProject}/><Services/><Pricing onContact={openContact}/><FAQ onContact={()=>openContact('A quick conversation')}/><FinalCTA onContact={()=>openContact()}/></main><Footer onContact={()=>openContact()}/>{contact!==null&&<ContactDialog scope={contact} onClose={()=>setContact(null)}/>} {project&&<ProjectDialog project={project} onClose={()=>setProject(null)} onContact={openContact}/>}</div>}
