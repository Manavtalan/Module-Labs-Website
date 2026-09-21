import { ArrowUpRight, ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
export function Mark({small=false}:{small?:boolean}) { return <span className={`mark ${small?'small':''}`} aria-hidden="true"><i/><i/><i/><i/></span> }
export function Wordmark(){return <a href="#" className="wordmark" aria-label="Module Labs home"><Mark/><span>MODULE<span className="wordmark-light">LABS</span></span></a>}
export function Label({children}:{children:ReactNode}){return <span className="eyebrow"><span/> {children}</span>}
export function CTA({children='Start a project',onClick,className=''}:{children?:ReactNode;onClick?:()=>void;className?:string}){return <button className={`cta ${className}`} onClick={onClick}>{children}<ArrowUpRight size={18}/></button>}
export function TextLink({children,href}:{children:ReactNode;href:string}){return <a href={href} className="text-link">{children}<ArrowRight size={17}/></a>}
