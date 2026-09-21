import {ArrowUpRight} from 'lucide-react';
import {CTA} from './Common';
import {studio} from '../data';

function SocialLink({name,url}:{name:string;url:string}){
  const content=<>{name}<ArrowUpRight size={14}/></>;
  return url
    ? <a className="footer-social-link" href={url} target="_blank" rel="noreferrer">{content}</a>
    : <button className="footer-social-link is-unavailable" type="button" disabled aria-label={`${name} link is not configured`}>{content}</button>;
}

export default function Footer({onContact}:{onContact:()=>void}){
  return <footer className="footer minimal-footer">
    <div className="footer-closing reveal">
      <p className="footer-tagline mono"><span className="status-dot"/>Design × Engineering Studio</p>
      <CTA className="footer-cta" onClick={onContact}>Start a Project</CTA>
      <nav className="footer-socials" aria-label="Social links">
        <SocialLink name="Instagram" url={studio.instagram}/>
        <SocialLink name="X" url={studio.x}/>
      </nav>
    </div>
    <div className="footer-wordmark-minimal reveal" aria-label="Module Labs">MODULE LABS</div>
  </footer>;
}
