import {useState} from 'react';
import {ArrowUpRight,Instagram,Mail,MessageCircle} from 'lucide-react';
import {faqs,studio} from '../data';

const team=[
  {initial:'M',name:'Manav',role:'Engineering × Web Design'},
  {initial:'N',name:'Nikita',role:'Branding Manager'},
  {initial:'P',name:'Prakher',role:'Shopify & Ecommerce Specialist'},
];

export default function FAQ({onContact:_onContact}:{onContact:()=>void}){
  const [active,setActive]=useState<number|null>(null);
  const contacts=[
    {label:'Email',href:studio.emailUrl,icon:Mail},
    {label:'Instagram',href:studio.instagram,icon:Instagram},
    {label:'WhatsApp',href:studio.whatsappUrl,icon:MessageCircle},
  ];
  return <section id="faqs" className="section faq-section">
    <div className="faq-intro reveal">
      <span className="pricing-pill faq-pill mono"><i aria-hidden="true"/>FAQs<i aria-hidden="true"/></span>
      <h2>Still thinking it through?<br/><em>Let’s make it simple.</em></h2>
      <aside className="faq-contact-card" aria-label="Module Labs team and contact options">
        <span className="faq-card-label mono">TEAM</span>
        <div className="faq-team">{team.map(member=><div className="faq-team-member" key={member.name}><span aria-hidden="true">{member.initial}</span><div><strong>{member.name}</strong><p>{member.role}</p></div></div>)}</div>
        <div className="faq-card-divider"/>
        <h3>Talk directly with us.</h3>
        <div className="faq-contact-pills">{contacts.map(({label,href,icon:Icon})=><a key={label} href={href} target={label==='Email'?undefined:'_blank'} rel={label==='Email'?undefined:'noopener noreferrer'} aria-label={label==='Email'?'Email Module Labs':label==='Instagram'?'Visit Module Labs on Instagram':'Message Module Labs on WhatsApp'}><Icon size={15}/><span>{label}</span><ArrowUpRight size={14}/></a>)}</div>
      </aside>
    </div>
    <div className="faq-list">{faqs.map((faq,index)=>{const isOpen=active===index;return <article className={`faq-item ${isOpen?'open':''}`} key={faq.q}>
      <h3><button onClick={()=>setActive(isOpen?null:index)} aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} id={`faq-question-${index}`}><span className="faq-number mono">{String(index+1).padStart(2,'0')}</span><span>{faq.q}</span><span className="faq-toggle" aria-hidden="true"/></button></h3>
      <div id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} aria-hidden={!isOpen} className="faq-answer"><div><p>{faq.a}</p></div></div>
    </article>})}</div>
  </section>;
}
